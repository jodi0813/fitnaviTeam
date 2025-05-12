// import UserOrder from "./UserOrder";
// import MyInfo from "./MyInfo";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./CoachDashboardList.scss";

function CoachDashboardList() {
  const [memberTab, setMemberTab] = useState("myinfo");
  return (
    <>
      <div className="coachDashboardAll">
        <div className="centerHead">
          <h2>會員管理</h2>
          <h3>在這裡管理您的課程及文章</h3>
        </div>

        <div className="memberList">
          {/* 左側選單 */}
          <div className="memberBotton">
            {/* 一般用戶 */}
            <div className="coachDashboardBox">
              <button
                className={memberTab === "myinfo" ? "memberBt memberActive" : "memberBt"}
                onClick={() => setMemberTab("myinfo")}
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
              </button>
              <div className="list-illustration">
                <div className="list-illustration1">  
                <img src="/images/coachnutri.png" alt=""  />
                </div>
                <div className="iAmCoach">

                  <span>我是</span><span>教練/營養師</span></div>
              </div></div>
          </div>

          {/*         
          {memberTab === "myinfo" && <MyInfo />}
          {/* 訂單管理按鈕 */}
          {memberTab === "useOrder" && <UserOrder />}

        </div>
      </div>
    </>
  );
}
export default CoachDashboardList;
