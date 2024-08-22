package interfaces

import "WebSocketServer/internal/application/dtos"

type FriendAPIServiceInterface interface {
	GetAllFriends(id string) (*dtos.FriendDTO, error)
}
