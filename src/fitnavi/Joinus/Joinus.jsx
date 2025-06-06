import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Joinus.scss";
import MainTitle from "../../components/Title/MainTitle";
import JoinButton from '../../components/joinButton/joinButton';

function Joinus() {
    const navigate = useNavigate();
    return (
        <>
            <section id='Joinus-Form'>

                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" className="no-line" />

                <section className='Joinus-introduction'>
                    <p className='BringPro'>把你的專業，帶到更多人眼前。</p>
                    <p className='BringPro-intro'>歡迎具備專業資格的您加入我們的行列！完成表單申請並通過資格審核後， <br />
                        即可在我們的平台上開課、建立個人專頁，讓教學與熱情被看見。</p>
                </section>

                <section className="Joinus-form">
                    <div className="imcoach">

                        <form action="">

                            <div className='coach-label-img'>
                                <label htmlFor="">
                                    <span className='imcoach-Iam'>我是</span>
                                    <span className='imcoach-coach'>教練</span>
                                </label>

                                <div className='imcoach-img'>
                                    <img src="./images/Joinus-coach-shadow.png" alt="" />
                                </div>
                            </div>


                            <div className='imcoach-youcan'>
                                <h4>您可以</h4>
                                <div className='imcoach-youcan-line'></div>
                            </div>

                            <p>✅獲得學員媒合機會，上架一對一課程</p>
                            <p>✅與營養師跨領域合作，打造完整健身計畫</p>
                            <p>✅擴展個人品牌曝光</p>
                            <p>✅建立專業信任感</p>

                            <div className='imcoach-youhaveto'>
                                <h4>您只要</h4>
                                <div className='imcoach-youhaveto-line'></div>
                            </div>
                            <p>🤝定期更新可預約時段，追蹤學員運動進度</p>
                            <p> 🤝撰寫實用訓練文章或影片</p>
                        </form>

                        {/* <button
                            className='imcoach-joinbutton'
                            onClick={() => navigate('/JoinusCarousel')}
                        >
                            <span>成為合作教練</span>
                            <img src="/images/Polygon.svg" alt="" />
                        </button> */}
                        <JoinButton
                            text="成為合作教練"
                            to="/JoinusCarousel"
                        />


                    </div>

                    <div className="imnutrionist">
                        <form action="">

                            <div className='nutri-label-img'>
                                <label htmlFor="">
                                    <span className='imnutrionist-Iam' >我是</span>
                                    <span className='imnutrionist-nutrionist'>營養師</span>
                                </label>

                                <div className='imnutri-img'>
                                    <img src="./images/Joinus-nutri-shadow.png" alt="" />
                                </div>
                            </div>

                            <div className='imnutrionist-youcan'>
                                <h4>您可以</h4>
                                <div className='imnutrionist-youcan-line'></div>
                            </div>

                            <p>✅觸及有飲食諮詢需求的族群，擴大客群</p>
                            <p>✅與教練跨領域合作，整合飲食與運動建議</p>
                            <p>✅擴展個人品牌曝光</p>
                            <p>✅建立專業信任感</p>

                            <div className='imnutrionist-youhaveto'>
                                <h4>您只要</h4>
                                <div className='imnutrionist-youhaveto-line'></div>
                            </div>
                            <p>🤝定期追蹤合作學員並給予建議或營養提醒</p>
                            <p>🤝撰寫飲食知識文章或影片</p>
                        </form>

                        <JoinButton
                            text="成為合作營養師"
                            to="/NutriJoinusCarousel" />
                        {/* <button className='imnutrionist-joinbutton' onClick={()=>navigate('/NutriJoinusCarousel')}> */}
                        {/* <span>成為合作營養師</span>
                            <img src="/images/Polygon.svg" alt="" /> */}

                        {/* </button> */}
                    </div>


                </section>

            </section>


        </>
    )
}
export default Joinus