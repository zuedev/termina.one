export default () => {
  return (
    <>
      <div className="flex flex-col space-y-4 sm:space-y-8 lg:space-y-16 p-4 sm:p-8 lg:p-16">
        <section className="flex items-center">
          <h1 className="flex flex-col space-y-2 font-bold text-4xl sm:text-6xl lg:text-8xl">
            <span>Termina One,</span>
            <span>Tech Wizards 🧙</span>
          </h1>
        </section>
        <section>
          <p className="p-4 bg-black text-white text-justify sm:max-w-lg lg:max-w-3xl">
            Termina One is a group of nerds founded by zuedev known for
            innovating the development of software and hardware for the tech
            industry. We are a team of professionals that have been working in
            the tech industry for over 10 years. We have worked with many
            companies and have helped them to develop their products and
            services.
          </p>
        </section>
        <section className="space-y-4">
          <p className="text-2xl font-bold">Trusted by these fine companies</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {[
              {
                src: "/customer-novembergames.png",
                alt: "November Games",
                href: "https://novembergames.com",
              },
              {
                src: "/customer-baycat.png",
                alt: "Baycat",
                href: "https://baycat.co.uk",
              },
              {
                src: "/customer-aspenwoolf.png",
                alt: "Aspen Woolf",
                href: "https://aspenwoolf.co.uk",
              },
              {
                src: "/customer-worldanvil.png",
                alt: "World Anvil",
                href: "https://worldanvil.com",
              },
              {
                src: "/customer-coresciences.jpg",
                alt: "CoreSciences",
                href: "https://coresciences.co.uk",
              },
              {
                src: "/customer-coredatasystems.jpg",
                alt: "CORE Data Systems Ltd",
                href: "https://www.coredatasystems.co.uk",
              },
            ].map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={src}
                  alt={alt}
                  className="object-cover h-32 w-32 transition-transform hover:scale-110"
                />
              </a>
            ))}
          </div>
        </section>
        {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-2 p-4 bg-white">
            <h2 className="text-2xl font-bold">Products</h2>
            <ul className="space-y-2 text-lg font-semibold list-square pl-6">
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Cloud
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Dedicated
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Specialist
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 p-4 bg-white">
            <h2 className="text-2xl font-bold">Services</h2>
            <ul className="space-y-2 text-lg font-semibold list-square pl-6">
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Managed Hosting
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  DevOps
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Consultancy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 p-4 bg-white">
            <h2 className="text-2xl font-bold">Solutions</h2>
            <ul className="space-y-2 text-lg font-semibold list-square pl-6">
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Website Hosting
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Application Delivery
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 cursor-not-allowed"
                  title="Coming soon..."
                >
                  Game Development
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    </>
  );
};
