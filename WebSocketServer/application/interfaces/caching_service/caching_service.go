package caching_service

import "WebSocketServer/application/dtos"

type CachingServiceInterface interface {
	UpdateLocation(location dtos.LocationHistory)
	GetLocationUpdate(friendIds *[]string, messageChannel chan<- *dtos.LocationHistory)
}