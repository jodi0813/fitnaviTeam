
import React, { useState } from 'react';
import Articlecards from '../../components/Articlecards/Articlecards';
import './AllArticle.scss';
import { useNavigate } from 'react-router-dom';
import MainTitle from '../../components/Title/MainTitle';

function Allarticle() {
    const navigate = useNavigate();

    const cardsData = [
        {
            id: "card1",
            date: "2025/06/15",
            img: "./images/article-1.jpg",
            title: "健身初學者必看：如何開始你的運動旅程",
            content: "剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。",
            tags: ["新手健身", "養成習慣"],
            category: "健身入門",
            role: '教練'
        },
        {
            id: "card2",
            date: "2025/05/26",
            img: "./images/article-2.jpg",
            title: "重訓不等於變壯？破解你的迷思！",
            content: "許多人擔心重量訓練會讓自己變得過於壯碩，實際上適當的重量訓練能幫助雕塑更好的線條，同時提升代謝率。正確觀念，讓你更接近理想體態。",
            tags: ["重訓", "迷思破解"],
            category: "重量訓練",
            role: '教練'
        },
        {
            id: "card3",
            date: "2025/05/20",
            img: "./images/article-3.jpg",
            title: "想有效燃脂？必學這5種高效率運動法",
            content: "高強度間歇運動（HIIT）是現代最有效率的燃脂方式之一。短時間內提升心跳率，刺激脂肪燃燒，即使運動結束後，代謝仍持續上升，是減脂族群的秘密武器。供從簡單動作開始的計劃。",
            tags: ["燃脂", "HIIT訓練"],
            category: "燃脂運動",
            role: '教練'
        },
        {
            id: "card4",
            date: "2025/04/27",
            img: "./images/article-4.jpg",
            title: "為什麼肌力這麼重要？打造強韌體能的第一步",
            content: "你是否常常在訓練中感到停滯不前？增加重量、改變訓練方式或專注於大肌群訓練，都能有效突破瓶頸，提升力量，讓你進一步挑戰更高強度的訓練！",
            tags: ["力量突破", "肌力提升"],
            category: "肌力提升",
            role: '教練'

        },
        {
            id: "card5",
            date: "2025/04/11",
            img: "./images/article-5.jpg",
            title: "想練出理想線條？體態雕塑其實有方法",
            content: "想要雕塑迷人曲線，光靠減脂還不夠！針對臀部、腿部、核心等部位的專項訓練，搭配有氧運動，讓你的體態更加迷人，展現出最完美的曲線。",
            tags: ["曲線雕塑", "體態"],
            category: "體態雕塑",
            role: '教練'

        },
        {
            id: "card6",
            date: "2025/04/06",
            img: "./images/article-6.jpg",
            title: "每天10分鐘，伸展放鬆身體提升柔軟度",
            content: "很多人運動後忽略伸展，導致肌肉僵硬或拉傷。伸展不僅能放鬆肌肉，還有助於預防運動傷害。學會正確的伸展技巧，讓你的運動效果事半功倍。",
            tags: ["伸展運動", "放鬆肌肉"],
            category: "伸展放鬆",
            role: '教練'
        },
        {
            id: "card7",
            date: "2025/03/28",
            img: "./images/article-7.jpg",
            title: "減脂只靠運動不夠？飲食管理才是關鍵",
            content: "減脂並不意味著無止境的節食，關鍵在於合理控制飲食，搭配有效的運動。減少糖分與不健康脂肪的攝取，讓你在消耗脂肪的同時保持活力。",
            tags: ["減脂", "健康飲食"],
            category: "減脂攻略",
            role: '營養師'
        },
        {
            id: "card8",
            date: "2025/02/04",
            img: "./images/article-8.jpg",
            title: "增肌該怎麼吃？營養搭配與飲食策略分享",
            content: "想要增肌，光靠訓練是不夠的，飲食也起著關鍵作用。適量增加蛋白質和碳水化合物的攝入，並確保攝取足夠的熱量，讓你在訓練後獲得更多肌肉增長。",
            tags: ["增肌", "蛋白質補充"],
            category: "增肌飲食",
            role: '營養師'
        },
        {
            id: "card9",
            date: "2025/01/02",
            img: "./images/article-9.jpg",
            title: "增肌還是減脂？搞懂訓練順序，讓你少走冤枉路！",
            content: "健身營養的成功不僅是攝取足夠的卡路里，更重要的是如何搭配碳水化合物、蛋白質與脂肪。根據不同的健身目標，合理調整飲食比例，讓效果事半功倍！",
            tags: ["減脂", "增肌"],
            category: "營養調配",
            role: '營養師'
        }



    ];
    //搜尋欄位
    const [selectedRole, setSelectedRole] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [inputTitle, setInputTitle] = useState('');  // 用來暫存搜尋框的輸入

    //Categories
    const [category, setcategory] = useState('');
    //Hottags
    const [tag, setTag] = useState('');
    const filteredCards = cardsData.filter(card => {
        // 判斷是否選擇了角色
        const roleMatches = selectedRole ? card.role === selectedRole : true;

        // 判斷是否有輸入關鍵字
        const keywordMatches = searchTitle
            ? card.title.includes(searchTitle) || card.content.includes(searchTitle)
            : true;
        const matchCategory = !category || card.category === category;
        const matchTag = !tag || card.tags.includes(tag);
        return roleMatches && keywordMatches && matchCategory && matchTag;
    });




    // 處理角色選擇
    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    // 處理關鍵字輸入
    const handleSearch = () => {
        setSearchTitle(inputTitle); // 當用戶按下搜尋按鈕時，更新searchTitle
    };

    return (
        <section id='Allarticle-section'>
            <MainTitle title1="知識文章" title2="補足符合您需求的知識" className="no-line" />

            <section className="Allarticle-Search">
                <button className='Coach-Button' onClick={() => handleRoleSelect("教練")}>健身教練</button>
                <button className='Nutriton-Button' onClick={() => handleRoleSelect("營養師")}>營養師</button>

                {/* 搜尋框 */}
                <input
                    type="text"
                    className='Search-Button'
                    placeholder='關鍵字搜尋'
                    value={inputTitle} // 顯示暫存的內容
                    onChange={(e) => setInputTitle(e.target.value)} // 更新暫存內容
                />
                <button className='ClickSearch-Button' onClick={handleSearch}>搜尋</button>
            </section>

            <section className="Allarticle-content">
                <div className="cat-tag">
                    <div className="cat-tag-title">
                        <p>Categories</p>
                    </div>

                    <div className="Cat-name">
                        <button onClick={() => setcategory('健身入門')}>健身入門</button>
                        <button onClick={() => setcategory('重量訓練')}>重量訓練</button>
                        <button onClick={() => setcategory('燃脂運動')}>燃脂運動</button>
                        <button onClick={() => setcategory('肌力提升')}>肌力提升</button>
                        <button onClick={() => setcategory('體態雕塑')}>體態雕塑</button>
                        <button onClick={() => setcategory('伸展放鬆')}>伸展放鬆</button>
                        <button onClick={() => setcategory('減脂攻略')}>減脂攻略</button>
                        <button onClick={() => setcategory('增肌飲食')}>增肌飲食</button>
                        <button onClick={() => setcategory('營養調配')}>營養調配</button>

                    </div>

                    <div className="Tag">
                        <div className='TagName'>
                            <h4>#HashTag</h4>
                        </div>

                        <div>
                            <button onClick={() => setTag('新手健身')}>新手健身</button>
                            <button onClick={() => setTag('迷思破解')}>迷思破解</button>
                            <button onClick={() => setTag('養成習慣')}>養成習慣</button>
                            <button onClick={() => setTag('重訓')}>重訓</button>
                            <button onClick={() => setTag('燃脂')}>燃脂</button>
                            <button onClick={() => setTag('HIIT訓練')}>HIIT訓練</button>
                            <button onClick={() => setTag('放鬆肌肉')}>放鬆肌肉</button>
                            <button onClick={() => setTag('力量突破')}>力量突破</button>
                            <button onClick={() => setTag('肌力提升')}>肌力提升</button>
                            <button onClick={() => setTag('曲線雕塑')}>曲線雕塑</button>
                            <button onClick={() => setTag('瘦身攻略')}>瘦身攻略</button>
                            <button onClick={() => setTag('體態')}>體態</button>
                            <button onClick={() => setTag('減脂')}>減脂</button>
                            <button onClick={() => setTag('健康飲食')}>健康飲食</button>
                            <button onClick={() => setTag('增肌')}>增肌</button>
                            <button onClick={() => setTag('蛋白質補充')}>蛋白質補充</button>
                            <button onClick={() => setTag('健身營養')}>健身營養</button>
                            <button onClick={() => setTag('飲食')}>飲食</button>
                        </div>
                    </div>
                </div>

                <div className='Allarticle-cards'>
                    <div className="Allarticle-cards-title">
                        <p>Articles</p>
                        <h4>燃脂運動</h4>
                    </div>

                    <div className="Allarticle-Card-article">
                        {filteredCards.map((card, index) => (
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

                </div>
            </section>
        </section>
    );
}

export default Allarticle;