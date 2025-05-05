import "./Coach.scss";

function Coach() {
  return (
    <>
      <div id="coachMain">
        <header className="coachTitle">
          <h2>健身教練</h2>
          <p>PERSONAL TRAINER</p>
        </header>
        <hr />
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
              <option value="">地區</option>
              <option value="台北市">台北市</option>
              <option value="新北市">新北市</option>
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
        <div className="coach">
          <div className="all-coach">全部教練</div>
          {/* 教練小卡 */}
          <div className="coach-card">
            <div className="image-container">
              <img src="./images/trainer.png" alt="教練照片" />
              <span className="label">教練</span>
            </div>
            <div className="coach-name">名字</div>
            <div className="hashtag">
              <a href="#">#專業</a>
              <a href="#">#專業</a>
              <a href="#">#專業</a>
            </div>
            <p className="coach-details">
              這是教練或營養師的簡介內容，這是教練或營養師的簡介內容，這是教練或營養師的簡介內容。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Coach;
