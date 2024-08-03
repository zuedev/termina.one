export default () => {
  return (
    <div className="space-y-32 mb-32">
      <div className="bg-[url('/rainbow.png')] bg-cover bg-center bg-no-repeat bg-fixed p-32">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <h1 className="text-6xl font-bold drop-shadow">
            Hosting <span className="text-[yellow]">made simple</span> for
            businesses both big and small.
          </h1>
          <p className="text-3xl max-w-3xl mx-auto drop-shadow">
            We bring you the best hosting solutions for your business. Whether
            you're a small business or a large enterprise, we've got you
            covered.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-center text-xl">Trusted by these fine companies</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
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
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={alt}
                className="object-cover h-32 w-32 transition-transform hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mx-16 text-justify gap-16">
        {[
          {
            title: "12+ Years",
            description:
              "Experience in hosting and serving both small and enterprise-level businesses.",
          },
          {
            title: "99%",
            description:
              "Uptime guarantee SLA available. Have the confidence to do business online.",
          },
          {
            title: "15.6 million+",
            description:
              "Web requests served every month. We're here to help you scale.",
          },
        ].map(({ title, description }) => (
          <div key={title}>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
