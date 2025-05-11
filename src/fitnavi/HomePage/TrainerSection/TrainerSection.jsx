import { useState } from "react";
import "./TrainerSection.scss";
function TrainerSection() {
  const [focusIndex, setFocusIndex] = useState(0);
  const trainerList = [
    {
      name: "詹姆斯",
      enName: "James",
      areas: ["台北市", "新北市"],
      skills: ["重量訓練", "減脂雕塑"],
      img: "/images/hometrainer1.png",
    },
    {
      name: "蘇菲亞",
      enName: "Sophia",
      img: "/images/hometrainer2.png",
    },
    {
      name: "蘭娜",
      enName: "Lanna",
      img: "/images/hometrainer3.png",
    },
    {
      name: "飛飛",
      enName: "Feifei",
      img: "/images/hometrainer4.png",
    },
    {
      name: "張莉菈",
      enName: "Lila",
      img: "/images/hometrainer5.png",
    },
  ];
  return (
    <>
      <div className="home-trainer">
        <header className="home-trainer-mainTitle">專業講師</header>
        <div className="home-trainer1">
          {trainerList.map((trainer, i) => (
            <div
              className={`home-trainer-card ${
                i === focusIndex ? "home-trainer-active" : "home-trainer-none"
              }`}
              key={i}
              onClick={() => setFocusIndex(i)}
            >
              <img src={trainer.img} alt={trainer.name} />

              {i === focusIndex && (
             
                <div className="home-trainer-info">
                     {/* <img src={trainer.img} alt={trainer.name} /> */}
                  <div className="home-trainer-name">
                    <span>{trainer.name} </span>
                    <span className="home-trainer-enname">
                      {trainer.enName}
                    </span>
                  </div>
                  <div className="home-trainer-area">
                    {trainer.areas?.map((area, i) => (
                      <span key={i}>{area}</span>
                    ))}
                  </div>
                  <div className="home-trainer-tags">
                    {trainer.skills?.map((skill, i) => (
                      <span key={i}>{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TrainerSection;
