"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Upload, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputPanelProps {
    onPredict: (prices: number[]) => void;
    isLoading: boolean;
    className?: string;
    defaultOpen?: boolean;
}

export function InputPanel({ onPredict, isLoading, className, defaultOpen = false }: InputPanelProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    // Sync state if defaultOpen prop changes (e.g. result arrival -> collapse)
    const [prevDefault, setPrevDefault] = useState(defaultOpen);
    if (defaultOpen !== prevDefault) {
        setIsOpen(defaultOpen);
        setPrevDefault(defaultOpen);
    }

    const [prices, setPrices] = useState({ p1: "22000.00", p2: "22100.00", p3: "22200.00" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onPredict([parseFloat(prices.p1), parseFloat(prices.p2), parseFloat(prices.p3)]);
    }

    return (
        <div className={cn("bg-surface-800 rounded-lg border border-surface-800 overflow-hidden shadow-lg", className)}>
            {/* Header Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-2 text-white">
                    <SlidersHorizontal className="h-4 w-4 text-accent-cyan" />
                    <span className="font-medium text-sm">Model Inputs</span>
                </div>
                {isOpen ? <ChevronUp className="h-4 w-4 text-muted-600" /> : <ChevronDown className="h-4 w-4 text-muted-600" />}
            </button>

            {/* Content */}
            {isOpen && (
                <div className="p-4 pt-0 border-t border-white/5">
                    <p className="text-xs text-muted-600 my-4 leading-relaxed">
                        Configure the last 3 days of NIFTY 50 closing prices to infer the next movement.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-3">
                            {['Day -3', 'Day -2', 'Day -1'].map((label, idx) => (
                                <div key={label} className="grid grid-cols-2 gap-4 items-center">
                                    <label className="text-xs font-medium text-muted-600">{label}</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2 text-xs text-muted-600">₹</span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="w-full bg-navy-900 border border-surface-800 rounded px-3 py-1.5 pl-6 text-sm font-mono text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                            value={Object.values(prices)[idx]}
                                            onChange={(e) => setPrices(prev => ({ ...prev, [`p${idx + 1}`]: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <button
                                disabled={isLoading}
                                className="w-full bg-accent-cyan hover:bg-accent-cyan/90 text-navy-900 font-bold text-sm py-2.5 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Analyzing..." : "Generate Forecast"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 pt-4 border-t border-white/5">
                        <button className="flex items-center justify-center w-full gap-2 text-xs text-muted-600 hover:text-white transition-colors border border-dashed border-surface-800 hover:border-muted-600 rounded py-2">
                            <Upload className="h-3 w-3" />
                            <span>Upload CSV Batch</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
