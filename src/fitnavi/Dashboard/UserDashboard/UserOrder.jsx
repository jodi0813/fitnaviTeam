import { useState } from "react";
import MyOrders from "./MyOrders";
import MyOrderView from "./MyOrderView";
import "./UserOrder.scss";
import MyFinishOrder from "./MyFinishOrder";
import OrdersBox from "./OrdersBox";
/*  使用者後台>我的訂單管理  */
function UserOrder() {
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
          p2="*如有順利完成課程，請於7日內在課程完成欄位中點選完成，若有問題，請點選聯絡客服"
        />

        {/* 表格區 */}
        {userTab === "bt1" && <MyOrders />}
        {userTab === "bt2" && <MyOrderView />}
        {userTab === "bt3" && <MyFinishOrder />}


      </div>
    </>
  );
}
export default UserOrder
