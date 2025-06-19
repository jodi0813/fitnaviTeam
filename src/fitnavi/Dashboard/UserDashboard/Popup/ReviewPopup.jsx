import { useState } from "react";
import "./StudentChatPopup.scss";
/* 匿名評價 */
function ReviewPopup({ onClose }) {
    const [score, setScore] = useState(0);
    return (
        <>
            <div className="overlay">{/* 背景遮住 */}
                <section className="chat-popup problem-popup">

                    <div>
                        <header className="chat-header ">
                            <h2>匿名評價</h2>
                            <span>訂單編號: #00596</span>
                            <button className="close-btn" onClick={onClose}>
                                ✕
                            </button>
                        </header>
                        <hr />
                    </div>

                    <div className="review-main">
                        <div>
                            <div className="starsNumber">課程滿意指數</div>
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
                        </div>
                        <div className="score-text">
                            您給的分數為 <span className="score">{score.toFixed(1)}</span>
                        </div>
                    </div>
                    <div>
                        <div>留言反饋</div>
                        <input type="text" className="feedback"/>
                        <button>送出</button>
                    </div>


                </section>


            </div>
        </>
    )
} export default ReviewPopup;