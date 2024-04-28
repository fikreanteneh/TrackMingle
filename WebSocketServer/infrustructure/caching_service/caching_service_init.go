package caching_service

import (
	"WebSocketServer/application/interfaces/caching_service"
	"WebSocketServer/config"
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

func GetCachingService(environment *config.Environment) caching_service.CachingServiceInterface {
	opt, err := redis.ParseURL(environment.RedisURL)
	if err != nil {
		panic(err)
	}
	client := redis.NewClient(opt)
	value := client.Get(context.Background(), "mykey")
	fmt.Println(value.Val())
	return NewCachingService(client)
}

