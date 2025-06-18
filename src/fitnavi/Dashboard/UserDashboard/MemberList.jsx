import UserOrder from "./UserOrder";
import MyInfo from "./MyInfo";
import { useState } from "react";
import "./MemberList.scss";
import MainTitle from "../../../components/Title/MainTitle";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

function MemberList() {
  const [memberTab, setMemberTab] = useState("myinfo");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <>
      <div id="memberListAll">
        <MainTitle title1="會員管理" title2="在這裡管理您的課程及文章" />
        <div className="memberList">
          {/* 左側選單 */}
          <div className="memberBotton">
            {/* 一般用戶 */}
            <div className="memberListBox">
              <button
                className={
                  memberTab === "myinfo" ? "memberBt memberActive" : "memberBt"
                }
                onClick={() => setMemberTab("myinfo")}
              >
                個人資訊
              </button>
              <button
                className={
                  memberTab === "useOrder"
                    ? "memberBt memberActive"
                    : "memberBt"
                }
                onClick={() => setMemberTab("useOrder")}
              >
                我的訂單
              </button>
              {localStorage.getItem("token") && (
                <button onClick={handleLogout} className="memberBt logoutBt">
                  登出 <MdOutlineLogout />
                </button>
              )}
              <img src="./images/member1.png" alt="插圖" className="member1" />
            </div>
          </div>

          {/* 個人資訊按鈕 */}
          {memberTab === "myinfo" && <MyInfo />}
          {/* 訂單管理按鈕 */}
          {memberTab === "useOrder" && <UserOrder />}
        </div>
      </div>
    </>
  );
}
export default MemberList;
