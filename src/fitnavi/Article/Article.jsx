import "./Article.scss";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    useEffect(() => {
        const stored = localStorage.getItem("selectedArticle");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.id === id) {
            setArticle(parsed);
          }
        }
      }, [id]);

    return (
        <>

            <main>
                {/* <!-- banner區域 --> */}
                <section className="article-banner">

                    <div className="article-content">
                        <div className="left">
                            <button class="back">返回列表</button>
                        </div>

                        <div className="article-bannercontent">
                            <p>健身入門</p>
                            <h2>增肌還是減脂？<br />
                                搞懂訓練順序，讓妳少走冤枉路！</h2>
                            <div className="dateshare">
                                <p>2025-03-20</p>
                                <button class="share" type="button"><img src="./images/share.png" alt="" width="15"
                                    height="15" /></button>
                            </div>
                        </div>

                        <div className="right">
                            <button className="bread">麵包屑 &gt; 麵包屑 &gt; 麵包屑</button>
                        </div>

                    </div>




                    <div className="bannerimg">
                        <img src="./images/articlebanner.jpg" alt="" />
                    </div>





                </section>

                {/* <!-- 文章內容區 --> */}
                <section className="article">
                    <div className="phase1">
                        <h4> 在開始健身計畫之前，「我該先增肌還是先減脂？」是許多人最常問的問題。<br />
                            這不只是訓練順序的選擇，更關乎身體組成與訓練成果的最大化。<br />
                            本文將從體脂肪率、肌肉量與目標體態三個面向出發，協助妳制定最適合自己的健身策略。
                        </h4>
                    </div>


                    {/* <!-- 目錄、標題、文章撰寫人 --> */}
                    <div className="phase2">
                        <div className="tablecontent">
                            <div className="tabletitle">
                                <p>TABLE OF CONTENTS</p>
                            </div>

                            <div className="table">
                                <a href="">●為什麼需要區分增肌與減脂？<br /></a>
                                <a href="">●該先增肌還是先減脂？這樣判斷最有效<br /></a>
                                <a href="">●訓練與飲食策略建議<br /></a>
                                <a href="">●體態重組：是否能同時增肌與減脂？<br /></a>
                                <a href="">●正確順序，提升效率</a>
                            </div>

                        </div>

                        <div className="content">
                            <h3>為什麼需要區分增肌與減脂？</h3>
                            <p>增肌（Muscle Gain）與減脂（Fat Loss）是兩個方向不同的身體改變目標：
                                增肌需要熱量盈餘與充足蛋白質，以支持肌肉合成。
                                減脂則仰賴熱量赤字與代謝調控，促進脂肪分解。
                                由於這兩個過程在營養攝取與訓練重點上常常相互衝突，因此同時進行時容易成效有限。
                                釐清當前身體狀況與目標，有助於更有效率地規劃訓練與飲食策略。</p>

                        </div>

                        <div className="author">
                            <h4>文章撰寫人</h4>
                            <p>介紹這位的一些文字介紹這位的一些文字介紹這位的<br />一些文字介紹這位的一些文字</p>
                        </div>
                    </div>

                    {/* <!-- 文章內容，包含圖片文字 --> */}
                    <div className="phase3">
                        <div className="content">
                            <h3>該先增肌還是先減脂？這樣判斷最有效</h3>
                            <p>1.體脂偏高（女性體脂 ≥30%）建議優先減脂。此階段直接進行增肌可能導致脂肪進一步堆積，建議先降低體脂、提升基礎代謝與運動表現。<br />
                                2.體脂適中但肌肉量不足 建議進行基礎增肌。透過阻力訓練與熱量維持（或輕盈餘），有助於提升身體線條與代謝基礎，為後續減脂打下穩固基礎。<br />
                                3.體脂中等且有一定肌肉基礎可彈性選擇，依目標體態調整方向。若希望修飾線條可採「緩慢減脂」，若目標是增加體積或力量，可考慮短期增肌期。</p>

                        </div>

                        <div className="phase3img">
                            <img src="./images/articlephoto.png" alt="" />
                        </div>
                    </div>


                    <div className="phase4">
                        <div className="content1">
                            <h3>訓練與飲食策略建議</h3>
                            <p>減脂期建議：
                                ●重訓頻率：每週 3～5 次，訓練以中高強度、多關節動作為主<br />
                                ●有氧安排：每週 2～3 次中等強度（如快走、飛輪等）<br />
                                ●飲食控制：每日熱量赤字建議落在 10%～20%，蛋白質攝取維持 1.6～2.2 g/kg 體重。<br /></p>
                            <p>增肌期建議：
                                ●重訓頻率：每週至少 4 次，注重漸進式超負荷<br />
                                ●有氧安排：視情況調整，1～2 次低強度有氧可維持心肺健康<br />
                                ●飲食補充：每日熱量盈餘 5%～15%，蛋白質攝取建議 1.8～2.4 g/kg 體重，碳水化合物比例可適度提高以支援訓練強度</p>
                        </div>

                        <div className="content2">
                            <h3>體態重組：是否能同時增肌與減脂？</h3>
                            <p>對於初學者或久未運動者而言，身體在適當訓練與營養條件下，可能同時實現肌肉合成與脂肪減少，這被稱為「體態重組」（Body Recomposition）。<br />
                                適合的族群包括：<br />
                                ●訓練經驗不足者（健身新手）<br />
                                ●體脂中等但肌肉量明顯不足者<br />
                                ●長期未訓練者重新開始者<br />
                                ●此階段可在熱量維持或微赤字條件下搭配系統化重訓，逐步改善身體組成。不過體態重組的效率有限，並不適合長期依賴。</p>
                        </div>

                        <div className="content3">
                            <h3>正確順序，提升效率</h3>
                            <p>「先增肌還是先減脂」並沒有標準答案，而是取決於個人的身體組成與訓練目標。<br />
                                建議先透過體脂測量、InBody 檢測或教練諮詢確認目前狀況，再根據訓練年資與期望體態做出選擇。<br />
                                長期而言，身體的改變來自穩定的訓練、適當的營養以及充足的休息。<br />
                                選對方向，搭配耐心與持續執行，妳一定能打造出健康又有線條的理想體態。 </p>
                        </div>

                    </div>




                    <div className="bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1002" height="2" viewBox="0 0 1002 2" fill="none">
                            <path d="M1 1L1001 1" stroke="var(--dark, #3A2C19)" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div className="bottomcontent">
                            <div className="hashtag">
                                <p>#標籤</p>
                                <p>#標籤</p>
                                <p>#標籤</p>
                                <p>#標籤</p>
                                <p>#標籤</p>
                            </div>

                            <div className="button">
                                <button className="bottombutton">←返回上一頁</button>
                            </div>

                        </div>

                    </div>

                </section>
            </main>

        </>
    )
}
export default Article