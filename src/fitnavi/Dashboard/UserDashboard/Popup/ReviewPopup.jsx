import { useState } from "react";
import ConfirmReviewPopup from "./ConfirmReviewPopup";
import ReviewSuccessPopup from "./ReviewSuccessPopup";
import "./StudentChatPopup.scss";

function ReviewPopup({ onClose }) {
  const [score, setScore] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowSuccess(true);
  };

  const handleFinalConfirm = () => {
    setShowSuccess(false);
    onClose(); // 最終關閉所有彈窗
  };

  return (
    <>
      {!showConfirm && !showSuccess && (
        <div className="overlay">
          <section className="chat-popup problem-popup">
            <header className="chat-header">
              <h2>匿名評價</h2>
              <span>訂單編號: #00596</span>
              <button className="close-btn" onClick={onClose}>
                ✕
              </button>
            </header>
            <hr />
            <div className="review-main">
              <div className="starsNumber">課程滿意指數</div>
              <div className="starsScore">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`star ${score >= star ? "filled" : ""}`}
                      onClick={() => setScore(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <div className="score-text">
                  <span>您給的分數為</span>
                  <span className="score">{score.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <div className="review-main1">
              <div className="starsNumber">留言反饋</div>
              <input type="text" className="feedback" />
              <div className="sendBt">
                <button onClick={handleSend}>送出</button>
              </div>
            </div>
          </section>
        </div>
      )}

      {showConfirm && (
        <ConfirmReviewPopup
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleConfirm}
        />
      )}

      {showSuccess && <ReviewSuccessPopup onConfirm={handleFinalConfirm} />}
    </>
  );
}

export default ReviewPopup;
