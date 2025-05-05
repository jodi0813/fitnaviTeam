import React from 'react';
import "./MemberLogin.scss";


function MemberLogin() {
    return (
        <>
            <section className="MemberLogin">
                <form action="" className='MemberLogin-form'>
                    <div className="MemberLogin-title">會員登入</div>

                    <div className='KeyinEmailAccount'>
                        <label htmlFor="">輸入帳號</label>
                        <input type="text" />
                        <label htmlFor="">輸入密碼</label>
                        <input type="text" placeholder='密碼組合為英數字混合之8位數以上字元
'/>
                        <button>登入</button>
                    </div>

                    <div className='MemberLogin-option'>
                        <button className="MemberLogin-forgetpassword">忘記帳號密碼</button>
                        <button className="MemberLogin-">還不是會員？會員加入</button>
                    </div>


                </form>

            </section>



        </>
    )
}
export default MemberLogin