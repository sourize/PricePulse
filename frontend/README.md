# PricePulse v2

PricePulse is a premium financial analytics dashboard for forecasting NIFTY 50 price movements using an LSTM neural network.

This repository contains the Next.js `frontend` application.

## 🚀 Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🏗 Architecture

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with a custom "Navy/Cyan/Red" financial theme.
- **Charts**: Recharts used for data visualization.
- **Components**: Modular architecture in `components/features` (logic-heavy) and `components/layout` (structural).

## 🔌 API Integration

### Mock Mode (Default)
The application currently uses a mock API client (`lib/api.ts`) to simulate model inference for demonstration purposes. This allows you to review the UI/UX without running the Python backend.

### Connecting Real Model
To connect the actual Python/Streamlit backend:
1.  Open `lib/api.ts`.
2.  Replace `fetchMockPrediction` logic with a real `fetch()` call to your backend endpoint (e.g., `http://localhost:8000/predict`).

```typescript
// Example Real API Call
const res = await fetch('http://localhost:8000/predict', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
```

## 🎨 Design System

**Colors**:
- Background: `navy-900` (#071026)
- Surface: `surface-800` (#0b1722)
- Accent: `accent-cyan` (#2DD4BF)
- Positive: `grow-green` (#16A34A)
- Negative: `decline-red` (#EF4444)

**Typography**:
- Headings: Playfair Display (Serif)
- Body: Inter (Sans)
- Numbers: JetBrains Mono (Monospace)

## ♿ Accessibility

- Contrast ratios for text meet WCAG AA standards.
- Interactive elements have minimum touch targets of 44px.
- Focus states are clearly visible (cyan ring).
- Semantic HTML (`nav`, `main`, `section`) is used throughout.
