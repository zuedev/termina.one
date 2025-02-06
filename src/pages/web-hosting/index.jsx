import { NavLink } from "react-router";

export default () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <NavLink to="/" className="text-blue-400">
          ⬅️ Return to the homepage
        </NavLink>
      </div>
      <h1 className="text-4xl font-bold">Termina One Web Hosting</h1>
      <p className="max-w-2xl text-lg">
        Termina One provides cost-effective cloud web hosting solutions tailored
        for businesses, non-profits, and government organizations. With a
        variety of hosting options, we’ll help you find the perfect fit for your
        needs.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {[
          {
            title: "Broad Platform Support 🌐",
            body: "Termina One offers a wide range of CMS platforms, including WordPress, Drupal, and Joomla, also supporting popular languages like Java, Ruby, PHP, Node.js, and .NET.",
          },
          {
            title: "Datacenters Worldwide 🌍",
            body: "Your customers are worldwide—your hosting should be too. With Termina One, you can deploy a datacenter or CDN in any region you choose with just a few clicks.",
          },
          {
            title: "Scalable from Day One 📈",
            body: "Our infrastructure dynamically adapts to changing traffic, effortlessly handling both quiet periods and sudden spikes from campaigns and social media surges.",
          },
          {
            title: "Powered by Git 🔧",
            body: "Termina One deploys your website directly from your Git repository. Our platform supports pulling from any provider, making it easy to automate your deployment process.",
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
        Ready to get started with Termina One Web Hosting? Simply shoot us an
        email at{" "}
        <a href="mailto:web-hosting@termina.one" className="text-yellow-400">
          web-hosting@termina.one
        </a>{" "}
        and we’ll get back to you within 24 hours.
      </p>
    </div>
  );
};
