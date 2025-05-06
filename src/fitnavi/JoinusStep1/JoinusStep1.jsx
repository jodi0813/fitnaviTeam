import React from 'react';
import "./JoinusStep1.scss";

function JoinusStep1() {
    return (
        <>
            <section className="JoinusStep1-header">
                <div className='JoinusStep1-headertitle'>
                    <h3>加入我們</h3>
                    <h4>成為我們的合作夥伴</h4>
                </div>
            </section>


            <form action="" className='CoachJoinus-Step1'>
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

                <div className='Step1-form-button'>
                    <button>下一步 ▶</button>
                </div>
            </form>


            





        </>
    )
}

export default JoinusStep1