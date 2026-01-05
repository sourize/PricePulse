import Link from "next/link";
import { Activity, Github } from "lucide-react";

export function TopBar() {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    const marketStatus = "CLOSED"; // Mock status

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-surface-800 bg-navy-900/95 backdrop-blur">
            <div className="container flex h-14 max-w-3xl mx-auto items-center justify-between px-4">
                {/* Left: Branding */}
                <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                    <Activity className="h-8 w-8 text-accent-cyan" />
                    <span className="font-serif text-2xl font-bold tracking-tight text-white">PricePulse</span>
                </Link>

                {/* Right: Actions */}
                <div className="flex items-center space-x-6">
                    <Link
                        href="https://sourish.me"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:block text-sm font-medium text-muted-600 hover:text-accent-cyan transition-colors"
                    >
                        sourish.me
                    </Link>
                    <Link
                        href="https://github.com/sourize/PricePulse"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-600 transition-colors hover:text-white"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
