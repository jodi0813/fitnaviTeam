import "./UserOrder.scss";
function UserOrder() {
    return (
        <>
            <div className="orderbox">
                <div className="centermenuTitle">
                    <h2>我的訂單管理</h2>
                    <div className="subtitleWrapper">
                        <span className="subtitle">My Order Management</span>
                        <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                </div>
                <div className="orderboxButtonText">
                    <div className="orderboxButton">
                        <button>我的預約</button>
                        <button>訂單總覽</button>
                        <button>完成的課程 </button>
                    </div>
                    <p>*若教練確認您的預約申請，會在您的預約確認欄位中顯示"已確認"<br />
                    *如有順利完成課程，請於7日內在課程完成欄位中點選"完成"，若有問題，請點選"聯絡客服"</p>
                </div>

            </div>
        </>
    )
} export default UserOrder;