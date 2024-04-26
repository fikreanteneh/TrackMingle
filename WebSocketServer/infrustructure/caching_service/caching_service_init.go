package caching_service

import (
	"WebSocketServer/config"

	"github.com/redis/go-redis/v9"
)

func GetCachingService(environment *config.Environment) *CachingService {
	opt, err := redis.ParseURL(environment.RedisURL)
	if err != nil {
		panic(err)
	}
	client := redis.NewClient(opt)
	return NewCachingService(client)
}

