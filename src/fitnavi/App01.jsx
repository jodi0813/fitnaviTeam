import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Coach from "./Coach/Coach";
import CenterMap from "./Center/CenterMap";
import Article from "./Article/Article";
import Allarticle from "./Allarticle/Allarticle";
import Center from "./Center/Center";
import CoachIntro from "./CoachIntro/Coachintro";
import Footer from "./Footer/Footer";
import MemberList from "./MemberList/MemberList";
import Joinus from "./Joinus/Joinus";
import JoinusSuccess from "./JoinusSuccess/JoinusSuccess";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import MemberLogin from "./MemberLogin/MemberLogin";
import SetAccountPassword from "./SetAccountPassword/SetAccountPassword";
import "./reset.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <Navbar />
        <Routes>
        <Route path="/" element={<Coach />} />
          <Route path="/coach" element={<Coach />}></Route>
          
          <Route path="/centerMap" element={<CenterMap />}></Route>
          <Route path="/allarticle" element={<Allarticle />} />  {/* 文章列表頁 */}
          {/* <Route path="/allarticle/:card1" element={<Article />} />  */}
          <Route path="/center" element={<Center />}></Route>
          <Route path="/coachintro" element={<CoachIntro />}></Route>
          <Route path="/memberlist" element={<MemberList />}></Route>
          <Route path="/SetAccountPassword" element={<SetAccountPassword />}></Route>
        </Routes>
        <Footer/>
        
      </div>
    </>
  );
}
export default App;
