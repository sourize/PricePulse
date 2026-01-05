export function MarketContext() {
    return (
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 lg:py-24 lg:pb-8">
            <h1 className="text-center font-serif text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
                NIFTY 50 Price Forecast
            </h1>
            <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
                PricePulse uses an advanced LSTM time-series model to forecast future NIFTY 50 price movements based on recent market data.
            </p>
        </section>
    );
}
