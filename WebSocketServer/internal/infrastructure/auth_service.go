package infrastructure

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"

	"github.com/golang-jwt/jwt"
)

type AuthService struct {
	secret string
}

func (service *AuthService) VerifyUser(token string) (*dtos.AuthDetailDTO, error) {
	claims := jwt.MapClaims{}
	tkn, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(service.secret), nil
	})
	if err != nil {
		return nil, err
	}
	if !tkn.Valid {
		return nil, err
	}
	authDetail := &dtos.AuthDetailDTO{
		ID:       claims["sub"].(string),
		Role:     claims["role"].(string),
		Username: (claims["user_metadata"].(map[string]interface{}))["username"].(string),
		Token:    token,
	}
	return authDetail, nil

}

func NewAuthService(secret string) interfaces.AuthServiceInterface {
	return &AuthService{
		secret: secret,
	}
}
