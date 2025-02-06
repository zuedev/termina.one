import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import twemoji from "twemoji";

import IndexPage from "./pages/index.jsx";
import StatusPage from "./pages/status.jsx";

class App extends React.Component {
  componentDidMount() {
    // Replace all emoji characters with Twemoji SVGs
    twemoji.parse(document.querySelector("body"), {
      folder: "svg",
      ext: ".svg",
      base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
    });
  }

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="*" element={<IndexPage />} />
        </Routes>
      </Layout>
    );
  }
}

const Layout = ({ children }) => {
  return <div className="p-4 font-mono md:p-8">{children}</div>;
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
