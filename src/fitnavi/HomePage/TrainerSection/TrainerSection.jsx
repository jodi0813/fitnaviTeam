import { useState } from "react";
import "./TrainerSection.scss";
import { Link } from "react-router-dom";
import JoinButton from "../../../components/joinButton/joinButton";
import JoinButton2 from "../../../components/joinButton/joinButton2";

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
        <header className="home-trainer-mainTitle">
          <span className="home-trainer-mainTitle1">讓專業陪你前進</span>
          <span className="home-trainer-mainTitle2">效率與安全兼得</span>
        </header>
        <div className="home-trainer1">
          {trainerList.map((trainer, i) => (
            <div
              className={`home-trainer-card ${i === focusIndex ? "home-trainer-active" : "home-trainer-none"
                }`}
              key={i}
              onClick={() => setFocusIndex(i)}
            >
              <div className="home-trainer-img">
                <img src={trainer.img} alt={trainer.name} />
              </div>
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
        <div className="home-trainer-footer">
          <div className="home-trainer-img">
            <img src="/images/coachshadom.png" alt="" />
          </div>
          <div className="home-trainer-title">
            <div className="home-trainer-title1">
              <div className="home-trainer-title2">
                <span className="home-trainer-titleEn">PERSONAL TRAINER</span>
                <span className="home-trainer-titleCh">教練</span>
              </div>
              <div className="home-trainer-title3">
                <span>「有人帶，真的不一樣」 </span>
                <span>
                  從動作觀察到訓練計畫，教練為你把關每一步，讓努力更有效、更安全。
                </span>
              </div>
            </div>
            <div className="home-trainer-button">
              <Link to="/Joinus" >
              <JoinButton2
               text="成為合作教練"
               to="/Joinus" />
                            </Link>
              <Link to="/Joinus" >
                <JoinButton
                  text="查看更多教練"
                  to="/Joinus" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrainerSection;
