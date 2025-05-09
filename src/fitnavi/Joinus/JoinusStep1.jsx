import React from 'react';
import "./JoinusStep1.scss";
import { useNavigate } from 'react-router-dom';
import MainTitle from "../../components/Title/MainTitle";


function JoinusStep1() {
    const navigate = useNavigate();


    return (

        <>
            <section className="JoinusLoading-header">
                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
            </section>


            <div className='CoachJoinus-Step1-wrapper'>

                <form action="" className='CoachJoinus-Step1-form'>
                    <div className='JoinusStep1-title'>
                        <div className='Step1-title'>
                            <h3>基本資料</h3>
                            <h4>Basic information</h4>
                        </div>

                        <p>1/4</p>
                    </div>

                    <div className='Step1-form'>
                        <label htmlFor="Step1-form-name">真實姓名</label>
                        <input type="text" placeholder='自動帶入的內容' id='Step1-form-name' />
                        <label htmlFor="">暱稱</label>
                        <input type="text" />
                        <label htmlFor="">性別</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">生日</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">連絡電話</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">通訊地址</label>
                        <input type="text" />
                    </div>


                    <button className='Step1-form-button'
                        onClick={() => {navigate('/JoinusStep2');window.scrollTo(0, 0);}}>下一步 ▶</button>

                </form>
            </div>





        </>
    )
}

export default JoinusStep1