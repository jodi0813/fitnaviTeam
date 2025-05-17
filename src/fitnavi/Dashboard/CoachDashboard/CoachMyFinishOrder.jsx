import "../UserDashboard/MyOrders.scss";
/* 教練後台>我的訂單>完成的課程 */
function CoachMyFinishOrder() {
    return (
        <>
            <div className="order-table nothing">
                {/* 標題 */}
                <div className="table-header">
                    <span>No</span>
                    <span>訂單編號</span>
                    <span>講師名稱</span>
                    <span>上課日期</span>
                    <span>上課地點</span>
                    <span>課程進度</span>
                    <span>課程狀態</span>
                </div>
                <div>無資料</div>
            </div>

        </>
    )
} export default CoachMyFinishOrder