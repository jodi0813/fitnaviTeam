import { useState } from "react";
import OrdersBox from "../UserDashboard/OrdersBox";
import "../UserDashboard/UserOrder.scss";
import StudentMyOrders from "./StudentMyOrders";
import StudentOrderView from "./StudentOrderView";
import StudentFinishOrder from "./StudentFinishOrder";

/* 教練後台>學員訂單 */
function StudentOrder() {
    const [userTab, setUserTab] = useState("bt1");
    return (
        <>
            <div className="orderbox">

                <OrdersBox
                    subtitle="學員訂單管理"
                    subtitleEN="Client Order Management"
                    userTab={userTab}
                    setUserTab={setUserTab}
                    bt="學員預約"
                    p1="*至少須於上課前24小時確認預約時間，若無法配合該時段，請聯絡學員協助取消預約"
                    p2="*若您確認時間可以安排，請在預約確認欄位中打勾"

                />

                {/* 表格區 */}


                {userTab === "bt1" && <StudentMyOrders />}
                {userTab === "bt2" && <StudentOrderView />}
                {userTab === "bt3" && <StudentFinishOrder />}


            </div>

        </>
    )
} export default StudentOrder