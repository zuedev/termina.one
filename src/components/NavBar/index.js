"use client";

export default () => {
  const links = [
    {
      label: "About",
      className: "opacity-50 cursor-not-allowed",
      title: "Coming soon...",
    },
    {
      label: "Products",
      title: "Our Products",
      dropdown: [
        { href: "/cloud-infrastructure", label: "Cloud Infrastructure" },
      ],
    },
    {
      label: "Services",
      title: "Our Services",
      dropdown: [{ href: "/hosting", label: "Hosting" }],
    },
    {
      label: "Solutions",
      className: "opacity-50 cursor-not-allowed",
      title: "Coming soon...",
    },
    {
      href: "/contact",
      label: "Contact",
      title: "Get in touch with us",
    },
  ];

  return (
    <div className="border-b-2 border-[yellow]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between p-4 items-center">
          <a href="/">
            <img
              src="/t1_logo_tight.png"
              alt="Termina One Logo"
              className="w-12"
            />
          </a>
          <div className="flex flex-col sm:flex-row items-center font-bold sm:space-x-8">
            {links.map((link, index) => (
              <div key={index} className="relative group" title={link.title}>
                {link.href ? (
                  <a
                    href={link.href}
                    className={`${
                      link.className || ""
                    } text-[#fff] hover:text-[yellow]`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    className={`${
                      link.className || ""
                    } text-[#fff] cursor-default`}
                  >
                    {link.label}
                  </span>
                )}
                {link.dropdown && (
                  <div className="absolute top-full left-0 bg-black z-10 hidden group-hover:block min-w-max pt-4">
                    {link.dropdown.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 hover:text-[yellow]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://billing.stripe.com/p/login/eVa7sP02z7018Ja000"
            className="bg-[#0f0] text-black px-3 py-1.5 font-bold hover:bg-[#0d0]"
            target="_blank"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
