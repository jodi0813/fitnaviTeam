import React from 'react';
import "./JoinusStep1.scss";
import { useNavigate } from 'react-router-dom';

function JoinusStep1() {
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault(); // 防止表單預設提交行為
        navigate('/joinusStep2');
    };

    return (
        
        <>
            <section className="JoinusStep1-header">
                <div className='JoinusStep1-headertitle'>
                    <h3>加入我們</h3>
                    <h4>成為我們的合作夥伴</h4>
                </div>
            </section>

            <div className='Card1-Card2'>
                <form action="" className='CoachJoinus-Step1'>
                    <div className='JoinusStep1-title'>
                        <div className='Step1-title'>
                            <h3>基本資料</h3>
                            <h4>Basic information</h4>
                        </div>

                        <p>1/4</p>
                    </div>

                    <div className='Step1-form'>
                        <label htmlFor="Step1-form-name">真實姓名</label>
                        <input type="text" placeholder='自動帶入的內容' id='Step1-form-name' />
                        <label htmlFor="">暱稱</label>
                        <input type="text" />
                        <label htmlFor="">性別</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">生日</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">連絡電話</label>
                        <input type="text" placeholder='自動帶入的內容' />
                        <label htmlFor="">通訊地址</label>
                        <input type="text" />
                    </div>

                    <div className='Step1-form-button'>
                        <button onClick={handleNext}>下一步 ▶</button>
                    </div>
                </form>

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
                                新手教學
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                減脂瘦身
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                核心訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                徒手訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                功能性訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                肌力與爆發力
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                體適能訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                術後復健訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                運動按摩與伸展
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                銀髮族訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                運動防護與傷害訓練
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                居家訓練規劃
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                體能雕塑
                            </label>

                            <label className="checkbox-item">
                                <input type="checkbox" name="option1" />
                                HIIT高強度間歇運動
                            </label>
                        </div>
                    </div>

                    <div className='Step2-certification'>
                        <div className='Step2-certification-header'>
                            <div className='Step2-certification-title'>
                                <h4>專業證照：</h4>
                                <h5>至少需有一張</h5>
                            </div>
                            <p>我們歡迎具備國際專業證照（如 NSCA、ACE、NASM）的教練加入，但若您仍在準備中，只要有豐富經驗與熱忱，也非常歡迎您與我們合作！</p>
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

                    <div className='NextPreButton'>
                        <button >◀ 上一步</button>
                        <button>下一步 ▶</button>
                    </div>





                </form>

            </div>


        </>
    )
}

export default JoinusStep1