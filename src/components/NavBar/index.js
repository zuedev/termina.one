export default () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="flex items-center font-bold space-x-4">
        <a href="/">
          <img
            src="/t1_logo_tight.png"
            alt="Termina One Logo"
            className="w-12"
          />
        </a>

        {[
          // { href: "/about", label: "About" },
          // { href: "/services", label: "Services" },
          // { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <a
            key={`${href}${label.split(" ").join("-").toLowerCase()}`}
            href={href}
            className="hover:text-gray-400"
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="https://billing.stripe.com/p/login/eVa7sP02z7018Ja000"
        className="bg-[#0f0] text-black px-2 py-1 mr-1.5 font-bold hover:bg-[#0d0]"
        target="_blank"
      >
        Login
      </a>
    </div>
  );
};
