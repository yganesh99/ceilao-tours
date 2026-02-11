#!/bin/bash

# Directory definitions
ASSETS_DIR="public/assets"
BACKUP_DIR="public/assets_backup"

# Create backup
echo "Creating backup..."
mkdir -p "$BACKUP_DIR"
cp -r "$ASSETS_DIR/"* "$BACKUP_DIR/"

# Compress Videos
echo "Compressing Videos..."

# Hero Desktop (keep 1080p equivalent, but optimize)
# -vf scale=-1:1080 (maintain aspect ratio)
ffmpeg -i "$BACKUP_DIR/hero.webm" -c:v libvpx-vp9 -b:v 2M -crf 30 -an -y "$ASSETS_DIR/hero.webm"

# Hero Mobile (resize to 720p width)
ffmpeg -i "$BACKUP_DIR/hero-m.webm" -c:v libvpx-vp9 -vf scale=720:-1 -b:v 1M -crf 30 -an -y "$ASSETS_DIR/hero-m.webm"

# Experience Videos (resize to 720p width as they are usually small cards or mobile)
for video in culture.webm experiences.webm hill.webm nature.webm wellness.webm; do
    if [ -f "$BACKUP_DIR/$video" ]; then
        echo "Processing $video..."
        ffmpeg -i "$BACKUP_DIR/$video" -c:v libvpx-vp9 -vf scale=720:-1 -b:v 1M -crf 32 -an -y "$ASSETS_DIR/$video"
    fi
done

# Compress Images (PNG -> WebP)
echo "Compressing Images..."
for img in "$BACKUP_DIR"/*.png; do
    filename=$(basename "$img")
    name="${filename%.*}"
    ffmpeg -i "$img" -c:v libwebp -quality 80 -y "$ASSETS_DIR/$name.webp"
done

# Compressing JPG if any
for img in "$BACKUP_DIR"/*.jpg; do
    filename=$(basename "$img")
    name="${filename%.*}"
    # Check if file exists (loop might run once with pattern if no match in some shells)
    if [ -f "$img" ]; then
         ffmpeg -i "$img" -c:v libwebp -quality 80 -y "$ASSETS_DIR/$name.webp"
    fi
done

echo "Compression complete."
