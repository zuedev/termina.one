"use client";

import { usePathname } from "next/navigation";
import TeleportButton from "../TeleportButton";

export default () => {
  const links = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "mailto:contact@termina.one",
    },
    {
      name: "Support",
      url: "mailto:support@termina.one",
    },
  ];

  const pathname = usePathname();

  for (const link of links) {
    link.active = link.url === pathname;

    link.className = ["hover:underline", "hover:decoration-dotted"];

    if (link.active) link.className.push("underline");

    if (link.disabled)
      link.className.push("opacity-50 line-through cursor-not-allowed");
  }

  return (
    <nav className="flex items-center space-x-4 justify-between">
      <a href="/">
        <img src="/t1_logo_tight.png" alt="Termina One Logo" className="h-8" />
      </a>
      <div className="flex flex-col md:flex-row md:space-x-4 items-center">
        {links.map(({ name, url, disabled, className }) => (
          <a
            key={name}
            href={disabled ? "#" : url}
            className={className.join(" ")}
            title={disabled ? "Coming soon..." : ""}
          >
            {name}
          </a>
        ))}
        <TeleportButton />
      </div>
    </nav>
  );
};
