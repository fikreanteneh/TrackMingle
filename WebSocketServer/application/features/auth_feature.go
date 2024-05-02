package features

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/auth_service"
	"WebSocketServer/config"
)

type AuthFeature struct {
	environment *config.Environment
	authService auth_service.AuthServiceInterface
}

func (feature *AuthFeature) AuthenticateUser(currUser any, payload string) (*dtos.AuthDetailDTO, error) {
	return feature.authService.VerifyUser(payload)
}

func NewAuthFeature(environment *config.Environment, authService auth_service.AuthServiceInterface) *AuthFeature {
	return &AuthFeature{
		environment: environment,
		authService: authService,
	}
}