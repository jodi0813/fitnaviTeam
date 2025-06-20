import ReactPlayer from "react-player";
import "../HeroSection/HeroSection.scss"

function HeroSection() {
    return (
        <section className="HeroSection">
            <div className="video-wrapper">
                <ReactPlayer
                    url="https://res.cloudinary.com/diyvjhezu/video/upload/v1750254837/herosection-video-final_htbeaq.mp4"
                    playing
                    muted
                    loop
                    playsinline
                    width="100%"
                    height="100%"
                    className="hero-video"
                    config={{
                        file: {
                            attributes: {
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center center'
                                }
                            }
                        }
                    }}
                />
                <div className="overlay"></div>
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
                        每一次挑戰都是突破，訓練無極限，<br /> 專業教練與營養師助你達成目標，邁向更健康的自己！
                    </p>
                </div>




            </div>

            <div className="Hero-section-scroll">
                <p className="Hero-section-scroll-p">SCROLL</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none" className="HeroSectionArrow">
                    <path d="M36.5 18L24.5 30L12.5 18" stroke="#FEFCF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>



            {/* 銜接到下面區塊的圓角 */}
            {/* <div className="Hero-bottom-curve"></div> */}







        </section>
    );
}

export default HeroSection;
