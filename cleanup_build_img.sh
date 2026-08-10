#!/bin/bash

# Define paths
DIR="./public/build-img"
FILE="image-map.json"

echo "Starting cleanup..."

# Delete directory if it exists
if [ -d "$DIR" ]; then
  echo "Deleting directory: $DIR"
  rm -rf "$DIR"
else
  echo "Directory not found: $DIR"
fi

# Delete file if it exists
if [ -f "$FILE" ]; then
  echo "Deleting file: $FILE"
  rm -f "$FILE"
else
  echo "File not found: $FILE"
fi

echo "Cleanup complete."
