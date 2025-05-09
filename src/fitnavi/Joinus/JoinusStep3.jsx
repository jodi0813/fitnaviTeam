import React from 'react';
import "./JoinusStep3.scss";
import { useNavigate } from 'react-router-dom';
import MainTitle from "../../components/Title/MainTitle";

function JoinusStep3() {
    const navigate = useNavigate();
    return (
        <>
            <section className="JoinusLoading-header">
                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
            </section>


            <div className='CoachJoinus-Step3-wrapper'>
                <form action="" className='CoachJoinus-Step3'>
                    <div className='JoinusStep3-title'>
                        <div className='Step3-title'>
                            <h3>自我介紹</h3>
                            <h4>Personal Introduction</h4>
                        </div>

                        <p>3/4</p>
                    </div>

                    <div className='Step3-form'>
                        <div className='Aboutme-textarea'>
                            <div className='Aboutme-textarea-title'>
                                <h4>關於我：</h4>
                                <p>（300字以內）</p>
                            </div>

                            <textarea name="" id=""></textarea>
                        </div>

                        <div className='Aboutme-uploadphotos'>
                            <div className='Aboutme-uploadphotos-title'>
                                <h4>形象照片：</h4>
                            </div>

                            <div className='Aboutme-uploadphotos-button'>
                                <button>上傳檔案</button>
                                <button>預覽</button>
                            </div>
                        </div>

                        <div className='teachingExperiences'>
                            <h4>教學經歷：</h4>
                            <p>（最多6項）</p>
                        </div>

                        <fieldset className="scrollFieldset-teachExperience">
                            <table className="simpleTable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>單位名稱</th>
                                        <th>工作職稱</th>
                                        <th>年資</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>健身工廠</td>
                                        <td>私人教練</td>
                                        <td><input type="text" name="" id="" />年
                                            <input type="text" />月
                                        </td>
                                        <td>
                                            <div className="buttonGroup">
                                                <button>編輯</button>
                                                <button>刪除</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>健身星球</td>
                                        <td>私人教練</td>
                                        <td><input type="text" name="" id="" />年
                                            <input type="text" />月
                                        </td>
                                        <td>
                                            <div className="buttonGroup">
                                                <button>編輯</button>
                                                <button>刪除</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>健身星球</td>
                                        <td>私人教練</td>
                                        <td><input type="text" name="" id="" />年
                                            <input type="text" />月
                                        </td>
                                        <td>
                                            <div className="buttonGroup">
                                                <button>編輯</button>
                                                <button>刪除</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>健身星球</td>
                                        <td>私人教練</td>
                                        <td><input type="text" name="" id="" />年
                                            <input type="text" />月
                                        </td>
                                        <td>
                                            <div className="buttonGroup">
                                                <button>編輯</button>
                                                <button>刪除</button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* 更多資料... */}
                                </tbody>
                            </table>
                        </fieldset>

                    </div>

                    <div className='Step3-NextPreButton'>
                        <button className='Pre-button' onClick={()=>navigate('/JoinusStep2')} >◀ 上一步</button>
                        <button className='Next-button' onClick={()=>navigate('/JoinusStep4')}>下一步 ▶</button>
                    </div>
                </form>

            </div>

        </>
    )
}
export default JoinusStep3