import React, { useState } from "react";

const GuessNumber: React.FC = () => {
  const [guess, setGuess] = useState<number | undefined>(undefined);
  const [feedback, setFeedback] = useState<string>(
    "Make a guess between 1 and 100"
  );
  const [answer, setAnswer] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) {
      setGuess(undefined);
    } else {
      setGuess(value);
    }
  };

  const handleGuessSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (guess === undefined) {
      return;
    }

    if (guess < answer) {
      setFeedback("Too low!");
    } else if (guess > answer) {
      setFeedback("Too high!");
    } else {
      setFeedback("You win!");
    }
  };

  return (
    <div
      style={{
        // center the game horizontally and vertically
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // center the game horizontally and vertically
      }}
    >
      <h1>Guess the Number</h1>
      <form onSubmit={handleGuessSubmit}>
        <label>
          Guess:
          <input
            type="number"
            value={guess === undefined ? "" : guess}
            onChange={handleGuessChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default GuessNumber;
