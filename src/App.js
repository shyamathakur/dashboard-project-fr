import React from "react";
import Login from "./pages/LoginForm";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ClientInformation from "./pages/ClientInformation";
import Identification from "./pages/Identification";
import Referral from "./pages/Referral";
import Representative from "./pages/Representative";
import Occupation from "./pages/Occupation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client-information" element={<ClientInformation />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/representative" element={<Representative />} />
        <Route path="/occupation" element={<Occupation />} />
      </Routes>
    </Router>
  );
}

export default App;
