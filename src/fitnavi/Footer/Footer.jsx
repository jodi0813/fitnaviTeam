import "./Footer.css";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return (
        <section id="footer">
            {/* 回頂部按鈕 */}
            <button
                className="Back-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer' }}
            >
                <p>回頂部</p>
                <img src={`${process.env.PUBLIC_URL}/images/back-to-top.gif`} alt="回頂部" />
            </button>

            <div className="footerwrapper">
                {/* Footer 背景圖片 */}
                <img src={`${process.env.PUBLIC_URL}/images/Footer.png`} alt="Footer" />

                <div className="footer-overlaytext">
                    <div className="footer-columntext">

                        <div className="explore">
                            <h4>網站導覽</h4>
                            <p onClick={() => { navigate('/Coach'); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>健身教練</p>
                            <p onClick={() => { navigate('/Nutritionist'); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>營養師</p>
                            <p onClick={() => { navigate('/MyFavorite'); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>我的收藏</p>
                            <p onClick={() => { navigate('/Allarticle'); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>知識文章</p>
                            <p onClick={() => { navigate('/CenterMap'); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>健身場地</p>
                        </div>

                        <div className="Joinus">
                            <h4>合作夥伴</h4>
                            <p onClick={() => { navigate('/MemberLogin'); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}>加入我們</p>
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
}

export default Footer;
