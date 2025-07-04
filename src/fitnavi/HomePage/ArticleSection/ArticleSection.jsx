import { useNavigate } from "react-router-dom"; // 引入 useNavigate
import Articlecards from "../../../components/Articlecards/Articlecards";
import "./ArticleSection.scss";

function ArticleSection() {
    const navigate = useNavigate();  // 使用 useNavigate()

    const mixedData = [
        {
            id: "card1",
            date: "2025/06/15",
            img: "./images/article-1.jpg",
            title: "健身初學者必看：如何開始你的運動旅程",
            content: "剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。",
            tags: ["新手健身", "養成習慣"],
            category: "健身入門",
            type: 'card'
        },
        {
            id: "card2",
            date: "2025/05/26",
            img: "./images/article-2.jpg",
            title: "重訓不等於變壯？破解你的迷思！",
            content: "許多人擔心重量訓練會讓自己變得過於壯碩，實際上適當的重量訓練能幫助雕塑更好的線條，同時提升代謝率。正確觀念，讓你更接近理想體態。",
            tags: ["重訓", "迷思破解"],
            category: "重量訓練",
            type: 'card'
        },
        {
            id: "card3",
            date: "2025/05/20",
            img: "./images/article-3.jpg",
            title: "想有效燃脂？必學這5種高效率運動法",
            content: "高強度間歇運動（HIIT）是現代最有效率的燃脂方式之一。短時間內提升心跳率，刺激脂肪燃燒，即使運動結束後，代謝仍持續上升，是減脂族群的秘密武器。",
            tags: ["燃脂", "HIIT訓練"],
            category: "燃脂運動",
            type: 'card'
        }
    ];

    const cardData = [
        {
            id: "card6",
            date: "2025/04/06",
            img: "./images/article-6.jpg",
            title: "每天10分鐘，伸展放鬆身體提升柔軟度",
            content: "很多人運動後忽略伸展，導致肌肉僵硬或拉傷。伸展不僅能放鬆肌肉，還有助於預防運動傷害。學會正確的伸展技巧，讓你的運動效果事半功倍。",
            tags: ["伸展運動", "放鬆肌肉"],
            category: "伸展放鬆"
        },
        {
            id: "card7",
            date: "2025/03/28",
            img: "./images/article-7.jpg",
            title: "減脂只靠運動不夠？飲食管理才是關鍵",
            content: "減脂並不意味著無止境的節食，關鍵在於合理控制飲食，搭配有效的運動。減少糖分與不健康脂肪的攝取，讓你在消耗脂肪的同時保持活力。",
            tags: ["減脂", "健康飲食", "瘦身攻略"],
            category: "減脂攻略"
        },
        {
            id: "card10",
            img: "./images/article-8.jpg",
            title: "增肌該怎麼吃？營養搭配與飲食策略分享",
            content: "想要增肌，光靠訓練是不夠的，飲食也起著關鍵作用。適量增加蛋白質和碳水化合物的攝入，並確保攝取足夠的熱量，讓你在訓練後獲得更多肌肉增長。",
            tags: ["增肌", "蛋白質補充"],
            category: "增肌飲食",
            role: '營養師'
        }
    ]

    return (
        <>
            {/* 整個區塊 */}

            <section className="ArticleSection-wrapper">
                {/* 知識文章裝飾性標題 */}
                <div className="orangeTitle">
                    <h3 className="right-top">知識文章</h3>
                    <h3 className="left-bottom">知識文章</h3>
                </div>
                {/* ARTICLE小尺寸用標題 */}

                <div className="article-left article-title-s">ARTICLES</div>
                <div className="article-right article-title-s">ARTICLES</div>

                {/* 英文標題加兩欄文章 */}
                <div className="cards-text-container">
                    {/* 兩欄文章 */}
                    <div className="cards-all">
                        {/* 文章col1 */}
                        <div className="cards-column1">
                            {mixedData
                                .filter((item) => item.type === 'card')
                                .map((item, index) => (
                                    <Articlecards
                                        key={index}
                                        date={item.date}
                                        img={item.img}
                                        title={item.title}
                                        content={item.content}
                                        tags={item.tags}
                                        category={item.category}
                                        className={`card${index + 1}`}
                                        onClick={() => navigate(`/article/${item.id}`)}
                                    />
                                ))}
                        </div>
                        {/* 文章col2 */}
                        <div className="cards-column2">

                            {cardData

                                .map((item, index) => (
                                    <Articlecards
                                        key={index}
                                        date={item.date}
                                        img={item.img}
                                        title={item.title}
                                        content={item.content}
                                        tags={item.tags}
                                        category={item.category}
                                        className={`card${index + 1} ${item.id === 'card10' ? 'hide-on-large' : ''}`}
                                        onClick={() => navigate(`/article/${item.id}`)}
                                    />
                                ))}
                        </div>
                    </div>
                    {/* 英文直標題 */}
                    <div className="Article-text-column">
                        ARTICLES
                    </div>
                </div>

                {/* 底下標題小語跟按鈕 */}
                <div className="Hompagearticle-Chtitle">

                    <h2 className="title1">知識文章</h2>


                    <div className="subTitle">
                        <p>
                            「來自現場的知識，走得穩，也走得遠」<br />
                            教練與營養師親自撰寫，分享訓練與飲食中的實戰經驗，讓你在改變的路上不迷路。
                        </p>
                    </div>
                    <button onClick={() => {
                        navigate('/Allarticle');
                        window.scrollTo(0, 0);
                    }} style={{ cursor: "pointer" }}>查看更多文章</button>
                </div>


            </section>


        </>

    );
}

export default ArticleSection;
