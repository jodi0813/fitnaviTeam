import "./ListPopup.scss";
function ListPopup({ onClose }) {
    return (
        <>
            <div className="list-overlay">
                <section className="list-popup">

                    <header className="list-header ">
                        <h2>訂單詳情</h2>
                        <span>訂單編號: #00596</span>
                        <button className="list-close-btn" onClick={onClose}>
                            ✕
                        </button>
                    </header>
                    <hr />
                    <main className="list-main-popup">
                        <div className="list-left-popup">
                            <div>
                                <span>2025/3/3</span>
                                <span>訂單確認</span>
                            </div>
                            <div>
                                <span>2025/3/8</span>
                                <span>與教練確認課程安排</span>
                            </div>
                            <div>
                                <span>2025/3/22</span>
                                <span>完成第一堂課程</span>
                            </div>
                            <div>
                                <span>完成訂單</span>
                            </div>

                        </div>
                        <div className="list-right-popup">

                               <div className="list-details"><span>訂單名稱</span><span>飛飛 Feifei 一對一重量訓練指導 (20堂)</span></div>
                               <div className="list-details"><span>訂單內容</span><span>重訓核心強化課程，60 分鐘，線下教室進行，著重動作控制與核心穩定。</span></div>
                               <div className="list-details"><span>兌換方式</span><span>採預約制，先在平台確認教練可預約時段，選取並送出，等待教練確認後即完成預約。</span></div>
                               <div className="list-details"><span>取消預約</span><span>預約時間24小時外可在平台操作更改預約時間，24小時內則無法變更。</span></div>
                               <div className="list-details"><span>有效期限</span><span>訂單確認後270天內，請務必留意訂單有效期限。
                                    (2025/11/28止)</span></div>
                               <span>訂單金額 $26000</span>
                        </div>
                  
                    </main>




                </section>




            </div>
        </>
    )
} export default ListPopup