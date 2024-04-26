package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Environment struct {
	RedisURL string
	Port string
	JwtSecret string
	// FirebaseSDK byte
}

func Load() (*Environment, error){
	// Load the environment variables
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return &Environment{
		RedisURL: os.Getenv("REDIS_URL"),
		Port: os.Getenv("PORT"),
		JwtSecret: os.Getenv("JWT_SECRET"),
	}, err

}