import { useNavigate } from "react-router-dom";
import "./SearchSection.scss";
import { cities, taipeiDistricts } from "../../../data/locations";
import { IoSearch } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
function SearchSection() {
  const navigate = useNavigate();

  const handleSearch = () => {
    const selectedCity = document.getElementById("home-city")?.value || "";
    const selectedArea = document.getElementById("home-area")?.value || "";
    navigate(
      `/centerMap?city=${encodeURIComponent(
        selectedCity
      )}&area=${encodeURIComponent(selectedArea)}`
    );
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
              <span className="home-search-titleEn">venue</span>
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
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <select id="home-area">
                    <option value="">請選擇地區</option>
                    {taipeiDistricts.map((taipeiDistrict) => (
                      <option key={taipeiDistrict} value={taipeiDistrict}>
                        {taipeiDistrict}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="homeSearchBt" onClick={handleSearch}>
                  搜尋
                 <span className="faSearch">
             
                    <FaSearch />
                  </span>
                </button>
              </div>
            </div>
          </div>
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
                <div className="home-search-botton">
                  <div className="home-search-toggleBt">
                    <button>健身教練</button>
                    <button>營養師</button>
                  </div>
                  <div>
                    <select>
                      <option>課程種類</option>
                    </select>
                  </div>
                </div>
                <button className="homeSearchBt">
                  搜尋
                  <span className="faSearch">
                    <FaSearch />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchSection;
