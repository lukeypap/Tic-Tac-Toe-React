import { checkDraw } from "./../components/Board/boardLogic";
import { PIECE } from "../components/Board/boardLogic";
import { checkWinner } from "../components/Board/boardLogic";

let endStates = 0;

export function minimaxAi(board: string[][], aiMark: PIECE) {
    let newBoard = JSON.parse(JSON.stringify(board));
    endStates = 0;
    const oppMark = aiMark === PIECE.X ? PIECE.O : PIECE.X;
    let { row, col } = findBestMove(newBoard, aiMark, oppMark);
    return { row, col, endStates };
}

function findBestMove(board: string[][], aiMark: PIECE, oppMark: PIECE) {
    let bestEndMoveValue = -1000;
    let row = 4;
    let col = 4;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === PIECE.EMPTY) {
                board[i][j] = aiMark;
                let currentEndMoveValue = minimax(board, 0, false, aiMark, oppMark);
                board[i][j] = PIECE.EMPTY;
                if (currentEndMoveValue > bestEndMoveValue) {
                    row = i;
                    col = j;
                    bestEndMoveValue = currentEndMoveValue;
                }
            }
        }
    }
    return { row, col };
}

function evaluate(board: string[][], aiMark: PIECE, oppMark: PIECE) {
    if (checkWinner(board) === aiMark) {
        return +10;
    } else if (checkWinner(board) === oppMark) {
        return -10;
    }
    return 0;
}

function minimax(board: string[][], depth: number, isMax: boolean, aiMark: PIECE, oppMark: PIECE) {
    const score = evaluate(board, aiMark, oppMark);
    let best;
    if (score === 10 || score === -10) {
        endStates = endStates + 1;
        return score;
    } else if (checkDraw(board)) {
        endStates = endStates + 1;
        return 0;
    }

    if (isMax) {
        best = -Infinity;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === PIECE.EMPTY) {
                    board[i][j] = aiMark;
                    best = Math.max(best, minimax(board, depth - 1, !isMax, aiMark, oppMark));
                    board[i][j] = PIECE.EMPTY;
                }
            }
        }
    } else {
        best = Infinity;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === PIECE.EMPTY) {
                    board[i][j] = oppMark;
                    best = Math.min(best, minimax(board, depth - 1, !isMax, aiMark, oppMark));
                    board[i][j] = PIECE.EMPTY;
                }
            }
        }
    }
    return best;
}
