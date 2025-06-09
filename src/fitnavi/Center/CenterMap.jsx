// CenterMap.jsx
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link, useLocation } from "react-router-dom";
import "./CenterMap.scss";
import MainTitle from "../../components/Title/MainTitle";
import { cities, taipeiDistricts } from "../../data/locations";

// 解決圖釘圖示載入問題
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function FlyToLocation({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 15);
  }, [position]);
  return null;
}

function CenterMap() {
  const location = useLocation();

  const [searchData, setSearchData] = useState({
    name: "",
    city: "",
    area: "",
    features: [],
  });

  const [filteredResults, setFilteredResults] = useState([]);
  const [activeGymIndex, setActiveGymIndex] = useState(null);
  const [activeLatLng, setActiveLatLng] = useState(null);
  const popupRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [showFilter, setShowFilter] = useState(false);

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
      latlng: [25.0418, 121.535],
    },
    {
      name: "日初健身(大安館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "淋浴間", "女性專區"],
      img: "./images/center2.jpg",
      latlng: [25.0265, 121.5412],
    },
    {
      name: "黃金gym(師大館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "24小時營業"],
      img: "./images/center3.jpg",
      latlng: [25.0269, 121.5283],
    },
    {
      name: "NITEGym(師大館)",
      city: "台北市",
      area: "大安區",
      features: ["重訓器材", "有氧器材", "淋浴間"],
      img: "./images/center4.jpg",
      latlng: [25.0333, 121.5436],
    },
    {
      name: "野獸工廠(台中館)",
      city: "台中市",
      area: "西區",
      features: ["重訓器材", "月費"],
      img: "./images/center5.jpg",
      latlng: [24.1637, 120.6476],
    },
    {
      name: "肌肉星球(高雄館)",
      city: "高雄市",
      area: "左營區",
      features: ["重訓器材", "飛輪"],
      img: "./images/center6.jpg",
      latlng: [22.6307, 120.3014],
    },
    {
      name: "汗水俱樂部(新竹館)",
      city: "新竹市",
      area: "東區",
      features: ["有氧器材", "私人教練"],
      img: "./images/center7.jpg",
      latlng: [24.8047, 120.9714],
    },
    {
      name: "力與美健身館(台北館)",
      city: "台北市",
      area: "信義區",
      features: ["重訓器材", "有氧器材", "淋浴間", "24小時營業"],
      img: "./images/center8.jpg",
      latlng: [25.0338, 121.5623],
    },
    {
      name: "鋼鐵體能(新北板橋館)",
      city: "新北市",
      area: "板橋區",
      features: ["有氧器材", "團體課程", "女性專區"],
      img: "./images/center9.jpg",
      latlng: [25.0142, 121.4671],
    },
    {
      name: "動能基地(桃園藝文館)",
      city: "桃園市",
      area: "桃園區",
      features: ["私人教練", "月費", "重訓器材"],
      img: "./images/center10.jpg",
      latlng: [24.9917, 121.3116],
    },
    {
      name: "爆汗健身俱樂部(新竹館)",
      city: "新竹市",
      area: "北區",
      features: ["有氧器材", "拳擊有氧", "淋浴間"],
      img: "./images/center11.jpg",
      latlng: [24.8056, 120.9712],
    },
    {
      name: "野訓場Fitness(台中西屯館)",
      city: "台中市",
      area: "西屯區",
      features: ["重訓器材", "飛輪", "24小時營業"],
      img: "./images/center12.jpg",
      latlng: [24.1807, 120.6427],
    },
    {
      name: "全能健身中心(嘉義館)",
      city: "嘉義市",
      area: "東區",
      features: ["私人教練", "TRX懸吊訓練", "淋浴間"],
      img: "./images/center13.jpg",
      latlng: [23.4836, 120.4524],
    },
    {
      name: "力量製造所(台南永康館)",
      city: "台南市",
      area: "永康區",
      features: ["重訓器材", "團體課程", "補給品販賣機"],
      img: "./images/center14.jpg",
      latlng: [23.0212, 120.2530],
    },
    {
      name: "鐵魂訓練所(高雄三民館)",
      city: "高雄市",
      area: "三民區",
      features: ["淋浴間", "有氧舞蹈", "女性專區"],
      img: "./images/center15.jpg",
      latlng: [22.6477, 120.3233],
    },
    {
      name: "FitZone(屏東館)",
      city: "屏東縣",
      area: "屏東市",
      features: ["重訓器材", "瑜珈", "月費"],
      img: "./images/center16.jpg",
      latlng: [22.6783, 120.4903],
    },
    {
      name: "北方健身工廠(基隆館)",
      city: "基隆市",
      area: "仁愛區",
      features: ["飛輪", "重訓器材", "女性專區"],
      img: "./images/center17.jpg",
      latlng: [25.1290, 121.7415],
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
    setFilteredResults(gyms);
  }, []);
  useEffect(() => {
    popupRefs.current.forEach((ref, i) => {
      if (ref) {
        if (i === activeGymIndex) {
          ref.openPopup();
        } else {
          ref.closePopup();
        }
      }
    });
  }, [activeGymIndex]);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="centerMapMain">
      <MainTitle title1="找場地" title2="找到專屬你的健身場地" />
      <div className="mapSearchAll">
        <div className="mapSearchLeft">
          <div className="mapSearchLeft1">
            {isMobile ? (
              <>
                <button
                  className="centerFilterBt"
                  onClick={() => setShowFilter((prev) => !prev)}

                >
                  <span>       請選擇您的篩選條件</span>

                  <img
                    src="./images/dropdown.svg"
                    alt="篩選按鈕"

                  />
                </button>
                {showFilter && (
                  <form
                    id="center-search-form"
                    onSubmit={handleSearch}
                    className="centerMobileSearchForm"
                  >
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
                    <legend>服務項目</legend>
                    <fieldset className="centerItem">
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
                )}
              </>
            ) : (
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
                <legend>服務項目</legend>
                <fieldset className="centerItem">
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
            )}
          </div>
          <div className="mapSearchLeft2">
            <div className="photosNumber">
              共有 <span>{filteredResults.length}</span> 間符合條件的場館
            </div>
            <div className="gymCards">
              {filteredResults.map((gym, i) => (
                <div
                  className={`gymCard ${activeGymIndex === i ? "active" : ""}`}
                  key={i}
                  onClick={() => {
                    setActiveGymIndex(i);
                    setActiveLatLng(gym.latlng);
                  }}
                >
                  <img src={gym.img} alt={gym.name} className="centerPic" />
                  {/* 遮罩效果：只有沒被選中的才顯示 */}
                  <div className="overlay" />

                  <div className="gymCardText">
                    <h3>{gym.name}</h3>
                    <p>{gym.features.map((f) => `#${f}`).join(" ")}</p>
                  </div>
                </div>
              ))}</div>
          </div>
        </div>

        <div className="mapPhotos">
          <MapContainer
            center={[25.033, 121.5654]}
            zoom={13}
            style={{ width: "100%", height: "600px" }}
          >
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredResults.map((gym, i) => (
              <Marker
                key={i}
                position={gym.latlng}
                ref={(ref) => (popupRefs.current[i] = ref)}
              >
                <Popup>
                  <div className="mapPopup">
                    <Link to="/center">
                      <img src={gym.img} alt={gym.name} width="100" />
                      <p>{gym.name}</p>
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}

            <FlyToLocation position={activeLatLng} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default CenterMap;
