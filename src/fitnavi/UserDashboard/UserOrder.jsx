import { useState } from "react";
import MyOrders from "./MyOrders";
import MyOrderView from "./MyOrderView";
import "./UserOrder.scss";
import MyFinishOrder from "./MyFinishOrder";
import OrdersBox from "./OrdersBox";
/*  使用者後台>我的訂單管理  */
function UserOrder() {
  const [userTab, setUserTab] = useState("myorder");

  return (
    <>
      <div className="orderbox">
         <OrdersBox userTab={userTab} setUserTab={setUserTab} />

        {/* 表格區 */}
        {userTab === "myorder" && <MyOrders />}
        {userTab === "myorderview" && <MyOrderView />}
        {userTab === "myfinishorder" && <MyFinishOrder />}


      </div>
    </>
  );
}
export default UserOrder
