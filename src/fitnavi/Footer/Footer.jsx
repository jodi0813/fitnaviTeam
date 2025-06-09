import "./Footer.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Footer() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderDesktopFooter = () => (
        <section id="footer">
            <button
                className="Back-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >
                <p>回頂部</p>
                <img src="./images/goTop.gif" alt="回頂部" />
            </button>

            <div className="footerwrapper">
                <div className="footer-overlaytext">
                    <div className="footer-columntext">
                        {/* 你的桌機 Footer 內容 */}
                        <div className="explore">
                            <h4>網站導覽</h4>
                            <p onClick={() => { navigate('/Coach'); window.scrollTo(0, 0); }}>健身教練</p>
                            <p onClick={() => { navigate('/Nutritionist'); window.scrollTo(0, 0); }}>營養師</p>
                            <p onClick={() => { navigate('/MyFavorite'); window.scrollTo(0, 0); }}>我的收藏</p>
                            <p onClick={() => { navigate('/Allarticle'); window.scrollTo(0, 0); }}>知識文章</p>
                            <p onClick={() => { navigate('/CenterMap'); window.scrollTo(0, 0); }}>健身場地</p>
                        </div>

                        <div className="Joinus">
                            <h4>合作夥伴</h4>
                            <p onClick={() => { navigate('/MemberLogin'); window.scrollTo(0, 0); }}>加入我們</p>
                            <p>會員管理</p>
                            <p>問題反映</p>
                        </div>

                        <div className="aboutus">
                            <h4>關於我們</h4>
                            <p>我們如何運作</p>
                            <p>聯絡我們</p>
                            <p>常見問題</p>
                        </div>

                        <div className="law">
                            <h4>條款與條件</h4>
                            <p>隱私政策</p>
                            <p>服務條款</p>
                        </div>
                    </div>

                    <div className="copyright">
                        Copyright © 2025 FITNAVI All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );

    const renderTabletFooter = () => (
        <section id="footer-m">
            {/* <button
                className="Back-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >
                <p>回頂部</p>
                <img src="./images/goTop.gif" alt="回頂部" />
            </button> */}

            <div className="footerwrapper">

                <div className="footer-overlaytext">
                    <div className="footer-columntext">
                        <div className="footer-logo">
                            <img src="./images/favicon-white.svg" alt="" />
                        </div>


                        <div className="slogan-login">
                            <p>每一次挑戰都是突破！</p>
                            <button>登入/註冊</button>
                        </div>

                        <div className="footer-contact">
                            <div className="footer-contact-content">
                                <p>CONTACT</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="72" viewBox="0 0 2 72" fill="none">
                                    <path d="M1 1C1.8 5 1.33333 50 1 72" stroke="#FEFCF7" />
                                </svg>
                            </div>

                            <div className="footer-icon">
                                <img src="./images/instagram.svg" alt="" />
                                <img src="./images/facebook.svg" alt="" />
                                <img src="./images/line.svg" alt="" />
                            </div>
                        </div>


                    </div>

                    <div className="copyright">
                        Copyright © 2025 FITNAVI All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );

    const renderMobileFooter = () => (
        <section id="footer-s">
            {/* <button
                className="Back-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >
                <p>回頂部</p>
                <img src="./images/goTop.gif" alt="回頂部" />
            </button> */}

            <div className="footerwrapper">

                <div className="footer-overlaytext">
                    <div className="footer-columntext">
                        <div className="footer-logo">
                            <img src="./images/favicon-white.svg" alt="" />
                        </div>


                        <div className="slogan-login">
                            <p>每一次挑戰都是突破！</p>
                            <button>登入/註冊</button>
                        </div>

                        <div className="footer-contact">
                            <div className="footer-contact-content">
                                <p>CONTACT</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="72" viewBox="0 0 2 72" fill="none">
                                    <path d="M1 1C1.8 5 1.33333 50 1 72" stroke="#FEFCF7" />
                                </svg>
                            </div>

                            <div className="footer-icon">
                                <img src="./images/instagram.svg" alt="" />
                                <img src="./images/facebook.svg" alt="" />
                                <img src="./images/line.svg" alt="" />
                            </div>
                        </div>


                    </div>

                    <div className="copyright">
                        Copyright © 2025 FITNAVI All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );

    // 根據 windowWidth 決定要 render 哪一種 Footer
    if (windowWidth >= 1025) {
        return renderDesktopFooter();
    } else if (windowWidth >= 769 && windowWidth <= 1024) {
        return renderTabletFooter();
    } else {
        return renderMobileFooter();
    }
}

export default Footer;
