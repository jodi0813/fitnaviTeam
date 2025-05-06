import { useState } from "react";
import { Link } from "react-router-dom";
import "./CenterNavbar.scss";
import Subtitle from "../../components/Title/Subtitle";
import CoachCard from "../../components/CoachCard";
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
        {activeTab === "centerInformation" && (
          /* 一、場館資料 */
          <div id="centerInformation">
            {/* 1.基本資料 */}
            <div className="basicVenueInfo">
              <div className="informationLeft">
                {/* 標題 */}
                <Subtitle subtitle="基本資料" subtitleEN="Basic Venue Info" />

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
              <Subtitle subtitle="場館外觀" subtitleEN="Venue Exterior" />
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
                <Subtitle subtitle="入場費用" subtitleEN="Entrance Fee" />
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
                <Subtitle subtitle="聯絡方式" subtitleEN="Contact Info." />

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
                <Subtitle
                  subtitle="有氧器材"
                  subtitleEN="Cardio Equipment Area"
                />

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
                <Subtitle
                  subtitle="重訓器材"
                  subtitleEN="Weight Training Area"
                />
                {/* 重訓器材的照片 */}
                <div className="weightTrainingAreaPhotos">
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
              <div className="showerArea">
                <Subtitle
                  subtitle="更衣淋浴"
                  subtitleEN="Changing & Shower Area"
                />
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
              <div className="trainersCards">
                {/* 男性教練 */}
                <Subtitle subtitle="男性教練" subtitleEN="Male Trainers" />
                <div className="threeCards">
                  <CoachCard
                    name="飛飛 Feifei"
                    role="教練"
                    hashtags={["增肌減脂", "健身計畫", "個人訓練"]}
                    description="具有多年健身教學經驗，幫助學員設定合適的健身目標與計劃。讓你以專業的指導達到最佳成果。"
                    imageSrc="/images/coach03.jpg"
                  />
                  <CoachCard
                    name="文彥 Wenyen"
                    role="教練"
                    hashtags={["運動目標", "體能提升", "燃燒脂肪"]}
                    description="專注於運動後的恢復與預防傷害，讓你在安全的環境中達到最佳效果。健康和成果，我一起陪伴你實現。"
                    imageSrc="/images/coach07.jpg"
                  />
                  <CoachCard
                    name="文彥 Wenyen"
                    role="教練"
                    hashtags={["運動目標", "體能提升", "燃燒脂肪"]}
                    description="專注於運動後的恢復與預防傷害，讓你在安全的環境中達到最佳效果。健康和成果，我一起陪伴你實現。"
                    imageSrc="/images/coach16.jpg"
                  />
                </div>
              </div>
              {/* 女性教練 */}
              <div className="trainersCards">
                <Subtitle subtitle="女性教練" subtitleEN="Female Trainers" />
                <div className="threeCards">
                  <CoachCard
                    name="蘇菲亞 Sophia"
                    role="教練"
                    hashtags={["專業指導", "體能提升", "科學健身"]}
                    description="擅長增肌、減脂與身體雕塑，根據學員的需求制定訓練目標。無論你的目標是什麼，我都能幫助你實現。"
                    imageSrc="/images/coach01.jpg"
                  />
                  <CoachCard
                    name="蘭娜 Lanna"
                    role="教練"
                    hashtags={["正確訓練", "體能提升"]}
                    description="提供專業的健身計劃與飲食建議，讓你在最短的時間內達成最好的效果。讓每一個動作都充滿目的。"
                    imageSrc="/images/coach02.jpg"
                  />
                  <CoachCard
                    name="莉莉 Lily"
                    role="教練"
                    hashtags={["健身生活", "增肌減脂", "個人訓練"]}
                    description="結合TRX、功能性訓練與減脂訓練，我專注於幫助學員提升全身力量與協調。透過有效的訓練計劃，快速達成減脂與塑形目標。"
                    imageSrc="/images/coach04.jpg"
                  />
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
export default CenterNavbar;
