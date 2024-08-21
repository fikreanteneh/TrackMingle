package features

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/api_service"
	"WebSocketServer/application/interfaces/caching_service"
	"WebSocketServer/config"
	"time"
)

type TrackFeature struct {
	environment      *config.Environment
	cachingService   caching_service.CachingServiceInterface
	friendAPIService api_service.FriendAPIServiceInterface
}

func (feature *TrackFeature) UpdateMyLocation(currUser *dtos.AuthDetailDTO, payload dtos.LocationDTO) (string, error) {
	feature.cachingService.UpdateLocation(dtos.LocationHistoryDTO{
		UserID:    currUser.ID,
		Latitude:  payload.Latitude,
		Longitude: payload.Longitude,
		CreatedAt: time.Now(),
	})
	return "Succssfully updated new location", nil
}

func (feature *TrackFeature) GetLocationUpdate(currUser *dtos.AuthDetailDTO, payload func([]byte) error) (any, error) {
	friendIds, err := feature.friendAPIService.GetAllFriends(currUser.ID)
	if err != nil {
		return nil, err
	}
	return feature.cachingService.GetLocationUpdate(&friendIds.Friends, payload)
}

func NewTrackFeature(environment *config.Environment, cachingService caching_service.CachingServiceInterface, friendAPIService api_service.FriendAPIServiceInterface) *TrackFeature {
	return &TrackFeature{
		environment:      environment,
		cachingService:   cachingService,
		friendAPIService: friendAPIService,
	}
}
