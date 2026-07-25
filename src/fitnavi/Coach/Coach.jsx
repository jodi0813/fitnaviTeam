import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Coach.scss";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import { cities } from "../../data/locations";
import { trainingOptions } from "../../data/hashtag";
import Pagination from "../../components/Pagination/Pagination";
import { FaXmark } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

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
  // 教練卡牌資料改由 Firestore「coaches」collection 讀取
  const [coachList, setCoachList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const fetchCoaches = async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const snapshot = await getDocs(collection(db, "coaches"));
        const list = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setCoachList(list);
        setFilteredCoaches(list);
      } catch (err) {
        console.error("讀取教練資料失敗：", err);
        setLoadError("教練資料載入失敗，請稍後再試");
      } finally {
        setLoading(false);
      }
    };
    fetchCoaches();
  }, []);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowFilter(false); // 小尺寸搜尋後自動隱藏表單
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

  /* 首頁連過來（等 Firestore 資料載入後才套用篩選） */
  const location = useLocation();
  useEffect(() => {
    if (coachList.length === 0) return;
    const params = new URLSearchParams(location.search);
    const hashtag = params.get("hashtag");

    if (hashtag) {
      setSelectedHashtag(hashtag);
      const result = coachList.filter((coach) =>
        coach.hashtags.includes(hashtag)
      );
      setFilteredCoaches(result);
    }
  }, [coachList]);

  /* 小尺寸 */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /* 小尺寸篩選按鈕開關控制 */
  const [showFilter, setShowFilter] = useState(false);

  
  return (
    <>
      <div id="coachMain">
        <MainTitle title1="健身教練" title2="找到專屬你的健身教練" />
        <div className="allCoachCards">
          {/* 小尺寸篩選 */}
          <div className="filterSection">
            {isMobile ? (
              <>
                <div className="coachTitleBox">
                  <span className="all-coach">全部教練</span>
                </div>
                <div className="fiflterPhone">
                  <div>
                    <button
                      className="fiflterBt"
                      onClick={() => setShowFilter(!showFilter)}
                    >
                      篩選
                      <img src="./images/filter.svg" alt="篩選按鈕" />
                    </button>
                  </div>
                </div>
                {showFilter && (
                  <form
                    action=""
                    method="post"
                    onSubmit={(e) => e.preventDefault()}
                    id="personal-search-form"
                    title="健身教練搜尋"
                    className="searchCoachBox mobileSearch"
                  >
                    <button
                      type="button"
                      onClick={() => setShowFilter(false)}
                      className="closeFliter"
                    >
                      <FaXmark />
                    </button>
                    <CustomDropdown
                      label="選擇地區"
                      selected={
                        selectedCity === "all" || selectedCity === ""
                          ? "全部區域"
                          : selectedCity
                      }
                      onSelect={setSelectedCity}
                      options={["全部區域", ...cities]}
                    />
                    <CustomDropdown
                      label="訓練需求"
                      selected={
                        selectedHashtag === "all" || selectedHashtag === ""
                          ? "全部訓練需求"
                          : selectedHashtag
                      }
                      onSelect={setSelectedHashtag}
                      options={["全部訓練需求", ...trainingOptions]}
                    />
                    <CustomDropdown
                      label="性別"
                      selected={
                        selectedSex === "all" || selectedSex === ""
                          ? "全部性別"
                          : selectedSex
                      }
                      onSelect={setSelectedSex}
                      options={["全部性別", "男", "女"]}
                    />
                    <input
                      type="search"
                      name="keyword-search"
                      id="keyword-search"
                      placeholder="關鍵字搜尋"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    ></input>
                    <button
                      type="button"
                      className="submit"
                      onClick={handleSearch}
                    >
                      搜尋
                    </button>
                  </form>
                )}
              </>
            ) : (
              <>
                <form
                  action=""
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                  id="personal-search-form"
                  title="健身教練搜尋"
                  className="searchCoachBox desktopSearch"
                >
                  <CustomDropdown
                    label="選擇地區"
                    selected={
                      selectedCity === "all" || selectedCity === ""
                        ? "全部區域"
                        : selectedCity
                    }
                    onSelect={setSelectedCity}
                    options={["全部區域", ...cities]}
                  />
                  <CustomDropdown
                    label="訓練需求"
                    selected={
                      selectedHashtag === "all" || selectedHashtag === ""
                        ? "全部訓練需求"
                        : selectedHashtag
                    }
                    onSelect={setSelectedHashtag}
                    options={["全部訓練需求", ...trainingOptions]}
                  />
                  <CustomDropdown
                    label="性別"
                    selected={
                      selectedSex === "all" || selectedSex === ""
                        ? "全部性別"
                        : selectedSex
                    }
                    onSelect={setSelectedSex}
                    options={["全部性別", "男", "女"]}
                  />
                  <input
                    type="search"
                    name="keyword-search"
                    id="keyword-search"
                    placeholder="關鍵字搜尋"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  ></input>
                  <button
                    type="button"
                    className="submit"
                    onClick={handleSearch}
                  >
                    搜尋
                  </button>
                </form>
                <div className="coachTitleBox">
                  <span className="all-coach">全部教練</span>
                </div>
              </>
            )}
          </div>

          {loading ? (
            <div className="noResult">教練資料載入中...</div>
          ) : loadError ? (
            <div className="noResult">{loadError}</div>
          ) : currentItems.length === 0 ? (
            <div className="noResult">找不到符合條件的教練</div>
          ) : (
            <div>
              <div className="coachNineCards">
                {currentItems.map((coach) => (
                  <CoachCard
                    key={coach.id}
                    id={coach.id}
                    type="coach"
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
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </>
  );
}

export default Coach;
