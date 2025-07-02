import { useNavigate } from "react-router-dom";
import "./SearchSection.scss";
import { cities, taipeiDistricts } from "../../../data/locations";
import { FaSearch } from "react-icons/fa";
import { nutritionOptions, trainingOptions } from "../../../data/hashtag";
import { useState } from "react";

function SearchSection() {
  const navigate = useNavigate();

  // 狀態管理
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedTrainingNeed, setSelectedTrainingNeed] = useState("");

  // 場地搜尋導頁
  const handleVenueSearch = () => {
    if (!selectedCity || !selectedArea) {
      alert("請選擇縣市與地區");
      return;
    }

    navigate(
      `/centerMap?city=${encodeURIComponent(
        selectedCity
      )}&area=${encodeURIComponent(selectedArea)}`
    );
  };

  // 課程搜尋導頁
  const handleCourseSearch = () => {
    if (!selectedRole) {
      alert("請先選擇健身教練或營養師");
      return;
    }
    if (!selectedTrainingNeed) {
      alert("請選擇訓練需求");
      return;
    }

    navigate(
      `/${selectedRole}?hashtag=${encodeURIComponent(selectedTrainingNeed)}`
    );
  };

  return (
    <>
      <div className="home-search">
        <header className="home-search-mainTitle">找尋專屬於您的</header>

        <div className="home-search-section">
          {/* 場地區塊 */}
          <div className="home-search-block">
            <div className="home-search-titleBox">
              <span className="home-search-title">場地</span>
              <span className="home-search-titleEn">venue</span>
            </div>
            <div className="home-search-main">
              <div className="home-search-illustration">
                <img src="./images/findGym.png" alt="走路的角色插圖" />
              </div>
              <div className="home-search-dropdowns">
                <div className="home-search-dropdowns1">
                  <select
                    id="home-city"
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
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                  >
                    <option value="">請選擇地區</option>
                    {taipeiDistricts.map((taipeiDistrict) => (
                      <option key={taipeiDistrict} value={taipeiDistrict}>
                        {taipeiDistrict}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="homeSearchBt" onClick={handleVenueSearch}>
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
              <div className="home-search-illustration">
                <img src="./images/findLesson.png" alt="指著白板的角色插圖" />
              </div>
              <div className="home-search-dropdowns">
                <div className="home-search-botton">
                  <div className="home-search-toggleBt">
                    <button
                      className={selectedRole === "coach" ? "selected" : ""}
                      onClick={() => {
                        setSelectedRole("coach");
                        setSelectedTrainingNeed(""); // 重設選項
                      }}
                    >
                      健身教練
                    </button>
                    <button
                      className={
                        selectedRole === "nutritionist" ? "selected" : ""
                      }
                      onClick={() => {
                        setSelectedRole("nutritionist");
                        setSelectedTrainingNeed(""); // 重設選項
                      }}
                    >
                      營養師
                    </button>
                  </div>
                  <div>
                    <select
                      value={selectedTrainingNeed}
                      onChange={(e) => setSelectedTrainingNeed(e.target.value)}
                      disabled={!selectedRole} // 未選角色時禁用
                    >
                      <option value="">訓練需求</option>
                      {(selectedRole === "coach"
                        ? trainingOptions
                        : nutritionOptions
                      ).map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                    <button className="homeSearchBt" onClick={handleCourseSearch}>
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
