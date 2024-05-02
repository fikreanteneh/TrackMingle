package auth_service

import (
	"WebSocketServer/application/interfaces/auth_service"
	"WebSocketServer/config"
)

func GetAuthService(environment *config.Environment) auth_service.AuthServiceInterface {
	return NewAuthService(environment.JwtSecret)
}