export default () => {
  return (
    <div>
      <section className="space-y-4 py-16 md:py-24 lg:py-32 bg-[url('/bg-rainbow.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="container mx-auto px-4 font-bold text-6xl md:text-8xl text-white">
          Dream and innovate with Termina One.
        </h1>
      </section>

      <section className="bg-[yellow] text-black text-2xl py-16 text-justify">
        <h2 className="container mx-auto">
          Termina One is a technology company dedicated to breaking down
          enterprise technology barriers, offering software development, data
          analytics, and business intelligence solutions to help businesses
          innovate and grow.
        </h2>
      </section>

      <section className="py-16 space-y-4">
        <div className="max-w-prose mx-auto">
          <h3 className="text-4xl font-bold">What makes us different?</h3>
        </div>
        <div className="container mx-auto">
          <div className="space-y-2 max-w-prose mx-auto">
            {[
              {
                title: "✨ Bleeding-edge technology",
                description:
                  "We are always on the lookout for the latest technologies to help our clients stay ahead of the competition.",
              },
              {
                title: "🌍 Planet-wide reach",
                description:
                  "Our network of data centers and edge locations span the globe, ensuring that your data is always close to your customers.",
              },
              {
                title: "⚡️ Lightning-fast performance",
                description:
                  "No corners are cut when it comes to the performance of our hardware. We only use the best-in-class components to ensure that your applications run smoothly.",
              },
              {
                title: "🔒 Secure by design",
                description:
                  "Security is our top priority. We use the latest encryption technologies to ensure that your data is always safe.",
              },
              {
                title: "🧰 Vast toolkit",
                description:
                  "Our team of experts has a wide range of skills and tools at their disposal to help you build the perfect solution for your business.",
              },
            ].map((item, index) => (
              <p key={index}>
                <b>{item.title}: </b>
                {item.description}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
