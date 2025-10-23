"use client";
import { useState, useEffect, useRef } from "react";

export default function ClickSpeedGameWrapper() {
  return (
    <div className="h-screen border-r w-[92vw] md:w-[20rem] ">
      <ClickSpeedGame />
    </div>
  );
}

function ClickSpeedGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [buttonSize, setButtonSize] = useState(48); // px

  // Countdown timer
  useEffect(() => {
    if (!gameActive) return;
    if (timeLeft <= 0) {
      setGameActive(false);
      setHighscore((prev) => (score > prev ? score : prev));
      setButtonSize(48); // reset button size
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameActive, score]);

  const moveButton = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Calculate max position
    const maxTop = container.clientHeight - buttonSize;
    const maxLeft = container.clientWidth - buttonSize;

    const top = Math.random() * maxTop;
    const left = Math.random() * maxLeft;
    setPosition({ top, left });

    // Increment score
    setScore((prev) => {
      const newScore = prev + 1;
      setHighscore((hs) => (newScore > hs ? newScore : hs));
      // Shrink button every 5 points
      setButtonSize(() => Math.max(24, 48 - Math.floor(newScore / 5) * 4));
      return newScore;
    });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameActive(true);
    setButtonSize(48);
    moveButton();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-4 right-4 text-sm md:text-base p-2">
        Score: {score} | Highscore: {highscore} | Time: {timeLeft}s
      </div>

      {!gameActive && (
        <button
          onClick={startGame}
          className="bg-indigo-500 px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 transition"
        >
          Start Game
        </button>
      )}

      {gameActive && (
        <button
          onClick={moveButton}
          className="absolute bg-red-500 rounded-full transition-all"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
          }}
        />
      )}
    </div>
  );
}
