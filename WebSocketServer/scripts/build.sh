#!/bin/bash

# Set the Go module name and output directory
MODULE_NAME="WebSocketServer"
OUTPUT_DIR="build"
OUTPUT_FILE="$OUTPUT_DIR/WebSocketServer"

mkdir -p $OUTPUT_DIR

echo "Building the Go project..."
go build -o $OUTPUT_FILE ./cmd/app/main.go

if [ $? -eq 0 ]; then
    echo "Build successful. The binary is located at $OUTPUT_FILE"
else
    echo "Build failed."
    exit 1
fi