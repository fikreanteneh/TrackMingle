module WebSocketServer

go 1.21.3

require (
	github.com/go-redis/redis/v8 v8.11.5
	github.com/gorilla/websocket v1.5.1
	github.com/rs/cors v1.10.1
	golang.org/x/net v0.24.0
)

require github.com/redis/go-redis/v9 v9.5.1 // indirect

require (
	github.com/cespare/xxhash/v2 v2.2.0 // indirect
	github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f // indirect
	github.com/joho/godotenv v1.5.1
)
