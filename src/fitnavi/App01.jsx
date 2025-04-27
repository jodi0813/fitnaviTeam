import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Coach from "./Coach/Coach";
import CenterMap from "./Center/CenterMap";
import Article from "./Article/Article";

function App() {
    return (
        <>
            <div className="wrap">
                <Navbar />
                <Routes>
                    <Route path="/coach" element={<Coach/>}></Route>
                    <Route path="/centerMap" element={<CenterMap />}></Route>
                    <Route path="/article" element={<Article />}></Route>
                </Routes>
            </div>
        </>
    )

}export default App