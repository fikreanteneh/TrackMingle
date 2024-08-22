package main

import (
	"WebSocketServer/internal/api"
	"WebSocketServer/internal/application/features"
	"WebSocketServer/internal/config"
	"WebSocketServer/internal/infrastructure"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

func main() {
	var environment = config.Load()
	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}

	var cachingService = infrastructure.NewCachingService(environment.RedisURL)
	var authService = infrastructure.NewAuthService(environment.JwtSecret)
	var friendService = infrastructure.NewFriendService(environment.ApiBaseURL)

	var authFeature = features.NewAuthFeature(environment, authService)
	var trackFeatureInstantiate = func() *features.TrackFeature {
		return features.NewTrackFeature(environment, cachingService, friendService)
	}

	var connectionHandler = api.NewConnectionHandler(&upgrader, authFeature, trackFeatureInstantiate)

	http.HandleFunc("/location", connectionHandler.EstablishConnection)
	err := http.ListenAndServe(":"+environment.Port, nil)
	if err != nil {
		panic(err)
	}
	log.Println("Server starting on Port : ", environment.Port)
}
