import { useState } from "react";
import OrdersBox from "../UserDashboard/OrdersBox";
import "../UserDashboard/UserOrder.scss";
import CoachMyOrders from "./CoachMyOrders";
import CoachMyOrderView from "./CoachMyOrderView";
import CoachMyFinishOrder from "./CoachMyFinishOrder";
/* 教練後台>我的訂單 */
function CoachOrder() {
  const [userTab, setUserTab] = useState("bt1");
  return (
    <>
      <div className="orderbox">
        <OrdersBox
          subtitle="我的訂單管理"
          subtitleEN="My Order Management"
          userTab={userTab}
          setUserTab={setUserTab}
          bt="我的預約"
          p1="*若教練確認您的預約申請，會在您的預約確認欄位中顯示已確認"
          p2="*至少須於上課前24小時確認預約時間，若無法配合該時段，請聯絡學員協助取消預約"
        />

        {/* 表格區 */}
        {userTab === "bt1" && <CoachMyOrders />}
        {userTab === "bt2" && <CoachMyOrderView />}
        {userTab === "bt3" && <CoachMyFinishOrder />}


      </div>

    </>
  )
} export default CoachOrder