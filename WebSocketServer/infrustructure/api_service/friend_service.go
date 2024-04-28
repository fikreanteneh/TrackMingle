package api_service

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/api_service"
	"encoding/json"
	"fmt"
	"net/http"
)

type FriendService struct {
	BaseURL string
}

func (service *FriendService) GetAllFriends(id string) (*dtos.FriendDTO, error) {
	resp, err := http.Get(service.BaseURL + "/friends/" + id)
	if err != nil {
		return nil, err
	}
	friends := &dtos.FriendDTO{}
	err = json.NewDecoder(resp.Body).Decode(friends)
	if err != nil {
    	return nil, fmt.Errorf("error decoding response body: %w", err)
	}
	return friends, nil

}

func NewFriendService(BaseURL string) api_service.FriendAPIServiceInterface {
	return &FriendService{BaseURL: BaseURL}
}
