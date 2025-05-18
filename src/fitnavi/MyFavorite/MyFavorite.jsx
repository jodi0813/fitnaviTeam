import { useState } from "react";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import "../Coach/Coach.scss";
function MyFavorite() {
  const [activeTab, setActiveTab] = useState("allFavoriteCards");

  const coachList = [
    {
      name: "張莉菈 Lila",
      role: "教練",
      hashtags: ["TRX", "功能性訓練", "訓練動機"],
      description:
        "結合 TRX、功能訓練與動力引導，幫助學員突破瓶頸，養成穩定運動習慣。",
      imageSrc: "/images/coach09.jpg",
    },
    {
      name: "蘇菲亞 Sophia",
      role: "教練",
      hashtags: ["專業指導", "體能提升", "科學健身"],
      description:
        "擅長增肌、減脂與身體雕塑，根據學員的需求制定訓練目標。無論你的目標是什麼，我都能幫助你實現。",
      imageSrc: "/images/coach01.jpg",
    },
    {
      name: "蘭娜 Lanna",
      role: "教練",
      hashtags: ["塑身訓練", "運動飲食", "專業規劃"],
      description:
        "擁有豐富健身指導經驗，提供客製化課程，協助學員達成理想體態。",
      imageSrc: "/images/coach02.jpg",
    },
    {
      name: "飛飛 Feifei",
      role: "教練",
      hashtags: ["增肌減脂", "健身計畫", "個人訓練"],
      description:
        "具有多年健身教學經驗，幫助學員設定合適的健身目標與計劃。讓你以專業的指導達到最佳成果。",
      imageSrc: "/images/coach03.jpg",
    },
    {
      name: "莉莉 Lily",
      role: "教練",
      hashtags: ["核心訓練", "肌力訓練", "個人訓練"],
      description:
        "擁有國內外多項認證與豐富教學經驗，幫助學員改善體態，養成健康運動習慣。",
      imageSrc: "/images/coach04.jpg",
    },
    {
      name: "美琳 Meilin",
      role: "營養師",
      hashtags: ["均衡飲食", "健康飲食", "營養規劃"],
      description:
        "具備臨床營養專業背景，提供個人化飲食建議，幫助你從根本改善體質，達到理想健康目標。",
      imageSrc: "/images/nutritionist01.jpg",
    },
    {
      name: "安娜 Anna",
      role: "營養師",
      hashtags: ["減重控制", "飲食管理", "增肌飲食"],
      description:
        "對於體重管理與飲食設計具備豐富經驗，幫助學員建立穩定飲食習慣，實現長期健康。",
      imageSrc: "/images/nutritionist02.jpg",
    },
    {
      name: "艾拉 Ella",
      role: "營養師",
      hashtags: ["臨床營養", "疾病飲食", "營養需求"],
      description: "擅長依據個人健康狀況調整飲食方案，讓營養成為你的生活後盾。",
      imageSrc: "/images/nutritionist03.jpg",
    },
    {
      name: "鈺婷 Yuting",
      role: "營養師",
      hashtags: ["健康促進", "教育飲食計劃"],
      description:
        "結合科學營養知識，協助改善飲食一點一點進步，是營養人生的一大步。",
      imageSrc: "/images/nutritionist04.jpg",
    },
  ];
  /* 統計有幾位教練跟營養師 */
  const coachCount = coachList.filter((item) => item.role === "教練").length;
  const nutritionistCount = coachList.filter(
    (item) => item.role === "營養師"
  ).length;
  return (
    <>
      <div id="coachMain">
        <MainTitle title1="" title2="別錯過他們的精彩課程" />

        <div className="favoriteBt">
          <div className="favoriteBt1">
            <button
              className={
                activeTab === "allFavoriteCards"
                  ? "favoriteActive"
                  : "favoriteNoActive"
              }
              onClick={() => setActiveTab("allFavoriteCards")}
            >
              全部
            </button>
            <button
              className={
                activeTab === "CoachFavoriteCards"
                  ? "favoriteActive"
                  : "favoriteNoActive"
              }
              onClick={() => setActiveTab("CoachFavoriteCards")}
            >
              教練
            </button>
            <button
              className={
                activeTab === "NutriIntroFavoriteCards"
                  ? "favoriteActive"
                  : "favoriteNoActive"
              }
              onClick={() => setActiveTab("NutriIntroFavoriteCards")}
            >
              營養師
            </button>
          </div>
          <div className="favorite-count">
            <div>
              <span className="c-count">{coachCount}</span> 位教練
            </div>
            <div>
              <span className="n-count">{nutritionistCount}</span> 位營養師
            </div>
          </div>
        </div>

        {activeTab === "allFavoriteCards" && (
          <div className="allCoachCards">
            {/* 小卡 */}
            <div className="coachNineCards">
              {coachList.map((coach, i) => (
                <CoachCard
                  key={i}
                  name={coach.name}
                  role={coach.role}
                  hashtags={coach.hashtags}
                  description={coach.description}
                  imageSrc={coach.imageSrc}
                />
              ))}
            </div>
          </div>
        )}
        {activeTab === "CoachFavoriteCards" && (
          <div className="allCoachCards">
            <div className="coachNineCards">
              {coachList
                .filter((coach) => coach.role === "教練")
                .map((coach, i) => (
                  <CoachCard
                    key={i}
                    name={coach.name}
                    role={coach.role}
                    hashtags={coach.hashtags}
                    description={coach.description}
                    imageSrc={coach.imageSrc}
                  />
                ))}
            </div>
          </div>
        )}
        {activeTab === "NutriIntroFavoriteCards" && (
          <div className="allCoachCards">
            <div className="coachNineCards">
              {coachList
                .filter((coach) => coach.role === "營養師")
                .map((coach, i) => (
                  <CoachCard
                    key={i}
                    name={coach.name}
                    role={coach.role}
                    hashtags={coach.hashtags}
                    description={coach.description}
                    imageSrc={coach.imageSrc}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default MyFavorite;
