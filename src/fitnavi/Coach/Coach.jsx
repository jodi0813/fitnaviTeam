import "./Coach.scss";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import { cities, taipeiDistricts } from "../../data/locations";
function Coach() {
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
      name: "艾瑪 Emma",
      role: "教練",
      hashtags: ["有氧訓練", "肌耐力", "營養搭配"],
      description:
        "透過專業課表與飲食建議，協助你建立健康生活風格，輕鬆達成訓練目標。",
      imageSrc: "/images/coach05.jpg",
    },
    {
      name: "莉娜 Lina",
      role: "教練",
      hashtags: ["伸展放鬆", "核心穩定", "專注飲食"],
      description:
        "透過體態評估與訓練規劃，協助學員強化核心與柔軟度，提升整體體能表現。",
      imageSrc: "/images/coach06.jpg",
    },
    {
      name: "文彥 Wenyen",
      role: "教練",
      hashtags: ["運動目標", "體能提升", "燃燒脂肪"],
      description:
        "專注於運動後的恢復與預防傷害，讓你在安全的環境中達到最佳效果。健康和成果，我一起陪伴你實現。",
      imageSrc: "/images/coach07.jpg",
    },
    {
      name: "詹姆斯 James",
      role: "教練",
      hashtags: ["增肌訓練", "器械教學", "飲食管理"],
      description:
        "專業健身訓練教練，提供一對一課程與飲食建議，讓訓練更有效率。",
      imageSrc: "/images/coach08.jpg",
    },

  ];
  return (
    <>
      <div id="coachMain">
        <MainTitle title1="健身教練" title2="找到專屬你的健身教練"/>
         <div className="searchBox">
          <form
            action=""
            method="post"
            name="personal-search-form"
            id="personal-search-form"
            title="健身教練搜尋"
          >
            <label htmlFor="area"></label>
            <select name="area" id="area">
                <option value="">請選擇縣市</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
            </select>
            <label htmlFor="trainingNeeds"></label>
            <select name="trainingNeeds" id="trainingNeeds">
              <option value="">訓練需求</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <label htmlFor="sex"></label>
            <select name="sex" id="sex">
              <option value="性別">性別</option>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
            <label htmlFor="keyword-search"></label>
            <input
              type="search"
              name="keyword-search"
              id="keyword-search"
              placeholder="關鍵字搜尋"
            ></input>
            <input type="submit" value="搜尋" className="submit"></input>
          </form>
        </div>
        <div className="allCoachCards">
          <div className="all-coach">全部教練</div>
          {/* 教練小卡 */}
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
      </div>
    </>
  );
}
export default Coach;
