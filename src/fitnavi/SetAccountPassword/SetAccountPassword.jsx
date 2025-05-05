import React from 'react';
import "./SetAccountPassword.scss";


function SetAccountPassword() {
    return (
        <>
            <section className="SetAccountPassword">
                <form action="" className='SetAccountPassword-form'>
                    <div className="SetAccountPassword-title">設定帳號密碼</div>

                    <div className='SetEmailAccount'>
                        <label htmlFor="">輸入帳號</label>
                        <input type="text" />
                        <label htmlFor="">輸入密碼</label>
                        <input type="text" placeholder='密碼組合為英數字混合之8位數以上字元
'/>
                        <button>立即加入</button>
                    </div>

                    <div className='SetAccountPassword-option'>
                        <button className="SetAccountPassword-return">返回上一步</button>
                    </div>


                </form>

            </section>



        </>
    )
}
export default SetAccountPassword