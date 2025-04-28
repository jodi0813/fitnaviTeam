import CenterTitle from "./CenterTitle.jsx";
import "./CenterMap.scss";
function CenterMap() {
  return (
    <>
      <CenterTitle />
      <div className="mapSearchAll">
        <div className="mapSearchLeft">
          <form
            action=""
            method="post"
            name="personal-search-form"
            id="personal-search-form"
            title="健身教練搜尋"
          >
            <label for="centername">場館名稱</label>
            <input type="text" name="centername" id="centername" title="場館名稱" placeholder="請輸入場館名稱" required />

            <label for="area">縣市</label>
            <select name="area" id="area">
              <option value="">請選擇縣市</option>
              <option value="台北市">台北市</option>
              <option value="新北市">新北市</option>
            </select>
            <label for="trainingNeeds">地區</label>
            <select name="trainingNeeds" id="trainingNeeds">
              <option value="">請選擇地區</option>
              <option value=""></option>
              <option value=""></option>
            </select>

            <fieldset>
              <legend>服務項目</legend>
              <input type="checkbox" name="order" id="order1" />
              <label for="order1">重訓器材</label>
              <input type="checkbox" name="order" id="order2" />
              <label for="order2">有氧器材</label>
              <input type="checkbox" name="order" id="order3" />
              <label for="order3">淋浴間</label>
              <input type="checkbox" name="order" id="order4" />
              <label for="order4">24小時營業</label>
              <input type="checkbox" name="order" id="order5" />
              <label for="order5">團體課程</label>
              <input type="checkbox" name="order" id="order6" />
              <label for="order6">單次計費</label>
              <input type="checkbox" name="order" id="order7" />
              <label for="order7">月費</label>
              <input type="checkbox" name="order" id="order8" />
              <label for="order8">私人教練</label>
              <input type="checkbox" name="order" id="order9" />
              <label for="order9">女性專區</label>
              <input type="checkbox" name="order" id="order10" />
              <label for="order10">補給品販賣機</label>
              <input type="checkbox" name="order" id="order11" />
              <label for="order11">靠近捷運站(200m)</label>
            </fieldset>
            <fieldset>
              <legend>課程項目</legend>
              <input type="checkbox" name="order" id="order12" />
              <label for="order12">重訓器材</label>
              <input type="checkbox" name="order" id="order13" />
              <label for="order13">有氧器材</label>
            </fieldset>
            <input type="button" value="搜尋" />
          </form>
        </div>
        <div className="mapResearch"></div>
        <div className="mapPhotos"></div>
      </div>
    </>
  );
}
export default CenterMap;
