import React from 'react';
import Articlecards from '../../components/Articlecards';
import "./ArticleSection.scss";
// import { useNavigate } from "react-router-dom";


function ArticleSection() {
    const navigate=useNavigate();
    const cardsData = [

        {
            id: "card1",
            date: "2025/06/15",
            img: "./images/article-1.jpg",
            title: "健身初學者必看：如何開始你的運動旅程",
            content: "剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。",
            tags: ["新手健身", "養成習慣"],
            category: "健身入門"

        },
        {
            id: "card2",
            date: "2025/05/26",
            img: "./images/article-2.jpg",
            title: "重訓不等於變壯？破解迷思！",
            content: "許多人擔心重量訓練會讓自己變得過於壯碩，實際上適當的重量訓練能幫助雕塑更好的線條，同時提升代謝率。正確觀念，讓你更接近理想體態。",
            tags: ["重訓", "迷思破解"],
            category: "重量訓練"

        },
        {
            id: "card3",
            date: "2025/05/20",
            img: "./images/article-3.jpg",
            title: "想有效燃脂？必學這5種高效率運動法",
            content: "高強度間歇運動（HIIT）是現代最有效率的燃脂方式之一。短時間內提升心跳率，刺激脂肪燃燒，即使運動結束後，代謝仍持續上升，是減脂族群的秘密武器。供從簡單動作開始的計劃。",
            tags: ["燃脂", "HIIT訓練"],
            category: "燃脂運動"
        }]


    return (
        <>
            <section id="Homepage-Article">
                <div className="Homepage-Article-wrapper">

                    <div className="Homepage-ArticleCard">
                        {cardsData.map((card, index) => (

                            <Articlecards
                                key={index}
                                date={card.date}
                                img={card.img}
                                title={card.title}
                                content={card.content}
                                tags={card.tags}
                                category={card.category}
                                className={`card${index + 1}`}
                                // onClick={() => navigate(`/article/${card.id}`)}
                            />
                        ))}</div>

                    <div>

                    </div>


                </div>

            </section>
        </>
    )
} export default ArticleSection;