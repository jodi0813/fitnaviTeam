import React from "react";
import "./BookingOkPopup.scss";

function BookingOkPopup({ onClose }) {
  return (
    <div className="bookingOverlay">
      <div className="booking-ok-popup">
        <p>請確認是否預約</p>
        <h3>飛飛 Feifei</h3>
        <p>一對一重量訓練指導</p>
        <p className="date">2025年4月10日</p>
        <p className="time">11:30 - 12:30</p>
        <div className="button-group">
          <button className="cancel-btn" onClick={onClose}>取消</button>
          <button className="confirm-btn" onClick={onClose}>確認</button>
        </div>
      </div>
    </div>
  );
}

export default BookingOkPopup;