import "./PopupWindow1.scss";

export default function PopupWindow1() {
    return (
        <>
            <div className="step-popup-step1-active">
                <img className="close" src="./images/close-icon.svg" alt="close-modal" />
                <h2>選擇方案</h2>
                <div className="step-popup-step1-course">
                    <h3>張俐筠 Lila 一對一訓練課程</h3>
                    <div className="detail">
                        <img className="clock" src="./images/clock-icon.svg" alt="clock-icon" />
                        <p className="time">60分鐘</p>
                        <p className="unit">/堂</p>
                    </div>
                </div>

                <ul className="step-popup-step1-plan-list">
                    <li>
                        <div className="plan">
                            <h4 className="plan-name">首次體驗課</h4>
                            <p className="subtitle">限購一次</p>
                        </div>
                        <div className="details">
                            <p className="expiry">有效期間：7天</p>
                            <div className="priceBtn">
                                <p className="align-left">
                                    <span className="unit">每堂</span>
                                    <span className="currency">NT$</span>
                                    <span className="price">600</span>
                                </p>
                                <button className="select-btn">選擇</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="plan">
                            <h4 className="plan-name">單堂課程</h4>
                        </div>
                        <div className="details">
                            <p className="expiry">有效期間：14天</p>
                            <div className="priceBtn">
                                <p className="align-left">
                                    <span className="unit">每堂</span>
                                    <span className="currency">NT$</span>
                                    <span className="price">1500</span>
                                </p>
                                <button className="select-btn">選擇</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="plan">
                            <h4 className="plan-name">10堂課程</h4>
                        </div>
                        <div className="details">
                            <p className="expiry">有效期間：140天</p>
                            <div className="priceBtn">
                                <p className="align-left">
                                    <span className="unit">每堂</span>
                                    <span className="currency">NT$</span>
                                    <span className="price">1400</span>
                                </p>
                                <button className="select-btn">選擇</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="plan">
                            <h4 className="plan-name">20堂課程</h4>
                        </div>
                        <div className="details">
                            <p className="expiry">有效期間：270天</p>
                            <div className="priceBtn">
                                <p className="align-left">
                                    <span className="unit">每堂</span>
                                    <span className="currency">NT$</span>
                                    <span className="price">1300</span>
                                </p>
                                <button className="select-btn">選擇</button>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="step-popup-step1-button">
                    <button className="next-btn">下一步</button>
                </div>
            </div>
        </>
    );
}
