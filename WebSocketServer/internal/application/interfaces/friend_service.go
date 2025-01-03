package interfaces

import "WebSocketServer/internal/application/dtos"

type FriendAPIServiceInterface interface {
	GetAllFriends(authDetail *dtos.AuthDetailDTO) (*dtos.FriendDTO, error)
}
