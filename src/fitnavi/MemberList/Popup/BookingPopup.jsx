import "./StudentChatPopup.scss";
/* 預約彈窗 */
function BookingPopup({ onClose }) {
    return (
        <>
            <section className="chat-popup">
                <div>
                    <header className="chat-header ">
                        <h2>預約課程</h2>
                        <span>訂單編號: #00596</span>
                        <button className="close-btn" onClick={onClose}>
                            ✕
                        </button>
                    </header>
                    <hr />
                </div>
                <div className="popup-subtitle booking-select">
                    <label htmlFor="classification">*選擇上課地點</label>
                    <div className="problemBody">
                        <select name="classification1" id="classification1">
                            <option>請選擇場館或平台</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <span>*橘色的部分為講師可預約的日期與時段</span>
                    <div className="calendar-section">
                        <div className="calendar-header">
                            <button>{'<'}</button>
                            <span>四月 2025</span>
                            <button>{'>'}</button>
                        </div>

                        <div className="calendar-grid">
                            {/* 簡化展示：可自行補滿日曆 */}
                            <div className="day orange">10</div>
                            <div className="day orange selected">11</div>
                            <div className="day orange">12</div>
                            {/* ...其他日期 */}
                        </div>

                        <div className="time-slots">
                            <div className="time">9:30</div>
                            <div className="time disabled">10:00</div>
                            <div className="time disabled">10:30</div>
                            <div className="time">11:00</div>
                            <div className="time selected">11:30</div>
                            <div className="time disabled">12:00</div>
                            <div className="time">12:30</div>
                            <div className="time">13:00</div>
                        </div>
                    </div>
                    <button className="submit-btn">申請預約</button>
                    <p className="notice">
                        送出申請後，可至” 我的預約” 查看預約情況<br />
                        講師將在課程開始前至少24小時進行確認，您可在講師確認前取消預約。
                    </p>
                </div>

            </section >
        </>
    )
} export default BookingPopup