import React, { createContext, useContext, useState, useEffect } from "react";

const conversionRates = {
  USD: 1,
  EUR: 0.91,
  SAR: 3.75,
  KWD: 0.31,
};

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");
    if (savedCurrency && conversionRates[savedCurrency]) {
      setCurrency(savedCurrency);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  function convertPrice(amount) {
    return (amount * conversionRates[currency]).toFixed(2);
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
