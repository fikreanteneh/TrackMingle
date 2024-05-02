package caching_service

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/caching_service"
	"context"
	"encoding/json"
	"log"

	"github.com/redis/go-redis/v9"
)

type CachingService struct {
	redisClient *redis.Client
	context     context.Context
}

func (service *CachingService) GetLocationUpdate(friendIds *[]string, messageChannel chan<- *dtos.LocationHistoryDTO) {
	subscription := service.redisClient.Subscribe(service.context, *friendIds...)
	defer subscription.Close()
	defer close(messageChannel)
	//TODO: Handle which errors should stop the loop
	for message := range subscription.Channel() {
		payload := message.Payload
        var locationHistory dtos.LocationHistoryDTO
        if err := json.Unmarshal([]byte(payload), &locationHistory); err != nil {
            continue
        }
        messageChannel <- &locationHistory
	}
}

func (service *CachingService) UpdateLocation(location dtos.LocationHistoryDTO) {
	jsonData , _ := json.Marshal(location)
	update := service.redisClient.Publish(
		service.context,
		location.UserID,
		jsonData,
	)
	if update.Err() != nil {
		log.Println("=====> ", update.Err().Error())
	}
}

func NewCachingService(client *redis.Client) caching_service.CachingServiceInterface {
	return &CachingService{
		redisClient: client,
		context:     context.Background(),
	}
}
