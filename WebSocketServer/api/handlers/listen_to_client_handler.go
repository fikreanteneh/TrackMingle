package handlers

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/features"
	"log"

	"github.com/gorilla/websocket"
)

func ListenToClientHandler(ws *websocket.Conn, currUser *dtos.AuthDetailDTO, trackFeature *features.TrackFeature) {
	for {
		if ws == nil {
			var location dtos.LocationDTO
			err := ws.ReadJSON(&location)
			if err != nil {
				log.Println("===== ",err)
				return
			}
			trackFeature.UpdateMyLocation(currUser, location)
		}
	}
}