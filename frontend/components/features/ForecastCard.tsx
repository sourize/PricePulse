import { TrendingUp, TrendingDown, Info, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ForecastCardProps {
    prediction: number | null;
    direction: "UP" | "DOWN" | "NEUTRAL" | null;
    confidence: number;
    lastPrice: number;
    isLoading?: boolean;
}

export function ForecastCard({ prediction, direction, confidence, lastPrice, isLoading }: ForecastCardProps) {
    if (isLoading) {
        return (
            <div className="rounded-lg border border-surface-800 bg-surface-800/50 p-6 animate-pulse">
                <div className="h-4 w-32 bg-surface-800 rounded mb-4"></div>
                <div className="h-12 w-48 bg-surface-800 rounded mb-4"></div>
                <div className="h-4 w-64 bg-surface-800 rounded"></div>
            </div>
        )
    }

    if (!prediction) {
        return (
            <div className="rounded-lg border border-surface-800 bg-surface-800 p-8 text-center animate-in fade-in duration-500">
                <h3 className="text-white font-serif text-lg">Ready to generate a forecast</h3>
                <p className="text-sm text-muted-600 mt-2">Enter recent NIFTY 50 closing prices to generate a model-based forecast.</p>
            </div>
        )
    }

    const diff = prediction - lastPrice;
    const percentChange = (diff / lastPrice) * 100;
    const isUp = direction === "UP";
    const colorClass = isUp ? "text-grow-green" : "text-decline-red";
    const bgClass = isUp ? "bg-grow-green/10 border-grow-green/20" : "bg-decline-red/10 border-decline-red/20";

    return (
        <div className="relative overflow-hidden rounded-lg border border-surface-800 bg-surface-800 p-6 shadow-2xl shadow-black/50">
            {/* Glow effect */}
            <div className={cn("absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-20 pointer-events-none", isUp ? "bg-grow-green" : "bg-decline-red")} />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-muted-600 font-medium">Next Day Forecast</span>
                    <div className="flex items-center gap-1 text-xs text-muted-600">
                        <Info className="h-3 w-3" />
                        <span>{confidence}% Confidence</span>
                    </div>
                </div>

                <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-mono text-5xl font-bold tracking-tighter text-white">
                        ₹{prediction.toFixed(2)}
                    </span>
                    <span className={cn("flex items-center font-mono text-sm font-medium px-2 py-0.5 rounded border", colorClass, bgClass)}>
                        {isUp ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                        {diff > 0 ? "+" : ""}{percentChange.toFixed(2)}%
                    </span>
                </div>

                <div className="mt-6 border-t border-white/5 pt-4">
                    <p className="text-sm text-muted-600 leading-relaxed">
                        The model predicts a <span className={cn("font-medium", colorClass)}>{isUp ? "bullish" : "bearish"}</span> movement
                        driven by recent momentum patterns.
                    </p>
                    <button className="flex items-center text-xs text-accent-cyan hover:text-accent-cyan/80 mt-2 font-medium transition-colors">
                        Explain this prediction <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
