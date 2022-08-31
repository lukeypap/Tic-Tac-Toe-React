import React from "react";
import { PIECE } from "../Board/boardLogic";

interface props {
    endScreenOpen: { open: boolean; endState: string };
    setExitGame: any;
    setPlayAgain: any;
}

const index = ({ endScreenOpen, setExitGame, setPlayAgain }: props) => {
    return (
        <div
            className={`w-screen h-screen absolute bg-black flex justify-center bg-opacity-50 items-center animate-fade`}
        >
            <div className="md:h-[30vh] md:w-[100vw] h-[50vw] w-[100vw] rounded-lg bg-secondary animate-fadeModal flex flex-col justify-center items-center">
                <div className="flex space-x-2 mb-5">
                    <p
                        className={`${
                            endScreenOpen.endState === PIECE.X
                                ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
                                : endScreenOpen.endState === PIECE.O
                                ? "bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent"
                                : ""
                        } text-6xl font-logo my-4`}
                    >
                        {endScreenOpen.endState !== "Draw"
                            ? endScreenOpen.endState + " Wins!"
                            : "Draw!"}
                    </p>
                </div>
                <div className="flex">
                    <button
                        className="bg-lightTile px-6 m-2 rounded-md shadow-[0px_4px_0px_0px] shadow-[#4d575c] flex justify-center items-center text-[#1F3540] hover:bg-[#bcd5e0]"
                        onClick={() => setExitGame(true)}
                    >
                        Exit
                    </button>
                    <button
                        className={`bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-sky-500 hover:scale-105  shadow-[0px_5px_0px_0px] shadow-[#393b8d] px-4 py-2 m-2 rounded-md flex justify-center items-center text-[#1F3540]`}
                        onClick={() => setPlayAgain(true)}
                    >
                        Play again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default index;
