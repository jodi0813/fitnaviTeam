import "./MyOrders.scss";
import { useState } from "react";
import StudentChatPopup from "./Popup/StudentChatPopup";
import ProblemPopup from "./Popup/ProblemPopup";
import ListPopup from "./Popup/ListPopup";
/* 使用者管理>我的訂單>我的預約 */
function MyOrders() {
  /* 訂單資料 */
  const orders = [
    {
      no: "1",
      id: "#00596",
      teacher: "飛飛 Feifei",
      date: "2025/04/20",
      day: "（一）",
      time: "17:00-18:00",
      location: "TECHNOgym",
      locationCH: "（忠孝館）",
      confirmStatus: "您已送出預約申請",
      confirmAction: "取消",
      progress: "尚未進行課程",
      isFinished: false,
    },
    {
      no: "2",
      id: "#00596",
      teacher: "飛飛 Feifei",
      date: "2025/04/11",
      day: "（六）",
      time: "17:00-18:00",
      location: "TECHNOgym",
      locationCH: "（忠孝館）",

      confirmStatus: "已確認",
      confirmAction: "",
      progress: "完成",
      isFinished: true,
    },
  ];
  /* 控制按鈕彈窗 */
  const [popupType, setPopupType] = useState(null);
  const handleOpenList = () => setPopupType("list"); //訂單編號
  const handleOpenChat = () => setPopupType("chat"); //聯絡教練
  const handleOpenProblem = () => setPopupType("problem"); //問題
  const handleClosePopup = () => setPopupType(null);
  return (
    <>
      <div className="order-table">
        {/* 標題 */}
        <div className="table-header">
          <span>No</span>
          <span>訂單編號</span>
          <span>講師名稱</span>
          <span>上課日期</span>
          <span>上課地點</span>
          <span>聯絡講師</span>
          <span>預約確認</span>
          <span>課程完成</span>
          <span>問題反映</span>
        </div>
        {/* 表格內容 */}
        {orders.map((order, index) => (
          <div className="table-row" key={index}>
            {/* 序號 */}
            <span>{order.no}</span>
            {/* 訂單編號 */}
            <span onClick={handleOpenList} className="order-id">
              {order.id}
            </span>
            {/* 講師名稱 */}
            <span>{order.teacher}</span>
            {/* 上課日期 */}
            <span>
              {order.date} <br /> {order.day} <br /> {order.time}
            </span>
            {/* 上課地點 */}
            <span>
              {order.location}
              <br />
              {order.locationCH}
            </span>
            {/* 聯絡講師(按鈕) */}
            <span>
              <button onClick={handleOpenChat} className="btn-orange">
                留言
              </button>
            </span>
            {/* 預約確認(按鈕待確認) */}
            <span>
              <div className="orderCheck">
                <span>{order.confirmStatus}</span>
                <span>
                  {/* {order.confirmAction && (<button className="btn-cancel">{order.confirmAction}</button>)} */}
                </span>
              </div>
            </span>
            {/* 課程完成(按鈕待確認) */}
            <span>{order.progress}</span>
            {/* 問題反映 */}
            <span>
              <button onClick={handleOpenProblem} className="btn-outline">
                聯絡客服
              </button>
            </span>
          </div>
        ))}
      </div>
      {/* 根據 popupType 顯示彈窗 */}
      {popupType === "list" && <ListPopup onClose={handleClosePopup} />}
      {popupType === "chat" && <StudentChatPopup onClose={handleClosePopup} />}
      {popupType === "problem" && <ProblemPopup onClose={handleClosePopup} />}
    </>
  );
}
export default MyOrders;
