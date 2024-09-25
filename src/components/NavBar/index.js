export default () => {
  return (
    <nav className="flex items-center space-x-4 justify-between font-bold">
      <a href="/">
        <img src="/t1_logo_tight.png" alt="Termina One Logo" className="h-8" />
      </a>
      <div className="space-x-4">
        <a href="/about">About</a>
        {/* <a href="/products">Products</a> */}
        {/* <a href="/services">Services</a> */}
        {/* <a href="/solutions">Solutions</a> */}
        <a href="/contact">Contact</a>
      </div>
      <div>
        <a href="/login">{"Login ->"}</a>
      </div>
    </nav>
  );
};
