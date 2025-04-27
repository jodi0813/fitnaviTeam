import CenterTitle from "./CenterTitle.jsx";
import "./CenterMap.scss";
function CenterMap() {
  return (
    <>
      <CenterTitle />
      <div className="mapSearchAll">
        <div className="mapSearch"></div>
        <form
          action=""
          method="post"
          name="personal-search-form"
          id="personal-search-form"
          title="健身教練搜尋"
        >
          <label for="area"></label>
          <select name="area" id="area">
            <option value="">請選擇縣市</option>
            <option value="台北市">台北市</option>
            <option value="新北市">新北市</option>
          </select>
          
          <label for="trainingNeeds"></label>
          <select name="trainingNeeds" id="trainingNeeds">
            <option value="">請選擇地區</option>
            <option value=""></option>
            <option value=""></option>
          </select>
   
        </form>

        <div className="mapResearch"></div>
        <div className="mapPhotos"></div>
      </div>
    </>
  );
}
export default CenterMap;
