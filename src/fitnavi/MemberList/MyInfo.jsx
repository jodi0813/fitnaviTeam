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
            <img src="/images/coach13.jpg" className="myinfoAvatar" />
            <div className="myinfoNameSection">
              <div>
                <span className="myinfoLabel">姓名</span>
                <span className="myinfoValue">王明華</span>
              </div>
              <div>
                <span className="myinfoLabel">暱稱</span>
                <span className="myinfoValue">阿華</span>
              </div>
            </div>
            <button className="myinfoEditButton">編輯個人資訊</button>
          </div>

          {/* 基本資料+健康資訊+聯絡資訊 */}
          <div className="profileContent">
            {/* 基本資料 */}
            <div className="myinfoSection">
              <h3 className="myinfosectionTitle">基本資料</h3>
              <div className="myinfoItem">出生年月：2000 / 03 / 03</div>
              <div className="myinfoItem">生理性別：女</div>
              <div className="myinfoItem">
                通訊地址：台北市中正區濟南路一段321號12樓
              </div>
            </div>

            {/* 聯絡資訊 */}
            <div className="myinfoSection">
              <h3 className="myinfosectionTitle">聯絡資訊</h3>
              <div className="myinfoItem">
                Email：huahua0303@gmail.com ☐ 向講師顯示
              </div>
              <div className="myinfoItem">
                手機號碼：0912345678 ☐ 向講師顯示
              </div>
              <div className="myinfoItem">Line ID：huahua0303 ☐ 向講師顯示</div>
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
