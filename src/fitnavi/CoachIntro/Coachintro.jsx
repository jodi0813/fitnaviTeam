import "./Coachintro.scss";
import { useState } from "react";
import MainTitle from "../../components/Title/MainTitle";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsClock } from "react-icons/bs";


function Coachintro() {
    const [liked, setLiked] = useState(false);


    return (
        <>
            <main id="Coachintro">
                <section className="Coachintro-header">
                    <MainTitle title1="加入我們" title2="成為我們的合作夥伴" className="no-line" />
                    <button>首頁&gt;健身教練&gt;張俐筠 Lila</button>
                </section>

                <button className="BacktoPage">&lt;返回列表</button>

                <section className="Coachintro-person">

                    <div className="person-class-photo">
                        <div className="coachphotos">
                            <div className="selfie">
                                <img src="./public/images/教練形象照-01.jpg" alt="" />
                            </div>
                            <div className="more">
                                <figure className="moreimg1">
                                    <img src="./public/images/教練輪播小圖-01.jpg" />
                                </figure>

                                <figure className="moreimg2">
                                    <img src="./public/images/教練輪播小圖-02.jpg" alt="" />
                                </figure>

                                <figure className="moreimg3">
                                    <img src="./public/images/教練輪播小圖-03.jpg" alt="" />
                                </figure>

                            </div>

                            <div className="TurnButton">
                                <button>&#9675;</button>
                                <button>&#9675;</button>
                                <button>&#9675;</button>
                                <button>&#9675;</button>
                                <button>&#9675;</button>

                            </div>


                        </div>
                    </div>


                    <div className="Coachclass-container">
                        <div className="personinfo">
                            <div className="namefavorite">
                                <h2>張俐筠 Lila</h2>
                                <button onClick={() => setLiked(!liked)} className="like-button">
                                    {liked ? (
                                        <IoMdHeart size={30} color="#FF8740" />
                                    ) : (
                                        <IoMdHeartEmpty size={30} color="#FF8740" />
                                    )}
                                </button>
                            </div>
                            <p>＃健身教練#減脂訓練＃個人指導＃#功能性訓練＃TRX</p>

                        </div>

                        <div className="classbox">
                            <div className="classtime">
                                <h2>一對一訓練課程</h2>
                                <div className="timeblock">
                                    <BsClock />
                                    <span>60分鐘</span>
                                </div>
                            </div>

                            <div className="p-linethrough-color">
                                <p>單堂價格：</p>
                                <p className="p-linethrough">$1,500</p>
                                <span>
                                    <p className="FirstPrice">首次體驗價</p>
                                    <span className="Arrow-price">
                                        <p className="Arrow-orange">⭢</p>
                                        <p className="OrangePrice">$600</p>
                                    </span>

                                </span>

                                <p className="SingleClass">/單堂</p>
                            </div>

                            <div className="prices-button">
                                <p>10堂優惠 ：$1,400/單堂</p>
                                <div className="price-with-button">
                                    <p>20堂優惠 ：$1,200/單堂</p>
                                    <button class="classinrto" type="button">立即報名</button>
                                </div>
                            </div>

                        </div>

                        <div class="place">
                            <p>上課地點<br />可選擇</p>
                            <div className="moreimg4">
                                <img src="./images/Frame 104.png" alt="" />
                                <p>臺北市大安區Ａ健身房</p>
                            </div>

                            <div className="moreimg5">
                                <img src="./images/Frame 104-1.png" alt="" />
                                <p>臺北市大安區B健身房</p>
                            </div>
                        </div>

                    </div>

                </section>


                <section className="coachnav">
                    <nav className="intro">
                        <ul>
                            <li><a href="#">關於教練</a></li>
                            <li><a href="#">專長領域</a></li>
                            <li><a href="#">工作經歷</a></li>
                            <li><a href="#">專業證照</a></li>
                            <li><a href="#">預約流程</a></li>
                            <li><a href="#">教練可預約時間</a></li>
                            <li><a href="#">發表文章</a></li>
                            <li><a href="#">學員評價</a></li>
                        </ul>
                    </nav>
                </section>

                <section className="about">
                    <div className="aboutcontent">
                        <div className="about">
                            <h3>關於教練</h3>
                            <h4>About</h4>
                        </div>
                        <div className="bubble-wrapper">
                            <div className="talkbubble">
                                <p>不只是訓練，<br />是量身打造的改變。</p>
                            </div>
                        </div>

                    </div>
                    <p>嗨，我是[教練名字]，一名熱愛健身、致力於幫助每位學員達成健康與體態目標的專業健身教練。我相信運動不只是改變外在，更能提升自信與生活品質。
                        擁有[相關證照，如NASM、ACE等]與[多少]年的教學經驗，我專注於[如增肌、減脂、功能性訓練等]，並根據每位學員的身體狀況與需求，量身打造最適合的訓練計畫。我重視科學化訓練，搭配適當的飲食指導，讓妳不只在健身房進步，更能在生活中感受到體能提升的改變。
                        不論妳是健身新手，還是想突破瓶頸的進階訓練者，我都會陪妳一起前進，一起打造更強壯、更健康的自己。</p>
                </section>


                <section className="spe">
                    <div className="spetitle">
                        <h3>專長領域</h3>
                        <h4>Specialty</h4>
                    </div>

                    <div className="circlewrapper">
                        <div className="circle">
                            <h4>體態雕塑</h4>
                            <p>增肌減脂、核心強化、線條塑造
                            </p>
                        </div>

                        <div className="circle">
                            <h4>運動提升表現</h4>
                            <p>運動員體能訓練、爆發力與肌耐力訓練</p>
                        </div>

                        <div className="circle">
                            <h4>功能性訓練</h4>
                            <p>長期姿勢改善、減少運動傷害、提升活動能力</p>
                        </div>

                        <div className="circle">
                            <h4>特殊族群訓練</h4>
                            <p>孕產婦訓練、中高齡體適能、術後復健運動指導</p>
                        </div>

                    </div>
                </section>

                <section className="exp-cer">
                    <div className="expcontent">
                        <div className="exptitle">
                            <h3>工作經歷</h3>
                            <h4>Working Experiences</h4>
                        </div>

                        <p>·[幾年] 年健身教練經驗，累積超過 [多少] 堂私人課程<br />
                            ·曾任職於 [健身房名稱/私人工作室]，專長增肌、減脂、體能訓練<br />
                            /                  ·指導超過 [多少] 名學員，達成體態與表現目標<br />
                            ·開設團體與企業課程，內容涵蓋體適能與 HIIT 訓練 </p>
                    </div>

                    <div className="certificate">
                        <div className="certitle">
                            <h3>專業證照</h3>
                            <h4>Certification</h4>
                        </div>

                        <p>·中華民國體適能協會 C 級健身指導員<br />
                            ·ACE 美國運動委員會私人教練證照<br />
                            ·TRX 懸吊訓練系統認證教練<br />
                        </p>
                    </div>

                </section>

                <section className="reservation">
                    <div className="reserve">
                        <div className="restitle">
                            <h3>預約流程</h3>
                            <h4>Reserve Process</h4>
                        </div>
                        <div className="process">
                            <div className="number">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                            </div>

                            <div className="resdetail">
                                <p>點選立即報名</p>
                                <p>個人頁面＞我的訂單＞課程訂單</p>
                                <p>點選剩餘堂數</p>
                                <p>預約專屬時間並選擇上課地點</p>
                                <p>教練確認預約</p>
                            </div>
                        </div>
                    </div>

                    <div className="calendar">
                        <div className="caltitle">
                            <h3>教練可預約時間</h3>
                            <h4>Available Time</h4>
                        </div>


                        <div class="main-container-wrapper"></div>

                        <header className="calendarname">
                            <button className="header__btn header__btn--left" title="Menu">
                                <svg className="icon" width="20px" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#fff" d="M0 0h20v2H0zM0 7h20v2H0zM0 14h20v2H0z" />
                                </svg>
                            </button>
                            <button className="header__btn header__btn--right" title="Add event">
                                <svg className="icon" width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#fff" d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" />
                                </svg>
                            </button>
                        </header>

                        <div class="calendar-container">
                            <div class="calendar-container__header">
                                <button class="calendar-container__btn calendar-container__btn--left" title="Previous">
                                    <i class="icon ion-ios-arrow-back"></i>
                                </button>
                                <h2 class="calendar-container__title">October 2018</h2>
                                <button class="calendar-container__btn calendar-container__btn--right" title="Next">
                                    <i class="icon ion-ios-arrow-forward"></i>
                                </button>
                            </div>
                            <div class="calendar-container__body">
                                <div class="calendar-table">
                                    <div class="calendar-table__header">
                                        <div class="calendar-table__row">
                                            <div class="calendar-table__col">S</div>
                                            <div class="calendar-table__col">M</div>
                                            <div class="calendar-table__col">T</div>
                                            <div class="calendar-table__col">W</div>
                                            <div class="calendar-table__col">T</div>
                                            <div class="calendar-table__col">F</div>
                                            <div class="calendar-table__col">S</div>
                                        </div>
                                    </div>
                                    <div class="calendar-table__body">
                                        <div class="calendar-table__row">
                                            <div class="calendar-table__col calendar-table__inactive">
                                                <div class="calendar-table__item">
                                                    <span>30</span>
                                                </div>
                                            </div>
                                            <div class="calendar-table__col calendar-table__today">
                                                <div class="calendar-table__item">
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <div class="calendar-table__col">
                                                <div class="calendar-table__item">
                                                    <span>2</span>
                                                </div>
                                            </div>
                                            <div class="calendar-table__col">
                                                <div class="calendar-table__item">
                                                    <span>3</span>
                                                </div>
                                            </div>
                                            <div className="calendar-table__col">
                                                <div className="calendar-table__item">
                                                    <span>4</span>
                                                </div>
                                            </div>
                                            <div className="calendar-table__col calendar-table__event">
                                                <div className="calendar-table__item">
                                                    <span>5</span>
                                                </div>
                                            </div>
                                            <div className="calendar-table__col">
                                                <div className="calendar-table__item">
                                                    <span>6</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calendar-table__row">
                                            <div className="calendar-table__item">
                                                <span>7</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>8</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>9</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>10</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>11</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>12</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>13</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>14</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>15</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                                            <div className="calendar-table__item">
                                                <span>16</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long">
                                            <div className="calendar-table__item">
                                                <span>17</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                                            <div className="calendar-table__item">
                                                <span>18</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>19</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>21</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>22</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>23</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>24</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>25</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>26</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                                            <div className="calendar-table__item">
                                                <span>27</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                                            <div className="calendar-table__item">
                                                <span>28</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>29</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>30</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>31</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>


                <section className="coacharticle">
                    <div className="articletitle">
                        <h3 className="title">發表文章</h3>
                        <h4>Articles</h4>
                    </div>

                    <div className="classcard">
                        <div className="arrow">
                            <button>&lt;</button>
                        </div>

                        <div className="Coachintrocard">
                            <div className="card1">
                                <p>2025/03/28</p>
                                <div className="img-box"><img src="./images/article.png" alt="" /></div>
                                <div className="content-box">
                                    <h4>健身初學者必看：<br />如何開始你的運動旅程</h4>
                                    <p>剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。
                                    </p>
                                    <div class="Coachintrocard-tag">
                                        <p>#標籤</p>
                                        <p>#標籤</p>
                                        <p>#標籤</p>
                                    </div>
                                </div>
                                <div className="tag-box">健身入門</div>
                            </div>

                            <div className="card2">
                                <p>2025/03/28</p>
                                <div class="img-box"><img src="./images/article.png" alt="" /></div>
                                <div className="content-box">
                                    <h4>健身初學者必看：<br />如何開始你的運動旅程</h4>
                                    <p>剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。
                                    </p>
                                    <div className="tag">
                                        <p>#標籤</p>
                                        <p>#標籤</p>
                                        <p>#標籤</p>
                                    </div>
                                </div>
                                <div className="tag-box">健身入門</div>
                            </div>

                            <div className="card3">
                                <p>2025/03/28</p>
                                <div class="img-box"><img src="./images/article.png" alt="" /></div>
                                <div className="content-box">
                                    <h4>健身初學者必看：<br />如何開始你的運動旅程</h4>
                                    <p>剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。
                                    </p>
                                    <div className="tag">
                                        <p>#標籤</p>
                                        <p>#標籤</p>
                                        <p>#標籤</p>
                                    </div>
                                </div>
                                <div className="tag-box">健身入門</div>
                            </div>
                        </div>

                        <div className="arrow">
                            <button>&gt;</button>
                        </div>

                    </div>
                </section>

                <section className="comment">
                    <div className="commentitle">
                        <h3>學員評價</h3>
                        <h4>Rating</h4>
                    </div>
                    <div className="star">
                        <p>4.0</p>
                        <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    </div>
                </section >
            </main >

        </>
    )
}
export default Coachintro