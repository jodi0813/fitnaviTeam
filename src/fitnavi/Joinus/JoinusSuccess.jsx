import React from 'react';
import "./JoinusSuccess.scss";
import { useNavigate } from 'react-router-dom';
import MainTitle from "../../components/Title/MainTitle";


function JoinusSuccess() {
    const navigate=useNavigate();
    return (
        <>
            <section className="JoinusStep4-header">
                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
            </section>


            <div className='Joinus-wrapper'>
                <div className='Joinus-Success-content'>
                    <div>
                        <h4>申請成功</h4>
                        <h5>請留意信箱通知</h5>
                        <p>約4-7工作天內</p>
                    </div>

                    <img src="./public/images/application-icon.png" alt="" />

                    <div className='Joinus-Success-button'>
                        <button className='Joinus-btn'>查看申請進度</button>
                        <button className='Joinus-btn' onClick={()=>{navigate('/');window.scrollTo(0, 0);}}>返回首頁</button>
                    </div>
                </div>
            </div>



     


        </>
    )
}
export default JoinusSuccess