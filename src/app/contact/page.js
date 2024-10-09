export default () => {
  return (
    <div className="container mx-auto p-4">
      <section className="space-y-4">
        <h1 className="font-bold text-6xl">Contact Us</h1>
        <form
          action="https://formspree.io/f/xeojaqzk"
          method="POST"
          className="space-y-4"
        >
          <label className="block">
            <span className="text-lg">Name</span>
            <input
              type="text"
              name="name"
              className="block w-full border p-2"
            />
          </label>
          <label className="block">
            <span className="text-lg">Email</span>
            <input
              type="email"
              name="email"
              className="block w-full border p-2"
            />
          </label>
          <label className="block">
            <span className="text-lg">Message</span>
            <textarea
              name="message"
              className="block w-full border p-2"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-[#0f0] text-black font-bold py-2 px-4"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
