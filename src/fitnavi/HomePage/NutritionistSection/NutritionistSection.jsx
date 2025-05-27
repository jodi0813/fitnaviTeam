import { useState } from "react";
import "./NutritionistSection.scss";
import { Link } from "react-router-dom";
import JoinButton from "../../../components/joinButton/joinButton";
import JoinButton2 from "../../../components/joinButton/joinButton2";

function NutritionistSection() {

  const initialList2 = [


    {
      name: "毛毛",
      enName: "Evelyn",
      skills: ["＃體態維持", "＃營養攝取"],
      img: "./images/homenutri1.png",
    },
    {
      name: "彤彤",
      enName: "Iris",
      skills: ["＃素食營養", "＃外食調整"],
      img: "./images/homenutri5.png",
    },
    {
      name: "沛琪",
      enName: "Emily",
      skills: ["＃重量訓練", "＃減脂瘦身"],
      img: "./images/homenutri4.png",
    },
    {
      name: "芷瑄",
      enName: "Chloe",
      skills: ["＃重量訓練", "＃增肌增重"],
      img: "./images/homenutri3.png",
    },
    {
      name: "承昱",
      enName: "Nathan",
      skills: ["＃飲食計畫", "＃運動營養"],
      img: "./images/homenutri2.png",
    }
  ];


  const [nutritionists, setNutritionists] = useState(initialList2);

  const handlePrev = () => {
    const updated = [...nutritionists];
    const first = updated.shift();
    updated.push(first);
    setNutritionists(updated);
  };

  const handleNext = () => {
    const updated = [...nutritionists];
    const last = updated.pop();
    updated.unshift(last);
    setNutritionists(updated);
  };

  const focusNutritionist = nutritionists[0];

  return (
    <>
      {/* 所有內容 */}
      <div className="home-nutritionist">
        <div className="nutritionist-card-box">
          {/* 四張排隊小卡 */}
          <div className="home-nutritionist-queue">
            {nutritionists.slice(1).map((nutritionist, i) => (
              <div className="nutritionist-card-small" key={i}>
                <img src={nutritionist.img} alt={nutritionist.name} />
              </div>
            ))}
          </div>
          {/* 主要小卡 */}
          <div className="home-nutritionist-maincard">

            <div className="home-nutritionist-img">
              <img src={focusNutritionist.img} alt={focusNutritionist.name} />
            </div>
            <div className="home-nutritionist-info">
              <div className="nutritionist-info-box home-nutritionist-name">
                <span>{focusNutritionist.name}</span>
                <span className="home-nutritionist-enname">{focusNutritionist.enName}</span>
              </div>
              <div className="nutritionist-info-box home-nutritionist-tags">
                {focusNutritionist.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
          {/* 按鈕區 */}
          <div className="home-nutritionist-controls">
            <button className="prev-btn" onClick={handlePrev}>
              <span className="label"></span>
              <img className="arrow" src="./images/carousel-arrow-left.svg" alt="next" />
            </button>
            <button className="next-btn" onClick={handleNext}>
              <span className="label"></span>
              <img className="arrow" src="./images/carousel-arrow-right.svg" alt="prev" />
            </button>
          </div>
        </div>




        {/* 底部內容 */}
        <div className="home-nutritionist-footer">
          <div className="home-nutritionist-img">
            <img src="./images/nutritionistshadom.png" alt="" />
          </div>
          <div className="home-nutritionist-title">
            <div className="home-nutritionist-title1">
              <div className="home-nutritionist-title2">
                <span className="home-nutritionist-titleCh">營養師</span>
                <span className="home-nutritionist-titleEn">NUTRITIONIST</span>
              </div>
              <div className="home-nutritionist-title3">
                <span>
                  「吃對，比少吃更重要」
                  <br />
                  營養師協助你規劃均衡又可持續的飲食，從生活習慣出發，讓每一餐都為目標加分。
                </span>
              </div>
            </div>
            <div className="home-nutritionist-button">
              <Link to="/Joinus">
                <JoinButton2
                  text="成為合作營養師"
                  to="/Joinus" />
              </Link>
              <Link to="/nutritionist">
                <JoinButton
                  text="查看更多營養師"
                  to="/nutritionist" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NutritionistSection;
