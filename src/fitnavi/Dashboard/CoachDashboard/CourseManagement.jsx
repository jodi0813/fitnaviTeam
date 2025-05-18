import Subtitle from "../../../components/Title/Subtitle";
import "../UserDashboard/UserOrder.scss";
import "../UserDashboard/MyOrders.scss";

/* 教練後台<課程管理 */
function CourseManagement() {
  const orders = [
    {
      no: "1",
      class: "一對一重量訓練指導",
      date: "2025.04.21",
      editdate: "2025.04.03",
      sold: "273堂",
      state: "公開",
    },
  ];
  return (
    <>
      <div className="orderbox">
        <Subtitle
          subtitle="課程管理"
          subtitleEN="Courses Management & Editing"
        />
        <div className="mini">課程狀態設定不公開後，您仍可以編輯課程資訊</div>
        <div className="order-table">
          <div className="table-header">
            <span>No</span>
            <span>課程名稱</span>
            <span>上架日期</span>
            <span>上次編輯日期</span>
            <span>已售出總堂數</span>
            <span>課程狀態</span>
            <span>編輯課程</span>
            <span>編輯狀態</span>
          </div>
          {/* 表格內容 */}
          {orders.map((order, index) => (
            <div className="table-row" key={index}>
              {/* 序號 */}
              <span>{order.no}</span>
              {/* 課程名稱 */}
              <span>{order.class}</span>
              {/* 上架日期 */}
              <span>{order.date}</span>
              {/* 上次編輯日期 */}
              <span>{order.editdate}</span>
              {/* 已售出總堂數 */}
              <span>{order.sold}</span>
              {/* 課程狀態 */}
              <span>{order.state}</span>
              {/* 編輯課程 */}
              <span>
                <button className="editBT">編輯</button>
              </span>
              {/* 編輯狀態 */}
              <span>
                <button className="closeBT">關閉</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CourseManagement;
