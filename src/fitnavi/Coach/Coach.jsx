import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Coach.scss";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import { cities } from "../../data/locations";
import { trainingOptions } from "../../data/hashtag";
import Pagination from "../../components/Pagination/Pagination";


function CustomDropdown({ label, selected, onSelect, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-dropdown">
      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        {selected || label}
      </button>
      {open && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => {
                const value = option.startsWith("全部") ? "all" : option;
                onSelect(value);
                setOpen(false);
              }}
            >
              {option}
              <span className="arrow">›</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

//教練卡牌資料
function Coach() {
  const coachList = [
    {
      name: "張莉筠 Lila",
      role: "教練",
      hashtags: ["TRX懸吊", "功能性訓練", "減脂訓練"],
      description:
        "結合TRX、功能性訓練與減脂訓練，我專注於幫助學員提升全身力量與協調。",
      imageSrc: "./images/coach09.jpg",
      city: "基隆市",
      sex: "女",
    },
    {
      name: "蘇菲亞 Sophia",
      role: "教練",
      hashtags: ["減脂瘦身", "體能提升", "科學健身"],
      description:
        "擅長增肌、減脂與身體雕塑，根據學員的需求制定訓練目標。無論你的目標是什麼，我都能幫助你實現。",
      imageSrc: "./images/coach01.jpg",
      city: "基隆市",
      sex: "女",
    },
    {
      name: "蘭娜 Lanna",
      role: "教練",
      hashtags: ["正確訓練", "姿勢矯正", "專業規劃"],
      description:
        "擅長幫助學員調整體態與姿勢，達到平衡與協調。讓你每一次運動都更有效，更輕鬆。",
      imageSrc: "./images/coach02.jpg",
      city: "台北市",
      sex: "女",
    },
    {
      name: "飛飛 Feifei",
      role: "教練",
      hashtags: ["新手入門", "健身計畫", "強健體魄"],
      description:
        "針對初學者和進階者都有豐富的教學經驗，從零開始一步步引導。讓運動成為生活的一部分。",
      imageSrc: "./images/coach03.jpg",
      city: "新北市",
      sex: "男",
    },
    {
      name: "莉莉 Lily",
      role: "教練",
      hashtags: ["新手入門", "增肌塑形", "個人訓練"],
      description:
        "擁有國內外多項認證與豐富教學經驗，幫助學員改善體態，養成健康運動習慣。",
      imageSrc: "./images/coach04.jpg",
      city: "桃園市",
      sex: "女",
    },
    {
      name: "艾瑪 Emma",
      role: "教練",
      hashtags: ["健身轉型", "功能性訓練", "專業指導"],
      description:
        "提供專業的健身計劃與飲食建議，讓你在最短的時間內達成最好的效果。讓每一個動作都充滿目的。",
      imageSrc: "./images/coach05.jpg",
      city: "新竹市",
      sex: "女",
    },
    {
      name: "莉娜 Lina",
      role: "教練",
      hashtags: ["功能性訓練", "體態管理", "健康飲食"],
      description:
        "通過科學的訓練方法，幫助學員突破瓶頸，達到更高的運動表現。與我一起提升你的肌力和耐力。",
      imageSrc: "./images/coach06.jpg",
      city: "新竹縣",
      sex: "女",
    },
    {
      name: "文彥 Wenyen",
      role: "教練",
      hashtags: ["運動目標", "基礎體能", "燃燒脂肪"],
      description:
        "專注於運動後的恢復與預防傷害，讓你在安全的環境中達到最佳效果。健康和成果，我一起陪伴你實現。",
      imageSrc: "./images/coach07.jpg",
      city: "苗栗縣",
      sex: "男",
    },
    {
      name: "詹姆斯 James",
      role: "教練",
      hashtags: ["增肌塑形", "減脂瘦身", "器械教學"],
      description:
        "無論是增肌還是減脂，我會為你量身打造最佳的訓練計劃。讓我們一起實現更健康的未來。",
      imageSrc: "./images/coach08.jpg",
      city: "台中市",
      sex: "男",
    },

    {
      name: "小涵 Hannah",
      role: "教練",
      hashtags: ["瑜珈伸展", "核心訓練", "體態雕塑"],
      description:
        "擅長瑜珈與伸展訓練，幫助學員釋放壓力、提升柔軟度，一起找回身體的平衡與舒適。",
      imageSrc: "./images/coach10.jpg",
      city: "彰化縣",
      sex: "女",
    },
    {
      name: "阿哲 Jay",
      role: "教練",
      hashtags: ["爆發力", "增肌塑形", "自由重量"],
      description:
        "訓練就是要全力以赴！專注提升肌力與爆發力，打造強悍的運動表現。",
      imageSrc: "./images/coach11.jpg",
      city: "南投縣",
      sex: "男",
    },
    {
      name: "陳薇 Vivi",
      role: "教練",
      hashtags: ["皮拉提斯", "雕塑曲線", "肌耐力"],
      description:
        "融合皮拉提斯與核心訓練，強化深層肌群，讓你內外兼具的美與力。",
      imageSrc: "./images/coach12.jpg",
      city: "雲林縣",
      sex: "女",
    },
    {
      name: "洪磊 Leo",
      role: "教練",
      hashtags: ["HIIT", "燃脂訓練", "肌力提升"],
      description:
        "用高強度間歇訓練幫助你有效燃脂、提升心肺功能，訓練不浪費一分一秒。",
      imageSrc: "./images/coach13.jpg",
      city: "嘉義市",
      sex: "男",
    },
    {
      name: "楊艾咪 Amy",
      role: "教練",
      hashtags: ["姿勢矯正", "體態管理", "運動恢復"],
      description:
        "幫助你改善身體姿勢與不適，建立正確的動作模式，讓訓練更安全有效。",
      imageSrc: "./images/coach14.jpg",
      city: "嘉義縣",
      sex: "女",
    },
    {
      name: "威廉 William",
      role: "教練",
      hashtags: ["TRX懸吊", "核心穩定", "減脂瘦身"],
      description:
        "TRX訓練是我的強項，帶你有效強化核心、燃燒脂肪、提升協調性。",
      imageSrc: "./images/coach15.jpg",
      city: "台南市",
      sex: "男",
    },
    {
      name: "陳怡伶 Elaine",
      role: "教練",
      hashtags: ["減脂瘦身", "有氧訓練", "新手入門"],
      description:
        "不管你是健身新手或想減脂瘦身，我都能幫你找到合適的開始方式。",
      imageSrc: "./images/coach16.jpg",
      city: "高雄市",
      sex: "女",
    },
    {
      name: "阿傑 Jack",
      role: "教練",
      hashtags: ["基礎體能", "增肌塑形", "肌耐力"],
      description:
        "從基礎體能做起，打造扎實體態，漸進式提升你的每一寸肌肉力量。",
      imageSrc: "./images/coach17.jpg",
      city: "屏東縣",
      sex: "男",
    },
    {
      name: "柯蕾拉 Clara",
      role: "教練",
      hashtags: ["功能性訓練", "爆發力", "柔軟度提升"],
      description: "訓練不只是流汗，更是提升日常動作效率與運動表現的關鍵。",
      imageSrc: "./images/coach18.jpg",
      city: "宜蘭縣",
      sex: "女",
    },
    {
      name: "鄧凱 Derek",
      role: "教練",
      hashtags: ["拳擊訓練", "HIIT", "爆汗燃脂"],
      description: "結合拳擊與有氧燃脂課程，幫助你釋放壓力、強化心肺與肌力。",
      imageSrc: "./images/coach19.jpg",
      city: "花蓮縣",
      sex: "男",
    },
    {
      name: "艾琳 Irene",
      role: "教練",
      hashtags: ["姿勢矯正", "銀髮族適用", "柔軟訓練"],
      description: "專為中高齡設計的安全訓練內容，讓身體動得更好、日常更自如。",
      imageSrc: "./images/coach20.jpg",
      city: "台東縣",
      sex: "女",
    },
    {
      name: "湯姆 Tom",
      role: "教練",
      hashtags: ["新手入門", "基礎體能", "健康生活"],
      description:
        "循序漸進的健身計劃，最適合剛開始運動的你，一步步建立好習慣。",
      imageSrc: "./images/coach21.jpg",
      city: "澎湖縣",
      sex: "男",
    },
    {
      name: "瑞秋 Rachel",
      role: "教練",
      hashtags: ["瑜珈伸展", "皮拉提斯", "柔軟度提升"],
      description: "透過溫和而深層的瑜珈課程，帶領你感受每個動作的力量與靈活。",
      imageSrc: "./images/coach22.jpg",
      city: "金門縣",
      sex: "男",
    },
    {
      name: "柏睿 Brian",
      role: "教練",
      hashtags: ["肌耐力", "減脂瘦身", "爆發力"],
      description: "無論是馬拉松或健身比賽，我都能幫你訓練出不輕言放棄的身體。",
      imageSrc: "./images/coach23.jpg",
      city: "連江縣",
      sex: "男",
    },
    {
      name: "蘇菲 Sophie",
      role: "教練",
      hashtags: ["銀髮族適用", "姿勢矯正", "肌耐力"],
      description: "用心設計每一套適合銀髮族的動作，安全、穩定又不失挑戰。",
      imageSrc: "./images/coach24.jpg",
      city: "台北市",
      sex: "女",
    },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState(coachList);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(0); // 回到第一頁
    const result = coachList.filter((coach) => {
      const matchCity =
        selectedCity === "all" ||
        selectedCity === "" ||
        coach.city === selectedCity;
      const matchSex =
        selectedSex === "all" ||
        selectedSex === "" ||
        coach.sex === selectedSex;
      const matchHashtag =
        selectedHashtag === "all" ||
        selectedHashtag === "" ||
        coach.hashtags.includes(selectedHashtag);
      const matchKeyword =
        keyword === "" ||
        coach.name.includes(keyword) ||
        coach.description.includes(keyword) ||
        coach.hashtags.some((tag) => tag.includes(keyword));
      return matchCity && matchSex && matchHashtag && matchKeyword;
    });
    setFilteredCoaches(result);
  };

  //一頁有九張卡牌
  const itemsPerPage = 9;
  const pageCount = Math.ceil(filteredCoaches.length / itemsPerPage);
  const currentItems = filteredCoaches.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  /* 首頁連過來 */
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const hashtag = params.get("hashtag");

    if (hashtag) {
      setSelectedHashtag(hashtag);
      setTimeout(() => {
        handleSearch({ preventDefault: () => { } });
      }, 0);
    }
  }, []);

  return (
    <>
      <div id="coachMain">
        <MainTitle title1="健身教練" title2="找到專屬你的健身教練" />
        <div className="allCoachCards">
          <div className="searchBox">
            <form
              action=""
              method="post"
              onSubmit={(e) => e.preventDefault()}
              id="personal-search-form"
              title="健身教練搜尋"
            >
              <CustomDropdown
                label="選擇地區"
                selected={
                  selectedCity === "all" || selectedCity === "" ? "全部區域" : selectedCity
                }
                onSelect={setSelectedCity}
                options={["全部區域", ...cities]}
              />
              <CustomDropdown
                label="訓練需求"
                selected={
                  selectedHashtag === "all" || selectedHashtag === "" ? "全部訓練需求" : selectedHashtag
                }
                onSelect={setSelectedHashtag}
                options={["全部訓練需求", ...trainingOptions]}
              />
              <CustomDropdown
                label="性別"
                selected={
                  selectedSex === "all" || selectedSex === "" ? "全部性別" : selectedSex
                }
                onSelect={setSelectedSex}
                options={["全部性別", "男", "女"]}
              />
              <label htmlFor="keyword-search"></label>
              <input
                type="search"
                name="keyword-search"
                id="keyword-search"
                placeholder="關鍵字搜尋"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              ></input>
              <button type="button" className="submit" onClick={handleSearch}>
                搜尋
              </button>
            </form>
          </div>
          <div className="fiflterBt">
            <button className="fiflterBt">篩選<img src="./images/filter.svg" alt="篩選按鈕" /></button>
            </div>
          <div className="coachTitleBox">
            <span className="all-coach">全部教練</span></div>

          {currentItems.length === 0 ? (
            <div className="noResult">找不到符合條件的教練</div>
          ) : (
            <div>
              <div className="coachNineCards">
                {currentItems.map((coach, i) => (
                  <CoachCard
                    key={i}
                    name={coach.name}
                    role={coach.role}
                    hashtags={coach.hashtags}
                    description={coach.description}
                    imageSrc={coach.imageSrc}
                    link="/coachintro"
                  />
                ))}
              </div>
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

export default Coach;
