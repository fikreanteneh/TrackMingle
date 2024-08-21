package handlers

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/features"
	"log"

	"github.com/gorilla/websocket"
)

func ListenToUpdatesHandler(ws *websocket.Conn, currUser *dtos.AuthDetailDTO, trackFeature *features.TrackFeature) {
	defer ws.Close()
	handleSendLocationUpdates := func(payload []byte) error {
		err := ws.WriteMessage(websocket.TextMessage, payload)
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Println("=====>", err)
				return err
			}
			log.Println("=====> ", err)
		}
		log.Println("====Update Sent===> ", currUser.ID, string(payload))
		return nil
	}
	trackFeature.GetLocationUpdate(currUser, handleSendLocationUpdates)
	// for updatedLocation := range channel {
	// 	jsonData, err := json.Marshal(updatedLocation)
	// 	if err != nil {
	// 		log.Println("=====> ",err)
	// 		continue
	// 	}
	// 	err = ws.WriteMessage(websocket.TextMessage, []byte(jsonData))
	// 	if err != nil {
	// 		if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
	// 			log.Println("=====>", err)
	// 			return
	// 		}
	// 		log.Println("=====> ",err)
	// 		return
	// 	}
	// }
}
