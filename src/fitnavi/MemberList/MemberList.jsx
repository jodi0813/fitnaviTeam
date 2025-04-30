import UserOrder from "./UserOrder";
import "./MemberList.scss";

function MemberList() {
    return (
        <>
            <div className="centerHead">
                <h2>會員管理</h2>
                <h3>在這裡管理您的課程及文章</h3>
            </div>
            <hr />
            {/* 左側選單 */}
            <div className="memberBotton">
                {/* 一般用戶 */}
                <div className="personalStudentList">
                    <button>個人資訊</button>
                    <button>我的頁面</button>
                    <p>我是<br />一般用戶</p>
                    <img src="" alt="" />
                </div>
                {/* 教練/營養師 */}
                <div >
                    <button>學員訂單</button>
                    <button>課程管理</button>
                    <button>文章管理</button>
                    <p>我是<br />教練/營養師</p>
                    <img src="" alt="" />
                </div>
            </div>
            {/* 一般用戶 */}
            {/* 個人資訊 */}


            {/* 訂單管理 */}
            <UserOrder />





        </>
    )
} export default MemberList;