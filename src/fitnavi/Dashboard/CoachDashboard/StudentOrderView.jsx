import "../UserDashboard/MyOrderView.scss";
import { useState } from "react";
import BookingPopup from "../UserDashboard/Popup/BookingPopup";
import ReviewPopup from "../UserDashboard/Popup/ReviewPopup";
import ListPopup from "../UserDashboard/Popup/ListPopup";

/* 教練後台>學員訂單>訂單總覽 */
function StudentOrderView() {
  const orderview = [
    {
      no: "1",
      id: "#00596",
      student: "王明華",
      date: "2025/01/01",
      deadline: "2025/09/28",
      totalClasses: "20堂",
      finishClasses: "10堂",
      lastClasses: "10堂",
    },
    {
      no: "2",
      id: "#00620",
      student: "林聰明",
      date: "2025/01/02",
      deadline: "2025/05/20",
      totalClasses: "10堂",
      finishClasses: "3堂",
      lastClasses: "7堂",
    },
  ];
  /* 控制按鈕彈窗 */
  const [popupType, setPopupType] = useState(null);
  const handleOpenList = () => setPopupType("list"); //訂單編號
  const handleClosePopup = () => setPopupType(null);
  return (
    <>
      <div className="orderview-table">
        {/* 標題 */}
        <div className="orderview-table-header">
          <span>No</span>
          <span>訂單編號</span>
          <span>學員名稱</span>
          <span>購買日期</span>
          <span>使用期限</span>
          <span>總堂數</span>
          <span>已完成</span>
          <span>剩餘堂數</span>
          <span>問題反映</span>
        </div>
        {/* 表格內容 */}
        {orderview.map((orderview, index) => (
          <div className="table-row" key={index}>
            {/* 序號 */}
            <span>{orderview.no}</span>
            {/* 訂單編號 */}
            <span onClick={handleOpenList} className="order-id">
              {orderview.id}
            </span>
            {/* 講師名稱 */}
            <span>{orderview.student}</span>
            {/* 購買日期 */}
            <span>{orderview.date}</span>
            {/*使用期限*/}
            <span>{orderview.deadline}</span>
            {/* 總堂數*/}
            <span>{orderview.totalClasses}</span>
            {/* 已完成 */}
            <span>{orderview.finishClasses}</span>
            {/* 剩餘 */}
            <span>{orderview.lastClasses}</span>

            {/* 問題反映 */}
            <span>
              <button className="btn-outline">聯絡客服</button>
            </span>
          </div>
        ))}
      </div>
      {/* 根據 popupType 顯示彈窗 */}
      {popupType === "list" && <ListPopup onClose={handleClosePopup} />}
    </>
  );
}
export default StudentOrderView;
