import "./MyFinishOrder.scss";
function MyFinishOrder() {
    const finishOrders = [
        {
            no: "1",
            id: "#00596",
            teacher: "飛飛 Feifei",
            date: "2025/04/20",
            day: "（一）",
            time: "17:00-18:00",
            location: "TECHNOgym",
            locationCH: "（忠孝館）",
            schedule: "第10堂",
            allclass: "20堂",
            finish: "已完成",
        },
    ];
    return (
        <>
            <div className="order-table">
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

                {finishOrders.map((finishOrder, index) => (
                    <div className="table-row" key={index}>
                        {/* 序號 */}
                        <span >{finishOrder.no}</span>

                        {/* 訂單編號 */}
                        <span className="order-id">{finishOrder.id}</span>
                        {/* 講師名稱 */}
                        <span>{finishOrder.teacher}</span>

                        {/* 上課日期 */}
                        <span>
                            {finishOrder.date} <br /> {finishOrder.day} <br /> {finishOrder.time}
                        </span>
                        {/* 上課地點 */}
                        <span>
                            {finishOrder.location}
                            <br />
                            {finishOrder.locationCH}{" "}
                        </span>
                        {/* 課程進度 */}
                        <span>
                            {finishOrder.schedule}/{finishOrder.allclass}
                        </span>
                        {/* 課程狀態 */}
                        <span>已完成</span>
                    </div>
                ))}
            </div >

        </>)
} export default MyFinishOrder