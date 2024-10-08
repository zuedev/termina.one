export default () => {
  return (
    <div className="py-4 space-y-8">
      <section className="space-y-4">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
          About Termina One
        </h1>
        <div className="space-y-4 text-justify">
          <p>
            Since being founded in 2012, Termina One has been dedicated to
            breaking down the barriers of enterprise technology and providing
            solutions that help businesses of all sizes innovate and grow. Our
            team of experts is committed to delivering the best in software
            development, data analytics, and business intelligence by leveraging
            the latest technologies and methodologies.
          </p>
          <p>
            Originally founded as a software development company called "Peccy
            Networks," we have always had an intimate read on the pulse of the
            tech industry. We have since rebranded to Termina One to better
            reflect our commitment to providing comprehensive solutions that
            help businesses thrive in the digital age.
          </p>
          <p>
            We don't just build software; we build relationships. Our team of
            expert developers, data scientists, and business analysts work
            closely with our clients to understand their unique needs and
            challenges. We then work backwards from their goals to create custom
            solutions that drive real results.
          </p>
        </div>
      </section>

      <section>
        <div className="space-y-4">
          <h2 className="font-bold text-4xl">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "💻 Technology For All",
                description:
                  "The size of your company or project shouldn't dictate the technology you're allowed to use. We work with businesses of all sizes to provide affordable solutions that help them grow and thrive.",
              },
              {
                title: "👫 Humans First",
                description:
                  "Technology should be a tool to help humans, not replace them. The future is human, and we are committed to building technology that empowers people to do more for less.",
              },
              {
                title: "🏘️ Community Driven",
                description:
                  "Social responsibility is at the core of everything we do. We are committed to giving back to the communities that support us and creating a more equitable future for all. Ask us about our pro bono work!",
              },
              {
                title: "🔄 Continuous Learning",
                description:
                  "The tech industry moves fast, and we move with it. We are committed to continuous learning and improvement, both for ourselves and our clients. All of our team members are encouraged to pursue professional development opportunities whenever possible.",
              },
            ].map((value) => (
              <div key={value.title} className="space-y-2">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-justify">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
