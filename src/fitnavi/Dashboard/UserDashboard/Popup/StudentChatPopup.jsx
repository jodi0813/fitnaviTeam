import "./StudentChatPopup.scss";
import { GrWaypoint } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
function StudentChatPopup({ onClose }) {
    return (
        <>  <div className="overlay">{/* 背景遮住 */}
            <section className="chat-popup">
                <div>
                    <header className="chat-header">
                        <h2>聯絡講師</h2>
                        <div className="teacher-info">
                            <span>飛飛 Feifei</span><br />
                            <span>feifei0303@gmail.com</span>
                        </div>
                        <span>訂單編號: #00596</span>
                        <button className="close-btn" onClick={onClose}>✕</button>
                    </header>
                    <hr />
                </div>
                <div className="messages">
                    {/* 用戶 */}
                    <div className="messageUser">
                        <img src="./images/useravatar.jpg" alt="用戶頭像" className="avatar" />
                        <div className="bubble">教練你好～請問方便在課程的前10分鐘安排熱身指導嗎？</div>
                    </div>

                    {/* 教練*/}
                    <div className="messageCoach">
                        <img src="./images/coachavatar.jpg" alt="教練頭像" className="avatar" />
                        <div className="bubble">沒問題，<br />那麼你第一堂課比較想針對哪一個部位進行訓練呢？</div>
                    </div>

                    {/* 用戶 */}
                    <div className="messageUser">
                        <img src="./images/useravatar.jpg" alt="用戶頭像" className="avatar" />
                        <div className="bubble">我想練試看看臀腿訓練！</div>
                    </div>

                    {/* 教練*/}
                    <div className="messageCoach">
                        <img src="./images/coachavatar.jpg" alt="教練頭像" className="avatar" />
                        <div className="bubble">好，臀腿訓練會非常累喔！前一天記得睡飽再來。</div>
                    </div>

                    {/* 用戶 */}
                    <div className="messageUser">
                        <img src="./images/useravatar.jpg" alt="用戶頭像" className="avatar" />
                        <div className="bubble">沒問題，謝謝教練，明天19:00健身房見喔。</div>
                    </div>

                    {/* 教練*/}
                    <div className="messageCoach">
                        <img src="./images/coachavatar.jpg" alt="教練頭像" className="avatar" />
                        <div className="bubble">好的，明天見!!</div>
                    </div>
                </div>

                <footer className="chat-input-area">
                    <GrAddCircle size={36} color="#FEFCF7" />
                    <input type="text" placeholder="輸入訊息..." />
                    <GrWaypoint size={36} color="#FEFCF7" />
                </footer>
            </section>
            </div>


        </>

    )
} export default StudentChatPopup;