import TeleportButton from "../TeleportButton";

export default () => {
  return (
    <nav className="flex items-center space-x-4 justify-between font-bold">
      <a href="/">
        <img src="/t1_logo_tight.png" alt="Termina One Logo" className="h-8" />
      </a>
      <div className="space-x-4">
        <TeleportButton />
      </div>
    </nav>
  );
};
