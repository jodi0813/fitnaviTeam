import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Coach from "./Coach/Coach";
import Nutritionist from "./Coach/Nutritionist";
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
import JoinusStep1 from "./JoinusStep1/JoinusStep1";
import JoinusStep2 from "./JoinusStep2/JoinusStep2";
import "./reset.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Coach />} />
          <Route path="/coach" element={<Coach />}/>
          <Route path="/nutritionist"element={<Nutritionist/>}/>
          <Route path="/centerMap" element={<CenterMap/>}/>
          <Route path="/allarticle" element={<Allarticle />} />
          <Route path="/article/:id" element={<Article />} />
<<<<<<< HEAD
          <Route path="/center" element={<Center />}></Route>
          <Route path="/coachintro" element={<CoachIntro />}></Route>
          <Route path="/memberlist" element={<MemberList />}></Route>
          <Route path="/JoinusStep2" element={<JoinusStep2 />}></Route>
=======
          <Route path="/center" element={<Center />}/>
          <Route path="/coachintro" element={<CoachIntro />}/>
          <Route path="/memberlist" element={<MemberList />}/>
          <Route path="/MemberSignup" element={<MemberSignup />}/>
>>>>>>> d36f3755d5692a33795f25bd27e7205c9e271993
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
