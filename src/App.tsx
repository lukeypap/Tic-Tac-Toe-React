import Game from "./components/Game";

function App() {
    return (
        <div className="bg-primary w-screen h-screen font-semibold text-gray-200 flex justify-center items-center flex-col font-body">
            <Game />
            <p>Footer</p>
        </div>
    );
}

export default App;
