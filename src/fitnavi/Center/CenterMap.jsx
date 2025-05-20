import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CenterMap.scss";
import MainTitle from "../../components/Title/MainTitle";
import { cities, taipeiDistricts } from "../../data/locations";

function CenterMap() {
  const location = useLocation();

  const [searchData, setSearchData] = useState({
    name: "",
    city: "",
    area: "",
    features: [],
  });

  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get("city") || "";
    const area = params.get("area") || "";
    setSearchData((prev) => ({ ...prev, city, area }));
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gyms = [
    {
      name: "TECHNOGym(忠孝館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "淋浴間", "24小時營業", "靠近捷運站"],
      img: "./images/center.jpg",
    },
    {
      name: "日初健身(大安館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "淋浴間", "女性專區"],
      img: "./images/center2.jpg",
    },
    {
      name: "黃金gym(師大館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "24小時營業"],
      img: "./images/center3.jpg",
    },
    {
      name: "NITEGym(師大館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "淋浴間"],
      img: "./images/center4.jpg",
    },
  ];

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

  const handleSearch = (e) => {
    e.preventDefault();
    const results = gyms.filter((gym) => {
      const matchName = gym.name.includes(searchData.name);
      const matchCity = !searchData.city || gym.city === searchData.city;
      const matchArea = !searchData.area || gym.area === searchData.area;
      const matchFeatures = searchData.features.every((f) =>
        gym.features.includes(f)
      );
      return matchName && matchCity && matchArea && matchFeatures;
    });
    setFilteredResults(results);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const itemValue = e.target.value;
    const updatedFeatures = isChecked
      ? [...searchData.features, itemValue]
      : searchData.features.filter((f) => f !== itemValue);

    setSearchData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  useEffect(() => {
    setFilteredResults(gyms); // 預設顯示所有
  }, []);

  return (
    <div id="centerMapMain">
      <MainTitle title1="找場地" title2="找到專屬你的健身場地" />
      <div className="mapSearchAll">
        <div className="mapSearchLeft">
          <form id="center-search-form" onSubmit={handleSearch}>
            <div className="nameCityArea">
              <label htmlFor="centername">場館名稱</label>
              <input
                type="text"
                id="centername"
                placeholder="請輸入場館名稱"
                value={searchData.name}
                onChange={(e) =>
                  setSearchData({ ...searchData, name: e.target.value })
                }
              />

              <label htmlFor="city">縣市</label>
              <select
                id="city"
                value={searchData.city}
                onChange={(e) =>
                  setSearchData({ ...searchData, city: e.target.value })
                }
              >
                <option value="">請選擇縣市</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <label htmlFor="area">地區</label>
              <select
                id="area"
                value={searchData.area}
                onChange={(e) =>
                  setSearchData({ ...searchData, area: e.target.value })
                }
              >
                <option value="">請選擇地區</option>
                {taipeiDistricts.map((taipeiDistrict) => (
                  <option key={taipeiDistrict} value={taipeiDistrict}>
                    {taipeiDistrict}
                  </option>
                ))}
              </select>
            </div>

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
            <button type="submit" className="centerSearchBt">
              搜尋
            </button>
          </form>
        </div>

        <div className="centerResultPhoto">
          <div className="photosNumber">
            共有 <span>{filteredResults.length}</span> 間符合條件的場館
          </div>

          {filteredResults.map((gym, i) => (
            <div className="gymCard" key={i}>
              <Link to="/center">
                <img src={gym.img} alt={gym.name} className="centerPic" />
              </Link>
              <div className="gymCardText">
                <h3>{gym.name}</h3>
                <p>{gym.features.map((f) => `#${f}`).join(" ")}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mapPhotos">
          <img
            src="/images/mapicon.jpg"
            alt="地圖示意圖"
            className="centerMapPhoto"
          />
        </div>
      </div>
    </div>
  );
}

export default CenterMap;

