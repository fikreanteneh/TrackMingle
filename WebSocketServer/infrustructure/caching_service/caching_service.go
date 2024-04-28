package caching_service

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/caching_service"
	"context"
	"encoding/json"
	"github.com/redis/go-redis/v9"
)

type CachingService struct {
	redisClient *redis.Client
	context     context.Context
}

func (service *CachingService) GetLocationUpdate(friendIds *[]string, messageChannel chan<- *dtos.LocationHistory) {
	subscription := service.redisClient.Subscribe(service.context, *friendIds...)
	defer subscription.Close()
	for message := range subscription.Channel() {
		payload := message.Payload
        var locationHistory dtos.LocationHistory
        if err := json.Unmarshal([]byte(payload), &locationHistory); err != nil {
            continue
        }
        messageChannel <- &locationHistory
	}
}

func (service *CachingService) UpdateLocation(location dtos.LocationHistory) {
		service.redisClient.Publish(
		service.context,
		location.UserID,
		location,
	)
}

func NewCachingService(client *redis.Client) caching_service.CachingServiceInterface {
	return &CachingService{
		redisClient: client,
		context:     context.Background(),
	}
}
