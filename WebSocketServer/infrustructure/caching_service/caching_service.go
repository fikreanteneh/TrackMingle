package caching_service

import (
	"WebSocketServer/application/dtos"
	"context"

	"github.com/redis/go-redis/v9"
)

type CachingService struct {
	RedisClient *redis.Client
	context    context.Context
}






func (service *CachingService) Update(location dtos.LocationHistory) (dtos.LocationHistory, error) {
	service.RedisClient.Set(service.context, location.ID, location, 3600)
	return location, nil
}



func NewCachingService(client *redis.Client) *CachingService {
	return &CachingService{
		RedisClient: client,
	}
}