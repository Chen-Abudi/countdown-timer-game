import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(evt) {
    setIsSubmitted(false);
    setEnteredPlayerName(evt.target.value);
  }

  function handleClick() {
    setIsSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
