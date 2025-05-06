import { useState } from "react";
import { Link } from "react-router-dom";
import "./CenterNavbar.scss";
function CenterNavbar() {
  const [activeTab, setActiveTab] = useState("centerInformation"); // 預設是場館資料
  return (
    <>
      <div id="centerMenu">
        {/* 中間的選單列 */}
        <div className="centerMenuBt">
          <button
            className={activeTab === "centerInformation" ? "active" : ""}
            onClick={() => setActiveTab("centerInformation")}
          >
            場館資料
          </button>
          <button
            className={activeTab === "facility" ? "active" : ""}
            onClick={() => setActiveTab("facility")}
          >
            環境設施
          </button>
          <button
            className={activeTab === "fitnessTrainer" ? "active" : ""}
            onClick={() => setActiveTab("fitnessTrainer")}
          >
            私人教練
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "centerInformation" && (
            /* 一、場館資料 */
            <div id="centerInformation">
              {/* 1.基本資料 */}
              <div className="basicVenueInfo">
                <div className="informationLeft">
                  {/* 標題 */}
                  <div className="centermenuTitle">
                    <h2>基本資料</h2>
                    <div className="subtitleWrapper">
                      <span className="subtitle">Basic Venue Info</span>
                      <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                  </div>

                  <ul className="informationList">
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
                <div className="informationRight">
                  <img src="./images/map.png" alt="場館地圖位置" />
                </div>
              </div>
              {/* 場景外觀 */}
              <div className="venueExterior">
                {/* 標題 */}
                <div className="centermenuTitle">
                  <h2>場館外觀</h2>
                  <div className="subtitleWrapper">
                    <span className="subtitle"> Venue Exterior</span>
                    <div className="subtitleLine"></div> {/* 橫線 */}
                  </div>
                </div>
                {/* 場景外觀的照片 */}
                <div className="centerPhotos">
                  <button>‹</button>
                  <img src="/images/center01.jpg" alt="外觀照片1" />
                  <img src="/images/center02.jpg" alt="外觀照片2" />
                  <img src="/images/center03.jpg" alt="外觀照片3" />
                  <button>›</button>
                </div>
              </div>
              {/* 入場費用+聯絡方式 */}
              <div className="costContact">
                {/* 入場費用 */}
                <div className="contactInfo">
                  {/* 標題 */}
                  <div className="centermenuTitle">
                    <h2>入場費用</h2>
                    <div className="subtitleWrapper">
                      <span className="subtitle">Entrance Fee</span>
                      <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                  </div>
                  <ul className="informationList">
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
                <div className="contactInfo">
                  <div className="centermenuTitle">
                    <h2>聯絡方式</h2>
                    <div className="subtitleWrapper">
                      <span className="subtitle">Contact Info.</span>
                      <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                  </div>

                  <ul className="informationList">
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
            </div>
          )}
          {/* 二、環境設施 */}
          {activeTab === "facility" && (
            <div className="content">
              <section id="facilities">
                {/* 有氧器材 */}
                <div className="venueExterior">
                  <div className="centermenuTitle">
                    <h2>有氧器材</h2>
                    <div className="subtitleWrapper">
                      <span className="subtitle">Cardio Equipment Area</span>
                      <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                  </div>

                  {/* 有氧器材的照片 */}
                  <div className="centerPhotos">
                    <button>‹</button>
                    <img
                      src="/images/cardioEquipment01.jpg"
                      alt="有氧器材照片1"
                    />
                    <img
                      src="/images/cardioEquipment02.jpg"
                      alt="有氧器材照片2"
                    />
                    <img
                      src="/images/cardioEquipment03.jpg"
                      alt="有氧器材照片3"
                    />
                    <button>›</button>
                  </div>
                  <div>設備器材</div>
                  <hr />
                  <div>跑步機 飛輪機 滑步機 登階機 划船機 戰繩設備 壺鈴</div>
                </div>
                {/* 重訓器材(X) */}
                <div className="weightTrainingArea">
                  <div className="centermenuTitle">
                    <h2>重訓器材</h2>
                    <div className="subtitleWrapper">
                      <span className="subtitle">Weight Training Area</span>
                      <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                  </div>
                  <hr className="divider"></hr>

                  {/* 重訓器材的照片 */}
                  <div className="weightTrainingAreaPhotos">
                    <button>‹</button>
                    <img
                      src="/images/weightTraining01.jpg"
                      alt="重訓器材照片1"
                    />
                    <img
                      src="/images/weightTraining02.jpg"
                      alt="重訓器材照片2"
                    />
                    <img
                      src="/images/weightTraining03.jpg"
                      alt="重訓器材照片3"
                    />
                    <button>›</button>
                  </div>
                  <div>設備器材</div>
                  <hr />
                  <div>跑步機 飛輪機 滑步機 登階機 划船機 戰繩設備 壺鈴</div>
                </div>
                {/* 更衣淋浴(X) */}
                <div className="showerArea">
                  <div className="centermenuTitle">
                    <h2>更衣淋浴</h2>
                    <div className="subtitleWrapper">
                      <span className="subtitle">Changing & Shower Area</span>
                      <div className="subtitleLine"></div> {/* 橫線 */}
                    </div>
                  </div>
                  <hr className="divider"></hr>

                  {/* 更衣淋浴的照片 */}
                  <div className="showerAreaPhotos">
                    <button>‹</button>
                    <img src="/images/showerArea01.jpg" alt="更衣淋浴照片1" />
                    <img src="/images/showerArea02.jpg" alt="更衣淋浴照片2" />
                    <button>›</button>
                  </div>
                  <div>設備器材</div>
                  <hr className="divider"></hr>
                  <div>跑步機 飛輪機 滑步機 登階機 划船機 戰繩設備 壺鈴</div>
                </div>
              </section>
            </div>
          )}
          {/* 三、私人教練 */}
          {activeTab === "fitnessTrainer" && (
            <div className="content">
              <section id="fitnessTrainer">
                <div className="maleTrainersCards">
                {/* 男性教練 */}
                <div className="centermenuTitle">
                  <h2>男性教練</h2>
                  <div className="subtitleWrapper">
                    <span className="subtitle">Male Trainers</span>
                    <div className="subtitleLine"></div> {/* 橫線 */}
                  </div>
                </div>
                {/* 教練小卡3張 */}
                <div className="threeCards">
                <div className="coach-card">
                  <div className="image-container">
                    <img src="./images/trainer.png" alt="教練照片" />
                    <span className="label">教練</span>
                  </div>
                  <div className="coach-name">名字</div>
                  <div className="hashtag">
                    <a href="#">#專業</a>
                    <a href="#">#專業</a>
                    <a href="#">#專業</a>
                  </div>
                  <p className="coach-details">
                    這是教練或營養師的簡介內容，這是教練或營養師的簡介內容，這是教練或營養師的簡介內容。
                  </p>
                </div>
                <div className="coach-card">
                  <div className="image-container">
                    <img src="./images/trainer.png" alt="教練照片" />
                    <span className="label">教練</span>
                  </div>
                  <div className="coach-name">名字</div>
                  <div className="hashtag">
                    <a href="#">#專業</a>
                    <a href="#">#專業</a>
                    <a href="#">#專業</a>
                  </div>
                  <p className="coach-details">
                    這是教練或營養師的簡介內容，這是教練或營養師的簡介內容，這是教練或營養師的簡介內容。
                  </p>
                </div>
                <div className="coach-card">
                  <div className="image-container">
                    <img src="./images/trainer.png" alt="教練照片" />
                    <span className="label">教練</span>
                  </div>
                  <div className="coach-name">名字</div>
                  <div className="hashtag">
                    <a href="#">#專業</a>
                    <a href="#">#專業</a>
                    <a href="#">#專業</a>
                  </div>
                  <p className="coach-details">
                    這是教練或營養師的簡介內容，這是教練或營養師的簡介內容，這是教練或營養師的簡介內容。
                  </p>
                </div>
                </div>
                </div>
                {/* 女性教練 */}
                <div className="centermenuTitle">
                  <h2>女性教練</h2>
                  <div className="subtitleWrapper">
                    <span className="subtitle">Female Trainers</span>
                    <div className="subtitleLine"></div> {/* 橫線 */}
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CenterNavbar;
