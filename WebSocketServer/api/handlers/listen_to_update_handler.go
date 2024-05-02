package handlers

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/features"
	"encoding/json"
	"log"

	"github.com/gorilla/websocket"
)

func ListenToUpdatesHandler(ws *websocket.Conn, currUser *dtos.AuthDetailDTO, trackFeature *features.TrackFeature) {
	channel, _ := trackFeature.GetLocationUpdate(currUser, nil)
	for updatedLocation := range channel {
		jsonData, err := json.Marshal(updatedLocation)
		if err != nil {
			log.Println("=====> ",err)
			continue
		}
		err = ws.WriteMessage(websocket.TextMessage, []byte(jsonData))
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Println("=====>", err)
				return
			}
			log.Println("=====> ",err)
			return
		}
	}
}