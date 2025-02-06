import { NavLink } from "react-router";

export default () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <NavLink to="/" className="text-blue-400">
          ⬅️ Return to the homepage
        </NavLink>
      </div>
      <h1 className="text-4xl font-bold">Termina One Managed Infrastructure</h1>
      <p className="max-w-2xl text-lg">
        Termina One provides comprehensive managed infrastructure services,
        taking over the management of your current resources while improving
        them. Our solutions are tailored for businesses, non-profits, and
        government organizations, ensuring your infrastructure is optimized and
        efficient.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {[
          {
            title: "Broad Platform Support 🌐",
            body: "Termina One supports a wide range of platforms and technologies, including cloud services, on-premises servers, and hybrid environments. We ensure seamless integration and management of your existing resources.",
          },
          {
            title: "Global Reach 🌍",
            body: "With Termina One, your infrastructure can be managed and optimized globally. We provide services that ensure your resources are available and performant no matter where your users are located.",
          },
          {
            title: "Scalable Solutions 📈",
            body: "Our managed infrastructure services are designed to scale with your business needs. Whether you're experiencing growth or seasonal spikes, we ensure your resources are always ready to handle the load.",
          },
          {
            title: "Expert Management 🔧",
            body: "Our team of experts takes over the management of your infrastructure, providing continuous monitoring, maintenance, and improvements. We leverage best practices and the latest technologies to keep your resources running smoothly.",
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
        Ready to get started with Termina One Managed Infrastructure? Simply
        shoot us an email at{" "}
        <a
          href="mailto:managed-infrastructure@termina.one"
          className="text-yellow-400"
        >
          managed-infrastructure@termina.one
        </a>{" "}
        and we’ll get back to you within 24 hours.
      </p>
    </div>
  );
};
