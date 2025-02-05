import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";

const servicesData = [
  {
    name: "Compute",
    description: "Our compute service for running code",
    endpoint: "https://api.termina.one/status/compute",
  },
  {
    name: "Database",
    description: "Our centralised database service for storing data",
    endpoint: "https://api.termina.one/status/database",
  },
  {
    name: "Cache",
    description: "Our cache service for storing temporary data at the edge",
    endpoint: "https://api.termina.one/status/cache",
  },
  {
    name: "Bare Metal",
    description:
      "Our bare metal service for running code on dedicated hardware",
    endpoint: "https://api.termina.one/status/bare-metal",
  },
  {
    name: "Storage",
    description: "Our storage service for storing files and data",
    endpoint: "https://api.termina.one/status/storage",
  },
  {
    name: "Kubernetes",
    description: "Our Kubernetes service for running containers",
    endpoint: "https://api.termina.one/status/kubernetes",
  },
];

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
      const updatedServices = await Promise.all(
        servicesRef.current.map(async (service) => {
          const conditionResult = await fetchServiceStatus(service.endpoint);
          return { ...service, conditionResult };
        })
      );
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
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => {
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
              className={`space-y-2 p-4 ${cardBackgroundColor} ${cardTextColor}`}
            >
              <h2 className="text-2xl font-bold">{name}</h2>
              <p>{description}</p>
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
  );
};
