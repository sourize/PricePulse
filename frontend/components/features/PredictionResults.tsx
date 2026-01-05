import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PredictionResultProps {
    prediction: number | null;
    direction: "UP" | "DOWN" | "NEUTRAL" | null;
    lastInputPrice: number;
}

export function PredictionResults({ prediction, direction, lastInputPrice }: PredictionResultProps) {
    if (prediction === null || direction === null) return null;

    const diff = prediction - lastInputPrice;
    const percentChange = (diff / lastInputPrice) * 100;

    const isUp = direction === "UP";
    const isDown = direction === "DOWN";

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-lg mx-auto mt-8 overflow-hidden">
            <div className="p-6 text-center space-y-4">
                <h3 className="font-serif text-lg font-medium text-muted-foreground">projected Next Closing Price</h3>
                <div className="flex items-baseline justify-center gap-2">
                    <span className="font-mono text-5xl font-bold tracking-tighter">
                        ₹{prediction.toFixed(2)}
                    </span>
                </div>

                <div className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
                    isUp ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                )}>
                    {isUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span>{isUp ? "Bullish trend detected" : "Bearish trend detected"}</span>
                    <span className="ml-2 font-mono">
                        ({diff > 0 ? "+" : ""}{percentChange.toFixed(2)}%)
                    </span>
                </div>

                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    The model predicts a {isUp ? "positive" : "negative"} movement for the next trading session based on recent momentum.
                </p>
            </div>
        </div>
    );
}
