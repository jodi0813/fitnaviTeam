import Subtitle from "../../../components/Title/Subtitle";
import "./UserOrder.scss";

function OrdersBox({ subtitle, subtitleEN, userTab, setUserTab, bt, p1, p2 }) {
  return (
    <>
      <Subtitle subtitle={subtitle} subtitleEN={subtitleEN} />
      <div className="orderboxButtonText">
        <div className="orderboxButton">
          <button
            className={userTab === "bt1" ? "userBt" : "userBt"}
            onClick={() => setUserTab("bt1")}
          >
            {bt}
          </button>

          <button
            className={userTab === "bt2" ? "userBt" : "userBt"}
            onClick={() => setUserTab("bt2")}
          >
            訂單總覽
          </button>

          <button
            className={userTab === "bt3" ? "userBt" : "userBt"}
            onClick={() => setUserTab("bt3")}
          >
            完成的課程
          </button>
        </div>
        <div className="ordersBoxP">
          <div className="ordersBoxP1">{p1}</div>
          {/* *若教練確認您的預約申請，會在您的預約確認欄位中顯示已確認 */}
          {/* *至少須於上課前24小時確認預約時間，若無法配合該時段，請聯絡學員協助取消預約 */}
    
          <div className="ordersBoxP1"> {p2}</div>
          {/* *如有順利完成課程，請於7日內在課程完成欄位中點選完成，若有問題，請點選聯絡客服 */}
          {/* *若您確認時間可以安排，請在預約確認欄位中打勾 */}
        </div>
      </div>
    </>
  );
}
export default OrdersBox;
