package features

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/caching_service"
	"time"
)


type TrackFeature struct {
	CachingService caching_service.CachingServiceInterface
}




func (feature *TrackFeature) UpdateMyLocation(location dtos.LocationDTO) string {
	feature.CachingService.Update(dtos.LocationHistory{
		ID:        "1",
		Latitude:  location.Latitude,
		Longitude: location.Longitude,
		CreatedAt: time.Now(),
	})
	return "Location updated"
}



func NewTrackFeature() *TrackFeature {
	return &TrackFeature{}
}