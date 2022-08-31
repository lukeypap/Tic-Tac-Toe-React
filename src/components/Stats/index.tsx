import React from "react";

interface props {
    winLoss: { xWin: number; xLoss: number; oWin: number; oLoss: number; draw: number };
}

const index = ({ winLoss }: props) => {
    return (
        <div className="flex h-12 md:h-16 lg:h-16 justify-center items-center mt-6 text-gray-800 text-xs">
            <div className="w-28 md:w-32 lg:w-40 m-2 h-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center flex-col">
                <div className="flex">
                    <p className="font-logo mr-1">X</p>
                    <p>(Win/Loss)</p>
                </div>
                <p className="text-2xl font-logo">{winLoss.xWin}</p>
            </div>
            <div className="w-28 md:w-32 lg:w-40 m-2 h-full rounded-xl bg-lightTile flex justify-center items-center flex-col">
                <p>Draws</p>
                <p className="text-2xl font-logo">{winLoss.draw}</p>
            </div>
            <div className="w-28 md:w-32 lg:w-40 m-2 h-full rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center flex-col">
                <p>O (Win/Loss)</p>
                <p className="text-2xl font-logo">{winLoss.oWin}</p>
            </div>
        </div>
    );
};

export default index;
