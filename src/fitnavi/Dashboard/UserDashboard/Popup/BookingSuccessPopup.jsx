import React from "react";
import "./BookingSuccessPopup.scss";

function BookingSuccessPopup({ onClose }) {
  return (
    <div className="bookingOverlay">
      <div className="booking-success-popup">
        <div  className="booking-success-popup1">
          <span className="booking-success-title">預約申請送出成功 </span>
          <span className="check-icon">
            <img src="./images/check-circle.svg" alt="確認完成" />
          </span>
        </div>
        <button className="confirm-btn" onClick={onClose}>
          確認
        </button>
      </div>
    </div>
  );
}

export default BookingSuccessPopup;
