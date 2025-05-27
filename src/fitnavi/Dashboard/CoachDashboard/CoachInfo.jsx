
import Subtitle from "../../../components/Title/Subtitle";
import "../UserDashboard/MyInfo.scss";
import { Link } from "react-router-dom";
function CoachInfo() {
  return (
    <>
      <div className="orderbox">
        {/* 個人資訊標題 */}
        <Subtitle subtitle="個人資訊" subtitleEN="My Info" />
        {/* 個人資訊白卡 */}
        <div className="myinfoCard">
          {/* 大頭照姓名跟編輯按鈕 */}
          <div className="myinfoHeader">
            <div className="myinfoNameSection">
              <img src="./images/coach13.jpg" className="myinfoAvatar" />
              <div className="myinfoNameBox">
                <div className="myinfoName">
                  <span className="coachinfoName">健身教練</span>
                </div>
                <div className="myinfoName">
                  <div className="myinfoName">
                    <span className="myinfoLabel">姓名</span>
                    <span className="myinfoValue">黃飛飛</span>
                  </div>
                  <div className="myinfoName">
                    <span className="myinfoLabel">暱稱</span>
                    <span className="myinfoValue">飛飛Feifei</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="myinfoBt">
              <button className="myinfoBt1">編輯個人資訊</button>
              <button className="myinfoBt1">編輯教練詳細介紹</button>
            </div>
          </div>

          {/* 基本資料+健康資訊+聯絡資訊 */}
          <div className="profileContent">
            {/* 左邊基本資料+聯絡資訊 */}
            <div className="profileContent1">
              {/* 基本資料 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">基本資料</h3>

                <div className="myinfoItem">
                  <span className="myinfoItem1">出生年月</span>
                  <span>1997 / 03 / 03</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">生理性別</span>
                  <span>男</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1"> 通訊地址</span>
                  <span>台北市中正區濟南路一段321號12樓</span>
                </div>
              </div>
              {/* 聯絡資訊 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">聯絡資訊</h3>
                <div className="myinfoItem">
                  <span className="myinfoItem1">Email</span>
                  <span>feifei0303@gmail.com</span>
                  <div className="myinfoCheckbox">
                    <input type="checkbox" name="stuCheck" id="stuCheck" />
                    <label htmlFor="stuCheck" className="trShow">
                      在訂單中顯示
                    </label>
                  </div>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">手機號碼</span>
                  <span>0987654321</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1"> Line ID</span>
                  <span>feifei0303</span>
                </div>
              </div>
            </div>
            {/* 右邊健康資訊+收款方式 */}
            <div className="profileContent1">
              {/* 健康資訊 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">健康資訊</h3>
                <div className="myinfoItem">
                  <span className="myinfoItem1"> 素食/葷食</span>
                  <span>葷食</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">食物過敏</span>
                  <span>無</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">特殊疾病</span>
                  <span>無</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">傷病史</span>
                  <span>無</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">運動目標</span>
                  <span>增肌減脂</span>
                </div>
              </div>
              {/* 收款方式 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">收款方式</h3>
                <div className="myinfoItem">
                  <span className="myinfoItem1"> 銀行轉帳</span>
                  <span>未來銀行 台北分行<br />
                    999-123456789012</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CoachInfo;
