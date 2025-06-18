import { useState } from "react";
import "./CoachDashboardList.scss";
import CoachInfo from "./CoachInfo";
import CoachOrder from "./CoachOrder";
import StudentOrder from "./StudentOrder";
import CourseManagement from "./CourseManagement";
import MainTitle from "../../../components/Title/MainTitle";
import Articlemanagement from "./Articlemanagement";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function CoachDashboardList() {
  const [memberTab, setMemberTab] = useState("coachInfo");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <>
      <div className="coachDashboardAll">
        <MainTitle title1="會員管理" title2="在這裡管理您的課程及文章" />
        <div className="coachDashboardList">
          {/* 左側選單 */}
          <div className="coachDashboardBotton">
            {/* 一般用戶 */}
            <div className="coachDashboardBox">
              <div className="coachDashboardBox1">
                <button
                  className={
                    memberTab === "coachInfo"
                      ? "memberBt memberActive"
                      : "memberBt"
                  }
                  onClick={() => setMemberTab("coachInfo")}
                >
                  個人資訊
                </button>
                <button
                  className={
                    memberTab === "coachOrder"
                      ? "memberBt memberActive"
                      : "memberBt"
                  }
                  onClick={() => setMemberTab("coachOrder")}
                >
                  我的訂單
                </button>
                <button
                  className={
                    memberTab === "studentOrder"
                      ? "memberBt memberActive"
                      : "memberBt"
                  }
                  onClick={() => setMemberTab("studentOrder")}
                >
                  學員訂單
                </button>
                <button
                  className={
                    memberTab === "courseManagement"
                      ? "memberBt memberActive"
                      : "memberBt"
                  }
                  onClick={() => setMemberTab("courseManagement")}
                >
                  課程管理
                </button>
                <button
                  className={
                    memberTab === "articlemanagement"
                      ? "memberBt memberActive"
                      : "memberBt"
                  }
                  onClick={() => setMemberTab("articlemanagement")}
                >
                  文章管理
                </button>
                {localStorage.getItem("token") && (
                  <button onClick={handleLogout} className="memberBt logoutBt">登出 <MdOutlineLogout /></button>
                )}

              </div>

              <div className="list-illustration">
                <div className="list-illustration1">
                  <img src="./images/coachnutri.png" alt="" />
                </div>
                <div className="iAmCoach">
                  <span className="iAmCoach1">我是</span>
                  <span className="iAmCoach2">教練/營養師</span>
                </div>
              </div>
            </div>
          </div>

          {memberTab === "coachInfo" && <CoachInfo />}
          {memberTab === "coachOrder" && <CoachOrder />}
          {memberTab === "studentOrder" && <StudentOrder />}
          {memberTab === "courseManagement" && <CourseManagement />}
          {memberTab === "articlemanagement" && <Articlemanagement />}
        </div>
      </div>
    </>
  );
}
export default CoachDashboardList;
