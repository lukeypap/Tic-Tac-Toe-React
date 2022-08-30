import React from "react";

interface props {
    endScreenOpen: { open: boolean; endState: string };
}

const index = ({ endScreenOpen }: props) => {
    return (
        <div
            className={`w-screen h-screen absolute bg-black flex justify-center bg-opacity-50 items-center animate-fade`}
        >
            <div className="md:h-[20vh] md:w-[50vw] h-[40vw] w-[80vw] rounded-lg bg-secondary animate-fadeModal flex flex-col justify-center items-center">
                <div className="flex space-x-2">
                    <p className="">{endScreenOpen.endState}</p>
                    <p>{endScreenOpen.endState !== "Draw" ? "Wins!" : ""}</p>
                </div>
                <div className="flex">
                    <button className="bg-lightTile px-4 py-2 m-2 rounded-md shadow-[0px_4px_0px_0px] shadow-[#4d575c] flex justify-center items-center text-[#1F3540] hover:bg-[#bcd5e0]">
                        Exit
                    </button>
                    <button className="bg-lightTile px-4 py-2 m-2 rounded-md shadow-[0px_4px_0px_0px] shadow-[#4d575c] flex justify-center items-center text-[#1F3540] hover:bg-[#bcd5e0]">
                        Play again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default index;
