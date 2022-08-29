export const checkWinner = (board: string[][]) => {
    //Rows
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != "-") {
        return true;
    }
    if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != "-") {
        return true;
    }
    if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != "-") {
        return true;
    }
    //Cols
    if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != "-") {
        return true;
    }
    if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != "-") {
        return true;
    }
    if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != "-") {
        return true;
    }
    //Diags
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "-") {
        return true;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != "-") {
        return true;
    }
};

export const checkDraw = (board: string[][]): boolean => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === "-") {
                return false;
            }
        }
    }
    return true;
};
