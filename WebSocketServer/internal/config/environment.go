package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Environment struct {
	RedisURL string
	Port string
	JwtSecret string
	ApiBaseURL string
}

func Load() (*Environment){
	// Load the environment variables
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	getEnv := func (key string) string {
		value := os.Getenv(key)
		if value == "" {
			panic("Environment variable " + key + " is not set")
		}
		return value
	}
	env := Environment{
		RedisURL: getEnv("REDIS_URL"),
		Port: getEnv("PORT"),
		JwtSecret: getEnv("JWT_SECRET"),
		ApiBaseURL: getEnv("API_BASE_URL"),
	}
	return &env

}