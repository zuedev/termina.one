"use client";

import { useState } from "react";

const TeleportButton = () => {
  const [state, setState] = useState({ clicked: false, error: null });

  function handleClick(event) {
    event.preventDefault();
    setState({ ...state, clicked: true });
  }

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      const key = event.target.value;

      if (!key) return alert("Please enter a key.");

      try {
        let response = await fetch(`https://termina.one/api/teleport/${key}`);
        response.data = await response.json();

        if (response.ok) return (window.location = response.data.url);

        alert(`Teleport key "${key}" is invalid.`);
      } catch (error) {
        setState({ ...state, error: "An error occurred. Please try again." });
      }
    }
  }

  return (
    <>
      {state.clicked ? (
        <input
          type="text"
          placeholder="Enter coordinates..."
          className="bg-white text-black px-2 py-1"
          onKeyDown={handleKeyDown}
          autoFocus
          aria-label="Enter coordinates"
        />
      ) : (
        <a
          href="#"
          className="bg-yellow text-black px-2 py-1 font-bold bg-linear-to-r from-yellow-500 to-orange-500"
          onClick={handleClick}
        >
          {"Teleport ->"}
        </a>
      )}
      {state.error && <p className="text-red-500">{state.error}</p>}
    </>
  );
};

export default TeleportButton;
