export default () => {
  return (
    <div className="mx-4 py-32 space-y-32">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <h1 className="text-5xl font-bold">
          Infrastructure your <span className="text-[yellow]">developers</span>{" "}
          will <span className="text-[red]">love</span> and your{" "}
          <span className="text-[cyan]">business</span> can{" "}
          <span className="text-[lime]">trust</span>.
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-justify">
          We use our own infrastructure to power all of our services, so you
          know you're getting the best. Our infrastructure is built with
          developers in mind, so you can trust that your applications will run
          smoothly from day one.
        </p>
      </div>

      <div className="space-y-16 md:space-y-64">
        {[
          {
            name: "Compute",
            description:
              "Our compute services are designed to be fast, reliable, and scalable. We use the latest hardware to ensure that your applications run smoothly.",
            products: [
              {
                name: "Virtual Machines",
                description:
                  "On-demand virtual machines able to run any operating system to suit your needs. With both economy and performance options, you can choose the right VM for your workload and budget.",
              },
              {
                name: "Container Orchestration",
                description:
                  "Our managed Docker Swarm and Kubernetes services make it easy to deploy and manage your containerized applications at scale. Providing uptime, availability, and security for your cloud native apps.",
              },
              {
                name: "Bare-Metal Servers",
                description:
                  "Get the power of dedicated hardware with the flexibility of the cloud. Our bare-metal servers are perfect for high-performance workloads, big data, machine learning, and more.",
              },
            ],
          },
          {
            name: "Storage",
            description:
              "Our storage services are designed to be fast, reliable, and scalable. We use multiple layers of redundancy to ensure that your data is always available.",
            products: [
              {
                name: "Block Storage",
                description:
                  "High-performance block storage that can be attached to your virtual machines. With both SSD and HDD options, you can choose the right storage for your workload.",
              },
              {
                name: "Object Storage",
                description:
                  "Scalable and durable object storage for your unstructured data. With built-in CDN support, you can deliver your content to users around the world with low latency.",
              },
              {
                name: "Content Delivery Network",
                description:
                  "Our global CDN delivers your content to users around the world with low latency and high availability. With built-in DDoS protection, you can trust that your content is safe and secure.",
              },
            ],
          },
          {
            name: "Networking",
            description:
              "Secure, reliable, and scalable networking services to connect your applications and users around the world.",
            products: [
              {
                name: "Cloud Firewalls",
                description:
                  "Protect your applications from malicious traffic with our cloud firewalls. With built-in DDoS protection, you can trust that your applications are safe and secure.",
              },
              {
                name: "Load Balancers",
                description:
                  "Distribute incoming network traffic across multiple servers to ensure that no single server is overwhelmed. With built-in health checks, you can trust that your applications are always available.",
              },
              {
                name: "DDoS Protection",
                description:
                  "Protect your applications from distributed denial-of-service (DDoS) attacks with our built-in DDoS protection. With multiple layers of protection, you can trust that your applications are safe and secure.",
              },
            ],
          },
        ].map(({ name, description, products }) => (
          <div key={name} className="md:mx-16 space-y-8">
            <h2 className="text-5xl font-bold text-center">{name}</h2>
            <p className="text-2xl max-w-3xl mx-auto text-justify">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              {products.map(({ name, description }) => (
                <div key={name} className="space-y-4">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="text-xl text-justify">{description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
