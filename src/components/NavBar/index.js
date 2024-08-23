export default () => {
  return (
    <>
      <nav className="flex items-center space-x-4 p-4 bg-black text-white">
        <a href="/">
          <img
            src="/t1_logo_tight.png"
            alt="Termina One Logo"
            className="h-8"
          />
        </a>
        <div className="flex space-x-4">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </>
  );
};
