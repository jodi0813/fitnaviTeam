import { useState } from "react";
import "./NutritionistSection.scss";
function NutritionistSection() {
  const [focusIndex, setFocusIndex] = useState(0);
  const nutritionistList = [
    {
      name: "詹姆斯",
      enName: "James",
      skills: ["重量訓練", "減脂雕塑"],
      img: "/images/homenutri1.png",
    },
    {
      name: "蘇菲亞",
      enName: "Sophia",
      img: "/images/homenutri2.png",
    },
    {
      name: "蘭娜",
      enName: "Lanna",
      img: "/images/homenutri3.png",
    },
    {
      name: "飛飛",
      enName: "Feifei",
      img: "/images/homenutri4.png",
    },
    {
      name: "毛毛",
      enName: "Evelyn",
      skills: ["體重控制", "營養攝取"],
      img: "/images/homenutri5.png",
    },
  ];
  return (
    <>
      <div className="home-nutritionist">
        <div className="home-nutritionist1">
          {nutritionistList.map((nutritionist, i) => (
            <div
              className={`${
                i === focusIndex
                  ? "home-nutritionist-active"
                  : "home-nutritionist-none"
              }`}
              key={i}
              onClick={() => setFocusIndex(i)}
            >
              <div className="home-nutritionist-img">
                <img src={nutritionist.img} alt={nutritionist.name} />
              </div>
              {i === focusIndex && (    
                <div className="home-nutritionist-info">
                  <div className="home-nutritionist-name ">
                    <span>{nutritionist.name} </span>
                    <span className="home-nutritionist-enname">
                      {nutritionist.enName}
                    </span>
                  </div>

                  <div className="home-nutritionist-tags">
                    {nutritionist.skills?.map((skill, i) => (
                      <span key={i}>{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="home-nutritionist-footer">
          <div className="home-nutritionist-button">
            <button>成為合作營養師</button>
            <button>查看更多營養師</button>
          </div>
          <div className="home-nutritionist-title">
            <span className="home-nutritionist-titleCh">營養師</span>
            <span className="home-nutritionist-titleEn">NUTRITIONIST</span>
            <p>
              「有人帶，真的不一樣」
              <br />
              從動作觀察到訓練計畫，教練為你把關每一步，讓努力更有效、更安全。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default NutritionistSection;
