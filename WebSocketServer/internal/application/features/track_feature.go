package features

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"
	"WebSocketServer/internal/config"
	"time"
)

type TrackFeature struct {
	environment      *config.Environment
	cachingService   interfaces.CachingServiceInterface
	friendAPIService interfaces.FriendAPIServiceInterface
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

func NewTrackFeature(environment *config.Environment, cachingService interfaces.CachingServiceInterface, friendAPIService interfaces.FriendAPIServiceInterface) *TrackFeature {
	return &TrackFeature{
		environment:      environment,
		cachingService:   cachingService,
		friendAPIService: friendAPIService,
	}
}
