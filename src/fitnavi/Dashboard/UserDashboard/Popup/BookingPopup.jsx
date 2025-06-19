import React, { useState } from "react";
import "./BookingPopup.scss";
import CalendarComponent from "../../../../components/CalendarComponent/CalendarComponent";
import { Link } from "react-router-dom";
import BookingOkPopup from "./BookingOkPopup";
/* 預約彈窗 */
function BookingPopup({ onClose, onSubmitBooking }) {
  const [popupType, setPopupType] = useState(null);

  const handleOpenBookingOk = () => {
    onClose(); // 關閉自己（外層 popup）
    setTimeout(() => {
      setPopupType("bookingok"); // 等外層消失後再顯示新彈窗
    }, 0);
  };
  return (
    <>
      <div className="bookingOverlay">
        <div className="booking-popup">
          <div className="popup-header">
            <h2>預約課程</h2>
            <span className="order-id">訂單編號:#00596</span>
            <button className="order-close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <div className="choseField">
            <label>*選擇上課地點</label>
            <select>
              <option>請選擇場館或平台</option>
              <option>台北健身房</option>
              <option>線上平台</option>
            </select>
          </div>
          <span className="calendar-hint">
            *橘色的部分為講師可預約的日期與時段
          </span>
          <div className="calendar-section">
            <div className="calendar-section1">
              <CalendarComponent />

              <button onClick={onSubmitBooking} className="submit-button">
                申請預約
              </button>
            </div>
          </div>

          <span className="info-text">
            送出申請後，可至「我的預約」查看預約情況
            <br />
            講師將在課程開始前至少 24 小時進行確認，您可在講師確認前取消預約。
          </span>
        </div>
      </div>
      {popupType === "bookingok" && (
        <BookingOkPopup onClose={() => setPopupType(null)} />
      )}
    </>
  );
}

export default BookingPopup;
