from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import numpy as np
import tensorflow as tf
import joblib
from tensorflow.keras.models import load_model
import os

app = FastAPI(title="PricePulse API", description="NIFTY 50 Price Prediction API")

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For dev. In prod, set to Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load artifacts (Lazy loading recommended for serverless, but eager here for simplicity)
try:
    model = load_model("model/final_nifty50_lstm.keras")
    scaler = joblib.load("model/scaler.pkl")
    print("Model and Scaler loaded successfully.")
except Exception as e:
    print(f"Error loading artifacts: {e}")
    model = None
    scaler = None

class PredictionInput(BaseModel):
    prices: list[float]

@app.get("/")
def read_root():
    return {"status": "ok", "message": "PricePulse API is running"}

@app.post("/predict")
def predict(input_data: PredictionInput):
    if model is None or scaler is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    if len(input_data.prices) != 3:
        raise HTTPException(status_code=400, detail="Exactly 3 prices are required")

    try:
        # Prepare input
        last3 = np.array(input_data.prices).reshape(-1, 1)
        last3_scaled = scaler.transform(last3).reshape(1, 3, 1)

        # Predict next day
        next_scaled = model.predict(last3_scaled, verbose=0)[0][0]
        next_price = float(scaler.inverse_transform([[next_scaled]])[0][0])

        # Predict next 10 days recursively
        seq = last3_scaled.copy()
        predictions = []
        for _ in range(10):
            pred = model.predict(seq, verbose=0)[0][0]
            predictions.append(pred)
            # Append prediction to sequence and remove first element
            new_pred_reshaped = np.array([[[pred]]])
            seq = np.append(seq[:, 1:, :], new_pred_reshaped, axis=1)

        forecast_10_days = scaler.inverse_transform(np.array(predictions).reshape(-1, 1)).flatten().tolist()

        return {
            "predicted_price": next_price,
            "forecast": forecast_10_days,
            "direction": "UP" if next_price > input_data.prices[-1] else "DOWN"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
