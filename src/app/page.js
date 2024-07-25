import NavBar from "#components/NavBar";

export default () => {
  return (
    <>
      <NavBar />

      <div className="my-16 md:my-32 p-4 space-y-8 text-center">
        <h1 className="text-5xl font-bold">
          Hosting <span className="text-[yellow]">made simple</span> for
          businesses both big and small.
        </h1>
        <p className="text-lg">
          We bring you the best hosting solutions for your business. Whether
          you're a small business or a large enterprise, we've got you covered.
        </p>
        {/* <button className="bg-[yellow] text-black px-4 py-2 font-bold">
          Get started
        </button> */}
      </div>

      <div className="my-16 p-4 space-y-4 text-center">
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
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={alt} className="object-contain w-64" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
