import React from 'react';
import "./LoginSuccess.scss";


function LoginSuccess() {
    return (
        <>
            <section className="LoginSuccess">
                <form action="" className='LoginSuccess-form'>
                    <div className="LoginSuccess-title">恭喜您</div>

                    <div className='LoginSuccess-content'>
                        <p>已註冊成功！<br/>可以開始預約課程了！</p>

                        <button>重新登入</button>
                    </div>

                </form>

            </section>



        </>
    )
}
export default LoginSuccess