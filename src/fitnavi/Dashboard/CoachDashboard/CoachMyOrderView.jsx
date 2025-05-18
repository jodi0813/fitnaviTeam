import "../UserDashboard/MyOrders.scss";
/* 教練後台>我的訂單>訂單總覽 */
function CoachMyOrderView() {
    return (
        <>
            <div className="orderview-table nothing">
                {/* 標題 */}
                <div className="orderview-table-header">
                    <span>No</span>
                    <span>訂單編號</span>
                    <span>講師名稱</span>
                    <span>購買日期</span>
                    <span>使用期限</span>
                    <span>總堂數</span>
                    <span>已完成</span>
                    <span>剩餘</span>
                    <span>預約課程</span>
                    <span>匿名評價</span>
                    <span>問題反映</span>
                </div>
                <div>無資料</div>
            </div>
        </>
    )
} export default CoachMyOrderView