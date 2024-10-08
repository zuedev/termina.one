"use client";

export default () => {
  return (
    <nav className="flex items-center space-x-4 justify-between font-bold">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <a href="/products">Products</a>
        <a href="/services">Services</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/documentation">Documentation</a>
      </div>
    </nav>
  );
};
