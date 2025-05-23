import { useState } from "react";
import "./TrainerSection.scss";
import { Link } from "react-router-dom";
import JoinButton from "../../../components/joinButton/joinButton";
import JoinButton2 from "../../../components/joinButton/joinButton2";

function TrainerSection() {
  const initialList = [
    {
      name: "詹姆斯",
      enName: "James",
      areas: ["台北市", "/", "新北市"],
      skills: ["＃重量訓練", "＃減脂雕塑"],
      img: "/images/hometrainer1.png",
    },
    {
      name: "莉莉亞",
      enName: "Liliya",
      areas: ["台北市", "/", "新北市"],
      skills: ["＃減脂塑形", "＃新手入門"],
      img: "/images/hometrainer2.png",
    },
    {
      name: "強森",
      enName: "Johnson",
      areas: ["台北市", "/", "新北市"],
      skills: ["＃重量訓練", "＃短期塑形"],
      img: "/images/hometrainer3.png",
    },
    {
      name: "芳芳",
      enName: "Fang",
      areas: ["台北市", "/", "新北市"],
      skills: ["＃重量訓練", "＃減脂塑形"],
      img: "/images/hometrainer4.png",
    },
    {
      name: "茱莉亞",
      enName: "Julia",
      areas: ["台北市", "/", "新北市"],
      skills: ["＃重量訓練", "＃減脂雕塑"],
      img: "/images/hometrainer5.png",
    },
  ];

  const [trainers, setTrainers] = useState(initialList);

  const handleNext = () => {
    const updated = [...trainers];
    const first = updated.shift();
    updated.push(first);
    setTrainers(updated);
  };

  const handlePrev = () => {
    const updated = [...trainers];
    const last = updated.pop();
    updated.unshift(last);
    setTrainers(updated);
  };

  const focusTrainer = trainers[0];

  return (
    <div className="home-trainer">
      <header className="home-trainer-mainTitle">
        <div className="mainTitle-col1">
          <span className="home-trainer-mainTitle1">讓專業陪你前進</span>
          <span className="home-trainer-mainTitle2">效率與安全兼得</span>
        </div>
        <img src="/images/home-trainer-arrow.svg" alt="" />
      </header>
      <div className="trainer-card-box">
        <div className="home-trainer-maincard">
          <div className="home-trainer-card home-trainer-active">
            <div className="home-trainer-img">
              <img src={focusTrainer.img} alt={focusTrainer.name} />
            </div>
            <div className="home-trainer-info">
              <div className="trainer-info-box home-trainer-name">
                <span>{focusTrainer.name}</span>
                <span className="home-trainer-enname">{focusTrainer.enName}</span>
              </div>
              <div className="trainer-info-box home-trainer-area">
                <img src="/images/homepage-icon-map.svg" alt="" />
                {focusTrainer.areas.map((area, i) => (
                  <span key={i}>{area}</span>
                ))}
              </div>
              <div className="trainer-info-box home-trainer-tags">
                {focusTrainer.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 四張排隊小卡 */}
        <div className="home-trainer-queue">
          {trainers.slice(1).map((trainer, i) => (
            <div className="trainer-card-small" key={i}>
              <img src={trainer.img} alt={trainer.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="home-trainer-controls">
        <button onClick={handleNext}>NEXT <img src="/images/carousel-arrow-left.svg" alt="carousel-arrow-left" /></button>
        <button onClick={handlePrev}>PREV <img src="/images/carousel-arrow-right.svg" alt="carousel-arrow-left" /></button>
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
            <Link to="/Joinus">
              <JoinButton2 text="成為合作教練" to="/Joinus" />
            </Link>
            <Link to="/Joinus">
              <JoinButton text="查看更多教練" to="/Joinus" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerSection;
