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
    const convertedAmount = Math.round(amount * conversionRates[currency]);
    return convertedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurrency() {
  return useContext(CurrencyContext);
}
