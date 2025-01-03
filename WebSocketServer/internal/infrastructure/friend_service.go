package infrastructure

import (
	"WebSocketServer/internal/application/dtos"
	"WebSocketServer/internal/application/interfaces"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/url"
)

type FriendService struct {
	BaseURL string
}

func (service *FriendService) GetAllFriends(authDetail *dtos.AuthDetailDTO) (*dtos.FriendDTO, error) {
	base, err := url.Parse(service.BaseURL + "/friends")
	if err != nil {
		return nil, err
	}
	//TODO: Remove Pagination and Proper Authorization for identifying Server
	params := url.Values{}
	params.Add("page", fmt.Sprintf("%d", 0))
	params.Add("size", fmt.Sprintf("%d", 100))
	base.RawQuery = params.Encode()
	req, err := http.NewRequest("GET", base.String(), nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Authorization", "Bearer "+authDetail.Token)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error fetching friends: %w", err)
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
