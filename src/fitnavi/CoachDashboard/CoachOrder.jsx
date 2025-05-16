import { useState } from "react";
import OrdersBox from "../UserDashboard/OrdersBox";
import "../UserDashboard/UserOrder.scss";
import CoachMyOrders from "./CoachMyOrders";
import CoachMyOrderView from "./CoachMyOrderView";
import CoachMyFinishOrder from "./CoachMyFinishOrder";
/* 教練後台>我的訂單 */
function CoachOrder() {
    const [userTab, setUserTab] = useState("myorder");
    return (
        <>
      <div className="orderbox">
         <OrdersBox userTab={userTab} setUserTab={setUserTab} />

        {/* 表格區 */}
        {userTab === "myorder" && <CoachMyOrders />}
        {userTab === "myorderview" && <CoachMyOrderView />}
        {userTab === "myfinishorder" && <CoachMyFinishOrder />}


      </div>

        </>
    )
} export default CoachOrder