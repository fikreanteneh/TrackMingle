package infrastructure

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/redis/go-redis/v9"
)

type CachingService struct {
	cacheTTL    time.Duration
	redisClient *redis.Client
	context     context.Context
}

func (service *CachingService) GetLocationUpdate(friendIds *[]string, handler func([]byte) error) (any, error) {
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
			return nil, err
		}
	}
	return nil, nil
}

func (service *CachingService) UpdateLocation(location dtos.LocationHistoryDTO) {
	jsonData, _ := json.Marshal(location)
	update := service.redisClient.Publish(
		service.context,
		location.UserID,
		jsonData,
	)
	if update.Err() != nil {
		log.Println("=====> ", update.Err().Error())
	}
}

func NewCachingService(redisURL string, cacheTTL int) interfaces.CachingServiceInterface {
	opt, err := redis.ParseURL(redisURL)
	if err != nil {
		panic(err)
	}
	client := redis.NewClient(opt)
	_, err = client.Ping(context.Background()).Result()
	if err != nil {
		panic(err)
	}
	return &CachingService{
		redisClient: client,
		context:     context.TODO(),
		cacheTTL:    time.Duration(cacheTTL) * time.Second,
	}
}
