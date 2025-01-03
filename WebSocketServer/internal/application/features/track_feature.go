package features

import (
	"WebSocketServer/config"
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"
	"time"
)

type TrackFeature struct {
	environment      *config.Environment
	cachingService   interfaces.CachingServiceInterface
	friendAPIService interfaces.FriendAPIServiceInterface
}

func (feature *TrackFeature) UpdateMyLocation(currUser *dtos.AuthDetailDTO, payload dtos.LocationDTO) (any, error) {
	feature.cachingService.UpdateLocation(dtos.LocationHistoryDTO{
		UserID:    currUser.ID,
		Latitude:  payload.Latitude,
		Longitude: payload.Longitude,
		Username:  currUser.Username,
		CreatedAt: time.Now(),
	})
	return nil, nil
}

func (feature *TrackFeature) GetLocationUpdate(currUser *dtos.AuthDetailDTO, payload func([]byte) error) (any, error) {
	friendIds, err := feature.friendAPIService.GetAllFriends(currUser)
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
