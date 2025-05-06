import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Coach from "./Coach/Coach";
import Dietitian from "./Coach/Dietitian";
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
import LoginSuccess from "./LoginSuccess/LoginSuccess";
import MemberSignup from "./MemberSignup/MemberSignup";
import "./reset.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Coach />} />
          <Route path="/coach" element={<Coach />}/>
          <Route path="/dietitian"element={<Dietitian/>}/>
          <Route path="/centerMap" element={<CenterMap/>}/>
          <Route path="/allarticle" element={<Allarticle />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/center" element={<Center />}/>
          <Route path="/coachintro" element={<CoachIntro />}/>
          <Route path="/memberlist" element={<MemberList />}/>
          <Route path="/MemberSignup" element={<MemberSignup />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
