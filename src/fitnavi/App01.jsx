import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Personal from "./Personal/Personal";
import Center from "./Center/Center";

function App() {
    return (
        <>
            <div className="wrap">
                <Navbar />
                <Routes>
                    <Route path="/personal" element={<Personal />}></Route>
                    <Route path="/center" element={<Center />}></Route>
                </Routes>
            </div>
        </>
    )

}export default App