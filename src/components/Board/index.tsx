import React, { useState } from "react";
import Square from "../Square";

const index = () => {
    const [board, setBoard] = useState([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ]);
    console.log(board);
    return (
        <div>
            <div>
                <h1>MENU</h1>
            </div>
            {board.map((sq, id) => (
                <div className="flex">
                    <Square />
                    <Square />
                    <Square />
                </div>
            ))}
            <div>
                <h1>STATS</h1>
            </div>
        </div>
    );
};

export default index;
