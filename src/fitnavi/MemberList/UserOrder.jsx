import { useState } from "react";
import MemberTitle from "./MemberTitle";
import MyOrders from "./MyOrders";
import MyOrderView from "./MyOrderView";
import { Link } from "react-router-dom";
import "./UserOrder.scss";
import MyFinishOrder from "./MyFinishOrder";
function UserOrder() {
  const [userTab, setUserTab] = useState("myorder");

  return (
    <>
      <div className="orderbox">
        <MemberTitle title="我的訂單管理" subtitle="My Order Management" />
        <div className="orderboxButtonText">
          <div className="orderboxButton">
            <button className={userTab === "myorder" ? "userBt" : "userBt"}
              onClick={() => setUserTab("myorder")}>我的預約</button>


            <button className={userTab === "myorderview" ? "userBt" : "userBt"}
              onClick={() => setUserTab("myorderview")}>訂單總覽</button>


            <button className={userTab === "myfinishorder" ? "userBt" : "userBt"}
             onClick={() => setUserTab("myfinishorder")}>完成的課程 </button>
          </div>
          <p>
            *若教練確認您的預約申請，會在您的預約確認欄位中顯示"已確認"
            <br />
            *如有順利完成課程，請於7日內在課程完成欄位中點選"完成"，若有問題，請點選"聯絡客服"
          </p>
        </div>
        {/* 表格區 */}
        {userTab === "myorder" && <MyOrders />}
        {userTab === "myorderview" && <MyOrderView />}
        {userTab === "myfinishorder" && <MyFinishOrder />}


      </div>
    </>
  );
}
export default UserOrder;
