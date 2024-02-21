import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Home from "./Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ecommerce-site" element={<App />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
