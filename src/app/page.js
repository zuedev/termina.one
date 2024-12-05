export default () => {
  return (
    <div>
      <section className="space-y-4 py-16 md:py-24 lg:py-32 bg-[url('/bg-rainbow.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="container mx-auto px-4 font-bold text-6xl md:text-8xl text-white">
          Dream and innovate with Termina One.
        </h1>
      </section>

      <section className="bg-[yellow] text-black text-2xl py-8 text-justify">
        <h2 className="container mx-auto">
          Termina One is a technology company dedicated to breaking down
          enterprise technology barriers, offering software development, data
          analytics, and business intelligence solutions to help businesses
          innovate and grow.
        </h2>
      </section>

      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              emoji: "✨",
              title: "Bleeding-edge technology",
              description:
                "We are always on the lookout for the latest technologies to help our clients stay ahead of the competition.",
            },
            {
              emoji: "🌍",
              title: "Planet-wide reach",
              description:
                "Our network of data centers and edge locations span the globe, ensuring that your data is always close to your customers.",
            },
            {
              emoji: "⚡️",
              title: "Lightning-fast performance",
              description:
                "No corners are cut when it comes to the performance of our hardware. We only use the best-in-class components to ensure that your applications run smoothly.",
            },
            {
              emoji: "🔒",
              title: "Secure by design",
              description:
                "Security is our top priority. We use the latest encryption technologies to ensure that your data is always safe.",
            },
            {
              emoji: "🧰",
              title: "Vast toolkit",
              description:
                "Our team of experts has a wide range of skills and tools at their disposal to help you build the perfect solution for your business.",
            },
            {
              emoji: "🏢",
              title: "Enterprise-grade solutions",
              description:
                "We have worked with some of the largest companies in the world to deliver enterprise-grade solutions that are scalable and reliable.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 flex items-center space-x-4">
              <div className="text-4xl">{item.emoji}</div>
              <div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
