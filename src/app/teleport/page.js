"use client";

import "./page.css";

export default () => {
  async function teleport(event) {
    event.preventDefault();

    const key = event.target[0].value;

    if (!key) return alert("Please enter a key.");

    let response = await fetch(`https://api.termina.one/teleport/${key}`);
    response.data = await response.json();

    if (response.ok) return (window.location = response.data.url);

    return alert(`Teleport key "${key}" is invalid.`);
  }

  return (
    <div>
      <section className="pt-24 px-4">
        <div className="max-w-4xl mx-auto space-y-4 text-justify">
          <h1 className="font-bold text-4xl">Teleport Service</h1>
          <p>
            Welcome to the Termina One Teleportation Service, or "TOTS" for
            short. This service allows users to use predefined keys to navigate
            the Termina One network with ease.
          </p>
          <p>
            Simply enter the key you were provided and you will be teleported to
            the destination.
          </p>
          <p>
            If you do not have a key, it's probably because you're not a
            customer. If you are a customer, please contact your account manager
            for more information.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <form className="flex space-x-4" onSubmit={teleport}>
            <input
              type="text"
              placeholder="Enter your key"
              className="flex-1 px-4 py-2 text-black"
            />
            <button className="px-4 py-2 bg-[yellow] text-black font-bold">
              Teleport
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
