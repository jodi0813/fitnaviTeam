import Subtitle from "../../../components/Title/Subtitle";
import "./MyInfo.scss";
import { Link } from "react-router-dom";
function MyInfo() {
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
              <img src="./images/useravatar.jpg" className="myinfoAvatar" />
              <div className="myinfoNameBox">
                <div className="myinfoName">
                  <span className="myinfoLabel">姓名</span>
                  <span className="myinfoValue">王明華</span>
                </div>
                <div className="myinfoName">
                  <span className="myinfoLabel">暱稱</span>
                  <span className="myinfoValue">阿華</span>
                </div>
              </div>
            </div>
            {/* 綁後台會員管理(芝) */}
            {/* <button className="myinfoEditButton">編輯個人資訊</button> */}
          </div>

          {/* 基本資料+健康資訊+聯絡資訊 */}
          <div className="profileContent">
            {/* 左邊基本資料+聯絡資訊 */}
            <div className="profileContentLeft">
              {/* 基本資料 */}
              <div className="myinfoSection">
                <h3 className="myinfosectionTitle">基本資料</h3>

                <div className="myinfoItem">
                  <span className="myinfoItem1">出生年月</span>
                  <span>2000 / 03 / 03</span>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">生理性別</span>
                  <span>女</span>
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
                  <div className="myinfoCheckbox">
                    <span>huahua0303@gmail.com</span>
                    <div className="myinfoCheck">
                    <input type="checkbox" name="stuCheck" id="stuCheck" />
                    <label htmlFor="stuCheck" className="trShow">
                      在訂單中顯示
                    </label></div>
                  </div>
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1">手機號碼</span>
                  <span>0912345678</span>
                  {/* <div className="myinfoCheckbox">
                    <input type="checkbox" name="stuCheck" id="stuCheck" />
                    <label htmlFor="stuCheck" className="trShow">
                      向講師顯示
                    </label>
                  </div> */}
                </div>
                <div className="myinfoItem">
                  <span className="myinfoItem1"> Line ID</span>
                  <span>huahua0303</span>
                  {/* <div className="myinfoCheckbox">
                    <input type="checkbox" name="stuCheck" id="stuCheck" />
                    <label htmlFor="stuCheck" className="trShow">
                      向講師顯示
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
            {/* 健康資訊 */}
            <div className="myinfoSection">
              <h3 className="myinfosectionTitle">健康資訊</h3>
              <div className="myinfoItem">
                <span className="myinfoItem1"> 素食/葷食</span>
                <span>葷食</span>
              </div>
              <div className="myinfoItem">
                <span className="myinfoItem1">食物過敏</span>
                <span>牛奶（輕微不耐）</span>
              </div>
              <div className="myinfoItem">
                <span className="myinfoItem1">特殊疾病</span>
                <span>無</span>
              </div>
              <div className="myinfoItem">
                <span className="myinfoItem1">傷病史</span>
                <span>
                  一年前腰部受傷，現
                  <br />
                  在偶爾會不舒服
                </span>
              </div>
              <div className="myinfoItem">
                <span className="myinfoItem1">運動目標</span>
                <span>健康維持、減脂 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyInfo;
