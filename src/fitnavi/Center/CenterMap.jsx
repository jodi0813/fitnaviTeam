import { Link } from "react-router-dom";
import "./CenterMap.scss";

function CenterMap() {
  return (
    <>
      <div id="centerMapMain">
        <div className="centerHead">
          <h2>找場地</h2>
          <h3>尋找專屬適合您的運動場地</h3>
        </div>
        <hr />
        <div className="mapSearchAll" >
          {/* 左邊 */}
          <div className="mapSearchLeft">
            <form
              action=""
              method="post"
              name="center-search-form"
              id="center-search-form"
              title="健身教練搜尋"
            >
              {/* 前三個搜尋框 */}
              <div className="nameCityArea">
                <label htmlFor="centername">場館名稱</label>
                <input type="text" name="centername" id="centername" title="場館名稱" placeholder="請輸入場館名稱" required />

                <label htmlFor="city">縣市</label>
                <select name="city" id="city">
                  <option value="">請選擇縣市</option>
                  <option value="台北市">台北市</option>
                  <option value="新北市">新北市</option>
                </select>
                <label htmlFor="area">地區</label>
                <select name="area" id="area">
                  <option value="">請選擇地區</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="centerTitleItem">
                <legend>服務項目</legend>
                <fieldset className="centerItem" >
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order1" />
                    <label htmlFor="order1">重訓器材</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order2" />
                    <label htmlFor="order2">有氧器材</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order3" />
                    <label htmlFor="order3">淋浴間</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order4" />
                    <label htmlFor="order4">24小時營業</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order5" />
                    <label htmlFor="order5">團體課程</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order6" />
                    <label htmlFor="order6">單次計費</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order7" />
                    <label htmlFor="order7">月費</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order8" />
                    <label htmlFor="order8">私人教練</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order9" />
                    <label htmlFor="order9">女性專區</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order10" />
                    <label htmlFor="order10">補給品販賣機</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order11" />
                    <label htmlFor="order11">靠近捷運站(200m)</label>
                  </div>

                </fieldset>
              </div>
              <div className="centerTitleItem">
                <legend>課程項目</legend>
                <fieldset className="centerItem">
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order12" />
                    <label htmlFor="order12">重訓器材</label>
                  </div>
                  <div className="checkboxItem">
                    <input type="checkbox" name="order" id="order13" />
                    <label htmlFor="order13">有氧器材</label>
                  </div>
                </fieldset>
              </div>
              <button className="centermapSearch">搜尋</button>
            </form>
          </div>
          {/* 中間 */}
          <div className="centerResultPhoto">
            <div className="photosNumber">共有 4 間符合條件的場館</div>
            <Link to="/center" className="gymCard">
            <div className="gymCard">
              <img src="./images/center.jpg" alt="" className="centerPic" />
              <div className="gymCardText">
                <h3>A健身房</h3>
                <p> #重訓器材 #私人教練 #單次計費 #女性專區 <br />
                  #補給品販賣機 #靠近捷運站</p>
              </div>
            </div>
            </Link>
            <div className="gymCard">
              <img src="./images/center.jpg" alt="" className="centerPic" />
              <div className="gymCardText">
                <h3>B健身房</h3>
                <p> #重訓器材 #私人教練 #單次計費 #女性專區 <br />
                  #補給品販賣機 #靠近捷運站</p>
              </div>
            </div>
            <div className="gymCard">
              <img src="./images/center.jpg" alt="" className="centerPic" />
              <div className="gymCardText">
                <h3>C健身房</h3>
                <p> #重訓器材 #私人教練 #單次計費 #女性專區 <br />
                  #補給品販賣機 #靠近捷運站</p>
              </div>
            </div>
            <div className="gymCard">
              <img src="./images/center.jpg" alt="" className="centerPic" />
              <div className="gymCardText">
                <h3>D健身房</h3>
                <p> #重訓器材 #私人教練 #單次計費 #女性專區 <br />
                  #補給品販賣機 #靠近捷運站</p>
              </div>
            </div>
          </div>
          <div className="mapPhotos">
            <img src="/images/mapicon.jpg" alt="" className="centerMapPhoto"/>
          </div>
        </div>
      </div>
    </>
  );
}
export default CenterMap;
