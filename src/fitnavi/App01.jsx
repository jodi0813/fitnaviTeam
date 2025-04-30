import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Coach from "./Coach/Coach";
import CenterMap from "./Center/CenterMap";
import Article from "./Article/Article";
import Center from "./Center/Center";
import CoachIntro from "./CoachIntro/Coachintro";
import MemberList from "./MemberList/MemberList";

function App() {
  return (
    <>
      <div className="wrap">
        <Navbar />
        <Routes>
          <Route path="/coach" element={<Coach />}></Route>
          <Route path="/centerMap" element={<CenterMap />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/center" element={<Center />}></Route>
          <Route path="/coachintro" element={<CoachIntro />}></Route>
          <Route path="/memberlist" element={<MemberList />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
