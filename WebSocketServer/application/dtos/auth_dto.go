package dtos

type AuthDetailDTO struct {
	ID   string `json:"email,omitempty"`
	Role string  `json:"role"`
	Token string
}