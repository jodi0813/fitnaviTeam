import "./Coach.scss";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import { cities, taipeiDistricts } from "../../data/locations";
function Nutritionist() {
  const nutritionistList = [
    {
      name: "美琳 Meilin",
      role: "營養師",
      hashtags: ["均衡飲食", "健康飲食", "營養規劃"],
      description: "具備臨床營養專業背景，提供個人化飲食建議，幫助你從根本改善體質，達到理想健康目標。",
      imageSrc: "/images/nutritionist01.jpg",
    },
    {
      name: "安娜 Anna",
      role: "營養師",
      hashtags: ["減重控制", "飲食管理", "增肌飲食"],
      description: "對於體重管理與飲食設計具備豐富經驗，幫助學員建立穩定飲食習慣，實現長期健康。",
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
      description: "結合科學營養知識，協助改善飲食一點一點進步，是營養人生的一大步。",
      imageSrc: "/images/nutritionist04.jpg",
    },
    {
      name: "毛毛 Evelyn",
      role: "營養師",
      hashtags: ["青少年營養", "營養建議", "飲食改善"],
      description: "善於針對各年齡族群提供飲食建議，讓孩子與大人都能一起朝向健康邁進。",
      imageSrc: "/images/nutritionist05.jpg",
    },
    {
      name: "阿皓 Ben",
      role: "營養師",
      hashtags: ["運動營養", "飲食指導", "增肌飲食"],
      description: "透過運動營養與飲食控制，協助運動者達成體態與營養的雙重目標。",
      imageSrc: "/images/nutritionist06.jpg",
    },
    {
      name: "雅婷 Yating",
      role: "營養師",
      hashtags: ["疾病預防", "教育飲食", "營養配方"],
      description: "具備臨床與團體營養經驗，透過營養知識教育與飲食策略改善學員的飲食行為。",
      imageSrc: "/images/nutritionist07.jpg",
    },
    {
      name: "凱文 Kevin",
      role: "營養師",
      hashtags: ["健康飲食", "慢性病管理", "營養配方"],
      description: "根據不同族群的身體狀況，擬定最合適的營養策略，是你健康路上的營養搭檔。",
      imageSrc: "/images/nutritionist08.jpg",
    },
    {
      name: "景雯 Jingwen",
      role: "營養師",
      hashtags: ["體態管理", "減重飲食", "飲食教育"],
      description: "從科學出發，協助建立有效的飲食習慣，讓營養不再只是壓力，而是支持妳的自信來源。",
      imageSrc: "/images/nutritionist09.jpg",
    },
  ];
  return (
    <>
      <div id="coachMain">
        <MainTitle title1="營養師" title2="找到專屬你的營養師"/>
         <div className="searchBox">
          <form
            action=""
            method="post"
            name="personal-search-form"
            id="personal-search-form"
            title="營養師搜尋"
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
              <option value="">諮詢需求</option>
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
          <div className="all-coach">全部營養師</div>
          {/* 教練小卡 */}
          <div className="coachNineCards">
            {nutritionistList.map((coach, i) => (
              <CoachCard
                key={i}
                name={coach.name}
                role={coach.role}
                hashtags={coach.hashtags}
                description={coach.description}
                imageSrc={coach.imageSrc}
              />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
export default Nutritionist;
