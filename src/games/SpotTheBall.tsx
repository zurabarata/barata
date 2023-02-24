import React, { useState } from "react";

interface SportsScene {
  imageUrl: string;
  ballPosition: [number, number];
}

const sportsScenes: SportsScene[] = [
  {
    imageUrl:
      "https://image.similarpng.com/very-thumbnail/2020/11/Football-illustration-on-transparent-background-PNG.png",
    ballPosition: [400, 200],
  },
  {
    imageUrl:
      "https://www.clipartmax.com/png/middle/2-20186_basketball-clipart-transparent-background.png",
    ballPosition: [300, 150],
  },
  // Add more sports scenes here
];

const SpotTheBall: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [guess, setGuess] = useState<[number, number] | undefined>(undefined);
  const currentScene = sportsScenes[currentSceneIndex];

  const handleGuessClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setGuess([x, y]);
  };

  const handleGuessSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (guess === undefined) {
      return;
    }

    const [x, y] = guess;
    const [ballX, ballY] = currentScene.ballPosition;
    const distance = Math.sqrt(Math.pow(x - ballX, 2) + Math.pow(y - ballY, 2));
    const points = Math.max(0, Math.round(100 - distance));
    setScore(score + points);
    setGuess(undefined);
    setCurrentSceneIndex(currentSceneIndex + 1);
  };

  return (
    <div>
      <h1>Spot the Ball</h1>
      <img
        src={currentScene.imageUrl}
        alt="Sports scene"
        onClick={handleGuessClick}
      />
      <form onSubmit={handleGuessSubmit}>
        <button type="submit">Submit guess</button>
      </form>
      <p>Score: {score}</p>
    </div>
  );
};

export default SpotTheBall;
