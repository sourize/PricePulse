"use client";

import { useState } from "react";
import { ChevronRight, Database, BrainCircuit, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function ModelInfo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-8 border-t border-surface-800 pt-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-muted-600 hover:text-white transition-colors"
            >
                <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
                <span className="text-sm font-medium">Model Architecture & Specs</span>
            </button>

            {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent-cyan">
                            <BrainCircuit className="h-4 w-4" />
                            <h4 className="text-sm font-bold">Architecture</h4>
                        </div>
                        <p className="text-xs text-muted-600 leading-relaxed">
                            Stacked LSTM (Long Short-Term Memory) network optimized for sequential time-series data. Features recurrent dropout for regularization.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent-cyan">
                            <Database className="h-4 w-4" />
                            <h4 className="text-sm font-bold">Training Data</h4>
                        </div>
                        <p className="text-xs text-muted-600 leading-relaxed">
                            Trained on NIFTY 50 daily closing prices (OHLC) up to mid-2025. Preprocessed with MinMax scaling (0,1) range.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent-cyan">
                            <ShieldAlert className="h-4 w-4" />
                            <h4 className="text-sm font-bold">Disclaimer</h4>
                        </div>
                        <p className="text-xs text-muted-600 leading-relaxed">
                            This is a machine learning model trained on financial NIFTY 50 data. Predictions are probabilistic and for educational use only. Not financial advice.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
