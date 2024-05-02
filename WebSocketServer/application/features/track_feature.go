package features

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/api_service"
	"WebSocketServer/application/interfaces/caching_service"
	"WebSocketServer/config"
	"time"
)
type TrackFeature struct {
	environment    *config.Environment
	cachingService caching_service.CachingServiceInterface
	friendAPIService api_service.FriendAPIServiceInterface
}

func (feature *TrackFeature) UpdateMyLocation(currUser *dtos.AuthDetailDTO,payload dtos.LocationDTO) (string, error) {
	feature.cachingService.UpdateLocation(dtos.LocationHistoryDTO{
		UserID:        currUser.ID,
		Latitude:  payload.Latitude,
		Longitude: payload.Longitude,
		CreatedAt: time.Now(),
	})
	return "Succssfully updated new location", nil
}

func (feature *TrackFeature) GetLocationUpdate(currUser *dtos.AuthDetailDTO, payload any)  (<-chan *dtos.LocationHistoryDTO, error) {
	messageChannel := make(chan *dtos.LocationHistoryDTO)
	friendIds, err := feature.friendAPIService.GetAllFriends(currUser.ID)
	if nil != err{
		return nil, err
	}
	go feature.cachingService.GetLocationUpdate(&friendIds.Friends, messageChannel)
	return messageChannel, nil
}



func NewTrackFeature(environment *config.Environment ,cachingService caching_service.CachingServiceInterface, friendAPIService api_service.FriendAPIServiceInterface) *TrackFeature {
	return &TrackFeature{
		environment: environment,
		cachingService: cachingService,
		friendAPIService: friendAPIService,
	}
}