package api

import (
	"WebSocketServer/internal/api/utils"
	"WebSocketServer/internal/application/features"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type ConnectionHandler struct {
	upgrader                *websocket.Upgrader
	authFeature             *features.AuthFeature
	trackFeatureInstantiate func() *features.TrackFeature
}

func (c *ConnectionHandler) EstablishConnection(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	currUser, err := c.authFeature.AuthenticateUser(nil, token)
	if err != nil {
		log.Println("===User Error===> ", err)
		w.Write(utils.NewHttpResponseDTO(false, "Unauthorized Access", "Invalid Token"))
		return
	}
	ws, err := c.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("===Upgrade Error===> ", err)
		w.Write(utils.NewHttpResponseDTO(false, "Internal Server Error", "Failed to upgrade to Web Connection"))
		return
	}
	trackFeature := c.trackFeatureInstantiate()
	// This Listen to Friend location Updates will continue in a new goroutine
	go ListenToUpdatesHandler(ws, currUser, trackFeature)
	//This Listen to Client will continue in this goroutine
	go ListenToClientHandler(ws, currUser, trackFeature)
}

func NewConnectionHandler(
	upgrader *websocket.Upgrader,
	authFeature *features.AuthFeature,
	trackFeatureInstantiate func() *features.TrackFeature,
) *ConnectionHandler {
	return &ConnectionHandler{
		upgrader:                upgrader,
		authFeature:             authFeature,
		trackFeatureInstantiate: trackFeatureInstantiate,
	}
}
