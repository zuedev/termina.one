import "./page.css";

export default () => {
  return (
    <div>
      <section className="px-4 self-center flex min-h-[80vh] items-center">
        <div className="max-w-sm mx-auto space-y-4">
          <h1 className="font-bold text-4xl">
            Dream and innovate with Termina One.
          </h1>
          <p className="text-lg">
            Create apps that last, inform your business decisions, and build the
            future.
          </p>
          <div className="space-x-4 py-2">
            <a
              href="/about"
              className="bg-black border-2 border-black text-white p-2 font-bold hover:bg-gray-800"
            >
              Learn more
            </a>
            <a
              href="/contact"
              className="bg-white border-2 border-black p-2 font-bold hover:bg-gray-100"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
