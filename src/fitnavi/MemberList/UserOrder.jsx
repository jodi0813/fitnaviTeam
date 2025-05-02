import "./UserOrder.scss";
function UserOrder() {
    const orders = [
        {
            id: "#00596",
            teacher: "飛飛 Feifei",
            date: "2025/04/20",
            day: "（一）",
            time: "17:00-18:00",
            location: "TECHNOgym",
            locationCH: "（忠孝館）",
            contactStatus: "留言",
            confirmStatus: "您已送出預約申請",
            confirmAction: "取消",
            progress: "尚未進行課程",
            isFinished: false,
        },
        {
            id: "#00596",
            teacher: "飛飛 Feifei",
            date: "2025/04/11",
            day: "（六）",
            time: "17:00-18:00",
            location: "TECHNOgym",
            locationCH: "（忠孝館）",
            contactStatus: "留言",
            confirmStatus: "已確認",
            confirmAction: "",
            progress: "完成",
            isFinished: true,
        },
    ];
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
                {/* 表格區 */}
                <div className="order-table">
                    {/* 標題 */}
                    <div className="table-header">
                        <span>訂單編號</span>
                        <span>講師名稱</span>
                        <span>上課日期</span>
                        <span>上課地點</span>
                        <span>聯絡講師</span>
                        <span>預約確認</span>
                        <span>課程完成</span>
                        <span>問題反映</span>
                    </div>
                    {/* 表格內容 */}
                    {orders.map((order, index) => (
                        <div className="table-row" key={index}>
                            {/* 訂單編號 */}
                            <span className="order-id">{order.id}</span>
                            {/* 講師名稱 */}
                            <span>{order.teacher}</span>
                            {/* 上課日期 */}
                            <span>
                                {order.date} <br /> {order.day} <br /> {order.time}
                            </span>
                            {/* 上課地點 */}
                            <span>{order.location}<br />{order.locationCH} </span>
                            {/* 聯絡講師(按鈕) */}
                            <span>
                                <button className="btn-orange">{order.contactStatus}</button>
                            </span>
                            {/* 預約確認(按鈕待確認) */}
                            <span>
                                <span>{order.confirmStatus}</span>
                                {/* {order.confirmAction && (
                                    <button className="btn-cancel">{order.confirmAction}</button>
                                )} */}
                            </span>
                            {/* 課程完成(按鈕待確認) */}
                            <span>
                                <button
                                    className={`status ${order.isFinished ? "done" : "pending"}`}
                                >
                                    {order.progress}
                                </button>
                            </span>
                            {/* 問題反映 */}
                            <span>
                                <button className="btn-outline">聯絡客服</button>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
} export default UserOrder;