package api_service

import "WebSocketServer/application/dtos"

type FriendAPIServiceInterface interface {
	GetAllFriends(id string) (*dtos.FriendDTO, error)
}