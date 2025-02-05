import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";

const servicesData = {
  "Web Hosting": [
    {
      name: "DNS",
      description: "Resolves domain names to IP addresses",
      endpoint: "https://api.termina.one/status/dns",
    },
    {
      name: "Load Balancer",
      description: "Distributes incoming traffic across multiple servers",
      endpoint: "https://api.termina.one/status/load-balancer",
    },
    {
      name: "CDN",
      description: "Serves static assets and caches content",
      endpoint: "https://api.termina.one/status/cdn",
    },
    {
      name: "Functions",
      description: "Runs serverless functions and APIs for dynamic content",
      endpoint: "https://api.termina.one/status/functions",
    },
    {
      name: "MySQL Clusters",
      description: "Stores relational data such as user accounts",
      endpoint: "https://api.termina.one/status/mysql-cluster",
    },
    {
      name: "MongoDB Clusters",
      description: "Stores non-relational data such as logs",
      endpoint: "https://api.termina.one/status/mongodb-cluster",
    },
    {
      name: "Redis Clusters",
      description: "Stores temporary data such as sessions",
      endpoint: "https://api.termina.one/status/redis-cluster",
    },
    {
      name: "Elasticsearch Clusters",
      description: "Stores and indexes log data for search",
      endpoint: "https://api.termina.one/status/elasticsearch-cluster",
    },
    {
      name: "Git Connector",
      description: "Allows for continuous deployment and version control",
      endpoint: "https://api.termina.one/status/git-connector",
    },
    {
      name: "Job Runners",
      description: "Runs scheduled jobs and tasks such as backups and CI/CD",
      endpoint: "https://api.termina.one/status/job-runners",
    },
    {
      name: "Container Registry",
      description: "Stores and serves container images for deployment",
      endpoint: "https://api.termina.one/status/container-registry",
    },
  ],
  "Game Servers": [
    {
      name: "Kubernetes Clusters",
      description:
        "Orchestrates and manages containerized game server instances",
      endpoint: "https://api.termina.one/status/kubernetes-cluster",
    },
    {
      name: "Bare Metal Servers",
      description: "Physical servers for high-performance game servers",
      endpoint: "https://api.termina.one/status/bare-metal-servers",
    },
    {
      name: "Game Server API",
      description: "Provides a RESTful API for managing game servers",
      endpoint: "https://api.termina.one/status/game-server-api",
    },
    {
      name: "MySQL Clusters",
      description: "Stores relational data for games that require it",
      endpoint: "https://api.termina.one/status/mysql-cluster",
    },
    {
      name: "Anti-DDoS Protection",
      description: "Mitigates distributed denial-of-service attacks using AI",
      endpoint: "https://api.termina.one/status/anti-ddos-protection",
    },
    {
      name: "T1 Anti-Cheat API",
      description:
        "Prevents cheating and hacking in real-time using our custom engine",
      endpoint: "https://api.termina.one/status/anti-cheat-api",
    },
  ],
};

const fetchServiceStatus = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.status === "ok";
};

export default () => {
  const servicesRef = useRef(servicesData);
  const [services, setServices] = useState(servicesRef.current);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const checkConditions = async () => {
      const updatedServices = {};
      for (const category in servicesRef.current) {
        updatedServices[category] = await Promise.all(
          servicesRef.current[category].map(async (service) => {
            const conditionResult = await fetchServiceStatus(service.endpoint);
            return { ...service, conditionResult };
          })
        );
      }
      setServices(updatedServices);
    };

    checkConditions();

    const intervalId = setInterval(() => {
      checkConditions();
      setCountdown(30);
    }, 30000);

    const countdownIntervalId = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 1 ? prevCountdown - 1 : window.location.reload()
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(countdownIntervalId);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <NavLink to="/" className="text-blue-400">
          ⬅️ Return to the homepage
        </NavLink>
      </div>
      <h1 className="text-4xl font-bold">Termina One Service Status</h1>
      <p>Refreshing in {countdown} seconds...</p>
      {Object.keys(services).map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-3xl font-bold">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
            {services[category].map((service) => {
              const { name, description, conditionResult } = service;
              const cardBackgroundColor =
                conditionResult === undefined
                  ? "bg-gray-500"
                  : conditionResult
                  ? "bg-green-500"
                  : "bg-red-500";
              const cardTextColor =
                conditionResult === undefined
                  ? "text-white"
                  : conditionResult
                  ? "text-black"
                  : "text-white";

              return (
                <div
                  key={name}
                  className={`space-y-2 p-2 ${cardBackgroundColor} ${cardTextColor}`}
                  title={description}
                >
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p>
                    <b>Status:</b>{" "}
                    {conditionResult === undefined
                      ? "Checking..."
                      : conditionResult
                      ? "Operational"
                      : "Degraded Performance"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
