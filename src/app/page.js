export default () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto py-16 md:py-32 space-y-32">
        <div className="space-y-8 text-center">
          <h1 className="text-5xl font-bold">
            Hosting <span className="text-[yellow]">made simple</span> for
            businesses both big and small.
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We bring you the best hosting solutions for your business. Whether
            you're a small business or a large enterprise, we've got you
            covered.
          </p>
          {/* <button className="bg-[yellow] text-black px-4 py-2 font-bold">
          Get started
        </button> */}
        </div>

        <div className="space-y-4 text-center">
          <p className="text-md">Trusted by these fine companies</p>
          <div className="flex justify-center space-x-4">
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
            ].map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={src} alt={alt} className="object-contain w-64" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 md:py-32 p-4 space-y-8 text-center bg-[yellow] text-black text-justify">
        <div className="max-w-6xl mx-auto flex space-x-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold">11 Years</h2>
            <p className="text-lg">
              Experience in hosting and serving both small and enterprise-level
              businesses.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">99.9%</h2>
            <p className="text-lg">
              Approval rating from our customers. We're here to help you grow.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">15.6 million+</h2>
            <p className="text-lg">
              Web requests served every month. We're here to help you scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
