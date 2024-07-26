export default () => {
  return (
    <div className="mx-4 py-32 space-y-8">
      <h1 className="text-5xl font-bold text-center">Contact Form</h1>
      <p className="text-2xl max-w-3xl mx-auto text-center">
        Get in touch with us today and one of our dedicated solutions architects
        will be in touch with you shortly.
      </p>
      <form
        className="max-w-md mx-auto space-y-4 text-black"
        action="https://formspree.io/f/xeojaqzk"
        method="POST"
      >
        <input
          name="name"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="John Doe"
        />
        <input
          name="email"
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="email@domain.tld"
        />
        <textarea
          name="message"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your message here..."
        ></textarea>
        <button
          className="w-1/2 bg-[#0f0] text-black p-2 font-bold hover:bg-[#0d0]"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};
