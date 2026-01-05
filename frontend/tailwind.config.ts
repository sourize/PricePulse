import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#071026', // navy-900
                foreground: '#ffffff',
                navy: {
                    900: '#071026',
                },
                surface: {
                    800: '#0b1722',
                },
                muted: {
                    600: '#94A3B8',
                },
                accent: {
                    cyan: '#2DD4BF',
                },
                grow: {
                    green: '#16A34A',
                },
                decline: {
                    red: '#EF4444',
                },
                // Keeping standard shadcn-like tokens mapped to our palette for compatibility if we use libraries
                card: {
                    DEFAULT: '#0b1722', // surface-800
                    foreground: '#ffffff',
                },
                primary: {
                    DEFAULT: '#2DD4BF', // accent-cyan
                    foreground: '#071026',
                },
                destructive: {
                    DEFAULT: '#EF4444', // decline-red
                    foreground: '#ffffff',
                },
                border: '#1e293b', // slate-800
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
            borderRadius: {
                lg: '10px',
                md: '8px',
                sm: '6px',
            },
        },
    },
    plugins: [],
};
export default config;
