export function easyAi(board: any) {
    let col = getRandomMove();
    let row = getRandomMove();
    while (board[row][col] !== "-") {
        col = getRandomMove();
        row = getRandomMove(); //Math.floor(Math.random() * 3);
    }
    return { row, col };
}

function getRandomMove() {
    return Math.floor(Math.random() * 3);
}
