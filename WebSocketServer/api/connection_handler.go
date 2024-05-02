package api

import (
	"WebSocketServer/api/handlers"
	"WebSocketServer/api/utils"
	"WebSocketServer/application/features"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type ConnectionHandler struct {
	upgrader    *websocket.Upgrader
	authFeature *features.AuthFeature
	trackFeatureInstantiate func () *features.TrackFeature
}

func (c *ConnectionHandler) HandleHandshake(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	currUser, err := c.authFeature.AuthenticateUser(nil, token)
	if err != nil {
		log.Println("====== ",err)
		w.Write(utils.NewHttpResponseDTO(false, "Unauthorized Access", "Invalid Token"))
		return
	}
	ws, err := c.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("===== ",err)
		w.Write(utils.NewHttpResponseDTO(false, "Internal Server Error", "Failed to upgrade to Web Connection"))
		return
	}
	trackFeature := c.trackFeatureInstantiate()
	go handlers.ListenToUpdatesHandler(ws, currUser, trackFeature)
	go handlers.ListenToClientHandler(ws, currUser, trackFeature)
}

func NewConnectionHandler(
	upgrader *websocket.Upgrader, 
	authFeature *features.AuthFeature, 
	trackFeatureInstantiate func () *features.TrackFeature,
) *ConnectionHandler {
	return &ConnectionHandler{
		upgrader: upgrader,
		authFeature: authFeature,
		trackFeatureInstantiate: trackFeatureInstantiate,
	}
}