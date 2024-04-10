"use client";

import { useState, useEffect } from "react";

const links = [
  {
    type: "link",
    name: "Home",
    url: "/",
  },
  {
    type: "link",
    name: "About",
    url: "/about",
    disabled: true,
  },
  {
    type: "link",
    name: "Contact",
    url: "/contact",
    disabled: true,
  },
  {
    type: "section",
    name: "Projects",
    children: [
      {
        type: "link",
        name: "Hosting",
        url: "https://hosting.t1.zue.dev",
      },
    ],
  },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const navbar = document.querySelector("nav > div:first-child");

      if (window.scrollY > 0) {
        navbar.style.background = "black";
        navbar.style.padding = "0.5rem";
      } else {
        navbar.style.background = "transparent";
        navbar.style.padding = "1rem";
      }
    });
  });

  return (
    <nav>
      <div className="flex justify-between items-center fixed w-full top-0 left-0 p-4">
        <img src="/t1_logo_tight.png" alt="Termina One Logo" className="w-16" />
        <span
          onClick={handleMenuClick}
          className="text-white text-2xl hover:cursor-pointer font-bold"
        >
          Menu
        </span>
      </div>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col justify-center items-center text-white text-2xl fixed w-full top-0 left-0 h-screen bg-black bg-opacity-90`}
        onClick={handleMenuClick}
      >
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold">Navigation Menu</h2>
          <div className="flex flex-col space-y-1">
            {links.map((link) => (
              <div key={link.name}>
                {link.type === "link" ? (
                  <a
                    href={link.url}
                    {...(link.disabled
                      ? { onClick: (e) => e.preventDefault() }
                      : {})}
                    className={`${
                      link.disabled
                        ? "text-gray-400 line-through hover:cursor-not-allowed"
                        : "hover:text-t1-yellow"
                    }`}
                    key={link.name}
                  >
                    {link.name}
                  </a>
                ) : (
                  <div className="flex flex-col space-y-1">
                    <span className="font-bold">{link.name}</span>
                    <div className="flex flex-col space-y-1 pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.url}
                          className={`${
                            link.disabled
                              ? "text-gray-400 line-through"
                              : "hover:text-t1-yellow"
                          }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <span className="text-sm mt-4 text-gray-400">
            Click/press anywhere to close
          </span>
        </div>
      </div>
    </nav>
  );
}
