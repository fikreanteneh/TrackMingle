package utils

import "encoding/json"

type HttpResponseDTO[T any] struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Data    T      `json:"data"`
}

func NewHttpResponseDTO[T any](success bool, message string, data T) []byte {
	response := &HttpResponseDTO[T]{
		Success: success,
		Message: message,
		Data:    data,
	}
	res, _ := json.Marshal(response)
	return res
}

// type WebSocketMessageDTO[T any] struct {
// 	Success bool   `json:"success"`
// 	Message string `json:"message"`

// }