"use client";

import { usePathname } from "next/navigation";

export default () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Hosting",
      url: "/hosting",
    },
    {
      name: "Products",
      url: "/products",
      disabled: true,
    },
    {
      name: "Services",
      url: "/services",
      disabled: true,
    },
    {
      name: "Solutions",
      url: "/solutions",
      disabled: true,
    },
    {
      name: "Pricing",
      url: "/pricing",
      disabled: true,
    },
    {
      name: "Documentation",
      url: "/documentation",
      disabled: true,
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
