import ReactPlayer from "react-player";
import "./HeroSection.scss";

function HeroSection() {
    return (
        <section className="HeroSection">
            <div className="video-wrapper">
                <ReactPlayer
                    url="https://res.cloudinary.com/dng64itcf/video/upload/v1746882140/HeroSection-video_vth2sr.mp4"
                    playing
                    muted
                    loop
                    playsinline
                    width="100%"
                    height="100%"
                    className="hero-video"
                />
            </div>

            <div className="Hero-Section-Title">
                <div className="Hero-Section-Catchphrase">
                    <h2>Be</h2>
                    <div className="h3-HeroTitle">
                        <h3 className="S-HeroTitle">S</h3>
                        <h3 className="tronger-HeroTitle">tronger</h3>
                    </div>
                </div>

                <div className="Hero-Section-content">
                    <p>
                        每一次挑戰都是突破，訓練無極限， 專業教練與營養師助你達成目標，邁向更健康的自己！
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
