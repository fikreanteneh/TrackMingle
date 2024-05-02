package caching_service

import (
	"WebSocketServer/application/interfaces/caching_service"
	"WebSocketServer/config"

	"github.com/redis/go-redis/v9"
)

func GetCachingService(environment *config.Environment) caching_service.CachingServiceInterface {
	opt, err := redis.ParseURL(environment.RedisURL)
	if err != nil {
		panic(err)
	}
	client := redis.NewClient(opt)
	return NewCachingService(client)
}

