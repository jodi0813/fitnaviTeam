import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CenterMap.scss";
import MainTitle from "../../components/Title/MainTitle";


function CenterMap() {
  const location = useLocation();
  // 定義搜尋欄位的狀態，包括場館名稱、縣市、地區與勾選的功能列表
  const [searchData, setSearchData] = useState({
    name: "",
    city: "",
    area: "",
    features: [],
  });
  // 如果來自其他頁面有帶 query 參數，自動設進狀態
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get("city") || "";
    const area = params.get("area") || "";
    setSearchData((prev) => ({ ...prev, city, area }));
  }, [location.search]);
  //首頁跳轉過來要顯示在最上面
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 模擬健身房資料，每間健身房都有自己的圖片路徑 img
  const gyms = [
    {
      name: "A健身房",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "私人教練", "單次計費", "女性專區", "靠近捷運站"],
      img: "./images/center.jpg",
    },
    {
      name: "B健身房",
      city: "新北市",
      area: "板橋區",
      features: ["重訓器材", "團體課程", "月費", "女性專區"],
      img: "./images/center.jpg",
    },
    {
      name: "C健身房",
      city: "台北市",
      area: "信義區",
      features: ["淋浴間", "有氧舞蹈", "瑜珈"],
      img: "./images/center.jpg",
    },
    {
      name: "D健身房",
      city: "新北市",
      area: "新店區",
      features: ["飛輪", "TRX懸吊訓練", "補給品販賣機"],
      img: "./images/center.jpg",
    },
  ];

  // 所有功能選項，分成 label（顯示）與 value（比對用）
  const featureOptions = [
    { label: "重訓器材", value: "重訓器材" },
    { label: "有氧器材", value: "有氧器材" },
    { label: "淋浴間", value: "淋浴間" },
    { label: "24小時營業", value: "24小時營業" },
    { label: "團體課程", value: "團體課程" },
    { label: "單次計費", value: "單次計費" },
    { label: "月費", value: "月費" },
    { label: "私人教練", value: "私人教練" },
    { label: "女性專區", value: "女性專區" },
    { label: "補給品販賣機", value: "補給品販賣機" },
    { label: "靠近捷運站(200m)", value: "靠近捷運站" },
    { label: "重訓訓練", value: "重訓訓練" },
    { label: "有氧舞蹈", value: "有氧舞蹈" },
    { label: "拳擊有氧", value: "拳擊有氧" },
    { label: "飛輪", value: "飛輪" },
    { label: "皮拉提斯", value: "皮拉提斯" },
    { label: "TRX懸吊訓練", value: "TRX懸吊訓練" },
    { label: "伸展放鬆", value: "伸展放鬆" },
    { label: "瑜珈", value: "瑜珈" },
  ];

  // 篩選健身房清單：根據使用者輸入的條件過濾
  const filteredGyms = gyms.filter((gym) => {
    const matchName = gym.name.includes(searchData.name); // 名稱包含
    const matchCity = !searchData.city || gym.city === searchData.city; // 城市相符或未選擇
    const matchArea = !searchData.area || gym.area === searchData.area; // 地區相符或未選擇
    const matchFeatures = searchData.features.every((f) => gym.features.includes(f)); // 所有勾選功能皆符合
    return matchName && matchCity && matchArea && matchFeatures;
  });

  // 當使用者勾選或取消勾選 checkbox 時觸發
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked; // 是否被勾選
    const itemValue = e.target.value; // 功能名稱
    const currentFeatures = searchData.features; // 目前所有已勾選功能

    // 如果勾選就加入新項目，沒勾選就從列表中移除該項目
    const updatedFeatures = isChecked
      ? currentFeatures.concat(itemValue)
      : currentFeatures.filter((f) => f !== itemValue);

    // 建立新的 searchData，保留其他欄位，只更新 features
    setSearchData({
      name: searchData.name,
      city: searchData.city,
      area: searchData.area,
      features: updatedFeatures,
    });
  };
  const cities = [
    "基隆市", "台北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "台中市",
    "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "台南市", "高雄市", "屏東縣",
    "宜蘭縣", "花蓮縣", "台東縣", "澎湖縣", "金門縣", "連江縣"
  ];
  return (
    <div id="centerMapMain">
      <MainTitle title1="找場地" title2="找到專屬你的健身場地" />
      <div className="mapSearchAll">
        <div className="mapSearchLeft">
          <form name="center-search-form" id="center-search-form">
            <div className="nameCityArea">
              <label htmlFor="centername">場館名稱</label>
              <input
                type="text"
                id="centername"
                placeholder="請輸入場館名稱"
                value={searchData.name}
                onChange={(e) => setSearchData({ ...searchData, name: e.target.value })}
              />

              <label htmlFor="city">縣市</label>
              <select
                id="city"
                value={searchData.city}
                onChange={(e) => setSearchData({ ...searchData, city: e.target.value })}
              >
                <option value="">請選擇縣市</option>
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
              </select>

              <label htmlFor="area">地區</label>
              <select
                id="area"
                value={searchData.area}
                onChange={(e) => setSearchData({ ...searchData, area: e.target.value })}
              >
                <option value="">請選擇地區</option>
                <option value="大安區">大安區</option>
                <option value="板橋區">板橋區</option>
                <option value="信義區">信義區</option>
                <option value="新店區">新店區</option>
              </select>
            </div>

            {/* 服務與課程功能選擇清單 */}
            <fieldset className="centerItem">
              <legend>服務項目 / 課程項目</legend>
              {featureOptions.map((option, index) => (
                <div className="checkboxItem" key={index}>
                  <input
                    type="checkbox"
                    id={`order${index + 1}`}
                    value={option.value}
                    checked={searchData.features.includes(option.value)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`order${index + 1}`}>{option.label}</label>
                </div>
              ))}
            </fieldset>
          </form>
        </div>

        {/* 顯示搜尋結果數量與健身房列表 */}
        <div className="centerResultPhoto">
          <div className="photosNumber">
            共有 <span>{filteredGyms.length}</span> 間符合條件的場館
          </div>

          {filteredGyms.map((gym, i) => (
            <div className="gymCard" key={i}>
              <img src={gym.img} alt={gym.name} className="centerPic" />
              <div className="gymCardText">
                <h3>{gym.name}</h3>
                <p>{gym.features.map((f) => `#${f}`).join(" ")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 地圖示意圖區塊 */}
        <div className="mapPhotos">
          <img src="/images/mapicon.jpg" alt="地圖示意圖" className="centerMapPhoto" />
        </div>
      </div>
    </div>
  );
}

export default CenterMap;