import React from 'react';
import "./MemberSignup.scss";

function MemberSignup() {
    return (
        <>
            <section className="MemberSignup">
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
                            <label htmlFor="">性別</label>
                            <button></button>
                            <button>
                                <button></button>
                            </button>
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
                        <button>下一步</button>
                    </div>



                    <div className='MemberSignup-option'>
                        <button className="Alreadyhavepassword">已經有帳號？</button>
                        <button className="Returntologin">回到登入頁面</button>
                    </div>




                </form>

            </section>

        </>
    )

}
export default MemberSignup