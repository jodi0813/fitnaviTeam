import React from 'react';
import "./ForgetPassword.scss";

function ForgetPassword() {
    return (
        <>
            <section className="ForgetPassword">
                <form action="" className='ForgetPassword-form'>
                    <div className="ForgetPassword-title">忘記帳號密碼</div>

                    <div className='KeyinEmail'>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <button>寄送驗證信</button>
                    </div>

                    <div className='ForgetPassword-option'>
                        <button className="Alreadyhavepassword">已經有帳號？</button>
                        <button className="Returntologin">回到登入頁面</button>
                    </div>


                </form>

            </section>
        </>
    )
}
export default ForgetPassword