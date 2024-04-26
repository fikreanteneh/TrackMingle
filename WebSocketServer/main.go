package main

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/features"
	"WebSocketServer/config"
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

func handleConnections(w http.ResponseWriter, r *http.Request) {
    ws, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        log.Fatal(err)
    }
    trackFeature := features.NewTrackFeature()

    defer ws.Close()

    for {
        var location dtos.LocationDTO
        err := ws.ReadJSON(&location)
        if err != nil {
            log.Println(err)
            return
        }
        ws.WriteMessage(websocket.TextMessage, []byte(trackFeature.UpdateMyLocation(location)))
    }
}

func main() {
    http.HandleFunc("/ws", handleConnections)

    log.Println("Server starting on :8080")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}