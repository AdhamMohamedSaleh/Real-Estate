import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="property/:id" element={<PropertyDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
