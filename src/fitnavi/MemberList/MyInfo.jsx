import MemberTitle from "./MemberTitle";
import "./MyInfo.scss";
function MyInfo() {
  return (
    <>
      <div className="orderbox">
        {/* 個人資訊標題 */}
        <MemberTitle title="個人資訊" subtitle="My Info" />
        {/* 個人資訊白卡 */}
        <div className="myinfoCard">
          {/* 大頭照姓名跟編輯按鈕 */}
          <div className="myinfoHeader">
            <div className="myinfoNameSection">
              <img src="/images/coach13.jpg" className="myinfoAvatar" />
              <div className="myinfoName">
                <span className="myinfoLabel">姓名</span>
                <span className="myinfoValue">王明華</span>
              </div>
              <div className="myinfoName">
                <span className="myinfoLabel">暱稱</span>
                <span className="myinfoValue">阿華</span>
              </div>
            </div>
            <button className="myinfoEditButton">編輯個人資訊</button>
          </div>

          {/* 基本資料+健康資訊+聯絡資訊 */}
          <div className="profileContent">
            {/* 左邊基本資料+聯絡資訊 */}
            <div className="profileContentLeft">
              {/* 基本資料 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">基本資料</h3>

                <div className="myinfoItem">
                  <span>出生年月</span>
                  <span>2000 / 03 / 03</span>
                </div>
                <div className="myinfoItem">
                  <span>生理性別</span>
                  <span>女</span>
                </div>
                <div className="myinfoItem">
                  <span> 通訊地址</span>
                  <span>台北市中正區濟南路一段321號12樓</span>
                </div>
              </div>
              {/* 聯絡資訊 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">聯絡資訊</h3>
                <div className="myinfoItem">
                  <span>Email</span><span>huahua0303@gmail.com</span> ☐ 向講師顯示
                </div>
                <div className="myinfoItem">
                <span>手機號碼</span><span>0912345678</span> ☐ 向講師顯示
                </div>
                <div className="myinfoItem">
                <span> Line ID</span><span>huahua0303</span> ☐ 向講師顯示
                </div>
              </div>
            </div>
            {/* 健康資訊 */}
            <div className="myinfoSection">
              <h3 className="myinfosectionTitle">健康資訊</h3>
              <div className="myinfoItem">素食/葷食：葷食</div>
              <div className="myinfoItem">食物過敏：牛奶（輕微不耐）</div>
              <div className="myinfoItem">特殊疾病：無</div>
              <div className="myinfoItem">
                傷病史：一年前腰部受傷，現在偶爾會不舒服
              </div>
              <div className="myinfoItem">運動目標：健康維持、減脂</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyInfo;
