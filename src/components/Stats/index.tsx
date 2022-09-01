import React from "react";
import { DIFFICULTY } from "../Board/boardLogic";

interface props {
    winLoss: { xWin: number; xLoss: number; oWin: number; oLoss: number; draw: number };
    endStates: number;
    difficulty: any;
}

const index = ({ winLoss, endStates, difficulty }: props) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex h-12 md:h-16 lg:h-16 justify-center items-center mt-6 text-gray-800 text-xs">
                <div className="w-28 md:w-32 lg:w-40 m-2 h-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center flex-col">
                    <div className="flex">
                        <p className="font-logo mr-1">X</p>
                        <p>(Win/Loss)</p>
                    </div>
                    <p className="text-2xl font-logo">{winLoss.xWin}</p>
                </div>
                <div className="w-28 md:w-32 lg:w-40 m-2 h-full rounded-xl bg-lightTile flex justify-center items-center flex-col">
                    <p>Draws</p>
                    <p className="text-2xl font-logo">{winLoss.draw}</p>
                </div>
                <div className="w-28 md:w-32 lg:w-40 m-2 h-full rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center flex-col">
                    <p>O (Win/Loss)</p>
                    <p className="text-2xl font-logo">{winLoss.oWin}</p>
                </div>
            </div>
            {difficulty === DIFFICULTY.IMPOSSIBLE ? (
                <div className="text-sm mt-4 font-light bg-[#1F3540] h-16 w-90 md:w-96 md:h-16 lg:w-96 lg:h-16 m-2 rounded-md shadow-[0px_4px_0px_0px] shadow-[#0F202A] flex flex-col justify-center items-center">
                    <p className="font-bold">Minimax Stats</p>
                    <p>Total number of end states searched by the AI: {endStates}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default index;
