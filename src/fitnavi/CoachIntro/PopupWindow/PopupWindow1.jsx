import "./PopupWindow1.scss";
import { useState } from "react";

export default function PopupWindow1({ onClose, onNext }) {
    // 使用一個物件來儲存每個方案的選中狀態
    const [clickedPlans, setClickedPlans] = useState({
        "首次體驗課": false,
        "單堂課程": false,
        "10堂課程": false,
        "20堂課程": false,
    });

    // 切換按鈕的選中狀態
    const handleClick = (planName) => {
        setClickedPlans((prev) => ({
            ...prev,
            [planName]: !prev[planName], // 切換指定方案的狀態
        }));
    };

    return (
        <div className="popup-modal-overlay" onClick={onClose}>
            <div className="popup-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="step-popup step1 active">
                    <img
                        className="close"
                        src="./images/close-icon.svg"
                        alt="close-modal"
                        onClick={onClose}
                    />
                    <h2>選擇方案</h2>
                    <div className="course">
                        <h3>張俐筠 Lila <br className="break" /> 一對一訓練課程</h3>
                        <div className="detail">
                            <img className="clock" src="./images/clock-icon.svg" alt="clock-icon" />
                            <p className="time">60分鐘</p>
                            <p className="unit">/堂</p>
                        </div>
                    </div>

                    <ul className="plan-list">
                        {[ 
                            { name: "首次體驗課", subtitle: "限購一次", days: 7, price: 600 },
                            { name: "單堂課程", subtitle: "", days: 14, price: 1500 },
                            { name: "10堂課程", subtitle: "", days: 140, price: 1400 },
                            { name: "20堂課程", subtitle: "", days: 270, price: 1300 },
                        ].map((plan, i) => (
                            <li key={i} className={plan.name === "首次體驗課" ? "first-experience" : ""}>
                                <div className="plan">
                                    <h4 className="plan-name">{plan.name}</h4>
                                    {plan.subtitle && <p className="subtitle">{plan.subtitle}</p>}
                                </div>
                                <div className="details">
                                    <p className="expiry">有效期間：{plan.days}天</p>
                                    <div className="priceBtn">
                                        <div className="align-left">
                                            <span className="unit">每堂</span>
                                            <span className="currency">NT$</span>
                                            <span className="price">{plan.price}</span>
                                        </div>
                                        <button
                                            className={clickedPlans[plan.name] ? 'selected-btn' : 'select-btn'}
                                            onClick={() => handleClick(plan.name)} // 切換選中的狀態
                                        >
                                            {clickedPlans[plan.name] ? <img src="./images/check.svg" alt="check" /> : '選擇'}
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="button">
                        <button className="next-btn" onClick={onNext}>下一步</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
