import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: 'swap' });

export const metadata: Metadata = {
  title: "PricePulse | NIFTY 50 Analytics",
  description: "Advanced LSTM-based financial forecasting for the NIFTY 50 index.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased min-h-screen bg-navy-900 text-white selection:bg-accent-cyan/30`}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]"></div>
        {children}
      </body>
    </html>
  );
}
