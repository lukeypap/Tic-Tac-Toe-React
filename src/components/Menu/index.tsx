import React from "react";
import { PIECE } from "../Board/boardLogic";
import { VscDebugRestart } from "react-icons/vsc";

interface props {
    currentPlayer: PIECE;
}

const index = ({ currentPlayer }: props) => {
    return (
        <div className="flex justify-center items-center mb-4">
            <div className="font-logo flex items-center justify-start font-bold text-4xl w-full ml-5">
                <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    X
                </h1>
                <h1 className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                    O
                </h1>
            </div>
            <div className="flex justify-center  w-full items-center">
                <div className="bg-[#1F3540] h-8 w-32 md:w-36 md:h-10 lg:w-44 lg:h-12 m-2 rounded-md shadow-[0px_4px_0px_0px] shadow-[#0F202A] flex justify-center items-center">
                    <p
                        className={`${
                            currentPlayer === PIECE.X
                                ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                : "bg-gradient-to-r from-sky-500 to-indigo-500"
                        } bg-clip-text text-transparent mr-2 font-extrabold text-xl font-logo`}
                    >
                        {currentPlayer}
                    </p>
                    TURN
                </div>
            </div>
            <div className="w-full flex justify-end mr-5">
                <div className="bg-[#1F3540] h-8 w-8 md:w-10 md:h-10 lg:w-12 lg:h-12 m-2 rounded-md shadow-[0px_4px_0px_0px] shadow-[#0F202A] flex justify-center items-center text-xl">
                    <VscDebugRestart />
                </div>
            </div>
        </div>
    );
};

export default index;
