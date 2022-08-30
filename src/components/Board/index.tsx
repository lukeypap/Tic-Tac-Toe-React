import React, { useEffect, useState } from "react";
import { easyAi } from "../../ai/easy";
import { hardAi } from "../../ai/hard";
import Square from "../Square";
import { checkDraw, checkWinner, DIFFICULTY, PIECE } from "./boardLogic";
import Menu from "../Menu";
import Modal from "../Modal";

interface props {
    gameType: "AI" | "HUMAN";
    selectedPiece: PIECE;
    startingPlayer: PIECE;
    difficulty: DIFFICULTY | null;
    setEndScreenOpen: any;
}

const index = ({
    gameType,
    selectedPiece,
    startingPlayer,
    difficulty,
    setEndScreenOpen,
}: props) => {
    const [board, setBoard] = useState(Array(3).fill(Array(3).fill(PIECE.EMPTY)));
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer);
    const [aiPiece, setAiPiece] = useState(selectedPiece === PIECE.O ? PIECE.X : PIECE.O);
    const [gameOver, setGameOver] = useState(false);
    const [checkingMove, setCheckingMove] = useState(false);
    const [resetGame, setResetGame] = useState(false);

    const handlePlacePiece = (row: number, col: number) => {
        let mark = board[row][col];
        if (mark === PIECE.EMPTY) {
            setCheckingMove(true);
            setBoard((board) =>
                board.map((boardRow: PIECE[], i: number) =>
                    i === row
                        ? boardRow.map((boardCol: PIECE, j: number) =>
                              j === col ? currentPlayer : boardCol
                          )
                        : boardRow
                )
            );
        }
    };

    useEffect(() => {
        if (resetGame) {
            setBoard(Array(3).fill(Array(3).fill(PIECE.EMPTY)));
            setCurrentPlayer(startingPlayer);
            setGameOver(false);
            setResetGame(false);
        }
    }, [resetGame]);

    useEffect(() => {
        const isWinner = checkWinner(board);
        const isDraw = checkDraw(board);

        if (isWinner || isDraw) {
            if (isWinner) {
                console.log(`Winner is: ${isWinner}`);
            } else if (isDraw) {
                console.log("Draw");
            }
            setGameOver(true);
            setEndScreenOpen({ open: true, endState: isWinner ? isWinner : "Draw" });
        } else {
            setCurrentPlayer((current) => (current === PIECE.X ? PIECE.O : PIECE.X));
            setCheckingMove(false);
        }
    }, [board]);

    useEffect(() => {
        if (!checkingMove && gameType === "AI" && !gameOver && currentPlayer === aiPiece) {
            if (difficulty === DIFFICULTY.EASY) {
                const { row, col } = easyAi(board);
                handlePlacePiece(row, col);
            } else if (difficulty === DIFFICULTY.HARD) {
                const { row, col } = hardAi(board, aiPiece);
                handlePlacePiece(row, col);
            } else {
                const { row, col } = easyAi(board);
                handlePlacePiece(row, col);
            }
        }
    }, [checkingMove, currentPlayer, aiPiece, gameType, gameOver, board]);

    return (
        <div className="text-center">
            <div>
                <Menu
                    currentPlayer={currentPlayer}
                    resetGame={resetGame}
                    setResetGame={setResetGame}
                />
            </div>

            {board.map((row, rowId) => (
                <div className="flex justify-center" key={rowId}>
                    {row.map((sq: PIECE, colId: number) => (
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
