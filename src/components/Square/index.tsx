import React from "react";

interface props {
    row: number;
    col: number;
    mark: string;
    handlePlacePiece: any;
}

const index = ({ row, col, mark, handlePlacePiece }: props) => {
    return (
        <div
            className="bg-slate-800 h-36 w-36 m-2 rounded-md shadow-[0px_8px_0px_0px] shadow-black text-center flex justify-center items-center text-6xl"
            onClick={() => handlePlacePiece(row, col, mark)}
        >
            {mark !== "-" ? <p>{mark}</p> : ""}
        </div>
    );
};

export default index;
