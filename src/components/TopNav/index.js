"use client";

export default () => {
  return (
    <nav className="flex items-center space-x-4 justify-between">
      <a href="/">
        <img src="/t1_logo_tight.png" alt="Termina One Logo" className="h-8" />
      </a>
      <div className="space-x-4">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/teleport">Teleport</a>
      </div>
    </nav>
  );
};
