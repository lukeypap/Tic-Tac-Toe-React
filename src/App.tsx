import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-primary w-screen h-screen font-semibold text-gray-200 flex justify-center items-center flex-col font-body">
            <Game />
            <Footer />
        </div>
    );
}

export default App;
