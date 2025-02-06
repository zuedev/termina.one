import React, { useState } from "react";
import t1Logo from "/t1_logo_tight.png";
import { NavLink } from "react-router";
import "./index.css";

export default () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex max-w-2xl flex-col space-y-8">
      <div>
        <img src={t1Logo} alt="Termina One Logo" className="h-10" />
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-bold">
          Termina One creates, builds, and implements cutting-edge cloud
          infrastructure solutions.
        </p>
        <p className="text-lg">
          Our software and services deliver lightning-fast hosting to millions
          worldwide, ensuring platforms rely on Termina One for unmatched
          performance, reliability, and scalability.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2">
          <a
            onClick={handleLearnMoreClick}
            className="cursor-pointer text-cyan-300 hover:font-bold"
          >
            🚀 Learn more about our services
          </a>
          {showMore && (
            <div className="slide-down flex flex-col space-y-2 pl-4">
              {[
                { to: "/web-hosting", text: "🌐 Web Hosting" },
                { to: "/game-server-hosting", text: "🎮 Game Server Hosting" },
                {
                  to: "/managed-infrastructure",
                  text: "🔧 Managed Infrastructure",
                },
              ].map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className="text-cyan-300 hover:font-bold"
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <NavLink to="/status" className="text-green-400 hover:font-bold">
          🔍 Check the status of our services
        </NavLink>
      </div>
    </div>
  );
};
