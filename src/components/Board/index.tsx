import React, { useState } from "react";
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

    const handlePlacePiece = (row: number, col: number, mark: string) => {
        if (mark === "-") {
            const newBoard = Array.from(board);
            newBoard[row][col] = currentPlayer;
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
            setBoard(newBoard);
        }
    };
    return (
        <div>
            <div>
                <h1>MENU</h1>
            </div>
            {board.map((row, rowId) => (
                <div className="flex" key={rowId}>
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
