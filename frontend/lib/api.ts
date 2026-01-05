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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second limit

    try {
        const response = await fetch(`${API_URL}/predict`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || "Failed to fetch prediction");
        }

        const result = await response.json();

        return {
            prediction: result.predicted_price, // Backend uses "predicted_price"
            forecast: result.forecast,
            direction: result.direction || "NEUTRAL",
            confidence: result.confidence || 85 // Mock confidence if missing from backend
        };

    } catch (error: any) {
        clearTimeout(timeoutId);
        console.error("API Error:", error);

        if (error.name === 'AbortError') {
            throw new Error("Request timed out. The backend is likely asleep or waking up. Please try again in a moment.");
        }

        throw new Error(error.message || "Network error. Is the backend running?");
    }
}
