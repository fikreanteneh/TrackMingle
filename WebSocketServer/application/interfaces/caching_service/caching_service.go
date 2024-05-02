package caching_service

import "WebSocketServer/application/dtos"

type CachingServiceInterface interface {
	UpdateLocation(location dtos.LocationHistoryDTO)
	GetLocationUpdate(friendIds *[]string, messageChannel chan<- *dtos.LocationHistoryDTO)
}