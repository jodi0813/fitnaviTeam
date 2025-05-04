import React from 'react';
import "./JoinusSuccess.scss";


function JoinusSuccess() {
    return (
        <>
            <section >
                <div className="Joinus-header">
                    <div className='Joinus-headertitle'>
                        <h3>加入我們</h3>
                        <h4>成為我們的合作夥伴</h4>
                    </div>
                </div>

 
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
                                <button className='Joinus-btn'>返回首頁</button>
                            </div>
                        </div>
                    </div>



            </section>


        </>
    )
}
export default JoinusSuccess