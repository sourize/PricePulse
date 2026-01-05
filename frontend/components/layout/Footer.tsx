export function Footer() {
    return (
        <footer className="w-full border-t border-surface-800 bg-navy-900 py-8 mt-auto">
            <div className="container max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-sm text-muted-600">
                        Built by <a href="https://sourish.me" target="_blank" rel="noreferrer" className="text-accent-cyan hover:underline hover:underline-offset-4 font-medium transition-colors">Sourish</a>
                    </p>
                    <p className="text-xs text-muted-600/60">
                        Financial Analytics • Educational Use Only
                    </p>
                </div>

                <p className="text-xs text-muted-600 text-center md:text-right max-w-xs">
                    This project uses an LSTM neural network to analyze historical NIFTY 50 data.
                    Not intended for real-time trading decisions.
                </p>
            </div>
        </footer>
    );
}
