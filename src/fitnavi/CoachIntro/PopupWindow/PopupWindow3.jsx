import React, { useState } from "react";
import Cleave from "cleave.js/react";
import './PopupWindow3.scss';

export default function PopupWindow3({ onClose, onNext, onPrev }) {
    // 管理選擇的付款方式
    const [selectedMethod, setSelectedMethod] = useState("");

    // 處理付款方式改變
    const handlePaymentMethodChange = (e) => {
        setSelectedMethod(e.target.value);
    };

    return (
        <>
            <div className="popup-modal-overlay" onClick={onClose}>

                <div className="step-popup step3" onClick={(e) => e.stopPropagation()}>
                    <img
                        className="close"
                        src="./images/close-icon.svg"
                        alt="close-modal"
                        onClick={onClose}
                    />
                    <h2>確認結帳</h2>

                    {/* 結帳方式及價錢 */}
                    <div className="price">
                        <p className="method">信用卡結帳</p>
                        <div className="align-right">
                            <p className="total">結帳金額：</p>
                            <p className="currency">NT$</p>
                            <p className="price">14,000</p>
                        </div>
                    </div>

                    {/* 輸入卡號 */}
                    <div className="credit-payment">
                        <div className="icon">
                            <img src="./images/icon-visa.svg" alt="icon-visa" />
                            <img src="./images/icon-master.svg" alt="icon-master" />
                            <img src="./images/icon-jcb.svg" alt="icon-jcb" />
                        </div>
                        <div className="input-credit">
                            <div className="row1">
                                <label>銀行卡號</label>
                                <Cleave
                                    type="text"
                                    className="input card-number"
                                    placeholder="1234 5678 9012 3456"
                                    options={{
                                        creditCard: true,
                                    }}
                                />
                            </div>
                            <div className="row2">
                                <div className="col1">
                                    <label>安全碼</label>
                                    <input
                                        type="text"
                                        className="input card-cvc"
                                        placeholder="CVC"
                                    />
                                </div>
                                <div className="col2">
                                    <label>到期日</label>
                                    <input
                                        type="text"
                                        className="input card-expiry"
                                        placeholder="MM/YY"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 更改付款方式 */}
                    <div className="change-method">
                        <p className="choose-payment">更改其他付款方式 :</p>
                        <div className="method">
                            <fieldset>
                                <div className="option1">
                                    <div className="option">
                                        <input
                                            type="radio"
                                            name="method"
                                            value="applePay"
                                            id="applePay"
                                            checked={selectedMethod === "applePay"}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="applePay">Apple Pay</label>
                                    </div>
                                    <div className="icon">
                                        <img
                                            src="./images/icon-applePay.svg"
                                            alt="applePay-icon"
                                        />
                                    </div>
                                </div>

                                <div className="option2">
                                    <div className="option">
                                        <input
                                            type="radio"
                                            name="method"
                                            value="linePay"
                                            id="linePay"
                                            checked={selectedMethod === "linePay"}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="linePay">Line Pay</label>
                                    </div>
                                    <div className="icon">
                                        <img
                                            src="./images/icon-linePay.svg"
                                            alt="linePay-icon"
                                        />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    {/* 按鈕區 */}
                    <div className="button">
                        <button className="prev-btn" onClick={onPrev}>返回</button>
                        <button className="next-btn" onClick={onNext}>確認結帳</button>
                    </div>
                </div>

            </div>
        </>
    );
}
