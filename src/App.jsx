import Home from "./Pages/Home";
import Designs from "./Pages/Designs";
import ScrollToHash from "./Components/ScrollToHash";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <ScrollToHash />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/designs" element={<Designs />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
