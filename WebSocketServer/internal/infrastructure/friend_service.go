package infrastructure

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"
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

func NewFriendService(baseURL string) interfaces.FriendAPIServiceInterface {
	return &FriendService{BaseURL: baseURL}
}
