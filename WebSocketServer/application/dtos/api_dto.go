package dtos


type SuccessFulResponse[T any] struct {
	Success  bool    `json:"success"`
	Error    *string `json:"error"`
	Response *T       `json:"response"`
}