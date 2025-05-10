import { useNavigate } from "react-router-dom"; // 引入 useNavigate
import Articlecards from "../../../components/Articlecards";
import "./ArticleSection.scss";

function ArticleSection() {
    const navigate = useNavigate();  // 使用 useNavigate()

    const mixedData = [
        {
            id: "card1",
            date: "2025/06/15",
            img: "./public/images/article-1.jpg",
            title: "健身初學者必看：如何開始你的運動旅程",
            content: "剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。",
            tags: ["新手健身", "養成習慣"],
            category: "健身入門",
            type: 'card'
        },
        {
            id: "card2",
            date: "2025/05/26",
            img: "./public/images/article-2.jpg",
            title: "重訓不等於變壯？破解迷思！",
            content: "許多人擔心重量訓練會讓自己變得過於壯碩，實際上適當的重量訓練能幫助雕塑更好的線條，同時提升代謝率。正確觀念，讓你更接近理想體態。",
            tags: ["重訓", "迷思破解"],
            category: "重量訓練",
            type: 'card'
        },
        {
            id: "card3",
            date: "2025/05/20",
            img: "./public/images/article-3.jpg",
            title: "想有效燃脂？必學這5種高效率運動法",
            content: "高強度間歇運動（HIIT）是現代最有效率的燃脂方式之一。短時間內提升心跳率，刺激脂肪燃燒，即使運動結束後，代謝仍持續上升，是減脂族群的秘密武器。",
            tags: ["燃脂", "HIIT訓練"],
            category: "燃脂運動",
            type: 'card'
        },
        { type: 'text', text: "Articles" }
    ];

    const cardData = [
        {
            id: "card6",
            date: "2025/04/06",
            img: "./public/images/article-6.jpg",
            title: "每天10分鐘，伸展放鬆身體提升柔軟度",
            content: "很多人運動後忽略伸展，導致肌肉僵硬或拉傷。伸展不僅能放鬆肌肉，還有助於預防運動傷害。學會正確的伸展技巧，讓你的運動效果事半功倍。",
            tags: ["運動傷害妨害", "放鬆肌肉"],
            category: "伸展放鬆"
        },
        {
            id: "card7",
            date: "2025/03/28",
            img: "./public/images/article-7.jpg",
            title: "減脂只靠運動不夠？飲食管理才是關鍵",
            content: "減脂並不意味著無止境的節食，關鍵在於合理控制飲食，搭配有效的運動。減少糖分與不健康脂肪的攝取，讓你在消耗脂肪的同時保持活力。",
            tags: ["減脂", "健康飲食", "瘦身攻略"],
            category: "減脂攻略"
        }
    ]

    return (
        <>
            <section>
                <div className="ArticleSection-wrapper">
                    <div className="cards-text-container">
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

                        <div className="text-column">
                            {mixedData
                                .filter((item) => item.type === 'text')
                                .map((item, index) => (
                                    <div key={index} className="interlaced-text">
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                        </div>

                        <div className="Hompage-Cards2">
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
                                            className={`card${index + 1}`}
                                            onClick={() => navigate(`/article/${item.id}`)}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>





                    <div className="Hompagearticle-Chtitle">
                        <h2>知識文章</h2>
                        <button>查看更多文章</button>
                    </div>
                </div>
            </section>

        </>

    );
}

export default ArticleSection;
