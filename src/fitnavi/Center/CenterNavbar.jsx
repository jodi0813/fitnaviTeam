import { Link } from "react-router-dom";
import "./CenterNavbar.scss";
function CenterNavbar() {
  const tabClick = () => {
    alert("123");
  };
  return (
    <>
      <div>
        {/* 中間的選單列 */}
        <div class="centerMenu">
          <ul>
            <li>
              <a onClick={tabClick} href="#">
                場館資料
              </a>
            </li>
            <li>
              <Link to="">環境設施</Link>
            </li>
            <li>
              <Link to="">私人教練</Link>
            </li>
          </ul>
        </div>
        {/* 一、場館資料 */}
        <section id="centerInformation">
          {/* 基本資料 */}
          <div class="basicVenueInfo">
            <div class="informationLeft">
              {/* 標題 */}
              <div class="centermenuTitle">
                <h2>基本資料</h2>
                <span class="subtitle">Basic Venue Info</span>
              </div>

              <hr class="divider"></hr>
              <ul>
                <li>
                  <strong>地址</strong>
                  <br />
                  100 台北市 中正區 濟南路一段 321號 1、2樓
                </li>
                <li>
                  <strong>營業時間</strong>
                  <br />
                  24小時
                </li>
                <li>
                  <strong>有無停車場</strong>
                  <br />有 100 台北市 中正區 濟南路一段 321號 B1
                </li>
                <li>
                  <strong>大眾運輸</strong>
                  <br />
                  捷運善導寺站3號出口、公車123號、456號、789號
                </li>
              </ul>
            </div>
            <div class="informationRight">
              <img src="./images/map.png" alt="場館地圖位置" />
            </div>
          </div>
          {/* 場景外觀 */}
          <div class="venueExterior">
            {/* 標題 */}
            <div class="centermenuTitle">
              <h2>場館外觀</h2>
              <span class="subtitle"> Venue Exterior</span>
            </div>
            <hr class="divider"></hr>
            {/* 場景外觀的照片 */}
            <div class="centerPhotos">
              <button>‹</button>
              <img src="/images/center01.jpg" alt="外觀照片1" />
              <img src="/images/center02.jpg" alt="外觀照片2" />
              <img src="/images/center03.jpg" alt="外觀照片3" />
              <button>›</button>
            </div>
          </div>
          {/* 入場費用+聯絡方式 */}
          <div class="costContact">
            {/* 入場費用 */}
            <div class="entranceFee">
              {/* 標題 */}
              <div class="centermenuTitle">
                <h2>入場費用</h2>
                <span class="subtitle">Entrance Fee</span>
              </div>
              <hr class="divider"></hr>

              <ul>
                <li>
                  <strong>單次入場</strong>
                  <br />
                  $50/小時
                  <br />
                  $150/單日無限時
                </li>
                <li>
                  <strong>合作會員</strong>
                  <br />
                  $788/月
                  <br />
                  $9000/年
                  <br />
                </li>
              </ul>
            </div>
            {/* 聯絡方式 */}
            <div class="contactInfo">
              <div class="centermenuTitle">
                <h2>聯絡方式</h2>
                <span class="subtitle">Contact Info.</span>
              </div>
              <hr class="divider"></hr>
              <ul>
                <li>
                  <strong>連絡電話</strong>
                  <br />
                  (02)12345678
                  <br />
                  (02)12345678
                  <br />
                </li>
                <li>
                  <strong>社群媒體</strong>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 二、環境設施 */}
        <section id="facilities">
          {/* 有氧器材 */}
          <div class="venueExterior">
            <div class="centermenuTitle">
              <h2>有氧器材</h2>
              <span class="subtitle">Cardio Equipment Area</span>
            </div>
            <hr class="divider"></hr>

            {/* 有氧器材的照片 */}
            <div class="centerPhotos">
              <button>‹</button>
              <img src="/images/cardioEquipment01.jpg" alt="有氧器材照片1" />
              <img src="/images/cardioEquipment02.jpg" alt="有氧器材照片2" />
              <img src="/images/cardioEquipment03.jpg" alt="有氧器材照片3" />
              <button>›</button>
            </div>
            <div>設備器材</div>
            <hr />
            <div>跑步機 飛輪機 滑步機 登階機 划船機 戰繩設備 壺鈴</div>
          </div>
          {/* 重訓器材(X) */}
          <div class="weightTrainingArea">
            <div class="centermenuTitle">
              <h2>重訓器材</h2>
              <span class="subtitle">Weight Training Area</span>
            </div>
            <hr class="divider"></hr>

            {/* 重訓器材的照片 */}
            <div class="weightTrainingAreaPhotos">
              <button>‹</button>
              <img src="/images/weightTraining01.jpg" alt="重訓器材照片1" />
              <img src="/images/weightTraining02.jpg" alt="重訓器材照片2" />
              <img src="/images/weightTraining03.jpg" alt="重訓器材照片3" />
              <button>›</button>
            </div>
            <div>設備器材</div>
            <hr />
            <div>跑步機 飛輪機 滑步機 登階機 划船機 戰繩設備 壺鈴</div>
          </div>
          {/* 更衣淋浴(X) */}
          <div class="showerArea">
            <div class="centermenuTitle">
              <h2>更衣淋浴</h2>
              <span class="subtitle">Changing & Shower Area</span>
            </div>
            <hr class="divider"></hr>

            {/* 更衣淋浴的照片 */}
            <div class="showerAreaPhotos">
              <button>‹</button>
              <img src="/images/showerArea01.jpg" alt="更衣淋浴照片1" />
              <img src="/images/showerArea02.jpg" alt="更衣淋浴照片2" />
              <button>›</button>
            </div>
            <div>設備器材</div>
            <hr class="divider"></hr>
            <div>跑步機 飛輪機 滑步機 登階機 划船機 戰繩設備 壺鈴</div>
          </div>
        </section>

        {/* 三、私人教練 */}
        <section id="fitnessTrainer">
          {/* 男性教練 */}
          <div class="trainers">
            <h2>男性教練</h2>
            <span class="subtitle">Male Trainers</span>
            <hr class="divider"></hr>
          </div>
          {/* 女性教練 */}
          <div class="trainers">
            <h2>女性教練</h2>
            <span class="subtitle">Female Trainers</span>
            <hr class="divider"></hr>
          </div>
        </section>
      </div>
    </>
  );
}
export default CenterNavbar;
