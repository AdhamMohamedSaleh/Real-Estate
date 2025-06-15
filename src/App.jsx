import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Dashboard from "./pages/Dashboard";
import PropertyDetails from "./pages/PropertyDetails";
import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";
import AboutUs from "./pages/AboutUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
