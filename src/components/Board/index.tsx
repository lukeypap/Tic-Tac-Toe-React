import React, { useEffect, useState } from "react";
import { easyAi } from "../../ai/easy";
import { hardAi } from "../../ai/hard";
import Square from "../Square";
import { checkDraw, checkWinner, DIFFICULTY, PIECE } from "./boardLogic";
import Menu from "../Menu";
import Stats from "../Stats";
import { minimaxAi } from "../../ai/minimax";

interface props {
    gameType: "AI" | "HUMAN";
    selectedPiece: PIECE;
    startingPlayer: PIECE;
    difficulty: DIFFICULTY | null;
    setEndScreenOpen: any;
    exitGame: boolean;
    playAgain: boolean;
    winLoss: { xWin: number; xLoss: number; oWin: number; oLoss: number; draw: number };
    setWinLoss: any;
}

const index = ({
    gameType,
    selectedPiece,
    startingPlayer,
    difficulty,
    setEndScreenOpen,
    exitGame,
    playAgain,
    winLoss,
    setWinLoss,
}: props) => {
    const [board, setBoard] = useState(Array(3).fill(Array(3).fill(PIECE.EMPTY)));
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer);
    const [aiPiece, setAiPiece] = useState(selectedPiece === PIECE.O ? PIECE.X : PIECE.O);
    const [gameOver, setGameOver] = useState(false);
    const [checkingMove, setCheckingMove] = useState(true);
    const [resetGame, setResetGame] = useState(false);
    const [endStates, setEndStates] = useState(0);

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
            setCurrentPlayer(currentPlayer === PIECE.X ? PIECE.O : PIECE.X);
        }
    };

    useEffect(() => {
        if (resetGame || playAgain) {
            setBoard(Array(3).fill(Array(3).fill(PIECE.EMPTY)));
            setCurrentPlayer(startingPlayer);
            setGameOver(false);
            setResetGame(false);
        }
    }, [resetGame, exitGame, playAgain]);

    useEffect(() => {
        const isWinner = checkWinner(board);
        const isDraw = checkDraw(board);

        if (isWinner || isDraw) {
            if (isWinner) {
                console.log(`Winner is: ${isWinner}`);
                if (isWinner === PIECE.X) {
                    setWinLoss({ ...winLoss, xWin: winLoss.xWin + 1, oLoss: winLoss.oLoss + 1 });
                } else {
                    setWinLoss({ ...winLoss, xLoss: winLoss.xLoss + 1, oWin: winLoss.oWin + 1 });
                }
            } else if (isDraw) {
                console.log("Draw");
                setWinLoss({ ...winLoss, draw: winLoss.draw + 1 });
            }
            setGameOver(true);
            setEndScreenOpen({ open: true, endState: isWinner ? isWinner : "Draw" });
        } else {
            setCheckingMove(false);
        }
    }, [board]);

    useEffect(() => {
        if (!checkingMove && gameType === "AI" && !gameOver && currentPlayer === aiPiece) {
            if (difficulty === DIFFICULTY.EASY) {
                console.log(
                    `SETTING AI PIECE CK:${checkingMove}, GO:${gameOver}, CP:${currentPlayer}, ${aiPiece}`
                );
                const { row, col } = easyAi(board);
                handlePlacePiece(row, col);
            } else if (difficulty === DIFFICULTY.HARD) {
                const { row, col } = hardAi(board, aiPiece);
                handlePlacePiece(row, col);
            } else {
                const { row, col, endStates } = minimaxAi(board, aiPiece);
                setEndStates(endStates);
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
                <Stats winLoss={winLoss} endStates={endStates} difficulty={difficulty} />
            </div>
        </div>
    );
};

export default index;
