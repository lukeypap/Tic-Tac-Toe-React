export function easyAi(board: any, mark: string) {
    const row = Math.floor(Math.random() * 3);
    const col = Math.floor(Math.random() * 3);
    board[row][col] = mark;
    return board;
}
