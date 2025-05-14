import { useNavigate } from "react-router-dom";
import "./SearchSection.scss";
function SearchSection() {
   const navigate = useNavigate();

  const handleSearch = () => {
    const selectedCity = document.getElementById("home-city")?.value || "";
    const selectedArea = document.getElementById("home-area")?.value || "";
    navigate(`/centerMap?city=${encodeURIComponent(selectedCity)}&area=${encodeURIComponent(selectedArea)}`);
  };
  return (
    <>
      <div className="home-search">
        <header className="home-search-mainTitle">找尋專屬於您的</header>

        {/* 場地區塊 */}
        <div className="home-search-section">
          <div className="home-search-block">
            <div className="home-search-titleBox">
              <span className="home-search-title">場地</span>
              <span className="home-search-titleEn">Venue</span>
            </div>
            <div className="home-search-main">
              <div>
                <img
                  src="/images/findGym.png"
                  alt="走路的角色插圖"
                  className="home-search-illustration"
                />
              </div>
              <div className="home-search-dropdowns">
                <div className="home-search-dropdowns1">
                  <select id="home-city">
                    <option value="">請選擇縣市</option>
                    <option value="台北市">台北市</option>
                    <option value="新北市">新北市</option>
                  </select>
                  <select id="home-area">
                    <option value="">請選擇鄉鎮市區</option>
                    <option value="大安區">大安區</option>
                    <option value="板橋區">板橋區</option>
                    <option value="信義區">信義區</option>
                    <option value="新店區">新店區</option>
                  </select>
                </div>
                <button className="home-search-button" onClick={handleSearch}>
                  搜尋
                </button>
              </div>
            </div>
          </div>
          {/* <div className="home-search-block">
            <div className="home-search-titleBox">
              <span className="home-search-title">場地</span>
              <span className="home-search-titleEn">Venue</span>
            </div>
            <div className="home-search-main">
              <div>
                <img
                  src="/images/findGym.png"
                  alt="走路的角色插圖"
                  className="home-search-illustration"
                />
              </div>
              <div className="home-search-dropdowns">

                <div className="home-search-dropdowns1">
                  <select>
                  <option>請選擇縣市</option>
                </select>
                  <select>
                    <option>請選擇鄉鎮市區</option>
                  </select>
                </div>
                <button className="home-search-button">搜尋</button>
              </div>
            </div>
          </div> */}
          {/* 課程區塊 */}
          <div className="home-search-block">
            <div className="home-search-titleBox">
              <span className="home-search-title">課程</span>
              <span className="home-search-titleEn">course</span>
            </div>
            <div className="home-search-main">
              <div>
                <img
                  src="/images/findLesson.png"
                  alt="指著白板的角色插圖"
                  className="home-search-illustration"
                />
              </div>
              <div className="home-search-dropdowns">
                <div className="home-search-bottom">
                  <div className="home-search-toggleBt">
                    <button>健身教練</button>
                    <button>營養師</button>
                  </div>

                  <select>
                    <option>課程種類</option>
                  </select>
                </div>
                <button className="home-search-button">搜尋</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchSection;
