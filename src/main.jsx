import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./global.css";
import IndexPage from "./index.jsx";
import StatusPage from "./status.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="*" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
