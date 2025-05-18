import React, { useState } from "react";
import "./BookingPopup.scss";
/* 預約彈窗 */
function BookingPopup({ onClose }) {
  const availableDays = [10, 11, 17, 18]; // 可預約的日期
  const selectedDay = 10; // 預設選中的日期

  const days = [];
  for (let day = 1; day <= 30; day++) {
    const isAvailable = availableDays.includes(day);
    const isSelected = day === selectedDay;

    days.push(
      <button
        key={day}
        className={`calendar-day ${isAvailable ? "available" : ""} ${isSelected ? "selected" : ""
          }`}
      >
        {day}
      </button>
    );
  }

  const timeList = [
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
  ];
  const availableTimes = ["9:30", "11:00", "11:30"]; // 可預約的時間
  const selectedTime = "11:30"; // 預設選中的時間

  const timeButtons = [];
  for (let i = 0; i < timeList.length; i++) {
    const time = timeList[i];
    const isAvailable = availableTimes.includes(time);
    const isSelected = time === selectedTime;

    timeButtons.push(
      <button
        key={time}
        className={`time-button ${isAvailable ? "available" : ""} ${isSelected ? "selected" : ""
          }`}
      >
        {time}
      </button>
    );
  }

  return (
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

        <div className="calendar-section">
          <div className="calendar">
            <p className="calendar-hint">*橘色的部分為講師可預約的日期與時段</p>
            <div className="calendar-grid">{days}</div>
          </div>
          <div className="time-selector">{timeButtons}</div>
        </div>

        <button className="submit-button">申請預約</button>

        <p className="info-text">
          送出申請後，可至「我的預約」查看預約情況
          <br />
          講師將在課程開始前至少 24 小時進行確認，您可在講師確認前取消預約。
        </p>
      </div>
    </div>
  );
}

export default BookingPopup;
