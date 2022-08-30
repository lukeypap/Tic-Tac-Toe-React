import React, { useState } from "react";
import { DIFFICULTY } from "../Board/boardLogic";

interface props {
    gameStarted: boolean;
    setGameStarted: any;
    difficulty: DIFFICULTY | null;
    setDifficulty: any;
}

const index = ({ gameStarted, setGameStarted, difficulty, setDifficulty }: props) => {
    return (
        <div className="flex flex-col">
            <button
                className={`bg-gradient-to-r from-lime-400 to-yellow-300 my-5 rounded-md p-3 text-slate-800 shadow-[0px_5px_0px_0px] shadow-[#6d7721]
                }`}
                onClick={() => {
                    setDifficulty(DIFFICULTY.EASY);
                    setGameStarted(true);
                }}
            >
                EASY
            </button>
            <button
                className={`bg-gradient-to-r from-yellow-400 to-orange-600 mb-5 rounded-md p-3 text-slate-800 shadow-[0px_5px_0px_0px] shadow-[#88510a]
                }`}
                onClick={() => {
                    setDifficulty(DIFFICULTY.HARD);
                    setGameStarted(true);
                }}
            >
                HARD
            </button>
            <button
                className={`bg-gradient-to-r from-orange-500 to-red-700 rounded-md p-3 text-slate-800 shadow-[0px_5px_0px_0px] shadow-[#8d2d10]
                }`}
                onClick={() => {
                    setDifficulty(DIFFICULTY.IMPOSSIBLE);
                    setGameStarted(true);
                }}
            >
                IMPOSSIBLE
            </button>
        </div>
    );
};

export default index;
