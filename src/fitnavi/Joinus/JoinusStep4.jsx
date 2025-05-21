import React from 'react';
import "./JoinusStep4.scss";
// import MainTitle from "../../components/Title/MainTitle";
// import { useNavigate } from 'react-router-dom';





function JoinusStep4({  onPre }) {
    // const navigate = useNavigate();
    return (
        <>

            <section id='JoinusStep4-Form'>

                {/* <MainTitle title1="加入我們" title2="成為我們的合作夥伴" /> */}



                <div className='CoachJoinus-Step4-wrapper'>
                    <form action="" className='CoachJoinus-Step4'
                        onSubmit={(e) => {
                            e.preventDefault(); // 防止頁面重新整理
                            window.scrollTo(0, 0); // 捲動到最上方（可選）
                        }}>
                        <div className='JoinusStep4-title'>
                            <div className='Step4-title'>
                                <h3>合作服務與條款</h3>
                                <h4>Service&Collabration</h4>
                            </div>

                            <p>4/4</p>
                        </div>

                        <div className='Step4-form'
                            onSubmit={(e) => {
                                e.preventDefault(); // 防止頁面重新整理
                                window.scrollTo(0, 0); // 捲動到最上方（可選）
                            }}>
                            <fieldset className="scrollFieldset-CollabarationTerm">
                                <legend></legend>
                                <p>歡迎您申請成為本平台之合作夥伴（包含健身教練與營養師）。為保障您的權益，並維護平台使用者的安全與服務品質，請詳細閱讀以下合作條款與隱私政策：<br /> 【一、合作夥伴資格】 申請人須具備合法之專業背景與經驗，並同意提供真實且完整的個人資料與證明文件。 本平台有權審查並保留是否接受合作之最終權利，亦可於合作期間因違規情節而終止合作。 <br />【二、合作夥伴責任】 合作夥伴需保證提供之服務內容專業、真實且合法，並遵守相關法規。 教練與營養師應維持與學員之良好互動，避免不當推銷、冒犯言行或爭議行為。 合作期間，需配合平台提供基本資料、服務說明、課程或諮詢更新。 <br />【三、內容產出與使用權】 合作夥伴所撰寫之文章、影像或教學內容，視為自願授權平台於平台內使用與推廣。 平台尊重原創，若未經授權將不另用於商業用途或轉載至第三方。 <br />【四、隱私權保護政策】 本平台將妥善保護所有申請者與使用者之個人資料，不會洩漏、販售或轉交予無關第三方。 僅在用戶同意、服務必要或符合法規情況下，才會使用個人資訊以提供相關媒合與通知。<br /> 【五、合作終止與責任限制】 合作夥伴可隨時提出終止合作申請，平台亦可因違規行為、學員重大負評等狀況終止合作關係。 本平台為媒合平台，對於合作夥伴與學員間之私人互動、付款或其他爭議不負法律責任，惟將盡力協助協調與處理。</p>
                            </fieldset>

                            <div className='AgreeTerm-checkbox'>
                                <input type="checkbox" />
                                <label htmlFor="">我同意上述合作服務條款和隱私權政策</label>
                            </div>
                        </div>

                        <div className='PreSSendButton'>
                            <button onClick={onPre}>◀ 上一步</button>
                            <button >送出申請 ▶</button>
                        </div>
                    </form>
                </div>




            </section>

        </>
    )
}
export default JoinusStep4