import { NavLink } from "react-router";

export default () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <NavLink to="/" className="text-blue-400">
          ⬅️ Return to the homepage
        </NavLink>
      </div>
      <h1 className="text-4xl font-bold">Termina One Game Server Hosting</h1>
      <p className="max-w-2xl text-lg">
        Termina One provides robust and scalable game server hosting solutions
        tailored for gamers, communities, and developers. With a variety of
        hosting options, we’ll help you find the perfect fit for your needs.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {[
          {
            title: "Popular Game Support 👾",
            body: "Termina One offers hosting for popular games like Minecraft, DayZ, Rust, and more. Our platform ensures smooth and lag-free gameplay.",
          },
          {
            title: "Global Datacenters 🌍",
            body: "Your players are worldwide—your hosting should be too. With Termina One, you can deploy a game server in any region you choose with just a few clicks.",
          },
          {
            title: "Scalable from Day One 📈",
            body: "Our infrastructure dynamically adapts to changing player counts, effortlessly handling both quiet periods and sudden spikes from events and promotions.",
          },
          {
            title: "Custom Solutions 🔧",
            body: "Termina One supports custom game server setups for lesser-known titles. Our platform is flexible and can be tailored to meet your specific requirements.",
          },
        ].map((section, index) => (
          <div key={index} className="space-y-2 bg-neutral-900 p-6">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-gray-200" />
      <h2 className="text-3xl font-bold">Get Started Today</h2>
      <p className="max-w-2xl text-lg">
        Ready to get started with Termina One Game Server Hosting? Simply shoot
        us an email at{" "}
        <a
          href="mailto:game-server-hosting@termina.one"
          className="text-yellow-400"
        >
          game-server-hosting@termina.one
        </a>{" "}
        and we’ll get back to you within 24 hours.
      </p>
    </div>
  );
};
