package main

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/features"
	"WebSocketServer/config"
	"WebSocketServer/infrustructure/auth_service"
	"WebSocketServer/infrustructure/caching_service"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
    CheckOrigin: func(r *http.Request) bool {
        return true
    },
}
var environment, err = config.Load()

var cachingService = caching_service.GetCachingService(environment)
var authService = auth_service.GetAuthService(environment)

var trackFeature = features.NewTrackFeature(cachingService)


func handleConnections(w *http.ResponseWriter, r *http.Request) {
    token := r.Header.Get("Authorization")
    currUser, err := authService.GetUser(token)
    if err != nil {
        log.Println(err)
        return
    }
    ws, err := upgrader.Upgrade(*w, r, nil)
    if err != nil {
        log.Fatal(err)
    }
    defer ws.Close()

    //Listen to Friends Location Update
    go func() {
        //TODO : Error Hanlling 
        channel, _ := trackFeature.GetLocationUpdate(currUser, nil)
        for updatedLocation := range channel {
            //TODO Error Handling
            jsonData, _ := json.Marshal(updatedLocation)
            ws.WriteMessage(websocket.TextMessage, []byte(jsonData))
        }
    }()

    
    // Listen to CLient Location Update
    for {
        var location dtos.LocationDTO
        err := ws.ReadJSON(&location)
        if err != nil {
            log.Println(err)
            return
        }
        //TODO : Error Handling
        res, _ := trackFeature.UpdateMyLocation(currUser, location)
        ws.WriteMessage(websocket.TextMessage, []byte(res))
    }
}

func main() {
    http.HandleFunc("/location", func(w http.ResponseWriter, r *http.Request) {go handleConnections(&w, r)})
    log.Println("Server starting on :"+environment.Port)
    err := http.ListenAndServe(":"+environment.Port, nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}