import "./MyOrderView.scss";
import { useState } from "react";
import BookingPopup from "./Popup/BookingPopup";
import ReviewPopup from "./Popup/ReviewPopup";
import ListPopup from "./Popup/ListPopup";
/* 使用者後台>我的訂單>訂單總覽 */
function MyOrderView() {
  const orderview = [
    {
      no: "1",
      id: "#00596",
      teacher: "飛飛 Feifei",
      date: "2025/01/01",
      deadline: "2025/09/28",
      totalClasses: "20堂",
      finishClasses: "10堂",
      lastClasses: "10堂",
      reserveBt: "預約",
    },
  ];
  /* 控制按鈕彈窗 */
  const [popupType, setPopupType] = useState(null);
  const handleOpenList = () => setPopupType("list");//訂單編號
  const handleOpenBooking = () => setPopupType("booking");//預約
  const handleOpenReview = () => setPopupType("review");//評價
  const handleClosePopup = () => setPopupType(null);
  return (
    <>
      <div className="orderview-table">
        {/* 標題 */}
        <div className="orderview-table-header">
          <span>No</span>
          <span>訂單編號</span>
          <span>講師名稱</span>
          <span>購買日期</span>
          <span>使用期限</span>
          <span>總堂數</span>
          <span>已完成</span>
          <span>剩餘</span>
          <span>預約課程</span>
          <span>匿名評價</span>
          <span>問題反映</span>
        </div>
        {/* 表格內容 */}
        {orderview.map((orderview, index) => (
          <div className="table-row" key={index}>
            {/* 序號 */}
            <span>{orderview.no}</span>
            {/* 訂單編號 */}
            <span onClick={handleOpenList} className="order-id">{orderview.id}</span>
            {/* 講師名稱 */}
            <span>{orderview.teacher}</span>
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
            {/* 預約課程 */}
            <span>
              <button onClick={handleOpenBooking} className="btn-orange">預約</button>
            </span>
            {/* 匿名評價 */}
            <span>
              <button onClick={handleOpenReview} className="btn-outline">評價</button>
            </span>
            {/* 問題反映 */}
            <span>
              <button className="btn-outline">聯絡客服</button>
            </span>
          </div>
        ))}
      </div>
      {/* 根據 popupType 顯示彈窗 */}
      {popupType === "list" && <ListPopup onClose={handleClosePopup} />}
      {popupType === "booking" && <BookingPopup onClose={handleClosePopup} />}
      {popupType === "review" && <ReviewPopup onClose={handleClosePopup} />}
    </>
  );
}
export default MyOrderView;
