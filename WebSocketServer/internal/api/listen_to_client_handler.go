package api

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/features"
	"encoding/json"
	"log"

	"github.com/gorilla/websocket"
)

func ListenToClientHandler(ws *websocket.Conn, currUser *dtos.AuthDetailDTO, trackFeature *features.TrackFeature) {
	for {
		_, p, err := ws.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Println("===> UnexpectedlyClosed: >", err)
				return
			}
			log.Println(" ===> Error reading message: >", err)
			continue
		}
		var location dtos.LocationDTO
		err = json.Unmarshal(p, &location)
		if err != nil {
			log.Println("===> Error unmarshalling: >", err)
			continue
		}
		trackFeature.UpdateMyLocation(currUser, location)
		log.Println("===> Location Updated: >", currUser.ID, location)
	}
}
