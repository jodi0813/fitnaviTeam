import "./StudentChatPopup.scss";
function ConfirmReviewPopup({ onCancel, onConfirm }) {
  return (
    <div className="overlay">
      <section className="chat-popup confirmReview">
        <div className="confirmReviewBox">
          <span>請確認是否送出</span>
          <span className="orangeReview">
            飛飛Feifei <br />
            一對一重量訓練指導
          </span>
          <span>的匿名評價</span>
        </div>
        <div className="ConfirmButtons">
          <button className="cancel-btn" onClick={onCancel}>
            取消
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            確認
          </button>
        </div>
      </section>
    </div>
  );
}

export default ConfirmReviewPopup;
