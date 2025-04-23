import { Link } from "react-router-dom";
import "./CenterNavbar.scss";
function CenterNavbar() {
    return (
        <>
            <div class="centerMenu">
                <ul >
                    <li>
                        <Link to="">場館資料</Link>
                    </li>
                    <li>
                        <Link to="">環境設施</Link>
                    </li>
                    <li>
                        <Link to="">私人教練</Link>
                    </li>
                </ul>
            </div>

            <section class="centerInformation">
                <div class="information">
                    <div>
                        <h2 class="">基本資料</h2>
                        <ul>
                            <li>
                                <strong>地址</strong><br />
                                100 台北市 中正區 濟南路一段 321號 1、2樓
                            </li>
                            <li>
                                <strong>營業時間</strong><br />
                                24小時
                            </li>
                            <li>
                                <strong>有無停車場</strong><br />
                                有  100 台北市 中正區 濟南路一段 321號 B1
                            </li>
                            <li>
                                <strong>大眾運輸</strong><br />
                                捷運善導寺站3號出口、公車123號、456號、789號
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src="./images/map.png" alt="場館地圖位置" />
                    </div>
                </div>

                <div class="outward">
                    <div>
                        <h2>場館外觀</h2>

                        <div class="centerPhotos">
                            <button>‹</button>
                            <img src="/images/center01.jpg" alt="外觀照片1" />
                            <img src="/images/center02.jpg" alt="外觀照片2" />
                            <img src="/images/center03.jpg" alt="外觀照片3" />
                            <button>›</button>
                        </div>

                    </div>
                </div>
                <div class="costContact">
                    <div>
                        <h2>入場費用</h2>
                        <ul>
                            <li>
                                <strong>單次入場</strong><br />
                                $50/小時<br />
                                $150/單日無限時
                            </li>
                            <li>
                                <strong>合作會員</strong><br />
                                $788/月<br />
                                $9000/年<br />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>聯絡方式</h2>
                        <ul>
                            <li>
                                <strong>連絡電話</strong><br />
                                (02)12345678<br />
                                (02)12345678<br />
                            </li>
                            <li>
                                <strong>社群媒體</strong><br />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );
}
export default CenterNavbar;
