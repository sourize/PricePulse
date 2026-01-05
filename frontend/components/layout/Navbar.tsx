import Link from "next/link";
import { Activity } from "lucide-react";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Activity className="h-6 w-6 text-primary" />
                    <span className="font-serif text-lg font-bold tracking-tight">PricePulse</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="https://github.com/sourize/PricePulse"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </nav>
    );
}
