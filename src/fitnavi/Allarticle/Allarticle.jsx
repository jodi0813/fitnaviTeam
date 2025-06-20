import Articlecards from '../../components/Articlecards/Articlecards';
import './AllArticle.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, } from 'react-router-dom';
import MainTitle from '../../components/Title/MainTitle';

function Allarticle() {
    const navigate = useNavigate();



    //判斷搜尋的位置，決定麵包屑顯示的頁面
    const location = useLocation();
    useEffect(() => {

        const params = new URLSearchParams(location.search);


        const categoryFromURL = params.get('category');


        if (categoryFromURL) {
            setcategory(categoryFromURL);
        }
    }, [location.search]);


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
        },
        {
            id: "card10",
            img: "./images/article-8.jpg",
            title: "增肌該怎麼吃？營養搭配與飲食策略分享",
            content: "想要增肌，光靠訓練是不夠的，飲食也起著關鍵作用。適量增加蛋白質和碳水化合物的攝入，並確保攝取足夠的熱量，讓你在訓練後獲得更多肌肉增長。",
            tags: ["增肌", "蛋白質補充"],
            category: "增肌飲食",
            role: '營養師'
        }, {
            id: "card11",
            date: "2025/04/11",
            img: "./images/article-5.jpg",
            title: "想練出理想線條？體態雕塑其實有方法",
            content: "想要雕塑迷人曲線，光靠減脂還不夠！針對臀部、腿部、核心等部位的專項訓練，搭配有氧運動，讓你的體態更加迷人，展現出最完美的曲線。",
            tags: ["曲線雕塑", "體態"],
            category: "體態雕塑",
            role: '教練'
        }, {
            id: "card12",
            date: "2025/05/26",
            img: "./images/article-2.jpg",
            title: "重訓不等於變壯？破解你的迷思！",
            content: "許多人擔心重量訓練會讓自己變得過於壯碩，實際上適當的重量訓練能幫助雕塑更好的線條，同時提升代謝率。正確觀念，讓你更接近理想體態。",
            tags: ["重訓", "迷思破解"],
            category: "重量訓練",
            role: '教練'
        }, {
            id: "card13",
            date: "2025/01/02",
            img: "./images/article-9.jpg",
            title: "增肌還是減脂？搞懂訓練順序，讓你少走冤枉路！",
            content: "健身營養的成功不僅是攝取足夠的卡路里，更重要的是如何搭配碳水化合物、蛋白質與脂肪。根據不同的健身目標，合理調整飲食比例，讓效果事半功倍！",
            tags: ["減脂", "增肌"],
            category: "營養調配",
            role: '營養師'
        }, {
            id: "card14",
            date: "2025/06/15",
            img: "./images/article-1.jpg",
            title: "健身初學者必看：如何開始你的運動旅程",
            content: "剛開始健身時，選擇合適的運動方式和計劃非常重要。無論你是想增強體能還是減脂，開始的時候不需要過於激烈，慢慢增加運動量。這篇文章將帶你了解一些基本的運動常識，並提供從簡單動作開始的計劃。",
            tags: ["新手健身", "養成習慣"],
            category: "健身入門",
            role: '教練'
        }, {
            id: "card15",
            date: "2025/04/27",
            img: "./images/article-4.jpg",
            title: "為什麼肌力這麼重要？打造強韌體能的第一步",
            content: "你是否常常在訓練中感到停滯不前？增加重量、改變訓練方式或專注於大肌群訓練，都能有效突破瓶頸，提升力量，讓你進一步挑戰更高強度的訓練！",
            tags: ["力量突破", "肌力提升"],
            category: "肌力提升",
            role: '教練'
        },



    ];
    //搜尋欄位
    const [selectedRole, setSelectedRole] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [inputTitle, setInputTitle] = useState('');  // 用來暫存搜尋框的輸入

    //Categories
    const [category, setcategory] = useState('');
    //Hottags
    const [tag, setTag] = useState('');

    //搜尋欄位的功能
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

    //小尺寸按鈕視窗控制
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);


    return (
        <>
       
        <section id='Allarticle-section'>
             <MainTitle title1="知識文章" title2="補足符合您需求的知識" className="no-line" />
       

            <section className="Allarticle-Search">
                {/* 桌機用 */}
                <div className="selected-button">
                    <button className={selectedRole === '教練' ? 'active' : ''} onClick={() => handleRoleSelect("教練")}>健身教練</button>
                    <button className={selectedRole === '營養師' ? 'active' : ''} onClick={() => handleRoleSelect("營養師")}>營養師</button>
                </div>

                <input
                    type="text"
                    className="Search-Button"
                    placeholder="關鍵字搜尋"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <button className="ClickSearch-Button" onClick={handleSearch}>
                    <span className="text-search">搜尋</span>
                    <img src="./images/search.svg" alt="" />
                </button>

                {/* 平板用（600–1024px） */}

                <button className="ClickSearch-Button-alt" onClick={() => setIsFilterModalOpen(true)}>
                    篩選<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.25 11.9999H8.895M4.534 11.9999H2.75M4.534 11.9999C4.534 11.4217 4.76368 10.8672 5.17251 10.4584C5.58134 10.0496 6.13583 9.81989 6.714 9.81989C7.29217 9.81989 7.84666 10.0496 8.25549 10.4584C8.66432 10.8672 8.894 11.4217 8.894 11.9999C8.894 12.5781 8.66432 13.1326 8.25549 13.5414C7.84666 13.9502 7.29217 14.1799 6.714 14.1799C6.13583 14.1799 5.58134 13.9502 5.17251 13.5414C4.76368 13.1326 4.534 12.5781 4.534 11.9999ZM21.25 18.6069H15.502M15.502 18.6069C15.502 19.1852 15.2718 19.7403 14.8628 20.1492C14.4539 20.5582 13.8993 20.7879 13.321 20.7879C12.7428 20.7879 12.1883 20.5572 11.7795 20.1484C11.3707 19.7396 11.141 19.1851 11.141 18.6069M15.502 18.6069C15.502 18.0286 15.2718 17.4745 14.8628 17.0655C14.4539 16.6566 13.8993 16.4269 13.321 16.4269C12.7428 16.4269 12.1883 16.6566 11.7795 17.0654C11.3707 17.4742 11.141 18.0287 11.141 18.6069M11.141 18.6069H2.75M21.25 5.39289H18.145M13.784 5.39289H2.75M13.784 5.39289C13.784 4.81472 14.0137 4.26023 14.4225 3.8514C14.8313 3.44257 15.3858 3.21289 15.964 3.21289C16.2503 3.21289 16.5338 3.26928 16.7983 3.37883C17.0627 3.48839 17.3031 3.64897 17.5055 3.8514C17.7079 4.05383 17.8685 4.29415 17.9781 4.55864C18.0876 4.82313 18.144 5.10661 18.144 5.39289C18.144 5.67917 18.0876 5.96265 17.9781 6.22714C17.8685 6.49163 17.7079 6.73195 17.5055 6.93438C17.3031 7.13681 17.0627 7.29739 16.7983 7.40695C16.5338 7.5165 16.2503 7.57289 15.964 7.57289C15.3858 7.57289 14.8313 7.34321 14.4225 6.93438C14.0137 6.52555 13.784 5.97106 13.784 5.39289Z" stroke="#FF8740" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                    </svg>
                </button>

                {isFilterModalOpen && (
                    <div className="FilterModal">
                        <div className="FilterModal-overlay" onClick={() => setIsFilterModalOpen(false)}></div>
                        <div className="FilterModal-content">
                            {/* 關閉按鈕 */}
                            <button className="close-button" onClick={() => setIsFilterModalOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 6L18 18" stroke="#3A2C19" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M18 6L6 18" stroke="#3A2C19" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </button>

                            {/* 角色選擇 */}
                            <div className="filter-role">
                                <label>選擇角色</label>
                                <div className="role-button-group">
                                    <button className={selectedRole === '' ? 'active' : ''} onClick={() => setSelectedRole('')}>
                                        不限
                                    </button>
                                    <button className={selectedRole === '教練' ? 'active' : ''} onClick={() => setSelectedRole('教練')}>
                                        健身教練
                                    </button>
                                    <button className={selectedRole === '營養師' ? 'active' : ''} onClick={() => setSelectedRole('營養師')}>
                                        營養師
                                    </button>
                                </div>
                            </div>

                            {/* 分類與標籤 */}
                            <div className="filter-section-wrapper">
                                <label>文章分類與標籤</label>
                                <div className='filter-section'>
                                    <select value={category} onChange={(e) => setcategory(e.target.value)}>
                                        <option value="" className='Cat-label'>分類</option>
                                        <option value="健身入門">健身入門</option>
                                        <option value="重量訓練">重量訓練</option>
                                        <option value="燃脂運動">燃脂運動</option>
                                        <option value="肌力提升">肌力提升</option>
                                        <option value="體態雕塑">體態雕塑</option>
                                        <option value="伸展放鬆">伸展放鬆</option>
                                        <option value="減脂攻略">減脂攻略</option>
                                        <option value="增肌飲食">增肌飲食</option>
                                        <option value="營養調配">營養調配</option>
                                    </select>

                                    <select value={tag} onChange={(e) => setTag(e.target.value)}>
                                        <option value="" className='Tag-label'>標籤</option>
                                        <option value="新手健身">新手健身</option>
                                        <option value="迷思破解">迷思破解</option>
                                        <option value="養成習慣">養成習慣</option>
                                        <option value="重訓">重訓</option>
                                        <option value="燃脂">燃脂</option>
                                        <option value="HIIT訓練">HIIT訓練</option>
                                        <option value="放鬆肌肉">放鬆肌肉</option>
                                        <option value="力量突破">力量突破</option>
                                        <option value="肌力提升">肌力提升</option>
                                        <option value="曲線雕塑">曲線雕塑</option>
                                        <option value="瘦身攻略">瘦身攻略</option>
                                        <option value="體態">體態</option>
                                        <option value="減脂">減脂</option>
                                        <option value="健康飲食">健康飲食</option>
                                        <option value="增肌">增肌</option>
                                        <option value="蛋白質補充">蛋白質補充</option>
                                        <option value="健身營養">健身營養</option>
                                        <option value="飲食">飲食</option>
                                    </select>
                                </div>
                            </div>

                            {/* 關鍵字搜尋 */}
                            <div className="filter-keyword">
                                <label>關鍵字搜尋</label>
                                <input
                                    type="text"
                                    value={inputTitle}
                                    onChange={(e) => setInputTitle(e.target.value)}
                                    placeholder="請輸入關鍵字"
                                    className="input-with-icon"
                                />

                            </div>

                            {/* 搜尋按鈕 */}
                            <button className="apply-button" onClick={() => {
                                handleSearch();
                                setIsFilterModalOpen(false);
                            }}>
                                搜尋
                            </button>
                        </div>
                    </div>
                )}

            </section>



            <section className="Allarticle-content">
                <div className="cat-tag">
                    <div className='cat'>
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
                        <img src="./images/findLesson.png" alt="" />
                        <h4>
                            {(() => {
                                const filters = [];
                                
                                // 角色篩選
                                if (selectedRole) {
                                    filters.push(selectedRole);
                                }
                                
                                // 分類篩選
                                if (category) {
                                    filters.push(category);
                                }
                                
                                // 標籤篩選
                                if (tag) {
                                    filters.push(`#${tag}`);
                                }
                                
                                // 關鍵字搜尋
                                if (searchTitle) {
                                    filters.push(`${searchTitle}`);
                                }
                                
                                // 如果沒有任何篩選條件
                                if (filters.length === 0) {
                                    return '全部分類';
                                }
                                
                                // 用 " | " 連接所有篩選條件
                                return filters.join(' | ');
                            })()}
                        </h4>
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

                    
                                    {/* <div className="Coach-seemore-s">
                                        <button>
                                            <p>瀏覽更多學員評價</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                                                <path d="M18 0.5L9 9.5L0 0.5" fill="#FF8740" />
                                            </svg>
                                        </button>

                                    </div> */}

                </div>

            </section>
        </section>
        </>
    );
}

export default Allarticle;