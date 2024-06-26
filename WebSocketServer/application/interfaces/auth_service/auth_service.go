package auth_service

import "WebSocketServer/application/dtos"

type AuthServiceInterface interface {
	VerifyUser(id string) (*dtos.AuthDetailDTO, error)
}