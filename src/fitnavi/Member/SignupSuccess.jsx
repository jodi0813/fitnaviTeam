import React from 'react';
import "./SignupSuccess.scss";
import { useNavigate } from 'react-router-dom';


function LoginSuccess() {
    const navigate=useNavigate();
    return (
        <>
            <section className="LoginSuccess">
                <form action="" className='LoginSuccess-form'>
                    <div className="LoginSuccess-title">恭喜您</div>

                    <div className='LoginSuccess-content'>
                        <p>註冊成功！<br/>可以開始預約課程了！</p>

                        <button onClick={()=>navigate('/MemberLogin')}>
                            <span className='success-text'>重新登入</span>
                            <img src="./images/search.svg" alt="" />
                            </button>
                    </div>

                </form>

            </section>



        </>
    )
}
export default LoginSuccess