package dtos

type HttpResponseDTO[T any] struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Data    T      `json:"data"`
}


func NewHttpResponseDTO[T any](success bool, message string, data T) *HttpResponseDTO[T] {
	return &HttpResponseDTO[T]{
		Success: success,
		Message: message,
		Data:    data,
	}
}

// type WebSocketMessageDTO[T any] struct {
// 	Success bool   `json:"success"`
// 	Message string `json:"message"`


// }