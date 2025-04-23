import "./Coach.scss";

function Coach() {
  return (
    <>
      <header class="title">
        <h2>健身教練</h2>
        <p>PERSONAL TRAINER</p>
      </header>

      <form
        action=""
        method="post"
        name="personal-search-form"
        id="personal-search-form"
        title="健身教練搜尋"
      >
        <label for="area"></label>
        <select name="area" id="area">
          <option value="">地區</option>
          <option value="台北市">台北市</option>
          <option value="新北市">新北市</option>
        </select>
        <label for="trainingNeeds"></label>
        <select name="trainingNeeds" id="trainingNeeds">
          <option value="">訓練需求</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label for="sex"></label>
        <select name="sex" id="sex">
          <option value="性別">性別</option>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
        <label for="keyword-search"></label>
        <input
          type="search"
          name="keyword-search"
          id="keyword-search"
          placeholder="關鍵字搜尋"
        ></input>
        <input type="submit" value="搜尋" class="submit"></input>
      </form>
      <div class="coach">
        <div class="all-coach">全部教練</div>
        <div class="coach-card">
          <div class="image-container">
            <img src="./images/trainer.png" alt="教練照片" />
            <span class="label">教練</span>
          </div>
          <div class="coach-name">名字</div>
          <div class="hashtag">
            <a href="#">#專業</a>
            <a href="#">#專業</a>
            <a href="#">#專業</a>
          </div>
          <p class="coach-details">
            這是教練或營養師的簡介內容，這是教練或營養師的簡介內容，這是教練或營養師的簡介內容。
          </p>
        </div>
      </div>
    </>
  );
}
export default Coach;
