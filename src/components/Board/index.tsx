import React, { useState } from "react";
import { easyAi } from "../../ai/easy";
import Square from "../Square";
import { checkDraw, checkWinner } from "./boardLogic";

interface props {
    gameType: string;
    selectedPiece: string;
    startingPlayer: string;
}

const index = ({ gameType, selectedPiece, startingPlayer }: props) => {
    const [board, setBoard] = useState([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer);
    const [aiPiece, setAiPiece] = useState(selectedPiece === "O" ? "X" : "O");
    const [gameOver, setGameOver] = useState(false);

    const handlePlacePiece = (row: number, col: number) => {
        let mark = board[row][col];
        if (mark === "-") {
            const newBoard = Array.from(board);
            newBoard[row][col] = currentPlayer;
            setBoard([...newBoard]);
            if (checkWinner(board)) {
                console.log(`Winner is: ${currentPlayer}`);
            } else if (checkDraw(board)) {
                console.log("Draw");
            } else {
                setCurrentPlayer((current) => (current === "X" ? "O" : "X"));
            }
        }
    };

    if (gameType === "AI" && !gameOver) {
        if (checkDraw(board) || checkWinner(board)) {
            console.log("setting game over true");
            setGameOver(true);
        } else if (currentPlayer === aiPiece && !gameOver) {
            const { row, col } = easyAi(board);
            handlePlacePiece(row, col);
        }
    }

    return (
        <div className="text-center">
            <div>
                <h1>MENU</h1>
            </div>
            {gameOver ? (
                <div className="absolute w-screen h-1/2 flex justify-center items-center">
                    <p>Winner is: {currentPlayer}</p>
                </div>
            ) : (
                ""
            )}

            {board.map((row, rowId) => (
                <div className="flex justify-center" key={rowId}>
                    {row.map((sq, colId) => (
                        <Square
                            key={colId}
                            row={rowId}
                            col={colId}
                            mark={sq}
                            handlePlacePiece={handlePlacePiece}
                        />
                    ))}
                </div>
            ))}
            <div>
                <h1>STATS</h1>
            </div>
        </div>
    );
};

export default index;
