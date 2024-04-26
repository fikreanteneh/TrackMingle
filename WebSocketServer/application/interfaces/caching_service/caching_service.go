package caching_service

import "WebSocketServer/application/dtos"

type CachingServiceInterface interface {
	Update(location dtos.LocationHistory) (dtos.LocationHistory, error)
	Get(id string) (dtos.LocationHistory, error)
}