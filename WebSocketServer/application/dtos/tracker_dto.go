package dtos

import "time"

type LocationHistoryDTO struct {
	UserID    string  `json:"id"`
	Username  string  `json:"username"`
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
	CreatedAt time.Time `json:"createdAt"`
}

type LocationDTO struct {
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}