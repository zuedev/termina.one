export default () => {
  const links = [
    {
      name: "About",
      url: "/about",
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
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row md:space-x-4 font-bold">
      {links.map(({ name, url, disabled }) => (
        <a
          key={name}
          href={url}
          className={
            disabled ? "opacity-50 line-through cursor-not-allowed" : ""
          }
          title={disabled ? "Coming soon..." : ""}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};
