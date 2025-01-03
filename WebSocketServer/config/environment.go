package config

import (
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Environment struct {
	RedisURL   string
	Port       string
	JwtSecret  string
	ApiBaseURL string
	CacheTTL   int
}

func Load() *Environment {
	// Load the environment variables
	// envPath, err := filepath.Abs("../../.env")
	// if err != nil {
	// 	panic("Error finding .env file")
	// }
	_ = godotenv.Load()
	// if err != nil {
	// 	panic("Error loading .env file")
	// }
	getEnv := func(key string) string {
		value := os.Getenv(key)
		if value == "" {
			panic("Environment variable " + key + " is not set")
		}
		return value
	}
	ttl, err := strconv.Atoi(os.Getenv("CACHE_TTL"))
	if err != nil {
		panic("Environment variable CACHE_TTL is not set")
	}
	env := Environment{
		RedisURL:   getEnv("REDIS_URL"),
		Port:       getEnv("PORT"),
		JwtSecret:  getEnv("JWT_SECRET"),
		ApiBaseURL: getEnv("API_BASE_URL"),
		CacheTTL:   ttl,
	}
	return &env

}
