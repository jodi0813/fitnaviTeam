import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Coach.scss";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import { cities, taipeiDistricts } from "../../data/locations";
import { nutritionOptions } from "../../data/hashtag";
import Pagination from "../../components/Pagination/Pagination";

function Nutritionist() {
  const nutritionistList = [
    {
      name: "美琳 Meilin",
      role: "營養師",
      hashtags: ["營養攝取", "體重控制", "客製化飲食計畫"],
      description:
        "關心您的每一餐，專注於為您提供最佳的營養建議。透過改善飲食，讓您的健康變得更加輕鬆。",
      imageSrc: "/images/nutritionist01.jpg",
      city: "基隆市",
      sex: "女",
    },
    {
      name: "安娜 Anna",
      role: "營養師",
      hashtags: ["運動員營養", "減脂瘦身", "營養配方"],
      description:
        "透過飲食管理達到最好的體態與健康。幫助您保持活力，並提供有趣且簡單的飲食規劃。",
      imageSrc: "/images/nutritionist02.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "艾拉 Ella",
      role: "營養師",
      hashtags: ["減脂瘦身", "飲食療法", "專業建議"],
      description:
        "致力於幫助每位客戶找到最合適的營養方案，讓健康成為日常。擁有多年臨床經驗，專注於個性化飲食指導。",
      imageSrc: "/images/nutritionist03.jpg",
      city: "新北市",
      sex: "女",
    },
    {
      name: "鈺婷 Yuting",
      role: "營養師",
      hashtags: ["健康飲食", "素食營養規劃"],
      description:
        "我相信飲食是健康的根本，專業指導幫助您達成理想體重。提供實用的營養建議，讓您輕鬆養成好習慣。",
      imageSrc: "/images/nutritionist04.jpg",
      city: "桃園市",
      sex: "女",
    },
    {
      name: "毛毛 Evelyn",
      role: "營養師",
      hashtags: ["#身心健康", "外食族營養調整", "飲食專家"],
      description:
        "專業的營養指導，幫助您改善生活品質，讓健康飲食成為生活的一部分。每個人都能從中受益。",
      imageSrc: "/images/nutritionist05.jpg",
      city: "新竹市",
      sex: "女",
    },
    {
      name: "阿皓 Ben",
      role: "營養師",
      hashtags: ["女性孕期營養", "飲食建議", "膳食平衡"],
      description:
        "透過合理的飲食規劃，協助您實現健康的生活方式。每一口食物，都是為健康加分的機會。",
      imageSrc: "/images/nutritionist06.jpg",
      city: "新竹縣",
      sex: "男",
    },
    {
      name: "雅婷 Yating",
      role: "營養師",
      hashtags: ["營養指導", "減脂瘦身", "增肌增重"],
      description:
        "擁有營養學專業背景，為您提供最有效的飲食指導。無論是減脂還是增肌，我都有專屬的方案。",
      imageSrc: "/images/nutritionist07.jpg",
      city: "苗栗縣",
      sex: "女",
    },
    {
      name: "凱文 Kevin",
      role: "營養師",
      hashtags: ["青少年營養", "銀髮族營養", "食材搭配"],
      description:
        "從飲食到生活方式的全方位建議，幫助您改善整體健康。每一天的飲食，都是朝著健康邁進的一步。",
      imageSrc: "/images/nutritionist08.jpg",
      city: "台中市",
      sex: "男",
    },
    {
      name: "景雯 Jingwen",
      role: "營養師",
      hashtags: ["營養管理", "體態維持", "飲食計劃"],
      description:
        "提供科學的營養分析與飲食計劃，幫助您打造健康的身體與生活。每一餐，都是提升健康的機會。",
      imageSrc: "/images/nutritionist09.jpg",
      city: "彰化縣",
      sex: "女",
    },
    {
      name: "怡婷 Emily",
      role: "營養師",
      hashtags: ["健康飲食入門", "飲食教育", "體態維持"],
      description: "擅長健康飲食觀念建立，幫助初學者建立良好飲食與生活習慣。",
      imageSrc: "/images/nutritionist10.jpg",
      city: "南投縣",
      sex: "女",
    },
    {
      name: "承豪 Ethan",
      role: "營養師",
      hashtags: ["增肌增重", "運動員營養", "蛋白質攝取"],
      description: "專為增肌目標設計營養方案，強調運動與飲食的雙向協同。",
      imageSrc: "/images/nutritionist11.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "妍安 Claire",
      role: "營養師",
      hashtags: ["減脂瘦身", "客製化飲食計畫", "代謝提升"],
      description: "設計易執行的減脂餐單，提升代謝與滿足感，健康瘦身不挨餓。",
      imageSrc: "/images/nutritionist12.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "柏任 Ryan",
      role: "營養師",
      hashtags: ["外食族營養調整", "體態維持", "營養管理"],
      description: "協助外食族在有限條件中達到營養平衡，避免隱藏熱量陷阱。",
      imageSrc: "/images/nutritionist13.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "昀潔 Kelly",
      role: "營養師",
      hashtags: ["女性孕期營養", "飲食教育", "營養補充"],
      description: "專精孕期與哺乳營養，給媽媽與寶寶最佳的成長支持。",
      imageSrc: "/images/nutritionist14.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "彥廷 Lucas",
      role: "營養師",
      hashtags: ["素食營養規劃", "均衡飲食", "健康飲食入門"],
      description: "提供多元素食選擇與營養搭配，讓植物性飲食健康又安心。",
      imageSrc: "/images/nutritionist15.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "曼琪 Ivy",
      role: "營養師",
      hashtags: ["體態維持", "減脂瘦身", "熱量計算"],
      description: "精準控制熱量與營養比例，幫助學員有效維持理想體態。",
      imageSrc: "/images/nutritionist16.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "冠凱 Nathan",
      role: "營養師",
      hashtags: ["運動員營養", "增肌增重", "訓練補給"],
      description: "依不同運動類型規劃專屬營養補給，提升運動表現與恢復力。",
      imageSrc: "/images/nutritionist17.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "嘉萱 Sophie",
      role: "營養師",
      hashtags: ["青少年營養", "成長期飲食", "均衡營養"],
      description: "關注青少年成長所需，設計適齡且均衡的營養與飲食指導。",
      imageSrc: "/images/nutritionist18.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "宗翰 Leo",
      role: "營養師",
      hashtags: ["銀髮族營養", "健康飲食入門", "肌力維持"],
      description: "專為中高齡族群設計易吸收的營養菜單，維持活力與行動力。",
      imageSrc: "/images/nutritionist19.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "佩瑜 Angela",
      role: "營養師",
      hashtags: ["客製化飲食計畫", "減脂瘦身", "飲食追蹤"],
      description: "擅長分析個人體質與飲食習慣，提供專屬瘦身飲食策略。",
      imageSrc: "/images/nutritionist20.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "立翔 Eric",
      role: "營養師",
      hashtags: ["外食族營養調整", "體態維持", "簡易飲食搭配"],
      description: "協助忙碌上班族在便利飲食中吃出健康與體態管理成果。",
      imageSrc: "/images/nutritionist21.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "芯如 Annie",
      role: "營養師",
      hashtags: ["健康飲食入門", "素食營養規劃", "基礎觀念建立"],
      description: "適合想培養飲食習慣的入門學員，強調基礎觀念與實作。",
      imageSrc: "/images/nutritionist22.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "柏喬 Kevin",
      role: "營養師",
      hashtags: ["青少年營養", "客製化飲食計畫", "營養追蹤"],
      description: "善於與青少年互動，透過記錄與回饋優化營養攝取與狀態。",
      imageSrc: "/images/nutritionist23.jpg",
      city: "台北市",
      sex: "男",
    },
    {
      name: "若彤 Alice",
      role: "營養師",
      hashtags: ["女性孕期營養", "減脂瘦身", "產後體態恢復"],
      description: "協助孕產婦度過身體轉變期，兼顧營養補給與體態管理。",
      imageSrc: "/images/nutritionist24.jpg",
      city: "台北市",
      sex: "女",
    },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filteredCards, setFilteredCards] = useState(nutritionistList);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    const result = nutritionistList.filter((nutritionist) => {
      const matchCity =
        selectedCity === "" || nutritionist.city === selectedCity;
      const matchSex = selectedSex === "" || nutritionist.sex === selectedSex;
      const matchHashtag =
        selectedHashtag === "" || nutritionist.hashtags.includes(selectedHashtag);
      const matchKeyword =
        keyword === "" ||
        nutritionist.name.includes(keyword) ||
        nutritionist.description.includes(keyword) ||
        nutritionist.hashtags.some((tag) => tag.includes(keyword));
      return matchCity && matchSex && matchHashtag && matchKeyword;
    });
    setFilteredCards(result);
  };

  const itemsPerPage = 9;
  const pageCount = Math.ceil(filteredCards.length / itemsPerPage);
  const currentItems = filteredCards.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );


  
/* 首頁連過來 */
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const hashtag = params.get("hashtags");

    if (hashtag) {
      setSelectedHashtag(hashtag);
    }
  }, [location.search]);
  useEffect(() => {
    if (selectedHashtag !== "") {
      handleSearch({ preventDefault: () => {} }); // 模擬表單提交
    }
  }, [selectedHashtag]);

  return (
    <>
      <div id="coachMain">
        <MainTitle title1="營養師" title2="找到專屬你的營養師" />
        <div className="searchBox">
          <form
            action=""
            method="post"
            name="personal-search-form"
            id="personal-search-form"
            title="營養師搜尋"
            onSubmit={handleSearch}
          >
            <label htmlFor="area"></label>
            <select
              name="area"
              id="area"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">請選擇縣市</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <label htmlFor="trainingNeeds"></label>
            <select
              name="trainingNeeds"
              id="trainingNeeds"
              value={selectedHashtag}
              onChange={(e) => setSelectedHashtag(e.target.value)}
            >
              <option value="">諮詢需求</option>
              {nutritionOptions.map((nutrition) => (
                <option key={nutrition} value={nutrition}>
                  {nutrition}
                </option>
              ))}
            </select>
            <label htmlFor="sex"></label>
            <select
              name="sex"
              id="sex"
              value={selectedSex}
              onChange={(e) => setSelectedSex(e.target.value)}
            >
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
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            ></input>
            <input type="submit" value="搜尋" className="submit" />
          </form>
        </div>

        <div className="allCoachCards">
          <div className="all-coach">全部營養師</div>
          {/* 教練小卡 */}

          {currentItems.length === 0 ? (
            <div className="noResult">找不到符合條件的教練</div>
          ) : (
            <div className="coachNineCards">
              {currentItems.map((coach, i) => (
                <CoachCard
                  key={i}
                  name={coach.name}
                  role={coach.role}
                  hashtags={coach.hashtags}
                  description={coach.description}
                  imageSrc={coach.imageSrc}
                  link="/NutriIntro"
                />
              ))}
            </div>
          )}
        </div>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
export default Nutritionist;
