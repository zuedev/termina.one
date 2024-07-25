export default () => {
  return (
    <div className="bg-[yellow] text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between p-4 items-center">
          <a href="/">
            <img
              src="/t1_logo_tight.png"
              alt="Termina One Logo"
              className="w-12"
            />
          </a>
          <div className="flex items-center font-bold space-x-4">
            {[
              // { href: "/about", label: "About" },
              // { href: "/services", label: "Services" },
              // { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={`${href}${label.split(" ").join("-").toLowerCase()}`}
                href={href}
                className="hover:text-gray-500"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="https://billing.stripe.com/p/login/eVa7sP02z7018Ja000"
            className="bg-black text-white px-3 py-1.5 mr-1.5 font-bold hover:bg-gray-500"
            target="_blank"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
