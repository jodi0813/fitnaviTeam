import "./StudentChatPopup.scss";
function ProblemPopup({ onClose }) {
    return (
        <>
            <section id="chat-popup">
                <div>
                    <header className="chat-header">
                        <h2>問題反映</h2>
                        <span>訂單編號: #00596</span>
                        <button className="close-btn" onClick={onClose}>✕</button>
                    </header>
                    <hr />
                </div>
                <div>
                    <h3>問題類別</h3>
                </div>
                <div>
                    <h3>描述問題</h3>
                </div>





            </section>
        </>
    )
} export default ProblemPopup