"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PredictionFormProps {
    onPredict: (prices: number[]) => Promise<void>;
    isLoading: boolean;
}

export function PredictionForm({ onPredict, isLoading }: PredictionFormProps) {
    const [prices, setPrices] = useState({
        day1: "22000.00",
        day2: "22100.00",
        day3: "22200.00",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const p1 = parseFloat(prices.day1);
        const p2 = parseFloat(prices.day2);
        const p3 = parseFloat(prices.day3);
        if (!isNaN(p1) && !isNaN(p2) && !isNaN(p3)) {
            onPredict([p1, p2, p3]);
        }
    };

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-lg mx-auto">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-serif text-2xl font-semibold leading-none tracking-tight">Market Data Input</h3>
                <p className="text-sm text-muted-foreground">
                    Enter the closing prices for the last 3 trading days.
                </p>
            </div>
            <div className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Day -3 (₹)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                                value={prices.day1}
                                onChange={(e) => setPrices({ ...prices, day1: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Day -2 (₹)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                                value={prices.day2}
                                onChange={(e) => setPrices({ ...prices, day2: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Day -1 (₹)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                                value={prices.day3}
                                onChange={(e) => setPrices({ ...prices, day3: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                            "inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                            "bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                        )}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating Forecast...
                            </>
                        ) : (
                            "Generate Price Forecast"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
