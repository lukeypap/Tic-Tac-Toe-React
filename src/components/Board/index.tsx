import React, { useState } from "react";
import { easyAi } from "../../ai/easy";
import Square from "../Square";

interface props {
    gameType: string;
    selectedPiece: string;
}

const index = ({ gameType, selectedPiece }: props) => {
    const [board, setBoard] = useState([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ]);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [aiPiece, setAiPiece] = useState(selectedPiece === "O" ? "X" : "O");

    const handlePlacePiece = (row: number, col: number) => {
        let mark = board[row][col];
        if (mark === "-") {
            const newBoard = Array.from(board);
            console.log(newBoard);
            newBoard[row][col] = currentPlayer;
            setBoard(newBoard);
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    };

    if (gameType === "AI") {
        if (currentPlayer === aiPiece) {
            const { row, col } = easyAi(board);
            handlePlacePiece(row, col);
        }
    }

    return (
        <div className="text-center">
            <div>
                <h1>MENU</h1>
            </div>
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
