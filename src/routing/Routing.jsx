import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../fitnavi/Navbar/Navbar";
import ArticleSection from "../fitnavi/HomePage/ArticleSection/ArticleSection";
import Coach from "../fitnavi/Coach/Coach";
import MyFavorite from "../fitnavi/MyFavorite/MyFavorite";
import Nutritionist from "../fitnavi/Coach/Nutritionist";
import CenterMap from "../fitnavi/Center/CenterMap";
import Article from "../fitnavi/Article/Article";
import Allarticle from "../fitnavi/Allarticle/Allarticle";
import Center from "../fitnavi/Center/Center";
import CoachIntro from "../fitnavi/CoachIntro/Coachintro";
import PopupWindow1 from "../fitnavi/CoachIntro/PopupWindow/PopupWindow1";
import PopupWindow2 from "../fitnavi/CoachIntro/PopupWindow/PopupWindow2";
import PopupWindow3 from "../fitnavi/CoachIntro/PopupWindow/PopupWindow3";
import PopupWindow4 from "../fitnavi/CoachIntro/PopupWindow/PopupWindow4";
import Footer from "../fitnavi/Footer/Footer";
import MemberList from "../fitnavi/Dashboard/UserDashboard/MemberList";
import Joinus from "../fitnavi/Joinus/Joinus";
import JoinusCarousel from "../fitnavi/Joinus/JoinusCarousel/JoinusCarousel";
import NutriJoinusCarousel from "../fitnavi/Joinus/JoinusCarousel/NutriJoinusCarousel";
import JoinusStep1 from "../fitnavi/Joinus/JoinusStep1";
import JoinusStep2 from "../fitnavi/Joinus/JoinusStep2";
import JoinusStep3 from "../fitnavi/Joinus/JoinusStep3";
import JoinusStep4 from "../fitnavi/Joinus/JoinusStep4";
import JoinusLoading from "../fitnavi/Joinus/JoinusLoading";
import JoinusSuccess from "../fitnavi/Joinus/JoinusSuccess";
import NutriJoinusStep1 from "../fitnavi/Joinus/NutriJoinusStep1";
import NutriJoinusStep2 from "../fitnavi/Joinus/NutriJoinusStep2";
import NutriJoinusStep3 from "../fitnavi/Joinus/NutriJoinusStep3";
import NutriJoinusStep4 from "../fitnavi/Joinus/NutriJoinusStep4";
import ForgetPassword from "../fitnavi/Member/ForgetPassword";
import MemberLogin from "../fitnavi/Member/MemberLogin";
import MemberSignup from "../fitnavi/Member/MemberSignup";
import SetAccountPassword from "../fitnavi/Member/SetAccountPassword";
import SignupSuccess from "../fitnavi/Member/SignupSuccess";
import NutriIntro from "../fitnavi/NutriIntro/NutriIntro";
import "../fitnavi/reset.scss";
import CoachDashboardList from "../fitnavi/Dashboard/CoachDashboard/CoachDashboardList";
// import MyOrderView from "./Dashboard/UserDashboard/MyOrderView"
import ScrollToTop from "../components/ScrollToTop";
import Home from "../fitnavi/HomePage/Home";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/memberlogin" replace />;
  }

  return children;
}

function CoachProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "coach") {
    return <Navigate to="/memberlogin" replace />;
  }

  return children;
}


function Routing() {
  return (
    <>
    
      <ScrollToTop />
      <div className="wrap">
        <Navbar />
        <Routes>          
          <Route path="/" element={<Home/>} />
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
          <Route path="/PopupWindow3" element={<PopupWindow3 />}></Route>
          <Route path="/PopupWindow4" element={<PopupWindow4 />}></Route>
          <Route path="/NutriIntro" element={<NutriIntro />}></Route>
          <Route
            path="/memberlist"
            element={
              <ProtectedRoute>
                <MemberList />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/memberlogin" element={<MemberLogin />}></Route>
          <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
          <Route path="/membersignup" element={<MemberSignup />}></Route>
          <Route path="/SetAccountPassword" element={<SetAccountPassword />}></Route>
          <Route path="/SignupSuccess" element={<SignupSuccess />}></Route>
          <Route
            path="/CoachDashboardList"
            element={
              <CoachProtectedRoute>
                <CoachDashboardList />
              </CoachProtectedRoute>
            }
          ></Route>
          <Route path="/Joinus" element={<Joinus />}></Route>
          <Route path="/JoinusCarousel" element={<JoinusCarousel />}></Route>
          <Route path="/NutriJoinusCarousel" element={<NutriJoinusCarousel />}></Route>
          <Route path="/JoinusStep1/" element={<JoinusStep1 />} />
          <Route path="/JoinusStep2" element={<JoinusStep2 />} />
          <Route path="/JoinusStep3" element={<JoinusStep3 />} />
          <Route path="/JoinusStep4" element={<JoinusStep4 />} />
          <Route path="/JoinusLoading" element={<JoinusLoading />} />
          <Route path="/JoinusSuccess" element={<JoinusSuccess />} />
          <Route path="/NutriJoinusStep1" element={<NutriJoinusStep1 />} />
          <Route path="/NutriJoinusStep2" element={<NutriJoinusStep2 />} />
          <Route path="/NutriJoinusStep3" element={<NutriJoinusStep3 />} />
          <Route path="/NutriJoinusStep4" element={<NutriJoinusStep4 />} />
          {/* <Route path="/MyOrderView " element={<MyOrderView />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default Routing;
