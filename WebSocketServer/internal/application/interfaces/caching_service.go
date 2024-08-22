package interfaces

import "WebSocketServer/internal/application/dtos"

type CachingServiceInterface interface {
	UpdateLocation(location dtos.LocationHistoryDTO)
	GetLocationUpdate(friendIds *[]string, handler func([]byte) error) (interface{}, error)
}
