import { PIECE } from "../components/Board/boardLogic";

export function hardAi(board: PIECE[][], aiPiece: PIECE) {
    const oppPiece = aiPiece === PIECE.X ? PIECE.O : PIECE.X;
    return analyzeBoard(board, aiPiece, oppPiece);
}

function analyzeBoard(board: PIECE[][], aiPiece: PIECE, oppPiece: PIECE) {
    let row;
    let col;
    ({ row, col } = checkForWin(board, aiPiece));
    if (row === undefined || col === undefined) {
        ({ row, col } = checkForWin(board, oppPiece));
    }
    if (row === undefined || col === undefined) {
        row = getRandomMove();
        col = getRandomMove();
    }
    console.log(`${board}`);
    while (board[row][col] !== PIECE.EMPTY) {
        row = getRandomMove();
        col = getRandomMove();
    }
    console.log(`HARD AI CHOSE: ROW - ${row}, COL - ${col}`);
    return { row, col };
}

function checkForWin(board: PIECE[][], aiPiece: PIECE) {
    let row;
    let col;
    let count = 0;
    for (let i = 0; i < 3; i++) {
        //rows
        if (
            board[i][count] === aiPiece &&
            board[i][count + 1] === aiPiece &&
            board[i][count + 2] === PIECE.EMPTY
        ) {
            row = i;
            col = count + 2;
        }
        if (
            board[i][count] === PIECE.EMPTY &&
            board[i][count + 1] === aiPiece &&
            board[i][count + 2] === aiPiece
        ) {
            row = i;
            col = count;
        }
        if (
            board[i][count] === aiPiece &&
            board[i][count + 1] === PIECE.EMPTY &&
            board[i][count + 2] === aiPiece
        ) {
            row = i;
            col = count + 1;
        }
        //cols
        if (
            board[count][i] === aiPiece &&
            board[count + 1][i] === aiPiece &&
            board[count + 2][i] === PIECE.EMPTY
        ) {
            row = count + 2;
            col = i;
        }
        if (
            board[count][i] === PIECE.EMPTY &&
            board[count + 1][i] === aiPiece &&
            board[count + 2][i] === aiPiece
        ) {
            row = count;
            col = i;
        }
        if (
            board[count][i] === aiPiece &&
            board[count + 1][i] === PIECE.EMPTY &&
            board[count + 2][i] === aiPiece
        ) {
            row = count + 1;
            col = i;
        }
        //diag 1
        if (
            board[count][count] === aiPiece &&
            board[count + 1][count + 1] === aiPiece &&
            board[count + 2][count + 2] === PIECE.EMPTY
        ) {
            row = count + 2;
            col = count + 2;
        }
        if (
            board[count][count] === aiPiece &&
            board[count + 1][count + 1] === PIECE.EMPTY &&
            board[count + 2][count + 2] === aiPiece
        ) {
            row = count + 1;
            col = count + 1;
        }
        if (
            board[count][count] === PIECE.EMPTY &&
            board[count + 1][count + 1] === aiPiece &&
            board[count + 2][count + 2] === aiPiece
        ) {
            row = count;
            col = count;
        }
        //diag 2
        if (
            board[count][count + 2] === aiPiece &&
            board[count + 1][count + 1] === aiPiece &&
            board[count + 2][count] === PIECE.EMPTY
        ) {
            row = count + 2;
            col = count;
        }
        if (
            board[count][count + 2] === aiPiece &&
            board[count + 1][count + 1] === PIECE.EMPTY &&
            board[count + 2][count] === aiPiece
        ) {
            row = count + 1;
            col = count + 1;
        }
        if (
            board[count][count + 2] === aiPiece &&
            board[count + 1][count + 1] === aiPiece &&
            board[count + 2][count] === PIECE.EMPTY
        ) {
            row = count;
            col = count + 2;
        }
    }
    return { row: row, col: col };
}

function getRandomMove() {
    return Math.floor(Math.random() * 3);
}
