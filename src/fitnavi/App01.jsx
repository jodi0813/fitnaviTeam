import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Coach from "./Coach/Coach";
import Center from "./Center/Center";
import Article from "./Article/Article";

function App() {
    return (
        <>
            <div className="wrap">
                <Navbar />
                <Routes>
                    <Route path="/coach" element={<Coach/>}></Route>
                    <Route path="/center" element={<Center />}></Route>
                    <Route path="/article" element={<Article />}></Route>
                </Routes>
            </div>
        </>
    )

}export default App