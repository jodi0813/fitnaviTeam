import "./Coachintro.scss";
import { useState } from "react";
import MaintitleBread from '../../components/Title/MaintitleBread';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import Articlecards from "../../components/Articlecards/Articlecards";
import { useNavigate } from 'react-router-dom';
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import PhotoGallery1 from '../../components/Carousel/PhotoGallery1';
import PopupWindow1 from "./PopupWindow/PopupWindow1";
import PopupWindow2 from "./PopupWindow/PopupWindow2";
import PopupWindow3 from "./PopupWindow/PopupWindow3";
import PopupWindow4 from "./PopupWindow/PopupWindow4";
import { useRef } from 'react';




function Coachintro() {
    //管理導航
    const navigate = useNavigate();

    //管理彈窗
    const [showPopup, setShowPopup] = useState(false);


    //管理愛心
    const [liked, setLiked] = useState(false);

    //管理彈窗
    const [stepIndex, setStepIndex] = useState(0);
    const steps = [
        PopupWindow1,
        PopupWindow2,
        PopupWindow3,
        PopupWindow4
    ];

    const StepComponent = steps[stepIndex];

    const nextStep = () => {
        if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
    };
    const prevStep = () => {
        if (stepIndex > 0) setStepIndex(stepIndex - 1);
    };



    //文章卡牌
    const articlesData = [

        {
            id: "card1",
            date: "2025/04/11",
            img: "./images/article-5.jpg",
            title: "想練出理想線條？體態雕塑其實有方法",
            content: "想要雕塑迷人曲線，光靠減脂還不夠！針對臀部、腿部、核心等部位的專項訓練，搭配有氧運動，讓你的體態更加迷人，展現出最完美的曲線。",
            tags: ["曲線雕塑", "體態"],
            category: "體態雕塑",


        },
        {
            id: "card2",
            date: "2025/04/27",
            img: "./images/article-4.jpg",
            title: "為什麼肌力這麼重要？打造強韌體能的第一步",
            content: "你是否常常在訓練中感到停滯不前？增加重量、改變訓練方式或專注於大肌群訓練，都能有效突破瓶頸，提升力量，讓你進一步挑戰更高強度的訓練！",
            tags: ["力量突破", "肌力提升"],
            category: "肌力提升"

        },
        {
            id: "card3",
            date: "2025/05/20",
            img: "./images/article-3.jpg",
            title: "想有效燃脂？必學這5種高效率運動法",
            content: "高強度間歇運動（HIIT）是現代最有效率的燃脂方式之一。短時間內提升心跳率，刺激脂肪燃燒，即使運動結束後，代謝仍持續上升，是減脂族群的秘密武器。供從簡單動作開始的計劃。",
            tags: ["燃脂", "HIIT訓練"],
            category: "燃脂運動"
        },
        {
            id: "card4",
            date: "2025/06/15",
            img: "./images/article-1.jpg",
            title: "健身初學者必看：如何開始你的運動旅程",
            content: "剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃",
            tags: ["新手健身", "養成習慣"],
            category: "健身入門",
        },
    ];

    // 取得目前應該顯示的三張卡片（循環）
    //%是取餘數的意思，例如順序第五張，餘數5/4餘數1，這樣會顯示陣列1的卡牌
    const [index, setIndex] = useState(0);

    const goNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % articlesData.length);
    };

    const goBack = () => {
        setIndex((prevIndex) => (prevIndex - 1 + articlesData.length) % articlesData.length);
    };

    // 取得目前應該顯示的三張卡片（循環）
    const visibleCards = [
        articlesData[index % articlesData.length],
        articlesData[(index + 1) % articlesData.length],
        articlesData[(index + 2) % articlesData.length],
    ];






    const ColorCard = ({ description, cardColor, rate, name, date }) => {
        // 將 rate 轉為數值
        const numericRate = parseFloat(rate);

        // 根據評分顯示星星
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starColor = i < numericRate ? "#FF8740" : "#989794"; // 填充星星的顏色
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={starColor}>
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 20.202 4.665 24 6 15.601 0 9.748l8.332-1.73z" />
                </svg>
            );
        }

        return (
            <div style={{
                backgroundColor: cardColor,
                padding: "30px 30px 18px 30px",
                borderRadius: "10px",
                color: "#fff",
                width: "300px",
                height: "300px"
            }}>

                <div>
                    <div className="Star-rate">
                        {stars}
                        <h3>{numericRate.toFixed(1)}</h3> {/* 確保顯示小數點 */}
                    </div>
                </div>
                <p className="description">{description}</p>
                <div className="Name-date">
                    <p className="Name">{name}</p>
                    <p className="Date">{date}</p>
                </div>
            </div>
        );
    };

    const [cardData] = useState([
        {

            description: "課程沒有想像中緊湊，不過教練人很好教學也還算清楚，還是有學到一些訓練技巧。",
            color: "#F1F7D8",
            rate: "3.0",  // 評分為4顆星
            name: "鄭Ｏ翔",
            date: "2025/05/26"

        },
        {
            description: "每堂課後都能夠清楚感受到自己肌肉的變化，對於健身的信心也逐漸增強。",
            color: "#FEF6DD",
            rate: "5.0",
            name: "陳Ｏ怡",
            date: "2025/05/26"
        },
        {
            description: "訓練過程中，教練不僅會教我正確的動作技巧，還會鼓勵我不斷挑戰自我。每次突破自己的極限，我都感到非常有成就感。",
            color: "#F1F7D8",
            rate: "4.0",
            name: "林Ｏ偉",
            date: "2025/05/26"
        },
        {
            description: "非常感謝教練的耐心指導，讓我在短時間內見到了明顯的改變！",
            color: "#FEECDD",
            rate: "4.0",
            name: "曾Ｏ瑋",
            date: "2025/05/26"
        },
        {
            description: "教練的訓練方式讓我不再感到枯燥，每堂課都充滿驚喜！",
            color: "#E3F3F8",
            rate: "4.0",
            name: "吳Ｏ蓉",
            date: "2025/05/26"
        },
        {
            description: "我從來沒有想過自己能做到這麼多，謝謝教練讓我突破自己的極限！",
            color: "#FEECDD",
            rate: "4.0",
            name: "朱Ｏ瑄",
            date: "2025/05/26"
        },
        {
            description: "教練不僅是指導者，還是我的健身夥伴，總是給我正向的鼓勵！",
            color: "#F1F7D8",
            rate: "4.0",
            name: "陳Ｏ廷",
            date: "2025/05/26"
        },
        {
            description: "這是我參加過最有挑戰性的訓練，每次都感覺自己不斷突破自我！",
            color: "#FEECDD",
            rate: "4.0",
            name: "蔡Ｏ婷",
            date: "2025/05/26"
        },
        {
            description: "我喜歡教練總是能夠讓我挑戰自我，並且不會感到過度疲累，完美的平衡！",
            color: "#F1F7D8",
            rate: "4.0",
            name: "王Ｏ婷",
            date: "2025/05/26"
        }
    ]);


    //頁面區域移動
    const phase1Ref = useRef(null);
    const phase2Ref = useRef(null);
    const phase3Ref = useRef(null);
    const phase4Ref = useRef(null);
    const phase5Ref = useRef(null);
    const phase6Ref = useRef(null);
    const phase7Ref = useRef(null);
    const phase8Ref = useRef(null);



    return (

        <>
            <main id="all">

            </main>
            <main id="Coachintro">

                <MaintitleBread
                    title1="健身教練"
                    title2="找到專屬你的健身教練"
                    breadcrumbList={[
                        { label: "首頁", link: "/" },
                        { label: "健身教練", link: "/Coach" },
                        { label: "張莉筠 Lila" },
                    ]}
                />

                <section className="Coachintro-person">

                    <div className="person-class-photo">
                        <div className="coachphotos">
                            <PhotoGallery1 />



                        </div>
                    </div>


                    <div className="Coachclass-container">
                        <div className="personinfo">
                            <div className="namefavorite">
                                <h2>張莉筠Lila</h2>
                                <button onClick={() => setLiked(!liked)} className="like-button">
                                    {liked ? (
                                        <IoMdHeart size={30} color="#FF8740" />
                                    ) : (
                                        <IoMdHeartEmpty size={30} color="#FF8740" />
                                    )}
                                </button>
                            </div>
                            <p>＃健身教練#減脂訓練＃個人指導＃TRX</p>

                        </div>

                        <div className="coach-classbox">
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

                            <div className="coach-prices-button">
                                <p>10堂優惠 ：$1,400/單堂</p>
                                <div className="price-with-button">
                                    <p>20堂優惠 ：$1,200/單堂</p>
                                    <button
                                        className="classinrto-text"
                                        type="button"
                                        onClick={() => setShowPopup(true)}
                                    >
                                        <span className="classinrto-text">立即報名</span>
                                        <img src="./images/search.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="Coach-place">
                            <p>上課地點<br />可選擇</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="143" viewBox="0 0 3 143" fill="none">
                                <path d="M1.8335 142L1.8335 1" stroke="#3A2C19" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <div className="moreimg4" >
                                <img src="./images/classplace-1.jpg" alt="" />
                                <p>World Gym 台北大安店</p>
                            </div>

                            <div className="moreimg5">
                                <img src="./images/center.jpg" alt="" />
                                <p>TECHNOGym 忠孝館</p>
                            </div>
                        </div>

                    </div>

                </section>


                <section className="nav-about">

                    <div className="coachnav">
                        <nav className="intro">
                            <ul>

                                <button onClick={() => phase1Ref.current?.scrollIntoView({ behavior: 'smooth' })}>關於教練</button>
                                <button onClick={() => phase2Ref.current?.scrollIntoView({ behavior: 'smooth' })}>專長領域</button>
                                <button onClick={() => phase3Ref.current?.scrollIntoView({ behavior: 'smooth' })}>工作經歷</button>
                                <button onClick={() => phase4Ref.current?.scrollIntoView({ behavior: 'smooth' })}>專業證照</button>
                                <button onClick={() => phase5Ref.current?.scrollIntoView({ behavior: 'smooth' })}>預約流程</button>
                                <button onClick={() => phase5Ref.current?.scrollIntoView({ behavior: 'smooth' })}>教練可預約時間</button>
                                <button onClick={() => phase7Ref.current?.scrollIntoView({ behavior: 'smooth' })}>發表文章</button>
                                <button onClick={() => phase8Ref.current?.scrollIntoView({ behavior: 'smooth' })}>學員評價</button>

                            </ul>
                        </nav>
                    </div>

                    <div className="coachintro-all">

                        <div id="aboutCoach" ref={phase1Ref}>

                            <div className="coachsvg">
                                <p>不只是訓練，<br />是量身打造的改變</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="421" height="191" viewBox="0 0 421 191" fill="none">
                                    <path d="M125.387 -22.1668C118.493 -20.9203 111.6 -19.3337 104.807 -17.6338C98.0133 -15.9339 91.2199 -14.0073 84.5264 -11.9675C71.1394 -7.7744 57.8523 -2.56139 45.1646 3.78489C38.8707 7.07135 32.6767 10.5845 26.8823 14.8909C21.1878 19.0839 15.6932 23.957 11.4972 29.8499C9.39927 32.7964 7.70092 35.9696 6.50208 39.3694C5.30324 42.7691 4.80373 46.2823 4.80373 49.9087C4.90363 53.5351 5.70285 57.0483 7.00159 60.4481C8.30033 63.8478 9.99869 67.021 11.9967 70.0808L13.4953 72.3473L15.1936 74.5005C16.2926 75.9738 17.3915 77.447 18.5904 78.9202L22.1869 83.1133L23.086 84.1333L24.085 85.1532L25.9832 87.0798C28.4808 89.7996 31.278 92.0661 33.8755 94.5593C36.6728 96.8258 39.3702 99.2057 42.3673 101.246C45.2645 103.399 48.2616 105.325 51.2587 107.252C54.3557 109.065 57.3527 110.878 60.5496 112.465C66.8435 115.751 73.2373 118.698 79.8309 121.078C86.4246 123.571 93.1181 125.611 99.8116 127.424C106.605 129.124 113.398 130.484 120.292 131.617C133.978 133.884 147.865 135.357 161.751 136.15L163.05 136.037V137.51C163.05 142.156 162.95 146.689 162.651 151.222C162.351 155.756 161.951 160.289 161.352 164.822C160.752 169.355 159.953 173.888 158.754 178.307C158.155 180.574 157.456 182.727 156.557 184.88C155.657 187.034 154.558 189.073 153.16 191L151.262 189.073C155.258 183.974 159.454 179.101 163.75 174.454C168.045 169.808 172.541 165.275 177.037 160.855C181.532 156.435 186.228 152.129 191.123 148.163C196.018 144.196 201.013 140.343 206.608 137.17C208.007 136.377 209.505 135.697 211.004 135.13C211.703 134.79 212.602 134.677 213.401 134.45C214.201 134.223 215 134.11 215.699 133.997C217.298 133.657 218.696 133.544 220.295 133.317C221.793 133.204 223.292 132.977 224.79 132.864C230.785 132.41 236.779 132.297 242.773 132.184C254.661 131.957 266.55 132.184 278.538 132.41C302.315 132.864 326.092 133.77 349.769 134.563C361.658 135.017 373.546 135.47 385.335 135.697L403.117 136.037C409.012 136.037 415.006 136.15 420.9 136.037L421 138.87C397.223 140.796 373.346 140.456 349.569 140.23C325.792 139.89 302.015 139.097 278.338 138.53L260.556 138.19C254.661 138.077 248.667 137.963 242.773 138.077C236.879 138.077 230.984 138.19 225.09 138.53C223.592 138.643 222.193 138.757 220.694 138.87C219.296 139.097 217.797 139.097 216.398 139.323C215 139.55 213.701 139.776 212.402 140.23C211.104 140.796 209.805 141.25 208.506 141.93C203.311 144.65 198.416 148.276 193.621 152.016C188.825 155.869 184.13 159.949 179.534 164.142C174.939 168.335 170.443 172.641 165.947 177.174C161.552 181.707 157.156 186.24 153.16 191L151.262 189.073C153.659 185.9 155.158 181.707 156.357 177.514C157.456 173.321 158.255 168.901 158.854 164.482C159.454 160.062 159.853 155.529 160.053 151.109C160.353 146.576 160.453 142.043 160.453 137.623L161.751 138.983C154.658 140.003 147.565 140.116 140.572 139.89C133.479 139.663 126.486 138.983 119.393 137.85C112.399 136.717 105.406 135.243 98.5128 133.544C91.6195 131.73 84.7262 129.577 78.0327 126.971C71.2393 124.477 64.6457 121.418 58.2519 118.018C54.9551 116.318 51.8581 114.391 48.7611 112.578C45.6641 110.538 42.5671 108.612 39.57 106.345C36.5729 104.192 33.6757 101.699 30.7785 99.4323C27.9812 96.8258 25.184 94.446 22.5865 91.6128L20.5884 89.5729L19.5894 88.553L18.6903 87.4197L14.8939 83C13.6951 81.5268 12.4963 79.9402 11.3973 78.3536L9.59907 76.0871L8.00062 73.5939C5.80276 70.1941 3.9046 66.5677 2.50595 62.7146C1.00741 58.7482 0.10828 54.4418 0.00837738 50.022C-0.0915257 45.7156 0.707699 41.2959 2.10634 37.3295C3.60489 33.3631 5.60295 29.7366 8.00062 26.5635C12.796 20.1039 18.5904 15.1175 24.5845 10.8111C30.6786 6.50472 36.9725 2.87828 43.4662 -0.408184C56.4536 -6.86778 69.9405 -11.6275 83.6273 -15.7072C97.2141 -19.6737 111.101 -22.8468 124.987 -25L125.387 -22.1668Z" fill="#FF8740" />
                                </svg>

                            </div>

                            <div className="about-title">
                                <h3>關於教練</h3>
                                <h4>About</h4>
                            </div>
                            <p className="aboutCoach-content">

                                <p>嗨，我是張莉筠，一名熱愛健身、致力於幫助每位學員達成健康與體態目標的專業健身教練。</p>
                                <p>我相信運動不只是改變外在，更能提升自信與生活品質。</p>
                                <p>擁有ACE認證、TRX懸吊訓練系統認證與5年的教學經驗，我也專注於減脂與功能性訓練，並根據每位學員的身體狀況與需求，量身打造最適合的訓練計畫。我重視科學化訓練，搭配適當的飲食指導，讓妳不只在健身房進步，更能在生活中感受到體能提升的改變。</p>
                                不論妳是健身新手，還是想突破瓶頸的進階訓練者，我都會陪妳一起前進，一起打造更強壯、更健康的自己。</p>
                        </div>

                        <section id="spe" ref={phase2Ref}>
                            <div className="coachspefield-wrapper">
                                <div className="spetitle">
                                    <h3>專長領域</h3>
                                    <h4>Specialty</h4>
                                </div>

                                <div className="coach-circlewrapper">
                                    <img src="./images/spe-field.png" alt="" />

                                </div>
                            </div>
                        </section>

                        <section id="Coach-exp-cer" ref={phase3Ref}>
                            <div className="coach-exp-cer-wrapper">
                                <div className="expcontent">
                                    <div className="exptitle">
                                        <h3>工作經歷</h3>
                                        <h4>Working Experiences</h4>
                                    </div>

                                    <ul className="ul-desktop">
                                        <li >5年健身教練經驗，累積超過200堂私人課程</li>
                                        <li>曾任職於健身工廠，專長TRX、減脂、功能性訓練</li>
                                        <li>指導超過150名學員，達成體態與表現目標</li>
                                        <li>開設團體與企業課程，內容涵蓋TRX懸吊訓練與減脂健身觀念宣導</li>
                                    </ul>

                                    <ul className="ul-tablet">
                                        <li >5年健身教練經驗
                                            <p>累積超過200堂私人課程</p></li>
                                        <li>曾任職於健身工廠
                                            <p>專長TRX、減脂、功能性訓練</p></li>
                                        <li>指導超過150名學員
                                            <p>達成體態與表現目標</p></li>
                                        <li>開設團體與企業課程
                                            <p>內容涵蓋TRX懸吊訓練與減脂健身觀念宣導</p></li>
                                    </ul>


                                </div>

                                <div id="certificate" ref={phase4Ref}>
                                    <div className="certitle">
                                        <h3>專業證照</h3>
                                        <h4>Certification</h4>
                                    </div>

                                    <ul>
                                        <li>中華民國體適能協會C級健身指導員</li>
                                        <li>ACE 美國運動委員會私人教練證照</li>
                                        <li>TRX 懸吊訓練系統認證教練</li>
                                    </ul>


                                </div>
                            </div>
                        </section>

                        <section id="reservation1" ref={phase5Ref}>
                            <div className="coach-reservation-wrapper">
                                <div className="reserve" >
                                    <div className="coachrestitle">
                                        <h3>預約流程</h3>
                                        <h4>Reserve Process</h4>
                                    </div>
                                    <div className="Coachprocess">
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

                                    <div className="coach-reserve-img">
                                        <img src="./images/reserved.png" alt="" />

                                        <p>預約成功！</p>

                                    </div>
                                </div>

                                <div className="Coach-Available-reservetime" ref={phase6Ref}>
                                    <div className="caltitle">
                                        <h3>教練可預約時間</h3>
                                        <h4>Available Time</h4>
                                    </div>


                                    <div className="Coach-Available-calendar">
                                        <CalendarComponent />
                                    </div>




                                </div>
                            </div>

                        </section>


                        <div id="coacharticle" ref={phase7Ref}>
                            <div className="article-wrapper">

                                <div className="articletitle">
                                    <h3 className="title">發表文章</h3>
                                    <h4>Articles</h4>
                                </div>

                                <div className="ViewArticles">
                                    {/* <ArticlecardsCarousel/> */}

                                    <button className="ViewArticles-left" onClick={goNext}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <path d="M30 36L18 24L30 12" stroke="#3A2C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></button>

                                    <div className="Three-classcards">
                                        {visibleCards.map((card, index) => (

                                            <Articlecards
                                                key={index}
                                                date={card.date}
                                                img={card.img}
                                                title={card.title}
                                                content={card.content}
                                                tags={card.tags}
                                                category={card.category}
                                                className={`card${index + 1}`}
                                                onClick={() => navigate(`/article/${card.id}`)}
                                            />
                                        ))}
                                    </div>

                                    <button className=" ViewArticles-right" onClick={goBack}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26" fill="none">
                                            <path d="M1 25L13 13L1 1" stroke="#3A2C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></button>
                                </div>



                            </div>
                        </div>

                        <div className="Coach-comment-wrapper" ref={phase8Ref}>
                            <div id="Coach-comment">
                                <div className="commentitle">
                                    <h3>學員評價</h3>
                                    <h4>Rating</h4>
                                </div>

                                <div className="star-card-wrapper">
                                    <div className="star-rate-title">
                                        <p>4.0</p>
                                        <div className="Star">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none">
                                                <path d="M28.0979 1.8541C28.6966 0.0114746 31.3034 0.0114799 31.9021 1.8541L37.409 18.8024C37.6767 19.6265 38.4446 20.1844 39.3111 20.1844L57.1316 20.1844C59.0691 20.1844 59.8746 22.6636 58.3072 23.8024L43.8901 34.2771C43.1891 34.7864 42.8958 35.6891 43.1635 36.5132L48.6704 53.4615C49.2691 55.3041 47.1601 56.8364 45.5927 55.6976L31.1756 45.2229C30.4746 44.7136 29.5254 44.7136 28.8244 45.2229L14.4073 55.6976C12.8399 56.8364 10.7309 55.3041 11.3296 53.4615L16.8365 36.5132C17.1042 35.6891 16.8109 34.7864 16.1099 34.2771L1.69281 23.8024C0.125385 22.6636 0.93094 20.1844 2.86839 20.1844L20.6889 20.1844C21.5554 20.1844 22.3233 19.6265 22.591 18.8024L28.0979 1.8541Z" fill="#FF8740" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none">
                                                <path d="M28.0979 1.8541C28.6966 0.0114746 31.3034 0.0114799 31.9021 1.8541L37.409 18.8024C37.6767 19.6265 38.4446 20.1844 39.3111 20.1844L57.1316 20.1844C59.0691 20.1844 59.8746 22.6636 58.3072 23.8024L43.8901 34.2771C43.1891 34.7864 42.8958 35.6891 43.1635 36.5132L48.6704 53.4615C49.2691 55.3041 47.1601 56.8364 45.5927 55.6976L31.1756 45.2229C30.4746 44.7136 29.5254 44.7136 28.8244 45.2229L14.4073 55.6976C12.8399 56.8364 10.7309 55.3041 11.3296 53.4615L16.8365 36.5132C17.1042 35.6891 16.8109 34.7864 16.1099 34.2771L1.69281 23.8024C0.125385 22.6636 0.93094 20.1844 2.86839 20.1844L20.6889 20.1844C21.5554 20.1844 22.3233 19.6265 22.591 18.8024L28.0979 1.8541Z" fill="#FF8740" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none">
                                                <path d="M28.0979 1.8541C28.6966 0.0114746 31.3034 0.0114799 31.9021 1.8541L37.409 18.8024C37.6767 19.6265 38.4446 20.1844 39.3111 20.1844L57.1316 20.1844C59.0691 20.1844 59.8746 22.6636 58.3072 23.8024L43.8901 34.2771C43.1891 34.7864 42.8958 35.6891 43.1635 36.5132L48.6704 53.4615C49.2691 55.3041 47.1601 56.8364 45.5927 55.6976L31.1756 45.2229C30.4746 44.7136 29.5254 44.7136 28.8244 45.2229L14.4073 55.6976C12.8399 56.8364 10.7309 55.3041 11.3296 53.4615L16.8365 36.5132C17.1042 35.6891 16.8109 34.7864 16.1099 34.2771L1.69281 23.8024C0.125385 22.6636 0.93094 20.1844 2.86839 20.1844L20.6889 20.1844C21.5554 20.1844 22.3233 19.6265 22.591 18.8024L28.0979 1.8541Z" fill="#FF8740" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none">
                                                <path d="M28.0979 1.8541C28.6966 0.0114746 31.3034 0.0114799 31.9021 1.8541L37.409 18.8024C37.6767 19.6265 38.4446 20.1844 39.3111 20.1844L57.1316 20.1844C59.0691 20.1844 59.8746 22.6636 58.3072 23.8024L43.8901 34.2771C43.1891 34.7864 42.8958 35.6891 43.1635 36.5132L48.6704 53.4615C49.2691 55.3041 47.1601 56.8364 45.5927 55.6976L31.1756 45.2229C30.4746 44.7136 29.5254 44.7136 28.8244 45.2229L14.4073 55.6976C12.8399 56.8364 10.7309 55.3041 11.3296 53.4615L16.8365 36.5132C17.1042 35.6891 16.8109 34.7864 16.1099 34.2771L1.69281 23.8024C0.125385 22.6636 0.93094 20.1844 2.86839 20.1844L20.6889 20.1844C21.5554 20.1844 22.3233 19.6265 22.591 18.8024L28.0979 1.8541Z" fill="#FF8740" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none">
                                                <path d="M28.0979 1.8541C28.6966 0.0114746 31.3034 0.0114799 31.9021 1.8541L37.409 18.8024C37.6767 19.6265 38.4446 20.1844 39.3111 20.1844L57.1316 20.1844C59.0691 20.1844 59.8746 22.6636 58.3072 23.8024L43.8901 34.2771C43.1891 34.7864 42.8958 35.6891 43.1635 36.5132L48.6704 53.4615C49.2691 55.3041 47.1601 56.8364 45.5927 55.6976L31.1756 45.2229C30.4746 44.7136 29.5254 44.7136 28.8244 45.2229L14.4073 55.6976C12.8399 56.8364 10.7309 55.3041 11.3296 53.4615L16.8365 36.5132C17.1042 35.6891 16.8109 34.7864 16.1099 34.2771L1.69281 23.8024C0.125385 22.6636 0.93094 20.1844 2.86839 20.1844L20.6889 20.1844C21.5554 20.1844 22.3233 19.6265 22.591 18.8024L28.0979 1.8541Z" fill="#FF8740" />
                                            </svg>

                                        </div>

                                    </div>


                                    <div className="Coach-comment-line1">
                                        {cardData.slice(0, 9).map((card, index) => (
                                            <div
                                                className="Coach-comment-card"
                                                key={index}
                                                style={{
                                                    marginTop: (index === 1 || index === 4 || index === 7) ? "60px" : "10px"
                                                }}
                                            >
                                                <ColorCard
                                                    description={card.description}
                                                    cardColor={card.color}
                                                    rate={parseFloat(card.rate)}
                                                    name={card.name}
                                                    date={card.date}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="Coach-seeMoreComment">
                                        <button>
                                            <span className="seeMore-text">查看更多評價</span>
                                            <img src="./images/search.svg" alt="" />
                                        </button>
                                    </div>

                                </div>






                            </div >
                        </div>
                    </div>




                </section>




            </main >


            {/* Overlay Modal */}
            {/* {showPopup && <PopupWindow1 onClose={() => setShowPopup(false)} onNext={nextStep} onPrev={prevStep}/>} */}
            {showPopup && (
                <StepComponent
                    onClose={() => setShowPopup(false)}
                    onNext={nextStep}
                    onPrev={prevStep}
                />
            )}

        </>
    )
}
export default Coachintro