package caching_service

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/caching_service"
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/redis/go-redis/v9"
)

type CachingService struct {
	redisClient *redis.Client
	context     context.Context
}

func (service *CachingService) GetLocationUpdate(friendIds *[]string, handler func([]byte) error)(any, error){
	subscription := service.redisClient.Subscribe(service.context, *friendIds...)

	defer subscription.Close()
	//TODO: Handle which errors should stop the loop
	for message := range subscription.Channel() {
		payload := message.Payload
		fmt.Println("=====> ", payload)
		// var locationHistory dtos.LocationHistoryDTO
		// if err := json.Unmarshal([]byte(payload), &locationHistory); err != nil {
		// 	continue
		// }
		if err := handler([]byte(payload)); err != nil {
			return nil, nil
		}
	}
	return nil, nil
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
