#!/bin/bash
echo "🧹 Cleaning up Windows artifacts..."
rm -rf node_modules package-lock.json

echo "📦 Installing dependencies (Linux version)..."
npm install

echo "⚙️ Generating project files..."
raindrop build generate

echo "🚀 Deploying..."
raindrop build deploy --start
