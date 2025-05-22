import React, { useState } from 'react';
import "./MemberSignup.scss";
import { useNavigate } from 'react-router-dom';


function MemberSignup() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('');


    return (
        <>

            <section id='MemberSignup-form'>
                <div className="MemberSignup-wrapper">
                    <form action="" className='MemberSignup-form'>
                        <div className="MemberSignup-title">註冊會員</div>

                        <div className='KeyinNameEmail'>
                            <div className='KeyinName'>
                                <label htmlFor="">姓名</label>
                                <input type="text" />
                            </div>

                            <div className='KeyinEmail'>
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>


                        </div>

                        <div className='KeyinGenderTel'>
                            <div className='ChooseGender'>
                                <div className='ChooseGender-label'>
                                    <label htmlFor="">性別</label>
                                </div>

                                <div className='ChooseGender-button'>
                                    <button
                                        type="button"
                                        className={isActive === 'male' ? 'active' : ''}
                                        onClick={() => setIsActive('male')}
                                    >男性</button>
                                    <button
                                        type="button"
                                        className={isActive === 'female' ? 'active' : ''}
                                        onClick={() => setIsActive('female')}
                                    >女性</button>
                                    <button
                                        type="button"
                                        className={isActive === '不透露' ? 'active' : ''}
                                        onClick={() => setIsActive('不透露')}
                                    >不透露</button>
                                </div>

                            </div>

                            <div className='KeyinTel'>
                                <label htmlFor="">連絡電話</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="KeyinBirthday">
                            <label htmlFor="">生日</label>
                            <input type="text" />
                        </div>

                        <div className='TermsNext'>
                            <input type="checkbox" className='TermsNextCheck' />
                            <span>我同意</span>
                            <span className='serviceterm'>服務條款</span>
                            <span>和</span>
                            <span className='privateterm'>隱私權政策</span>
                        </div>

                        <div className='Signup-button'>
                            <button onClick={() => navigate('/SetAccountPassword')}>
                                <span className="Signup-text">下一步</span>
                                <img src="/images/search.svg" alt="" />
                            </button>
                        </div>




                        <div className='MemberSignup-option'>

                            <button className="Returntologin" onClick={() => navigate('/MemberLogin')}>
                                已經有帳號？
                                <span>回到登入頁面</span></button>
                        </div>




                    </form>

                </div>
            </section>


        </>
    )

}
export default MemberSignup