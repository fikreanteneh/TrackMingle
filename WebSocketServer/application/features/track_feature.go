package features

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/api_service"
	"WebSocketServer/application/interfaces/caching_service"
	"time"
)


type TrackFeature struct {
	CachingService caching_service.CachingServiceInterface
	FriendAPIService api_service.FriendAPIServiceInterface
	message  chan <- *dtos.LocationHistory
}




func (feature *TrackFeature) UpdateMyLocation(currUser *dtos.AuthDetailDTO,payload dtos.LocationDTO) (string, error) {
	feature.CachingService.UpdateLocation(dtos.LocationHistory{
		UserID:        currUser.ID,
		Latitude:  payload.Latitude,
		Longitude: payload.Longitude,
		CreatedAt: time.Now(),
	})
	return "Succssfully updated new location", nil
}

func (feature *TrackFeature) GetLocationUpdate(currUser *dtos.AuthDetailDTO, payload any)  (<-chan *dtos.LocationHistory, error) {
	messageChannel := make(chan *dtos.LocationHistory)
	friends, err := feature.FriendAPIService.GetAllFriends(currUser.ID)
	if nil != err{
		return nil, err
	}
	feature.CachingService.GetLocationUpdate(&friends.Friends, messageChannel)
	return messageChannel, nil
}



func NewTrackFeature( cachingService caching_service.CachingServiceInterface) *TrackFeature {
	return &TrackFeature{
		CachingService: cachingService,
	}
}