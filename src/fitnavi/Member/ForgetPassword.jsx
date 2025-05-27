import React from 'react';
import "./ForgetPassword.scss";
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const navigate = useNavigate();
    return (
        <>
            <section className="ForgetPassword">
                <form action="" className='ForgetPassword-form'>
                    <div className="ForgetPassword-title">忘記帳號密碼</div>

                    <div className='KeyinEmail'>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <button>
                            <span className="email-text">寄送驗證信</span>
                            <img src="./images/search.svg" alt="" /></button>
                    </div>

                    <div className='ForgetPassword-option'>
                        {/* <button className="Alreadyhavepassword">已經有帳號？</button> */}
                        <button className="Returntologin" onClick={() => navigate('/MemberLogin')}>已經有帳號？回到登入頁面</button>
                    </div>


                </form>

            </section>
        </>
    )
}
export default ForgetPassword