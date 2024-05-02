package main

import (
	"WebSocketServer/api"
	"WebSocketServer/application/features"
	"WebSocketServer/config"
	"WebSocketServer/infrustructure/api_service"
	"WebSocketServer/infrustructure/auth_service"
	"WebSocketServer/infrustructure/caching_service"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)


func main() {
    var environment = config.Load()
    var upgrader = websocket.Upgrader{
        CheckOrigin: func(r *http.Request) bool { return true },
    }

    var cachingService = caching_service.GetCachingService(environment)
    var authService = auth_service.GetAuthService(environment)
    var friendService = api_service.NewFriendService(environment.ApiBaseURL)

    var authFeature = features.NewAuthFeature(environment, authService)
    var trackFeatureInstantiate = func() *features.TrackFeature {
        return features.NewTrackFeature(environment, cachingService, friendService)
    }

    var connectionHandler = api.NewConnectionHandler(&upgrader, authFeature, trackFeatureInstantiate)

    http.HandleFunc("/location", connectionHandler.HandleHandshake)
    err := http.ListenAndServe(":"+environment.Port, nil)
    if err != nil {
        panic(err)
    }
    log.Println("Server starting on Port : ", environment.Port)
}
