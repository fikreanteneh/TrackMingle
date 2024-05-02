package handlers

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/features"
	"log"

	"github.com/gorilla/websocket"
)

func ListenToClientHandler(ws *websocket.Conn, currUser *dtos.AuthDetailDTO, trackFeature *features.TrackFeature) {
	for {
		var location dtos.LocationDTO
		err := ws.ReadJSON(&location)
		
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Println("=====>", err)
				return
			}
			log.Println("=====> ",err)
		}
		trackFeature.UpdateMyLocation(currUser, location)
	}
}