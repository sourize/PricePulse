---
title: PricePulse API
emoji: 📈
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# PricePulse Backend API

This is the FastAPI backend for **PricePulse**, an advanced financial analytics application that provides NIFTY 50 price forecasts using an LSTM neural network.

https://github.com/sourize/PricePulse

## Endpoints

- `POST /predict`: Accepts 3 days of closing prices and returns the next day's prediction + 10-day forecast.
- `GET /`: Health check.

## Environment

- **Python**: 3.9
- **Framework**: FastAPI
- **ML Engine**: TensorFlow (CPU optimized)
