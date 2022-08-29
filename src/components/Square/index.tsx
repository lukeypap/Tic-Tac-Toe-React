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
            className="bg-[#1F3540] h-28 w-28 md:w-32 md:h-32 lg:w-40 lg:h-40 m-2 rounded-md shadow-[0px_8px_0px_0px] shadow-[#0F202A] flex justify-center items-center text-6xl"
            onClick={() => handlePlacePiece(row, col)}
        >
            {mark !== "-" ? (
                <p className={`${mark === "X" ? "text-[#31C4BE]" : "text-yellow-300"}`}>{mark}</p>
            ) : (
                ""
            )}
        </div>
    );
};

export default index;
