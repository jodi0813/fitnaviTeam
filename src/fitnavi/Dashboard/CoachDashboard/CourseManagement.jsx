import OrdersBox from "../UserDashboard/OrdersBox";
import "../UserDashboard/UserOrder.scss";
function CourseManagement() {
  return (
    <>
      <div className="orderbox">123
        <OrdersBox
          subtitle="學員訂單管理"
          subtitleEN="Client Order Management"
          p1="*至少須於上課前24小時確認預約時間，若無法配合該時段，請聯絡學員協助取消預約"
          p2="*若您確認時間可以安排，請在預約確認欄位中打勾"
        />
      </div>
    </>
  );
}
export default CourseManagement;
