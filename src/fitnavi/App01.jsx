import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import ArticleSection from "./HomePage/ArticleSection/ArticleSection";
import Coach from "./Coach/Coach";
import MyFavorite from "./MyFavorite/MyFavorite";
import Nutritionist from "./Coach/Nutritionist";
import CenterMap from "./Center/CenterMap";
import Article from "./Article/Article";
import Allarticle from "./Allarticle/Allarticle";
import Center from "./Center/Center";
import CoachIntro from "./CoachIntro/Coachintro";
import PopupWindow1 from "./CoachIntro/PopupWindow/PopupWindow1";
import PopupWindow2 from "./CoachIntro/PopupWindow/PopupWindow2";
import PopupWindow3 from "./CoachIntro/PopupWindow/PopupWindow3";
import PopupWindow4 from "./CoachIntro/PopupWindow/PopupWindow4";
import Footer from "./Footer/Footer";
import MemberList from "./Dashboard/UserDashboard/MemberList";
import Joinus from "./Joinus/Joinus";
import JoinusStep1 from "./Joinus/JoinusStep1";
import JoinusStep2 from "./Joinus/JoinusStep2";
import JoinusStep3 from "./Joinus/JoinusStep3";
import JoinusStep4 from "./Joinus/JoinusStep4";
import JoinusLoading from "./Joinus/JoinusLoading";
import JoinusSuccess from "./Joinus/JoinusSuccess";
import NutriJoinusStep2 from "./Joinus/NutriJoinusStep2"
import NutriJoinusStep3 from "./Joinus/NutriJoinusStep3"
import NutriJoinusStep4 from "./Joinus/NutriJoinusStep4"
import ForgetPassword from "./Member/ForgetPassword";
import MemberLogin from "./Member/MemberLogin";
import MemberSignup from "./Member/MemberSignup";
import SetAccountPassword from "./Member/SetAccountPassword";
import SignupSuccess from "./Member/SignupSuccess";
import NutriIntro from "./NutriIntro/NutriIntro";
import "./reset.scss";
import CoachDashboardList from "./Dashboard/CoachDashboard/CoachDashboardList";
import ScrollToTop from "../components/ScrollToTop";



function App() {
  return (
    <>
    <ScrollToTop/>
      <div className="wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ArticleSection" element={<ArticleSection />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/myfavorite" element={<MyFavorite />} />
          <Route path="/nutritionist" element={<Nutritionist />} />
          <Route path="/centerMap" element={<CenterMap />} />
          <Route path="/allarticle" element={<Allarticle />} />
          <Route path="/article" element={<Article />} />
          <Route path="/center" element={<Center />}></Route>
          <Route path="/coachintro" element={<CoachIntro />}></Route>
            <Route path="/PopupWindow1" element={<PopupWindow1 />}></Route>
            <Route path="/PopupWindow2" element={<PopupWindow2 />}></Route>
            <Route path="/PopupWindow3" element={<PopupWindow3/>}></Route>
            <Route path="/PopupWindow4" element={<PopupWindow4 />}></Route>
          <Route path="/NutriIntro" element={<NutriIntro />}></Route>
          <Route path="/memberlist" element={<MemberList />}></Route>
          <Route path="/memberlogin" element={<MemberLogin />}></Route>
          <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
          <Route path="/membersignup" element={<MemberSignup />}></Route>
          <Route path="/SetAccountPassword" element={<SetAccountPassword />}></Route>
          <Route path="/SignupSuccess" element={<SignupSuccess />}></Route>
          <Route path="/CoachDashboardList" element={<CoachDashboardList/>}></Route>
          <Route path="/Joinus" element={<Joinus />}></Route>
          <Route path="/JoinusStep1/" element={<JoinusStep1/>} />
          <Route path="/JoinusStep2" element={<JoinusStep2 />} />
          <Route path="/JoinusStep3" element={<JoinusStep3 />} />
          <Route path="/JoinusStep4" element={<JoinusStep4 />} />
          <Route path="/JoinusLoading" element={<JoinusLoading />} />
          <Route path="/JoinusSuccess" element={<JoinusSuccess />} />
          <Route path="/NutriJoinusStep2" element={<NutriJoinusStep2 />} />
          <Route path="/NutriJoinusStep3" element={<NutriJoinusStep3 />} />
          <Route path="/NutriJoinusStep4" element={<NutriJoinusStep4/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
