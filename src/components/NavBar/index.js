"use client";

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
    disabled: true,
  },
  {
    text: "Products",
    url: null,
    disabled: true,
    children: [
      {
        text: "Virtual Machines",
        url: "/virtual-machines",
        disabled: true,
      },
    ],
  },
  {
    text: "Services",
    url: null,
    disabled: true,
    children: [
      {
        text: "LightSpeed",
        url: "/lightspeed",
      },
    ],
  },
  {
    text: "Solutions",
    url: null,
    disabled: true,
    children: [
      {
        text: "AI and Machine Learning",
        url: "/ai-and-machine-learning",
        disabled: true,
      },
      {
        text: "Website Hosting",
        url: "/website-hosting",
        disabled: true,
      },
    ],
  },
];

export default () => {
  return (
    <nav>
      <div className="flex justify-between fixed w-full top-0 left-0 p-4">
        <a href="/">
          <img
            src="/t1_logo_tight.png"
            alt="Termina One Logo"
            className="w-16"
          />
        </a>

        <div className="flex space-x-4 items-center">
          {links.map((link, index) => (
            <div key={index} className="group relative">
              <a
                href={link.url}
                className={
                  "text-white hover:text-gray-300" +
                  (link.disabled
                    ? " opacity-50 cursor-not-allowed line-through"
                    : "")
                }
              >
                {link.text}
              </a>
              {link.children && !link.disabled && (
                <div className="absolute bg-white p-2 -top-2 -left-2 hidden group-hover:block hover:block text-black space-y-4">
                  <a href={link.url} className="font-bold">
                    {link.text}
                  </a>
                  {link.children.map((child, childIndex) => (
                    <a
                      key={childIndex}
                      href={child.url}
                      className={
                        "block hover:text-gray-300" +
                        (child.disabled
                          ? " opacity-50 cursor-not-allowed line-through"
                          : "")
                      }
                    >
                      {child.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-4 items-center">
          <a
            href="https://billing.stripe.com/p/login/eVa7sP02z7018Ja000"
            className="text-white hover:text-gray-300"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
