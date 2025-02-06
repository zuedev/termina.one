import t1Logo from "/t1_logo_tight.png";
import { NavLink } from "react-router";

export default () => {
  return (
    <div className="flex max-w-2xl flex-col space-y-8 text-justify">
      <div>
        <img src={t1Logo} alt="Termina One Logo" className="h-10" />
      </div>
      <p className="text-2xl font-bold">
        Termina One creates, builds, and implements cutting-edge cloud
        infrastructure solutions.
      </p>
      <p className="text-lg">
        Our software and services deliver lightning-fast hosting to millions
        worldwide, ensuring platforms rely on Termina One for unmatched
        performance, reliability, and scalability.
      </p>
      <NavLink to="/status" className="text-green-400">
        🔍 Check the status of our services
      </NavLink>
    </div>
  );
};
