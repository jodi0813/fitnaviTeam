import Subtitle from "../../../components/Title/Subtitle";
import "../UserDashboard/UserOrder.scss";
import "../UserDashboard/MyOrders.scss";
function Articlemanagement() {
  const orders = [
    {
      no: "1",
      title: "健身初學者必看：如何開始你的運動旅程",
      date: "2025.04.21",
      editdate: "2025.04.03",
      classification: "新手健身",
      state: "公開",
    },
  ];
  return (
    <>
      <div className="orderbox">
        <Subtitle
          subtitle="文章管理"
          subtitleEN="Article Management & Editing"
        />
      </div>
      <div className="order-table">
        <div className="table-header">
          <span>No</span>
          <span>文章標題</span>
          <span>發布日期</span>
          <span>上次編輯日期</span>
          <span>文章分類</span>
          <span>文章狀態</span>
          <span>編輯文章</span>
          <span>編輯狀態</span>
        </div>
        {/* 表格內容 */}
        {orders.map((order, index) => (
          <div className="table-row" key={index}>
            {/* 序號 */}
            <span>{order.no}</span>
            {/* 文章標題*/}
            <span>{order.title}</span>
            {/* 發布日期 */}
            <span>{order.date}</span>
            {/* 上次編輯日期 */}
            <span>{order.editdate}</span>
            {/* 文章分類 */}
            <span>{order.classification}</span>
            {/* 文章狀態 */}
            <span>{order.state}</span>
            {/* 編輯文章 */}
            <span>
              <button>編輯</button>
            </span>
            {/* 編輯狀態 */}
            <span>
              <button>關閉</button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
export default Articlemanagement;
