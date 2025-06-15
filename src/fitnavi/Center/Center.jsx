import MainTitleBread from "../../components/Title/MaintitleBread.jsx";
import "./Center.scss";
import CenterNavbar from "./CenterNavbar.jsx";

function Center() {
  return (
    <>
      <div id="centerMain">
        <MainTitleBread
          title1="找場地"
          title2="尋找專屬適合您的運動場地"
          breadcrumbList={[
            { label: "首頁", link: "/" },
            { label: "健身場地", link: "/centermap" },
            { label: "TECHNOGym" },
          ]}
        />

        <section className="main-content">
          {/* <返回列表(待改) */}

          <div className="centerPhotoBox">
            <img src="./images/center.jpg" alt="" className="centerPic" />
            <div className="centerTitle2">
              <img
                src="./images/centerlogopic.jpg"
                alt=""
                className="centerLogoPic"
              />
              <div className="center-nameBox">
                <div className="center-nameBox1">
                  <span className="center-name">TECHNOGym</span>
                  <span className="center-area">(忠孝館)</span>
                </div>
                <div className="hashtag">
                  <a href="#">#重訓器材</a>
                  <a href="#">#私人教練</a>
                  <a href="#">#單次計費</a>
                  <a href="#">#女性專區</a>
                  <a href="#">#補給品販賣機</a>
                  <a href="#">#靠近捷運站</a>
                </div>
              </div>
            </div>
          </div>
          <div className="centerIntroduction">
            <div className="introductionTitle">
              <span>場館簡介</span>
              <div class="introductionTitleLine"></div>
            </div>
            <p className="introduction">
              本場館提供完整訓練空間，包含自由重量、有氧區與多樣器材，適合各類健身需求。場館乾淨明亮，動線流暢，提供舒適運動體驗。本場館提供完整訓練空間，包含自由重量、有氧區與多樣器材，適合各類健身需求。場館乾淨明亮，動線流暢，提供舒適運動體驗。
              <br /><br />
              更衣室與淋浴間設備齊全，維護良好，方便運動前後使用。場館內提供飲水機與休息區，是放鬆與補水的好所在。更衣室與淋浴間設備齊全，維護良好，方便運動前後使用。場館內提供飲水機與休息區，是放鬆與補水的好所在。
            </p>
          </div>
          <CenterNavbar />
        </section>
      </div>
    </>
  );
}
export default Center;
