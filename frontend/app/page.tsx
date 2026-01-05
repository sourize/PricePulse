"use client";

import { useState, useEffect, useRef } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { ForecastCard } from "@/components/features/ForecastCard";
import { PriceChart } from "@/components/features/PriceChart";
import { InputPanel } from "@/components/features/InputPanel";
import { ModelInfo } from "@/components/features/ModelInfo";
import { fetchPrediction, type PredictionResponse } from "@/lib/api";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [inputPrices, setInputPrices] = useState<number[]>([22000, 22100, 22200]);
  const [error, setError] = useState<string | null>(null);

  // Track if initial load happened to avoid double fetching in strict mode
  const initialized = useRef(false);

  const handlePredict = async (prices: number[]) => {
    setIsLoading(true);
    setError(null);
    setInputPrices(prices);

    try {
      const data = await fetchPrediction({ prices });
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch prediction");
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load prediction - REMOVED for strict state-driven UI
  // useEffect(() => {
  //   if (!initialized.current) {
  //     initialized.current = true;
  //     handlePredict(inputPrices);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // Prepare chart data
  const chartData: { date: string, history: number | null, forecast: number | null }[] = [];
  if (result) {
    inputPrices.forEach((p, i) => {
      chartData.push({ date: `Day -${3 - i}`, history: p, forecast: null });
    });
    result.forecast.forEach((p, i) => {
      chartData.push({ date: `+${i + 1}d`, history: null, forecast: p });
    });
  }
  // No else block for chartData because we don't show chart in IDLE state

  return (
    <div className="flex min-h-screen flex-col bg-navy-900 text-white selection:bg-accent-cyan/30">
      <TopBar />

      <main className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-12 space-y-8">

        {/* 1. INPUT PANEL (Always Visible, Top) */}
        <section aria-label="Model Configuration">
          <InputPanel
            onPredict={handlePredict}
            isLoading={isLoading}
            defaultOpen={true} // Always open initially
            className="shadow-xl shadow-black/20"
          />
        </section>

        {/* 2. ERROR DISPLAY */}
        {error && (
          <div className="bg-decline-red/10 border border-decline-red/20 rounded-lg p-4 text-center animate-in fade-in slide-in-from-top-2">
            <p className="text-decline-red text-sm font-medium">{error}</p>
          </div>
        )}

        {/* 3. RESULT SECTION (Conditional: Success or Loading) */}
        {(result || isLoading) && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Result Card */}
            <section aria-label="Forecast Result">
              <ForecastCard
                prediction={result?.prediction || null}
                direction={result?.direction || null}
                confidence={result?.confidence || 0}
                lastPrice={inputPrices[inputPrices.length - 1]}
                isLoading={isLoading}
              />
            </section>

            {/* Evidence Chart */}
            <section aria-label="Price Trajectory" className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-sm font-medium text-muted-600 uppercase tracking-widest">Market Context & Evidence</h3>
                {inputPrices.length > 0 && (
                  <span className="text-xs font-mono text-muted-600">
                    RANGE: T-3 to T+10
                  </span>
                )}
              </div>
              {isLoading ? (
                <div className="h-[350px] w-full bg-surface-800/50 rounded-lg animate-pulse" />
              ) : (
                <PriceChart
                  data={chartData}
                  className="min-h-[350px] bg-transparent border-0 shadow-none p-0"
                />
              )}
            </section>


          </div>
        )}


        {/* 4. MODEL INFO (Optional) */}
        <section aria-label="Model Details">
          <ModelInfo />
        </section>
      </main>

      <Footer />
    </div>
  );
}
