"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from "recharts";
import { cn } from "@/lib/utils";

interface PriceChartProps {
    data: any[];
    className?: string;
}

export function PriceChart({ data, className }: PriceChartProps) {
    if (!data || data.length === 0) return (
        <div className={cn("w-full h-[350px] flex items-center justify-center bg-surface-800 rounded-lg border border-surface-800", className)}>
            <p className="text-muted-600">No data available to chart.</p>
        </div>
    );

    return (
        <div className={cn("w-full bg-surface-800 rounded-lg border border-surface-800 p-6 shadow-xl", className)}>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="font-serif text-lg font-medium text-white">Price Trajectory</h3>
                    <p className="text-xs text-muted-600">Historical closing prices vs. LSTM Forecast</p>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis
                            dataKey="date"
                            stroke="#64748b"
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => value.split(' ')[0]}
                        />
                        <YAxis
                            stroke="#64748b"
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                            domain={['auto', 'auto']}
                            tickFormatter={(val) => `₹${val}`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#0b1722", borderColor: "#1e293b", color: "#f8fafc" }}
                            itemStyle={{ color: "#f8fafc" }}
                            labelStyle={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}
                            formatter={(value: any) => [`₹${Number(value).toFixed(2)}`, ""]}
                        />
                        <ReferenceLine x="Today" stroke="#475569" strokeDasharray="3 3" />

                        <Line
                            type="monotone"
                            dataKey="history"
                            name="Historical"
                            stroke="#94A3B8"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "#0b1722", strokeWidth: 1.5, stroke: "#94A3B8" }}
                            activeDot={{ r: 5, fill: "#94A3B8" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="forecast"
                            name="Forecast"
                            stroke="#2DD4BF"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                            activeDot={{ r: 6, fill: "#2DD4BF" }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-600">
                <div className="flex items-center gap-2">
                    <span className="h-0.5 w-4 bg-muted-600"></span>
                    <span>Historical</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-0.5 w-4 bg-accent-cyan border-t border-dashed border-accent-cyan"></span>
                    <span>Forecast</span>
                </div>
            </div>
        </div>
    );
}
