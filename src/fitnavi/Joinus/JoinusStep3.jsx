import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./JoinusStep3.scss";
// import MainTitle from "../../components/Title/MainTitle";

function JoinusStep3({ onNext, onPre }) {
  const navigate = useNavigate();

  // 教學經歷的狀態，預設一筆資料
  const [experiences, setExperiences] = useState([
    { id: Date.now(), company: '健身工廠', position: '私人教練', years: '', months: '' }
  ]);

  // 新增經歷（最多6筆）
  const addExperience = () => {
    if (experiences.length >= 6) return; // 最多6項
    setExperiences([
      ...experiences,
      { id: Date.now(), company: '', position: '', years: '', months: '' }
    ]);
  };

  // 刪除指定經歷
  const deleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  // 下一步按鈕處理
  const handleNext = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 1024) {
      navigate('/JoinusStep4');
    } else {
      onNext && onNext();
    }
  };

  // 上一步按鈕處理
  const handlePre = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 1024) {
      navigate('/JoinusStep2');
    } else {
      onPre && onPre();
    }
  };

  return (
    <>
      {/* <MainTitle title1="加入我們" title2="成為我們的合作夥伴" /> */}
      <div className='joinus-form-wrapper'>
        <form
          className='CoachJoinus-Step3'
          onSubmit={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <div className='Coach-JoinusStep3-title'>
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
                <p>300字以內</p>
              </div>
              <textarea name="" id=""></textarea>
            </div>

            <div className='Aboutme-uploadphotos'>
              <div className='Aboutme-uploadphotos-title'>
                <h4>形象照片：</h4>
              </div>
              <div className='Aboutme-uploadphotos-button'>
                <button className='Aboutme-upload' type="button">上傳檔案</button>
                <button type="button">預覽</button>
              </div>
            </div>

            <div className='teachingExperiences'>
              <h4>教學經歷：</h4>
              <p>最多6項</p>
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
                  {experiences.map((exp, index) => (
                    <tr key={exp.id}>
                      <td>{index + 1}</td>
                      <td>{exp.company || '單位名稱'}</td>
                      <td>{exp.position || '工作職稱'}</td>
                      <td>
                        <input type="text" value={exp.years} readOnly placeholder="年" />年
                        <input type="text" value={exp.months} readOnly placeholder="月" />月
                      </td>
                      <td>
                        <div className="buttonGroup">
                          <button type="button" onClick={() => deleteExperience(exp.id)}>刪除</button>
                          {index === experiences.length - 1 && experiences.length < 6 && (
                            <button type="button" onClick={addExperience}>新增</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </fieldset>
          </div>

          <div className='Step3-NextPreButton'>
            <button type="button" className='Step3Pre-button' onClick={handlePre}>◀ 上一步</button>
            <button type="button" className='Step3Next-button' onClick={handleNext}>下一步 ▶</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default JoinusStep3;
