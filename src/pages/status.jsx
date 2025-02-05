import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default () => {
  const [services, setServices] = useState([
    {
      name: "Compute",
      description: "Our compute service for running code",
      condition: () => {
        return fetch("https://api.termina.one/status/compute")
          .then((fetchResult) => fetchResult.json())
          .then((fetchResultJson) => fetchResultJson.status === "ok");
      },
    },
    {
      name: "Database",
      description: "Our centralised database service for storing data",
      condition: () => {
        return fetch("https://api.termina.one/status/database")
          .then((fetchResult) => fetchResult.json())
          .then((fetchResultJson) => fetchResultJson.status === "ok");
      },
    },
    {
      name: "Cache",
      description: "Our cache service for storing temporary data at the edge",
      condition: () => {
        return fetch("https://api.termina.one/status/cache")
          .then((fetchResult) => fetchResult.json())
          .then((fetchResultJson) => fetchResultJson.status === "ok");
      },
    },
    {
      name: "Bare Metal",
      description:
        "Our bare metal service for running code on dedicated hardware",
      condition: () => {
        return fetch("https://api.termina.one/status/bare-metal")
          .then((fetchResult) => fetchResult.json())
          .then((fetchResultJson) => fetchResultJson.status === "ok");
      },
    },
    {
      name: "Storage",
      description: "Our storage service for storing files and data",
      condition: () => {
        return fetch("https://api.termina.one/status/storage")
          .then((fetchResult) => fetchResult.json())
          .then((fetchResultJson) => fetchResultJson.status === "ok");
      },
    },
    {
      name: "Kubernetes",
      description: "Our Kubernetes service for running containers",
      condition: () => {
        return fetch("https://api.termina.one/status/kubernetes")
          .then((fetchResult) => fetchResult.json())
          .then((fetchResultJson) => fetchResultJson.status === "ok");
      },
    },
  ]);

  useEffect(() => {
    const checkConditions = async () => {
      const updatedServices = await Promise.all(
        services.map(async (service) => {
          const conditionResult = await service.condition();
          return { ...service, conditionResult };
        })
      );
      setServices(updatedServices);
    };

    checkConditions();
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <NavLink to="/" className="text-blue-400">
          ⬅️ Return to the homepage
        </NavLink>
      </div>
      <h1 className="text-4xl font-bold">Termina One Service Status</h1>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => {
          const conditionResult = service.conditionResult;

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
              key={service.name}
              className={`space-y-2 p-4 ${cardBackgroundColor} ${cardTextColor}`}
            >
              <h2 className="text-2xl font-bold">{service.name}</h2>
              <p>{service.description}</p>
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
