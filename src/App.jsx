import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import { CurrencyProvider } from "./contexts/CurrencyContext";

function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="property/:id" element={<PropertyDetails />} />
          </Route>
        </Routes>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;
