package api_service

import (
	"WebSocketServer/application/dtos"
	"WebSocketServer/application/interfaces/api_service"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
)

type FriendService struct {
	BaseURL string
}

func (service *FriendService) GetAllFriends(id string) (*dtos.FriendDTO, error) {
	url := service.BaseURL + id + "/friends"
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	friends := &dtos.SuccessFulResponse[dtos.FriendDTO]{}
	err = json.NewDecoder(resp.Body).Decode(friends)
	if err != nil {
    	return nil, fmt.Errorf("error decoding response body: %w", err)
	}
	if !friends.Success {
		return nil, errors.New("error fetching friends")
	}
	return friends.Response, nil

}

func NewFriendService(BaseURL string) api_service.FriendAPIServiceInterface {
	return &FriendService{BaseURL: BaseURL}
}
