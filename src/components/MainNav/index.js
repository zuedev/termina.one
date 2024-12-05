"use client";

import { usePathname } from "next/navigation";

export default () => {
  const links = [
    {
      name: "Hosting",
      url: "/hosting",
    },
    {
      name: "Contact",
      url: "mailto:contact@termina.one",
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
    <nav className="flex flex-col md:flex-row md:space-x-4 font-bold">
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
    </nav>
  );
};
