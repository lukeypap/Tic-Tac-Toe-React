import React, { useState } from "react";
import Board from "../Board";
import { DIFFICULTY } from "../Board/boardLogic";
import DifficultyScreen from "../DifficultyScreen";
import Header from "../Header";
import Modal from "../Modal";

enum PIECE {
    X = "X",
    O = "O",
    EMPTY = "-",
}

const index = () => {
    const [selectedPiece, setSelectedPiece] = useState<PIECE>(PIECE.EMPTY);
    const [selectedGameType, setSelectedGameType] = useState<"AI" | "HUMAN">("HUMAN");
    const [gameStarted, setGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState<DIFFICULTY | null>(null);
    const [endScreenOpen, setEndScreenOpen] = useState({ open: false, endState: "" });

    return (
        <>
            {endScreenOpen.open ? <Modal endScreenOpen={endScreenOpen} /> : ""}
            <div className="sm:w-screen lg:w-[30vw] md:w-[50vw]">
                {!gameStarted ? (
                    <>
                        <Header />
                        <div className="shadow-[0px_5px_0px_0px] shadow-shadowColor rounded-md bg-secondary flex flex-col text-center p-6">
                            <p className="mb-4 text-slate-300">Pick your piece</p>
                            <div className="flex flex-row justify-center bg-primary rounded-lg p-2 font-extrabold">
                                <button
                                    className={`${
                                        selectedPiece === "X"
                                            ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-gray-900 transition-colors duration-1000 animate-bounce shadow-[0px_5px_0px_0px] shadow-[#553894]"
                                            : "bg-lightTile text-gray-900 shadow-[0px_5px_0px_0px] shadow-slate-600"
                                    } px-12 py-2 rounded-lg m-2 w-full `}
                                    onClick={() => setSelectedPiece(PIECE.X)}
                                >
                                    X
                                </button>
                                <button
                                    className={`${
                                        selectedPiece === "O"
                                            ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-gray-900 transition-colors duration-1000 animate-bounce shadow-[0px_5px_0px_0px] shadow-[#07435f]"
                                            : "bg-lightTile text-gray-900 shadow-[0px_5px_0px_0px] shadow-slate-600"
                                    } px-12 py-2 rounded-lg m-2 w-full `}
                                    onClick={() => setSelectedPiece(PIECE.O)}
                                >
                                    O
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <button
                                className={`bg-gradient-to-r from-violet-500 to-fuchsia-500 my-5 rounded-md p-3 text-slate-800 shadow-[0px_5px_0px_0px] shadow-[#553894] ${
                                    selectedPiece === PIECE.EMPTY ? "opacity-50" : "opacity-100"
                                }`}
                                onClick={() => {
                                    setSelectedGameType("AI");
                                    setGameStarted(true);
                                }}
                                disabled={selectedPiece === PIECE.EMPTY ? true : false}
                            >
                                Start (vs CPU)
                            </button>
                            <button
                                className={`bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md p-3 text-slate-800 shadow-[0px_5px_0px_0px] shadow-[#07435f] ${
                                    selectedPiece === PIECE.EMPTY ? "opacity-50" : "opacity-100"
                                }`}
                                onClick={() => {
                                    setSelectedGameType("HUMAN");
                                    setGameStarted(true);
                                }}
                                disabled={selectedPiece === PIECE.EMPTY ? true : false}
                            >
                                Start vs Human (2 player)
                            </button>
                        </div>
                    </>
                ) : selectedGameType === "AI" && difficulty === null ? (
                    <DifficultyScreen
                        gameStarted={gameStarted}
                        setGameStarted={setGameStarted}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                    />
                ) : (
                    <Board
                        gameType={selectedGameType}
                        selectedPiece={selectedPiece}
                        startingPlayer={PIECE.X}
                        difficulty={difficulty}
                        setEndScreenOpen={setEndScreenOpen}
                    />
                )}
            </div>
        </>
    );
};

export default index;
