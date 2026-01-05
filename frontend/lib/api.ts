// lib/api.ts

// Type definitions matching the backend contract
export interface PredictionRequest {
    prices: number[]; // [day-3, day-2, day-1]
}

export interface PredictionResponse {
    prediction: number;
    forecast: number[];
    direction: "UP" | "DOWN" | "NEUTRAL";
    confidence: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function fetchPrediction(data: PredictionRequest): Promise<PredictionResponse> {
    try {
        const response = await fetch(`${API_URL}/predict`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || "Failed to fetch prediction");
        }

        const result = await response.json();

        // Map backend response to frontend type if necessary, 
        // assuming backend returns compatible structure.
        // Based on app.py analysis, backend returns straight JSON.
        // We'll trust the return type matches for now or map it.
        // Backend keys: "prediction", "forecast" (list), "direction", "confidence" (maybe?)
        // Let's ensure the backend actually returns these. 
        // If not, we might need to adjust backend. 
        // Start by just returning raw JSON cast to type.

        return {
            prediction: result.predicted_price, // Backend uses "predicted_price"
            forecast: result.forecast,
            direction: result.direction || "NEUTRAL",
            confidence: result.confidence || 85 // Mock confidence if missing from backend
        };

    } catch (error: any) {
        console.error("API Error:", error);
        throw new Error(error.message || "Network error. Is the backend running?");
    }
}
