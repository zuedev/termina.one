"use client";

import { useState } from "react";

export default () => {
  const [clicked, setClicked] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setClicked(true);
  }

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      const key = event.target.value;

      if (!key) return alert("Please enter a key.");

      let response = await fetch(`https://api.termina.one/teleport/${key}`);
      response.data = await response.json();

      if (response.ok) return (window.location = response.data.url);

      alert(`Teleport key "${key}" is invalid.`);
    }
  }

  return (
    <>
      {clicked ? (
        <input
          type="text"
          placeholder="Enter coordinates..."
          className="bg-white text-black px-2 py-1"
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <a
          href="#"
          className="bg-[yellow] text-black px-2 py-1 bg-gradient-yellow-br"
          onClick={handleClick}
        >
          {"Teleport ->"}
        </a>
      )}
    </>
  );
};
