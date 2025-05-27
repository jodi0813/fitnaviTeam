import React from 'react';
import "./NutriJoinusStep2.scss";
// import { useNavigate } from 'react-router-dom';
// import MainTitle from "../../components/Title/MainTitle";

function NutriJoinusStep2({onNext,onPre}) {
    // const navigate = useNavigate();

    return (
        <>
            <section id='Nutri-JoinusStep2-Form'>
                {/* <MainTitle title1="營養師" title2="我是營養師" /> */}


                <div className='CoachJoinus-Step2-wrapper'>
                    <form action="" className='CoachJoinus-Step2'>
                        <div className='JoinusStep2-header'>
                            <div className='Step2-title'>
                                <h4>專長</h4>
                                <h5>Expertise</h5>
                            </div>

                            <p>2/4</p>
                        </div>

                        <div className='Step2Checkbox'>
                            <div className='Specitialty-title'>
                                <h4>專長領域：</h4>
                                <p>最多6項</p>
                            </div>

                            <div className='Step2Checkbox-group'>
                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    增肌減重
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    青少年營養
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    銀髮族營養
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    營養攝取
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    女性孕期營養
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    膳食平衡
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    外食族營養調整
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    客製化飲食計畫
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    運動員營養
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    減脂瘦身
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    健康飲食
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    素食營養規劃
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    營養配方
                                </label>

                                <label className="checkbox-item">
                                    <input type="checkbox" name="option1" />
                                    飲食療法
                                </label>
                            </div>
                        </div>

                        <div className='Step2-certification'>
                            <div className='Step2-certification-header'>
                                <div className='Step2-certification-title'>
                                    <h4>專業證照：</h4>
                                    <h5>至少需有一張</h5>
                                </div>
                                <p>必須包含由考選部核發的「營養師證書」（即通過營養師高等考試之證明），以確認您的專業資格。可另附學歷證明與其他專業證書作為加分資料。</p>
                            </div>
                        </div>



                        <fieldset className="scrollFieldset">
                            <legend>證照名稱</legend>

                            <div className="scrollContent">
                                <div>
                                    <input type="text" />
                                    <button>上傳檔案</button>
                                    <button>刪除</button>
                                </div>
                                <div>
                                    <input type="text" />
                                    <button>上傳檔案</button>
                                    <button>刪除</button>
                                </div>

                                <div>
                                    <input type="text" />
                                    <button>上傳檔案</button>
                                    <button>刪除</button>
                                </div>

                                <div>
                                    <input type="text" />
                                    <button>上傳檔案</button>
                                    <button>刪除</button>
                                </div>

                                <div>
                                    <input type="text" />
                                    <button>上傳檔案</button>
                                    <button>刪除</button>
                                </div>

                            </div>
                        </fieldset>

                        <div className='Nutri-NextPreButton'>
                            <button onClick={onPre} className='Step2Pre-button'>◀ 上一步</button>
                            <button onClick={onNext} className='Step2Next-button'>下一步 ▶</button>
                        </div>





                    </form>
                </div>





            </section>


        </>

    )
}
export default NutriJoinusStep2



