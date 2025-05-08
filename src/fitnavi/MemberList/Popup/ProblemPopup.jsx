import "./StudentChatPopup.scss";
function ProblemPopup({ onClose }) {
  return (
    <>
      <section className="chat-popup problem-popup">
        <div>
          <header className="chat-header ">
            <h2>問題反映</h2>
            <span>訂單編號: #00596</span>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </header>
          <hr />
        </div>

        <form
          action=""
          method="post"
          name="problemReflection"
          id="problemReflection"
          title="問題反映"
        >
          <div className="popup-subtitle problem-select">
            <label htmlFor="classification">問題類別</label>
            <div className="problemBody">
              <select name="classification1" id="classification1">
                <option value="">請選擇問題分類</option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <select name="classification2" id="classification2">
                <option value="">請選擇問題分類</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="describe">
              <label>描述問題</label>
              <textarea placeholder=""></textarea>
            </div>
            <div className="popup-submit">
              <button type="button" className="popup-submit-btn">
                送出
              </button>
              <p className="notice">
                我們將在送出後 4-7
                個工作天內寄送回覆至您的信箱，請留意通知，謝謝。
              </p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default ProblemPopup;
