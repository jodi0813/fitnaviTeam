import "./BookingOkPopup.scss";

function BookingOkPopup({ onClose }) {
  return (
    <div className="bookingOverlay">
      <div className="booking-ok-popup">
        <div>
          <p>請確認是否預約</p>
        </div>
        <div>
          <p>飛飛 Feifei</p>
          <p>一對一重量訓練指導</p>
        </div>
        <div>
          <p className="time">2025年6月15日</p>
          <p className="time">10:00 - 11:00</p>
        </div>
        <div className="button-group">
          <button className="cancel-btn" onClick={onClose}>
            取消
          </button>
          <button className="confirm-btn" onClick={onClose}>
            確認
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingOkPopup;
