import { useNavigate } from "react-router-dom";
import "./PopupWindow4.scss";

export default function PopupWindow4({ onClose }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="popup-modal-overlay" onClick={onClose}>
                <div className="popup-overlay" onClick={(e) => e.stopPropagation()}>
                    <div className="step-popup step4">
                        <img className="close"
                            src="./images/close-icon.svg"
                            alt="close-modal"
                            onClick={onClose} />
                        <div className="content">
                            <img src="./images/purchaseFinished.png" alt="purchaseFinished" />
                            <h3>╲完成訂購╱</h3>
                            <p class="reminder">請前往個人頁面<br className="break" />預約專屬時間 並 選擇上課地點</p>
                            <p class="steps">會員中心 ＞ 我的訂單 ＞ 訂單總覽 ＞ 點選預約</p>
                        </div>
                        {/* <!-- 按鈕區 --> */}
                        <div className="button">
                            <button className="home-btn" onClick={() => navigate('/')}>回首頁</button>
                            <button className="reserve-btn" onClick={() => navigate('/')}>前往預約</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}