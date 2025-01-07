"use client";
import React from "react";
import Confetti from "react-confetti";

const boardConfig: Array<{ boxId: number; boxValue: string | null }> = [
  {
    boxId: 0,
    boxValue: null,
  },
  {
    boxId: 1,
    boxValue: null,
  },
  {
    boxId: 2,
    boxValue: null,
  },
  {
    boxId: 3,
    boxValue: null,
  },
  {
    boxId: 4,
    boxValue: null,
  },
  {
    boxId: 5,
    boxValue: null,
  },
  {
    boxId: 6,
    boxValue: null,
  },
  {
    boxId: 7,
    boxValue: null,
  },
  {
    boxId: 8,
    boxValue: null,
  },
];

const winCombinations: Array<Array<number>> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Board() {
  const [toggleValue, setToggleValue] = React.useState(0);
  const [gameResult, setGameResult] = React.useState<string | null>(null);
  const [winner, setWinner] = React.useState<string | null>(null);
  const [winningCombination, setWinningCombination] =
    React.useState<Array<number> | null>(null);

  const handleBoxClick = (boxId: number) => {
    setGameResult("started");
    const newToggleValue = 1 - toggleValue;
    setToggleValue(newToggleValue);
    const markerValue = newToggleValue === 1 ? "X" : "O";
    if (boardConfig[boxId].boxValue !== null) {
      return;
    }
    boardConfig[boxId].boxValue = markerValue;
    const isWon = checkWinConditions(markerValue);
    if (isWon) {
      setWinner(markerValue);
      setGameResult("win");
      return;
    }

    const isDraw = checkIfGameEndedInDraw();
    if (isDraw) {
      setGameResult("draw");
      return;
    }
  };

  const checkWinConditions = (markerValue: string) => {
    const markerValues: Array<number> = [];
    boardConfig.map((box) => {
      if (box.boxValue === markerValue) {
        markerValues.push(box.boxId);
      }
    });

    for (let i = 0; i < winCombinations.length; i++) {
      const singleCombination: Array<number> = winCombinations[i];
      for (let j = 0; j < singleCombination.length; j++) {
        if (
          markerValues.includes(singleCombination[0]) &&
          markerValues.includes(singleCombination[1]) &&
          markerValues.includes(singleCombination[2])
        ) {
          setWinningCombination(singleCombination);
          return true;
        }
      }
    }

    return false;
  };

  const checkIfGameEndedInDraw = () => {
    const isDraw = boardConfig.every((box) => box.boxValue !== null);
    if (isDraw) {
      return true;
    } else {
      return false;
    }
  };

  const resetGame = () => {
    setGameResult(null);
    setWinner(null);
    setWinningCombination(null);
    setGameResult("start");
    boardConfig.map((box) => {
      box.boxValue = null;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3">
        {boardConfig.map((box) => (
          <div key={box.boxId} className="border border-gray-300">
            <Box
              value={box.boxValue}
              onBoxClick={() => handleBoxClick(box.boxId)}
              isWinningBox={winningCombination?.includes(box.boxId) || false}
            />
          </div>
        ))}
      </div>
      <div>
        {gameResult && (
          <>
            <h1>Game Result: {gameResult}</h1>
          </>
        )}

        {winner && (
          <>
            <h1>Winner:{winner}</h1>
          </>
        )}
      </div>

      <div className="my-4">
        <button
          onClick={resetGame}
          className="bg-white text-black p-2 rounded-md"
        >
          Reset Game
        </button>
      </div>
      {/* <Confetti width={200} height={200} /> */}

      {winner && (
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
          recycle={false}
        />
      )}
    </div>
  );
}

interface BoxProps {
  value: string | null;
  onBoxClick: () => void;
  isWinningBox: boolean;
}

const Box = ({ value, onBoxClick, isWinningBox }: BoxProps) => {
  return (
    <button
      className={`w-16 h-16 flex justify-center items-center bg-white border border-gray-300 p-2 text-black ${
        isWinningBox ? "bg-green-500" : ""
      }`}
      onClick={onBoxClick}
    >
      {value}
    </button>
  );
};
