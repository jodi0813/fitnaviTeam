import UserOrder from "./UserOrder";
import MyInfo from "./MyInfo";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./MemberList.scss";

function MemberList() {
  const [memberTab, setMemberTab] = useState("myinfo");
  return (
    <>
      <div id="memberListAll">
        <div className="centerHead">
          <h2>會員管理</h2>
          <h3>在這裡管理您的課程及文章</h3>
        </div>
        <div className="memberList">
          {/* 左側選單 */}
          <div className="memberBotton">
            {/* 一般用戶 */}
            <div className="memberListBox personalList">
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
                我的頁面
              </button>
              <p>
                我是
                <br />
                一般用戶
              </p>
              <img src="" alt="" />
            </div>
            {/* 教練/營養師 */}
            <div className="memberListBox studentList">
              <button>學員訂單</button>
              <button>課程管理</button>
              <button>文章管理</button>
              <p>
                我是
                <br />
                教練/營養師
              </p>
              <img src="" alt="" />
            </div>
          </div>
          {/* 一般用戶 */}
          {/* 個人資訊 */}
          {memberTab === "myinfo" && <MyInfo />}
          {/* 訂單管理 */}
          {memberTab === "useOrder" && <UserOrder />}
          {/* <div>
            <UserOrder />
          </div> */}
        </div>
      </div>
    </>
  );
}
export default MemberList;
