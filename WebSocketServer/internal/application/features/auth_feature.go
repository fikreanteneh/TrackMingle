package features

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"
	"WebSocketServer/internal/config"
)

type AuthFeature struct {
	environment *config.Environment
	authService interfaces.AuthServiceInterface
}

func (feature *AuthFeature) AuthenticateUser(currUser any, payload string) (*dtos.AuthDetailDTO, error) {
	return feature.authService.VerifyUser(payload)
}

func NewAuthFeature(environment *config.Environment, authService interfaces.AuthServiceInterface) *AuthFeature {
	return &AuthFeature{
		environment: environment,
		authService: authService,
	}
}
