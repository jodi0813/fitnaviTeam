import "./Footer.css";
import { useNavigate } from 'react-router-dom';


function Footer() {
    const navigate=useNavigate();
    return (
        <>
            <section id="footer">
                <div className="footerwrapper">
                    {/* <img src="/images/Footer.png" alt="Footer" /> */}

                    <div className="footer-overlaytext">
                        <div className="footer-columntext">
                            <div className="explore">
                                <h4>探索</h4>
                                <p onClick={()=>{navigate('/Coach');
                                    window.scrollTo(0, 0);}} style={{cursor:"pointer"}}>課程搜尋</p>
                                <p onClick={()=>{navigate('/CenterMap');
                                    window.scrollTo(0, 0);}} style={{cursor:"pointer"}}>場地介紹</p>
                                <p onClick={()=>{navigate('/Allarticle');
                                    window.scrollTo(0, 0);}} style={{cursor:"pointer"}}>知識分享</p>
                                <p onClick={()=>{navigate('/Joinus');
                                    window.scrollTo(0, 0);}} style={{cursor:"pointer"}}>合作夥伴</p>
                            </div>

                            <div className="partner">
                                <h4>合作夥伴</h4>
                                <p onClick={()=>{navigate('/MemberLogin');
                                    window.scrollTo(0, 0);}} style={{cursor:"pointer"}}>登入後台</p>
                                <p>合作夥伴支援中心</p>
                                <p>將您的課程上線</p>
                            </div>

                            <div className="aboutus">
                                <h4>關於我們</h4>
                                <p>我們如何運作</p>
                                <p>媒體中心</p>
                                <p>其他問題</p>
                            </div>

                            <div className="law">
                                <h4>條款與條件</h4>
                                <p>隱私權和cookies</p>
                                <p>合作夥伴爭議解決中心</p>
                            </div>
                        </div>

                        <div className="copyright">Copyright © 2025 FITNAVI All rights reserved.</div>
                    </div>


                </div>



            </section>

        </>)
}
export default Footer;