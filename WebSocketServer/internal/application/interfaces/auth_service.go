package interfaces

import "WebSocketServer/internal/application/dtos"

type AuthServiceInterface interface {
	VerifyUser(id string) (*dtos.AuthDetailDTO, error)
}
