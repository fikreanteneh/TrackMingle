package auth_service

import "WebSocketServer/application/dtos"

type AuthServiceInterface interface {
	GetUser(id string) (*dtos.AuthDetailDTO, error)
}