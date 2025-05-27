import "./NutriIntro.scss";
import { useState } from "react";
import MaintitleBread from '../../components/Title/MaintitleBread';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import Articlecards from '../../components/Articlecards/Articlecards';
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import PhotoGallery2 from "../../components/Carousel/PhotoGallery2";
import PopupWindow1 from '../NutriIntro/PopupWindow/PopupWindow1';
import PopupWindow2 from '../NutriIntro/PopupWindow/PopupWindow2';
import PopupWindow3 from '../NutriIntro/PopupWindow/PopupWindow3';
import PopupWindow4 from '../NutriIntro/PopupWindow/PopupWindow4';



function NutriIntro() {
    //管理愛心
    const [liked, setLiked] = useState(false);

    //管理彈窗
    //管理彈窗打開
    const [showPopup, setShowPopup] = useState(false);
    //管理彈窗下一步
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


    //管理評價卡
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
                backgroundColor: cardColor, padding: "20px", borderRadius: "10px", color: "#fff", width: "300px",
                height: "298px"
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

            description: "諮詢後，我能更有規律地吃飯，保持健康的飲食習慣。",
            color: "#F1F7D8",
            rate: "4.0",  // 評分為4顆星
            name: "李Ｏ儀",
            date: "2025/05/26"

        },
        {
            description: "營養師幫我調整了過去不健康的飲食方式，讓我每天都能夠保持適量的營養攝取。這樣的生活方式讓我更加輕鬆，也讓我的身體變得更加健康。",
            color: "#FEF6DD",
            rate: "5.0",
            name: "黃Ｏ傑",
            date: "2025/05/26"
        },
        {
            description: "營養師幫我調整飲食後，我的體能提升了不少，感覺更有活力。",
            color: "#F1F7D8",
            rate: "4.0",
            name: "張Ｏ如",
            date: "2025/05/26"
        },
        {
            description: "營養師幫我設計了一個非常實用的飲食計劃，並且根據我的需求調整了每一項建議。結果不僅是體重的減輕，整體健康狀況也明顯改善了。",
            color: "#FEECDD",
            rate: "4.0",
            name: "王Ｏ涵",
            date: "2025/05/26"
        },
        {
            description: "營養師的專業建議讓我找到了適合自己的飲食方式，效果很好。",
            color: "#E3F3F8",
            rate: "4.0",
            name: "邱Ｏ涵",
            date: "2025/05/26"
        },
        {
            description: "我從來沒有像這樣系統地了解過飲食與健康之間的關聯，營養師的諮詢讓我對自己的身體有了更多的了解。改變飲食後，我的能量更充沛。",
            color: "#FEECDD",
            rate: "4.0",
            name: "朱Ｏ瑄",
            date: "2025/05/26"
        },
        {
            description: "這次的營養諮詢讓我發現，原來飲食的管理其實是這麼簡單！營養師不僅提供了個性化的建議，還幫我調整了我的飲食計劃，讓我容易達成目標。",
            color: "#F1F7D8",
            rate: "4.0",
            name: "蔡Ｏ珊",
            date: "2025/05/26"
        },
        {
            description: "感謝營養師讓我對飲食有了全新認識，體重和健康都達到了目標。",
            color: "#FEECDD",
            rate: "4.0",
            name: "劉Ｏ霏",
            date: "2025/05/26"
        },
        {
            description: "這是我第一次進行營養師諮詢，經驗非常好！營養師提供了詳細的飲食計劃，並根據我的生活習慣給出了非常實用的建議。",
            color: "#F1F7D8",
            rate: "4.0",
            name: "許Ｏ傑",
            date: "2025/05/26"
        }
    ]);

    //管理文章
    const nutriArticleData = [
        {
            id: "card1",
            date: "2025/06/27",
            img: "./images/article-10.jpg",
            title: "蛋白質怎麼補才有效？掌握時機最重要",
            content: "減脂並不意味著無止境的節食，關鍵在於合理控制飲食，搭配有效的運動。減少糖分與不健康脂肪的攝取，讓你在消耗脂肪的同時保持活力。",
            tags: ["增肌", "蛋白質補充"],
            category: "減脂攻略"

        },

        {
            id: "card2",
            date: "2025/03/28",
            img: "./images/article-7.jpg",
            title: "減脂只靠運動不夠？飲食管理才是關鍵",
            content: "減脂並不意味著無止境的節食，關鍵在於合理控制飲食，搭配有效的運動。減少糖分與不健康脂肪的攝取，讓你在消耗脂肪的同時保持活力。",
            tags: ["健康飲食", "瘦身攻略"],
            category: "減脂攻略"

        },
        {
            id: "card3",
            date: "2025/02/04",
            img: "./images/article-8.jpg",
            title: "增肌該怎麼吃？營養搭配與飲食策略分享",
            content: "想要增肌，光靠訓練是不夠的，飲食也起著關鍵作用。適量增加蛋白質和碳水化合物的攝入，並確保攝取足夠的熱量，讓你在訓練後獲得更多肌肉增長。",
            tags: ["增肌飲食", "蛋白質補充"],
            category: "增肌飲食"

        },
        {
            id: "card4",
            date: "2025/01/02",
            img: "./images/article-9.jpg",
            title: "健身不只是動，營養均衡才是成功的秘密",
            content: "健身營養的成功不僅是攝取足夠的卡路里，更重要的是如何搭配碳水化合物、蛋白質與脂肪。根據不同的健身目標，合理調整飲食比例，讓效果事半功倍！",
            tags: ["健身營養", "飲食"],
            category: "營養調配"

        },
        {
            id: "card5",
            date: "2024/09/13",
            img: "/images/article-11.jpg",
            title: "減脂不只是吃得少，吃對才是王道",
            content: "一味節食容易導致代謝下降與肌肉流失。想健康減脂，關鍵在於選對食物、控制熱量並保持飽足感，讓你不挨餓也能慢慢瘦下來！",
            tags: ["減脂", "健康飲食"],
            category: "減脂攻略"
        }

    ];

    const [index, setIndex] = useState(0);

    const goNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % nutriArticleData.length);
    };

    const goBack = () => {
        setIndex((prevIndex) => (prevIndex - 1 + nutriArticleData.length) % nutriArticleData.length);
    };

    // 取得目前應該顯示的三張卡片（循環）
    const nutrivisibleCards = [
        nutriArticleData[index % nutriArticleData.length],
        nutriArticleData[(index + 1) % nutriArticleData.length],
        nutriArticleData[(index + 2) % nutriArticleData.length],
    ];




    return (

        <>
            <main id="Nutriintro">

                <MaintitleBread
                    title1="營養師"
                    title2="找到專屬你的營養師"
                    breadcrumbList={[
                        { label: "首頁", link: "/" },
                        { label: "營養師", link: "/Nutritionist" },
                        { label: "安娜 Anna" },
                    ]}
                />




                <section className="Nutriintro-person">

                    <div className="Nutri-person-class-photo">
                        <div className="Nutri-photogallery">
                            <PhotoGallery2 />
                        </div>


                    </div>


                    <div className="Nutriclass-container">
                        <div className="Nutri-personinfo">
                            <div className="namefavorite">
                                <h2>安娜 Anna</h2>
                                <button onClick={() => setLiked(!liked)} className="like-button">
                                    {liked ? (
                                        <IoMdHeart size={30} color="#FF8740" />
                                    ) : (
                                        <IoMdHeartEmpty size={30} color="#FF8740" />
                                    )}
                                </button>
                            </div>
                            <p>＃運動員營養#減脂瘦身＃營養配方＃飲食建議</p>

                        </div>

                        <div className="Nutri-classbox">
                            <div className="classtime">
                                <h2>一對一客製化線上諮詢</h2>
                                <div className="timeblock">
                                    <BsClock />
                                    <span>50分鐘</span>
                                </div>
                            </div>

                            <div className="p-linethrough-color">
                                <p>單堂價格：</p>
                                <p className="p-linethrough">$1,800</p>
                                <span>
                                    <p className="FirstPrice">首次體驗價</p>
                                    <span className="Arrow-price">
                                        <p className="Arrow-orange">⭢</p>
                                        <p className="OrangePrice">$500</p>
                                    </span>

                                </span>

                                <p className="SingleClass">/單堂</p>
                            </div>

                            <div className="Nutri-prices-button">
                                <p>10堂優惠 ：$1,400/單堂</p>
                                <div className="Nutri-price-with-button">
                                    <button class="classinrto" type="button" onClick={() => setShowPopup(true)}>
                                        <span className="Nutriclassinrto-text">立即報名</span>
                                        <img src="./images/search.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="Nutri-place">
                            <p>上課平台<br />可選擇</p>

                            <div className="moreimg5">
                                <img src="./images/googleMeet.svg" alt="" />
                                <p>Google Meet</p>
                            </div>

                            <div className="moreimg4">
                                <img src="./images/zoom.svg" alt="" />
                                <p>Zoom</p>
                            </div>


                        </div>

                    </div>

                </section>



                <section className="nav-nav-content">
                    <div className="Nutrinav">
                        <nav className="Nutri-intro">
                            <ul>
                                <li><a href="#aboutNutri">關於營養師</a></li>
                                <li><a href="#spefield">專長領域</a></li>
                                <li><a href="#Nutri-exp-cer">工作經歷</a></li>
                                <li><a href="#Nutri-exp-cer">專業證照</a></li>
                                <li><a href="#Nutri-reservation">預約流程</a></li>
                                <li><a href="#Nutri-reservation">營養師可預約時間</a></li>
                                <li><a href="#Nutriarticle">發表文章</a></li>
                                <li><a href="#Nutri-comment">學員評價</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="nutriintro-all">


                        <section id="aboutnutri">
                            <div className="about-title">
                                <h3>關於營養師</h3>
                                <h4>About</h4>
                            </div>

                            <p >嗨，我是Anna，一名熱愛健康與營養的專業營養師，致力於幫助每位學員透過科學化飲食，建立更健康的生活方式。我深信「健康飲食不是限制，而是選擇更適合自己的方式」，透過營養知識與個人化飲食計畫，讓每個人都能吃得開心又無負擔。 在過去的3年中，我曾協助超過100位個案改善體態、提升運動表現、管理慢性疾病，並透過演講與課程推廣營養教育，希望幫助更多人用對的方式吃出健康、吃出理想體態。</p>
                        </section>



                        <section id="spefield">
                            <div className="spefield-wrapper">
                                <div className="spetitle">
                                    <h3>專長領域</h3>
                                    <h4>Specialty</h4>
                                </div>

                                <div className="nutri-circlewrapper">
                                    {/* <div className="circle1">
                                        <span>
                                            <h4>減脂營養規畫
                                            </h4>
                                            <p>根據個人體質與目標，<br />設計科學化的飲食計畫、
                                            </p>
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="310" height="309" viewBox="0 0 310 309" fill="none">
                                            <path d="M155 0.5C170.633 0.5 185.723 2.81591 199.944 7.11914L199.896 7.17188C185.688 2.87573 170.614 0.56543 155 0.56543C69.7116 0.56543 0.569336 69.4828 0.569336 154.5C0.569336 239.517 69.7116 308.435 155 308.435C240.288 308.435 309.431 239.517 309.431 154.5C309.431 142.058 307.948 129.96 305.152 118.372L305.209 118.31C308.013 129.916 309.5 142.035 309.5 154.5C309.5 239.55 240.33 308.5 155 308.5C69.6705 308.5 0.5 239.55 0.5 154.5C0.5 69.4497 69.6705 0.5 155 0.5Z" fill="#3A2C19" stroke="#3A2C19" />

                                        </svg>
                                    </div>

                                    <div className="circle2">
                                        <span>
                                            <h4>運動表現提升</h4>
                                            <p>為健身族群與運動員<br />提供能量補充與恢復策略
                                            </p>
                                        </span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="310" height="311" viewBox="0 0 310 311" fill="none">
                                            <path d="M309.132 147.411C309.713 158.822 309.029 170.478 306.96 182.211C292.157 266.163 212.1 322.219 128.148 307.416C121.289 306.206 114.616 304.56 108.153 302.513L108.219 302.462C114.665 304.502 121.32 306.143 128.16 307.35C212.075 322.146 292.097 266.114 306.894 182.199C308.959 170.489 309.642 158.854 309.065 147.461L309.132 147.411ZM181.755 3.39787C197.136 6.11005 211.58 11.0132 224.823 17.7281L224.764 17.7743C211.534 11.069 197.105 6.17399 181.743 3.46519C97.8277 -11.3314 17.8059 44.7005 3.00937 128.616C-0.669016 149.477 0.0310093 170.099 4.44824 189.538L4.3897 189.584C-0.0354096 170.128 -0.740217 149.487 2.94204 128.604C17.7451 44.6517 97.8026 -11.4052 181.755 3.39787Z" fill="#3A2C19" stroke="#3A2C19" />
                                        </svg>
                                    </div>

                                    <div className="circle3">
                                        <span>
                                            <h4>運動補充品解析</h4>
                                            <p>蛋白粉、BCAA、Creatine 等補充品的科學應用
                                            </p>
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="310" height="311" viewBox="0 0 310 311" fill="none">
                                            <path d="M309.208 147.411C309.79 158.822 309.105 170.478 307.036 182.211C292.233 266.163 212.177 322.219 128.225 307.416C121.365 306.206 114.692 304.56 108.229 302.513L108.295 302.462C114.741 304.502 121.396 306.143 128.236 307.35C212.151 322.146 292.173 266.114 306.97 182.199C309.035 170.489 309.719 158.854 309.141 147.461L309.208 147.411ZM181.831 3.39787C197.212 6.11005 211.656 11.0132 224.899 17.7281L224.841 17.7743C211.61 11.069 197.181 6.17399 181.819 3.46519C97.9039 -11.3314 17.8821 44.7005 3.08554 128.616C-0.592845 149.477 0.107181 170.099 4.52441 189.538L4.46587 189.584C0.0407623 170.128 -0.664045 149.487 3.01822 128.604C17.8213 44.6517 97.8788 -11.4052 181.831 3.39787Z" fill="#3A2C19" stroke="#3A2C19" />

                                        </svg>
                                    </div> */}

                                    <img src="./images/spe-field.png" alt="" />
                                </div>

                            </div>

                        </section>

                        <section id="Nutri-exp-cer">
                            <div className="Nutri-exp-cer-wrapper">
                                <div className="expcontent">
                                    <div className="exptitle">
                                        <h3>工作經歷</h3>
                                        <h4>Working Experiences</h4>
                                    </div>

                                    <ul >
                                        <li >國防醫學院運動營養學系 碩士</li>
                                        <li>北健康生活診所 營養師，提供個人化營養諮詢與膳食規劃</li>
                                        <li>華碩企業健康講座講師，推廣職場健康飲食</li>
                                        <li>私人健身營養顧問，協助運動員、健身族群設計個人化飲食策略</li>
                                        <li>社群內容創作者，於 IG (@anna_nutrition) 分享實用營養知識</li>
                                    </ul>


                                </div>

                                <div className="certificate">
                                    <div className="certitle">
                                        <h3>專業證照</h3>
                                        <h4>Certification</h4>
                                    </div>

                                    <ul>
                                        <li>國家高考營養師執照</li>
                                        <li>保健食品專業人才能力鑑定</li>
                                        <li>健康管理 / 代謝症候群營養規劃證書</li>
                                    </ul>


                                </div>

                            </div>


                        </section>

                        <section id="Nutri-reservation">
                            <div className="Nutri-reservation-wrapper">
                                <div className="nutrireserve">
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

                                    <div className="reserve-img">
                                        <img src="./images/reserved.png" alt="" />

                                        <p>預約成功！</p>

                                    </div>
                                </div>

                                <div className="Nutri-calendar-reservetime">
                                    <div className="caltitle">
                                        <h3>營養師可預約時間</h3>
                                        <h4>Available Time</h4>
                                    </div>


                                    <div className="Nutri-Available-calendar">
                                        <CalendarComponent />
                                    </div>



                                </div>
                            </div>


                        </section>


                        <section id="Nutriarticle">

                            <div className="Nutriarticle-wrapper">
                                <div className="articletitle">
                                    <h3 className="title">發表文章</h3>
                                    <h4>Articles</h4>
                                </div>

                                <div className="Nutri-ViewArticles">
                                    <button className="NutriViewArticles-left" onClick={goNext}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <path d="M30 36L18 24L30 12" stroke="#3A2C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></button>

                                    <div className="Three-classcards">

                                        {nutrivisibleCards.map((card, index) => (

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
                                    <button className=" NutriViewArticles-right" onClick={goBack}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26" fill="none">
                                            <path d="M1 25L13 13L1 1" stroke="#3A2C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></button>

                                </div>
                            </div>



                        </section>


                        <section className="Nutri-comment-wrapper">
                            <div id="Nutri-comment">
                                <div className="Nutricommentitle">
                                    <h3>學員評價</h3>
                                    <h4>Rating</h4>
                                </div>

                                <div className="Nutristar-card-wrapper">
                                <div className="star-rate">
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

                                <div className="Nutri-commentcard" style={{
                                    display: "grid",
                                    flexDirection: "column",
                                    gridTemplateColumns: "repeat(3, 1fr)", // 每行 3 欄
                                    gap: "50px",
                                    maxWidth: "960px", // 3 張卡片寬 + gap
                                    margin: "0 auto",  // 置中
                                    width: "100%",
                                }}>

                                    {cardData.slice(0, 9).map((card, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                marginTop: (index === 1 || index === 4 || index === 7) ? "60px" : "10px" // 設定 marginTop
                                            }}>

                                            <ColorCard
                                                key={index}
                                                description={card.description}
                                                cardColor={card.color}
                                                rate={parseFloat(card.rate)}
                                                name={card.name}
                                                date={card.date}
                                            />
                                        </div>
                                    ))}

                                </div>

                                <div className="seeMoreComment">
                                    <button>
                                        <span className="seeMore-text">查看更多評價</span>
                                        <img src="./images/search.svg" alt="" />
                                    </button>
                                </div>
                                </div>
                            </div>



                        </section>
                    </div>

                    <section className="nutrisvg">
                        <p>不只吃得好，<br />更吃得適合你。</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="421" height="191" viewBox="0 0 421 191" fill="none">
                            <path d="M125.387 -22.1668C118.493 -20.9203 111.6 -19.3337 104.807 -17.6338C98.0133 -15.9339 91.2199 -14.0073 84.5264 -11.9675C71.1394 -7.7744 57.8523 -2.56139 45.1646 3.78489C38.8707 7.07135 32.6767 10.5845 26.8823 14.8909C21.1878 19.0839 15.6932 23.957 11.4972 29.8499C9.39927 32.7964 7.70092 35.9696 6.50208 39.3694C5.30324 42.7691 4.80373 46.2823 4.80373 49.9087C4.90363 53.5351 5.70285 57.0483 7.00159 60.4481C8.30033 63.8478 9.99869 67.021 11.9967 70.0808L13.4953 72.3473L15.1936 74.5005C16.2926 75.9738 17.3915 77.447 18.5904 78.9202L22.1869 83.1133L23.086 84.1333L24.085 85.1532L25.9832 87.0798C28.4808 89.7996 31.278 92.0661 33.8755 94.5593C36.6728 96.8258 39.3702 99.2057 42.3673 101.246C45.2645 103.399 48.2616 105.325 51.2587 107.252C54.3557 109.065 57.3527 110.878 60.5496 112.465C66.8435 115.751 73.2373 118.698 79.8309 121.078C86.4246 123.571 93.1181 125.611 99.8116 127.424C106.605 129.124 113.398 130.484 120.292 131.617C133.978 133.884 147.865 135.357 161.751 136.15L163.05 136.037V137.51C163.05 142.156 162.95 146.689 162.651 151.222C162.351 155.756 161.951 160.289 161.352 164.822C160.752 169.355 159.953 173.888 158.754 178.307C158.155 180.574 157.456 182.727 156.557 184.88C155.657 187.034 154.558 189.073 153.16 191L151.262 189.073C155.258 183.974 159.454 179.101 163.75 174.454C168.045 169.808 172.541 165.275 177.037 160.855C181.532 156.435 186.228 152.129 191.123 148.163C196.018 144.196 201.013 140.343 206.608 137.17C208.007 136.377 209.505 135.697 211.004 135.13C211.703 134.79 212.602 134.677 213.401 134.45C214.201 134.223 215 134.11 215.699 133.997C217.298 133.657 218.696 133.544 220.295 133.317C221.793 133.204 223.292 132.977 224.79 132.864C230.785 132.41 236.779 132.297 242.773 132.184C254.661 131.957 266.55 132.184 278.538 132.41C302.315 132.864 326.092 133.77 349.769 134.563C361.658 135.017 373.546 135.47 385.335 135.697L403.117 136.037C409.012 136.037 415.006 136.15 420.9 136.037L421 138.87C397.223 140.796 373.346 140.456 349.569 140.23C325.792 139.89 302.015 139.097 278.338 138.53L260.556 138.19C254.661 138.077 248.667 137.963 242.773 138.077C236.879 138.077 230.984 138.19 225.09 138.53C223.592 138.643 222.193 138.757 220.694 138.87C219.296 139.097 217.797 139.097 216.398 139.323C215 139.55 213.701 139.776 212.402 140.23C211.104 140.796 209.805 141.25 208.506 141.93C203.311 144.65 198.416 148.276 193.621 152.016C188.825 155.869 184.13 159.949 179.534 164.142C174.939 168.335 170.443 172.641 165.947 177.174C161.552 181.707 157.156 186.24 153.16 191L151.262 189.073C153.659 185.9 155.158 181.707 156.357 177.514C157.456 173.321 158.255 168.901 158.854 164.482C159.454 160.062 159.853 155.529 160.053 151.109C160.353 146.576 160.453 142.043 160.453 137.623L161.751 138.983C154.658 140.003 147.565 140.116 140.572 139.89C133.479 139.663 126.486 138.983 119.393 137.85C112.399 136.717 105.406 135.243 98.5128 133.544C91.6195 131.73 84.7262 129.577 78.0327 126.971C71.2393 124.477 64.6457 121.418 58.2519 118.018C54.9551 116.318 51.8581 114.391 48.7611 112.578C45.6641 110.538 42.5671 108.612 39.57 106.345C36.5729 104.192 33.6757 101.699 30.7785 99.4323C27.9812 96.8258 25.184 94.446 22.5865 91.6128L20.5884 89.5729L19.5894 88.553L18.6903 87.4197L14.8939 83C13.6951 81.5268 12.4963 79.9402 11.3973 78.3536L9.59907 76.0871L8.00062 73.5939C5.80276 70.1941 3.9046 66.5677 2.50595 62.7146C1.00741 58.7482 0.10828 54.4418 0.00837738 50.022C-0.0915257 45.7156 0.707699 41.2959 2.10634 37.3295C3.60489 33.3631 5.60295 29.7366 8.00062 26.5635C12.796 20.1039 18.5904 15.1175 24.5845 10.8111C30.6786 6.50472 36.9725 2.87828 43.4662 -0.408184C56.4536 -6.86778 69.9405 -11.6275 83.6273 -15.7072C97.2141 -19.6737 111.101 -22.8468 124.987 -25L125.387 -22.1668Z" fill="#FF8740" />
                        </svg>
                    </section>

                </section>









            </main >
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
export default NutriIntro