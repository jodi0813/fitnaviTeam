import { useState } from "react";
import "./CenterNavbar.scss";
import Subtitle from "../../components/Title/Subtitle";
import CoachCard from "../../components/CoachCard";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si"; // LINE 要用 Simple Icons 庫
import { FaSquareCheck } from "react-icons/fa6";
function CenterNavbar() {
  const [activeTab, setActiveTab] = useState("centerInformation"); // 預設是場館資料
  return (
    <>
      <div className="centerSection">
        <div className="centerMenu">
          {/* 中間的選單列 */}
          <div className="centerMenuBt">
            <button
              className={
                activeTab === "centerInformation"
                  ? "centerActive"
                  : "centerNoActive"
              }
              onClick={() => setActiveTab("centerInformation")}
            >
              場館資料
            </button>
            <button
              className={
                activeTab === "facility" ? "centerActive" : "centerNoActive"
              }
              onClick={() => setActiveTab("facility")}
            >
              環境設施
            </button>
            <button
              className={
                activeTab === "fitnessTrainer"
                  ? "centerActive"
                  : "centerNoActive"
              }
              onClick={() => setActiveTab("fitnessTrainer")}
            >
              私人教練
            </button>
          </div>
        </div>

        {activeTab === "centerInformation" && (
          /* 一、場館資料 */
          <section id="centerInformation">
            {/* 1.基本資料 */}
            <div className="basicVenueInfo">
              <Subtitle subtitle="基本資料" subtitleEN="Basic Venue Info" />
              <div className="informationSection">
                <div className="informationLeft">
                  <div className="contactInfoBox">
                    <div className="contactInfo1">
                      <div className="contactInfo2">
                        <span class="dot">•</span>
                        地址
                      </div>
                      <div className="contactInfo3">
                        <div className="contactInfo4">
                          100 台北市中歪區濟州路零段666號
                        </div>
                      </div>
                    </div>
                    <div className="contactInfo1">
                      <div className="contactInfo2">
                        <span class="dot">•</span>
                        營業時間
                      </div>
                      <div className="contactInfo3">
                        <div className="contactInfo4">24小時</div>
                      </div>
                    </div>

                    <div className="contactInfo1">
                      <div className="contactInfo2">
                        <span class="dot">•</span>
                        有無停車場
                      </div>
                      <div className="contactInfo3">
                        <div className="contactInfo4">
                          有 <FaSquareCheck color="green" size={18} />
                          100 台北市 中正區 濟南路一段 321號 B1
                        </div>
                      </div>
                    </div>
                    <div className="contactInfo1">
                      <div className="contactInfo2">
                        <span class="dot">•</span>大眾運輸
                      </div>
                      <div className="contactInfo3">
                        <div className="contactInfo4">
                          捷運善導寺站3號出口、公車123號、456號、789號
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="informationRight">
                  <img src="./images/map.jpg" alt="場館地圖位置" />
                </div>
              </div>
            </div>
            {/* 場景外觀 */}
            <div className="venueExterior">
              {/* 標題 */}
              <Subtitle subtitle="場館外觀" subtitleEN="Venue Exterior" />
              {/* 場景外觀的照片 */}
              <div className="centerPhotosBox">
                <button>
                  <img src="./images/arrow-left.svg" alt="左箭頭" />
                </button>
                <div className="centerPhotos">
                  <img src="./images/center01.jpg" alt="外觀照片1" />
                  <img src="./images/center02-f.png" alt="外觀照片2" />
                  <img src="./images/center03.jpg" alt="外觀照片3" />
                </div>
                <button>
                  <img src="./images/arrow-right.svg" alt="右箭頭" />
                </button>
              </div>
            </div>
            {/* 入場費用+聯絡方式 */}
            <div className="costContact">
              {/* 入場費用 */}
              <div className="contactInfo">
                {/* 標題 */}
                <Subtitle subtitle="入場費用" subtitleEN="Entrance Fee" />
                <div className="contactInfoBox">
                  <div className="contactInfo1">
                    <div className="contactInfo2">
                      <span class="dot">•</span>
                      單次入場
                    </div>
                    <div className="contactInfo3">
                      <div className="contactInfo4">$50/小時</div>
                      <div className="contactInfo4">$150/單日無限時</div>
                    </div>
                  </div>
                  <div className="contactInfo1">
                    <div className="contactInfo2">
                      <span class="dot">•</span>
                      合作會員
                    </div>
                    <div className="contactInfo3">
                      <div className="contactInfo4">$788/月</div>
                      <div className="contactInfo4"> $9000/年</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 聯絡方式 */}
              <div className="contactInfo">
                <Subtitle subtitle="聯絡方式" subtitleEN="Contact Info." />
                <div className="contactInfoBox">
                  <div className="contactInfo1">
                    <div className="contactInfo2">
                      <span class="dot">•</span>
                      連絡電話
                    </div>
                    <div className="contactInfo3">
                      <div className="contactInfo4">(02)12345678</div>
                      <div className="contactInfo4">(02)12345678</div>
                    </div>
                  </div>
                  <div className="contactInfo1">
                    <div className="contactInfo2">
                      <span class="dot">•</span>
                      社群媒體
                    </div>
                    <div className="social-icons">
                      <SiLine size={32} color="#06C755" />
                      <FaFacebookF size={32} color="#1877F2" />
                      <FaInstagram size={32} color="#E1306C" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* 二、環境設施 */}
        {activeTab === "facility" && (
          <section id="facilities">
            {/* 有氧器材 */}
            <div className="venueExterior">
              <Subtitle
                subtitle="有氧器材"
                subtitleEN="Cardio Equipment Area"
              />
              {/* 有氧器材的照片 */}
              <div className="centerPhotosBox">
                <button>
                  <img src="./images/arrow-left.svg" alt="左箭頭" />
                </button>
                <div className="centerPhotos">
                  <img
                    src="./images/cardioEquipment01.jpg"
                    alt="有氧器材照片1"
                  />
                  <img
                    src="./images/cardioEquipment02.jpg"
                    alt="有氧器材照片2"
                  />
                  <img
                    src="./images/cardioEquipment03.jpg"
                    alt="有氧器材照片3"
                  />
                </div>
                <button>
                  <img src="./images/arrow-right.svg" alt="右箭頭" />
                </button>
              </div>
              <div className="center-introduce">
                <div className="center-sTitle">設備器材</div>
                <div className="center-introduceBox">
                  <span>跑步機 </span>
                  <span class="orandge-dot">•</span>
                  <span>飛輪機 </span>
                  <span class="orandge-dot">•</span>
                  <span>滑步機 </span>
                  <span class="orandge-dot">•</span>
                  <span>登階機 </span>
                  <span class="orandge-dot">•</span>
                  <span>划船機 </span>
                  <span class="orandge-dot">•</span>
                  <span> 戰繩設備 </span>
                  <span class="orandge-dot">•</span>
                  <span> 壺鈴 </span>
                </div>
              </div>
            </div>
            {/* 重訓器材(X) */}
            <div className="venueExterior">
              <Subtitle subtitle="重訓器材" subtitleEN="Weight Training Area" />
              {/* 重訓器材的照片 */}
              <div className="centerPhotosBox">
                <button>
                  <img src="./images/arrow-left.svg" alt="左箭頭" />
                </button>
                <div className="centerPhotos">
                  <img
                    src="./images/weightTraining01.jpg"
                    alt="重訓器材照片1"
                  />
                  <img
                    src="./images/weightTraining02.jpg"
                    alt="重訓器材照片2"
                  />
                  <img
                    src="./images/weightTraining03.jpg"
                    alt="重訓器材照片3"
                  />
                </div>
                <button>
                  <img src="./images/arrow-right.svg" alt="右箭頭" />
                </button>
              </div>
              <div className="center-introduce">
                <div className="center-sTitle">設備器材</div>
                <div className="center-introduceBox">
                  <span>啞鈴</span>
                  <span class="orandge-dot">•</span>
                  <span>深蹲架 </span>
                  <span class="orandge-dot">•</span>
                  <span>槓鈴 </span>
                  <span class="orandge-dot">•</span>
                  <span>Cable </span>
                  <span class="orandge-dot">•</span>
                  <span>槓片式機械式器材 </span>
                  <span class="orandge-dot">•</span>
                  <span> 機械式器材 </span>
                </div>
              </div>
            </div>
            {/* 更衣淋浴(X) */}
            <div className="venueExterior">
              <Subtitle
                subtitle="更衣淋浴"
                subtitleEN="Changing & Shower Area"
              />
              {/* 更衣淋浴的照片 */}
              <div className="centerPhotosBox">
                <button>
                  <img src="./images/arrow-left.svg" alt="左箭頭" />
                </button>
                <div className="centerPhotos">
                  <img src="./images/showerArea01.jpg" alt="更衣淋浴照片1" />
                  <img src="./images/showerArea02.jpg" alt="更衣淋浴照片2" />
                </div>
                <button>
                  <img src="./images/arrow-right.svg" alt="右箭頭" />
                </button>
              </div>
              <div className="center-introduce">
                <div className="center-sTitle">設備器材</div>
                <div className="center-introduceBox">
                  <span>置物櫃</span>
                  <span class="orandge-dot">•</span>
                  <span>吹風機 </span>
                  <span class="orandge-dot">•</span>
                  <span>小便斗 </span>
                  <span class="orandge-dot">•</span>
                  <span>蹲式馬桶 </span>
                  <span class="orandge-dot">•</span>
                  <span>洗手台 </span>
                  <span class="orandge-dot">•</span>
                  <span> 淋浴間 </span>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* 三、私人教練 */}
        {activeTab === "fitnessTrainer" && (
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
                  imageSrc="./images/coach03.jpg"
                />
                <CoachCard
                  name="文彥 Wenyen"
                  role="教練"
                  hashtags={["運動目標", "體能提升", "燃燒脂肪"]}
                  description="專注於運動後的恢復與預防傷害，讓你在安全的環境中達到最佳效果。健康和成果，我一起陪伴你實現。"
                  imageSrc="./images/coach07.jpg"
                />
                <CoachCard
                  name="詹姆斯 James"
                  role="教練"
                  hashtags={["健身啟發", "運動挑戰", "燃燒脂肪"]}
                  description="無論是增肌還是減脂，我會為你量身打造最佳的訓練計劃。讓我們一起實現更健康的未來。"
                  imageSrc="./images/coach08.jpg"
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
                  imageSrc="./images/coach01.jpg"
                />
                <CoachCard
                  name="蘭娜 Lanna"
                  role="教練"
                  hashtags={["正確訓練", "體能提升"]}
                  description="提供專業的健身計劃與飲食建議，讓你在最短的時間內達成最好的效果。讓每一個動作都充滿目的。"
                  imageSrc="./images/coach02.jpg"
                />
                <CoachCard
                  name="莉莉 Lily"
                  role="教練"
                  hashtags={["健身生活", "增肌減脂", "個人訓練"]}
                  description="結合TRX、功能性訓練與減脂訓練，我專注於幫助學員提升全身力量與協調。透過有效的訓練計劃，快速達成減脂與塑形目標。"
                  imageSrc="./images/coach04.jpg"
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
export default CenterNavbar;
