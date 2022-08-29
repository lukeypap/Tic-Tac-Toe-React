import Header from "./components/Header";
import Game from "./components/Game";

function App() {
    return (
        <div className="bg-slate-900 w-screen h-screen font-semibold text-gray-200 flex justify-center items-center flex-col">
            <Header />
            <Game />
            <p>Footer</p>
        </div>
    );
}

export default App;
