import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import twemoji from "twemoji";

import HomePage from "./pages/home";
import StatusPage from "./pages/status";
import WebHostingPage from "./pages/web-hosting";
import GameServerHostingPage from "./pages/game-server-hosting";
import ManagedInfrastructurePage from "./pages/managed-infrastructure";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/web-hosting" element={<WebHostingPage />} />
          <Route
            path="/game-server-hosting"
            element={<GameServerHostingPage />}
          />
          <Route
            path="/managed-infrastructure"
            element={<ManagedInfrastructurePage />}
          />
          <Route path="*" element={<HomePage />} />
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
