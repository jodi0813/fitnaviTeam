// import UserOrder from "./UserOrder";
// import MyInfo from "./MyInfo";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./CoachDashboardList.scss";
import MainTitle from "../../components/Title/MainTitle";

function CoachDashboardList() {
  const [memberTab, setMemberTab] = useState("myinfo");
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
                  className={memberTab === "coachInfo" ? "memberBt memberActive" : "memberBt"}
                  onClick={() => setMemberTab("coachInfo")}
                >
                  個人資訊
                </button>
                <button
                  className={memberTab === "useOrder" ? "memberBt memberActive" : "memberBt"}
                  onClick={() => setMemberTab("useOrder")}
                >
                  我的訂單
                </button>
                <button
                  className={memberTab === "useOrder" ? "memberBt memberActive" : "memberBt"}
                  onClick={() => setMemberTab("useOrder")}
                >
                  學員訂單
                </button>
                <button
                  className={memberTab === "useOrder" ? "memberBt memberActive" : "memberBt"}
                  onClick={() => setMemberTab("useOrder")}
                >
                  課程管理
                </button>
                <button
                  className={memberTab === "useOrder" ? "memberBt memberActive" : "memberBt"}
                  onClick={() => setMemberTab("useOrder")}
                >
                  文章管理
                </button></div>
              <div className="list-illustration">
                <div className="list-illustration1">
                  <img src="/images/coachnutri.png" alt="" />
                </div>
                <div className="iAmCoach">
                  <span className="iAmCoach1">我是</span><span className="iAmCoach2">教練/營養師</span></div>
              </div></div>
          </div>


          {memberTab === "coachInfo" && <CoachInfo />}

          {memberTab === "useOrder" && <UserOrder />}

        </div>
      </div>
    </>
  );
}
export default CoachDashboardList;
