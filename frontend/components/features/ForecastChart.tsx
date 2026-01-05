"use client";

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface ForecastChartProps {
    inputPrices: number[];
    forecastPrices: number[];
}

export function ForecastChart({ inputPrices, forecastPrices }: ForecastChartProps) {
    if (forecastPrices.length === 0) return null;

    // Prepare data
    // Inputs are Day -3, -2, -1 (Indices 0, 1, 2)
    // Forecasts are Day 0 (Next) to Day 9 (Indices 3 to 12)

    // Combine them into a continuous series
    const data = [
        ...inputPrices.map((price, i) => ({ day: `Day ${i - 3}`, price, type: "History" })),
        // The first forecast point connects to the last history point visually if we want continuity,
        // but let's just plot them. Actually, the first forecast is "Next Day".
        ...forecastPrices.map((price, i) => ({ day: `Day ${i + 1}`, price, type: "Forecast" })),
    ];

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-4xl mx-auto mt-8 p-6">
            <div className="mb-6">
                <h3 className="font-serif text-lg font-semibold">10-Day Price Forecast</h3>
                <p className="text-sm text-muted-foreground">
                    Visualizing the predicted price trajectory.
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                        <XAxis
                            dataKey="day"
                            stroke="hsl(var(--muted-foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="hsl(var(--muted-foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            domain={['auto', 'auto']}
                            tickFormatter={(value) => `₹${value}`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
                            itemStyle={{ color: "hsl(var(--foreground))" }}
                            formatter={(value: any) => [`₹${Number(value || 0).toFixed(2)}`, "Price"]}
                        />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{ r: 4, fill: "hsl(var(--background))", strokeWidth: 2 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
