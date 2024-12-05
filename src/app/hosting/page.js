export default () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4 py-16 md:py-24 lg:py-32 bg-[url('/cloud.jpg')] bg-cover bg-bottom bg-no-repeat">
        <h1 className="container mx-auto flex flex-col text-6xl md:text-8xl text-center space-y-4">
          <span className="text-white">Modern Cloud.</span>
          <span className="bg-black text-[yellow] font-bold mx-auto px-2">
            ZERO MARKUPS.
          </span>
        </h1>
      </section>

      <section className="container mx-auto text-justify space-y-4">
        <h2 className="container mx-auto text-4xl font-bold">
          <span className="pr-2">That's right,</span>
          <span className="bg-[yellow] text-black mx-auto px-2">
            ZERO MARKUPS.
          </span>
        </h2>
        <p className="text-2xl">
          <b>Termina One Hosting</b> is a modern cloud hosting provider
          committed to providing a simple, secure, and cost-effective way to run
          your production workloads. Our main selling point is that{" "}
          <b>we don't charge any markups on your cloud bill</b>, so you can
          focus on what matters most: <i>running your business</i>.
        </p>
      </section>

      <section className="container mx-auto text-justify space-y-8">
        {[
          {
            emoji: "⚡️",
            title: "Efficient.",
            description:
              "Whether you're an experienced engineer or a non-technical founder, we have our ways of enabling your success without getting in the way.",
          },
          {
            emoji: "🤝",
            title: "Reliable.",
            description:
              "Our zero-markups policy and transparent billing ensure that your business doesn't have any unexpected fees to pay outside of your infrastructure's scale.",
          },
          {
            emoji: "📈",
            title: "Scalable.",
            description:
              "Backed by a strong 99.9% uptime SLA and over 50 partner data centres results in your sites being highly redundant and always available.",
          },
          {
            emoji: "🏗️",
            title: "Supported.",
            description:
              "Dedicated account engineers are always standing by to provide a helping hand when needed with unlimited 100% free consultations included.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center"
          >
            <div className="text-6xl">{item.emoji}</div>
            <div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
