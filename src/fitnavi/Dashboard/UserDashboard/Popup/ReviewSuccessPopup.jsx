import "./StudentChatPopup.scss";

function ReviewSuccessPopup({ onConfirm }) {
  return (
    <div className="overlay">
      <section className="chat-popup ReviewSuccess">
        <div className="reviewSuccess-icon">
          <span className="reviewSuccess-title">匿名評價送出成功</span>
          <img src="./images/check-circle.svg" alt="確認符號" />
        </div>
        <div className="reviewSuccessBtBox">
          <button className="reviewSuccessBt" onClick={onConfirm}>
            確認
          </button>
        </div>
      </section>
    </div>
  );
}

export default ReviewSuccessPopup;
