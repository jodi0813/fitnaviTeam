import "./SearchSection.scss";
function SearchSection() {
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
