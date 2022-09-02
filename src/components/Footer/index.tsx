import React from "react";

const index = () => {
    return (
        <div className="font-light flex justify-between text-slate-400 lg:w-[530px] md:w-[60vw] w-screen text-xs md:text-md mb-4 px-4">
            <div>
                <p>
                    Made by{" "}
                    <a href="https://lukeypap.github.io/" className="underline text-slate-300">
                        Luke.
                    </a>
                </p>
            </div>
            <div>
                <p>Design inspired by FrontendMentor</p>
            </div>
        </div>
    );
};

export default index;
