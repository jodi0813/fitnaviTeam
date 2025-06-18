import "../UserDashboard/MyOrders.scss";

function CoachMyOrders() {
    return (
        <>
            <div className="order-table nothing">
                <div className="table-header">
                    <span>No</span>
                    <span>訂單編號</span>
                    <span>講師名稱</span>
                    <span>上課日期</span>
                    <span>上課地點</span>
                    <span>聯絡講師</span>
                    <span>預約確認</span>
                    <span>課程完成</span>
                    <span>問題反映</span>
                </div>
                <div className="noOrder">無資料</div>
              
            </div>
        </>
    )
} export default CoachMyOrders