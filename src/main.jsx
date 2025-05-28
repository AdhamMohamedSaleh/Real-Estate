import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CurrencyProvider } from "./contexts/CurrencyContext.jsx";
import App from "./App.jsx";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </StrictMode>
);
