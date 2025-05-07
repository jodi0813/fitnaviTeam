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
                                <img src="./public/images上課地點-1.jpg/" alt="" />
                                <p>臺北市大安區Ａ健身房</p>
                            </div>

                            <div className="moreimg5">
                                <img src="./public/images上課地點-2.jpg/" alt="" />
                                <p>臺北市大安區B健身房</p>
                            </div>
                        </div>

                    </div>

                </section>


                <section className="nav-about">
                    <div className="coachnav">
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
                    </div>

                    <div id="aboutCoach">
                        <div className="aboutcontent">
                            <div className="about">
                                <h3>關於教練</h3>
                                <h4>About</h4>
                            </div>
           

                            <div className="svg">
                                <p>不只是訓練，<br/>是量身打造的改變</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="421" height="191" viewBox="0 0 421 191" fill="none">
                                    <path d="M125.387 -22.1668C118.493 -20.9203 111.6 -19.3337 104.807 -17.6338C98.0133 -15.9339 91.2199 -14.0073 84.5264 -11.9675C71.1394 -7.7744 57.8523 -2.56139 45.1646 3.78489C38.8707 7.07135 32.6767 10.5845 26.8823 14.8909C21.1878 19.0839 15.6932 23.957 11.4972 29.8499C9.39927 32.7964 7.70092 35.9696 6.50208 39.3694C5.30324 42.7691 4.80373 46.2823 4.80373 49.9087C4.90363 53.5351 5.70285 57.0483 7.00159 60.4481C8.30033 63.8478 9.99869 67.021 11.9967 70.0808L13.4953 72.3473L15.1936 74.5005C16.2926 75.9738 17.3915 77.447 18.5904 78.9202L22.1869 83.1133L23.086 84.1333L24.085 85.1532L25.9832 87.0798C28.4808 89.7996 31.278 92.0661 33.8755 94.5593C36.6728 96.8258 39.3702 99.2057 42.3673 101.246C45.2645 103.399 48.2616 105.325 51.2587 107.252C54.3557 109.065 57.3527 110.878 60.5496 112.465C66.8435 115.751 73.2373 118.698 79.8309 121.078C86.4246 123.571 93.1181 125.611 99.8116 127.424C106.605 129.124 113.398 130.484 120.292 131.617C133.978 133.884 147.865 135.357 161.751 136.15L163.05 136.037V137.51C163.05 142.156 162.95 146.689 162.651 151.222C162.351 155.756 161.951 160.289 161.352 164.822C160.752 169.355 159.953 173.888 158.754 178.307C158.155 180.574 157.456 182.727 156.557 184.88C155.657 187.034 154.558 189.073 153.16 191L151.262 189.073C155.258 183.974 159.454 179.101 163.75 174.454C168.045 169.808 172.541 165.275 177.037 160.855C181.532 156.435 186.228 152.129 191.123 148.163C196.018 144.196 201.013 140.343 206.608 137.17C208.007 136.377 209.505 135.697 211.004 135.13C211.703 134.79 212.602 134.677 213.401 134.45C214.201 134.223 215 134.11 215.699 133.997C217.298 133.657 218.696 133.544 220.295 133.317C221.793 133.204 223.292 132.977 224.79 132.864C230.785 132.41 236.779 132.297 242.773 132.184C254.661 131.957 266.55 132.184 278.538 132.41C302.315 132.864 326.092 133.77 349.769 134.563C361.658 135.017 373.546 135.47 385.335 135.697L403.117 136.037C409.012 136.037 415.006 136.15 420.9 136.037L421 138.87C397.223 140.796 373.346 140.456 349.569 140.23C325.792 139.89 302.015 139.097 278.338 138.53L260.556 138.19C254.661 138.077 248.667 137.963 242.773 138.077C236.879 138.077 230.984 138.19 225.09 138.53C223.592 138.643 222.193 138.757 220.694 138.87C219.296 139.097 217.797 139.097 216.398 139.323C215 139.55 213.701 139.776 212.402 140.23C211.104 140.796 209.805 141.25 208.506 141.93C203.311 144.65 198.416 148.276 193.621 152.016C188.825 155.869 184.13 159.949 179.534 164.142C174.939 168.335 170.443 172.641 165.947 177.174C161.552 181.707 157.156 186.24 153.16 191L151.262 189.073C153.659 185.9 155.158 181.707 156.357 177.514C157.456 173.321 158.255 168.901 158.854 164.482C159.454 160.062 159.853 155.529 160.053 151.109C160.353 146.576 160.453 142.043 160.453 137.623L161.751 138.983C154.658 140.003 147.565 140.116 140.572 139.89C133.479 139.663 126.486 138.983 119.393 137.85C112.399 136.717 105.406 135.243 98.5128 133.544C91.6195 131.73 84.7262 129.577 78.0327 126.971C71.2393 124.477 64.6457 121.418 58.2519 118.018C54.9551 116.318 51.8581 114.391 48.7611 112.578C45.6641 110.538 42.5671 108.612 39.57 106.345C36.5729 104.192 33.6757 101.699 30.7785 99.4323C27.9812 96.8258 25.184 94.446 22.5865 91.6128L20.5884 89.5729L19.5894 88.553L18.6903 87.4197L14.8939 83C13.6951 81.5268 12.4963 79.9402 11.3973 78.3536L9.59907 76.0871L8.00062 73.5939C5.80276 70.1941 3.9046 66.5677 2.50595 62.7146C1.00741 58.7482 0.10828 54.4418 0.00837738 50.022C-0.0915257 45.7156 0.707699 41.2959 2.10634 37.3295C3.60489 33.3631 5.60295 29.7366 8.00062 26.5635C12.796 20.1039 18.5904 15.1175 24.5845 10.8111C30.6786 6.50472 36.9725 2.87828 43.4662 -0.408184C56.4536 -6.86778 69.9405 -11.6275 83.6273 -15.7072C97.2141 -19.6737 111.101 -22.8468 124.987 -25L125.387 -22.1668Z" fill="#FF8740" />
                                </svg>

                            </div>


                        </div>
                        <p>嗨，我是張莉筠，一名熱愛健身、致力於幫助每位學員達成健康與體態目標的專業健身教練。我相信運動不只是改變外在，更能提升自信與生活品質。擁有ACE認證、TRX懸吊訓練系統認證與5年的教學經驗，我也專注於減脂與功能性訓練，並根據每位學員的身體狀況與需求，量身打造最適合的訓練計畫。我重視科學化訓練，搭配適當的飲食指導，讓妳不只在健身房進步，更能在生活中感受到體能提升的改變。不論妳是健身新手，還是想突破瓶頸的進階訓練者，我都會陪妳一起前進，一起打造更強壯、更健康的自己。</p>
                    </div>

                </section>

                







                <section id="spe">
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

                <section id="exp-cer">
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

                <section id="reservation">
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