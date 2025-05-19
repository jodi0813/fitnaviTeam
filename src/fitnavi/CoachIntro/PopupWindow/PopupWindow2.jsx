import React from "react";
import "./PopupWindow2.scss";

export default function PopupWindow2({ onClose }) {
    return (
        <>
            <div className="popup-modal-overlay" onClick={onClose}>
                <div className="popup-overlay" onClick={(e) => e.stopPropagation()}>
                    <div className="step-popup step2">
                        <img  className="close"
                        src="./images/close-icon.svg"
                        alt="close-modal"
                        onClick={onClose} />
                        <h2>確認選擇方案</h2>

                        {/* 課程方案 */}
                        <div className="course-plan">
                            <p className="plan">課程方案：</p>
                            <div className="detail">
                                <span className="num">10堂課程</span>
                                <img src="./images/clock-icon.svg" alt="clock-icon" />
                                <span className="time">60分鐘</span>
                                <span className="unit">/堂</span>
                                <span className="expiry">有效期間：70天</span>
                            </div>
                            <div className="price">
                                <span className="total">金額總計：</span>
                                <span className="currency">NT$</span>
                                <span className="price">14,000</span>
                            </div>
                        </div>

                        {/* 需求備註 */}
                        <div className="memo">
                            <label htmlFor="message">需求備註 :</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="15"
                                rows="5"
                                title="需求備註"
                                placeholder="請輸入您想告訴教練/營養師的事項"
                            ></textarea>
                        </div>

                        {/* 選擇付款方式 */}
                        <div className="payment">
                            <p className="choose-payment">選擇付款方式 :</p>
                            <div className="method">
                                <fieldset>
                                    {/* 信用卡 */}
                                    <div className="row1">
                                        <div className="option">
                                            <input type="radio" name="method" id="credit-card" />
                                            <label htmlFor="credit-card">信用卡</label>
                                        </div>
                                        <div className="icon">
                                            <img src="./images/icon-visa.svg" alt="icon-visa" />
                                            <img src="./images/icon-master.svg" alt="icon-master" />
                                            <img src="./images/icon-jcb.svg" alt="icon-jcb" />
                                        </div>
                                    </div>

                                    {/* Apple Pay */}
                                    <div className="row2">
                                        <div className="option">
                                            <input type="radio" name="method" id="applePay" />
                                            <label htmlFor="applePay">Apple Pay</label>
                                        </div>
                                        <div className="icon">
                                            <img src="./images/icon-applePay.svg" alt="applePay-icon" />
                                        </div>
                                    </div>

                                    {/* Line Pay */}
                                    <div className="row3">
                                        <div className="option">
                                            <input type="radio" name="method" id="linePay" />
                                            <label htmlFor="linePay">Line Pay</label>
                                        </div>
                                        <div className="icon">
                                            <img src="./images/icon-linePay.svg" alt="linePay-icon" />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        {/* 按鈕區 */}
                        <div className="button">
                            <button className="prev-btn">返回</button>
                            <button className="next-btn">下一步</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
