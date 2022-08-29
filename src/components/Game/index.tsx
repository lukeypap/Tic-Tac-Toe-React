import React, { useState } from "react";
import Board from "../Board";

const index = () => {
    const [selectedPiece, setSelectedPiece] = useState("O");
    const [selectedGameType, setSelectedGameType] = useState("");

    return (
        <div className="sm:w-screen lg:w-[30vw] md:w-[50vw]">
            {selectedGameType === "" ? (
                <>
                    <div className="shadow-[0px_5px_0px_0px] shadow-black rounded-md bg-slate-800 flex flex-col text-center p-6">
                        <p className="mb-4">Pick your piece</p>
                        <div className="flex flex-row justify-center bg-slate-900 rounded-lg p-2 font-extrabold">
                            <button
                                className={`${
                                    selectedPiece === "X"
                                        ? "bg-yellow-300 text-gray-900 transition-colors duration-500 animate-bounce"
                                        : "bg-gray-600"
                                } px-12 py-2 rounded-lg m-2 w-full`}
                                onClick={() => setSelectedPiece("X")}
                            >
                                X
                            </button>
                            <button
                                className={`${
                                    selectedPiece === "O"
                                        ? "bg-yellow-300 text-gray-900 transition-colors duration-500 animate-bounce"
                                        : "bg-gray-600"
                                } px-12 py-2 rounded-lg m-2 w-full `}
                                onClick={() => setSelectedPiece("O")}
                            >
                                O
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button
                            className=" bg-yellow-300 my-5 rounded-md p-3 text-slate-800 shadow-md"
                            onClick={() => {
                                setSelectedGameType("AI");
                            }}
                        >
                            Start (vs CPU)
                        </button>
                        <button
                            className=" bg-[#31C4BE] rounded-md p-3 text-slate-800 shadow-md"
                            onClick={() => setSelectedGameType("HUMAN")}
                        >
                            Start vs Human (2 player)
                        </button>
                    </div>
                </>
            ) : (
                <Board gameType={selectedGameType} selectedPiece={selectedPiece} />
            )}
        </div>
    );
};

export default index;
