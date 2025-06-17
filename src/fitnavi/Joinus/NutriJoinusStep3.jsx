import React, { useState } from 'react';
import "./NutriJoinusStep3.scss";

function NutriJoinusStep3({ onNext, onPre }) {
  // 教學經歷狀態，預設一筆空資料
  const [experiences, setExperiences] = useState([
    { id: Date.now(), company: '', position: '', years: '', months: '' }
  ]);

  // 新增經歷（最多6筆）
  const addExperience = () => {
    if (experiences.length >= 6) return;
    setExperiences([
      ...experiences,
      { id: Date.now(), company: '', position: '', years: '', months: '' }
    ]);
  };

  // 刪除指定經歷
  const deleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  // 更新經歷資料（單筆欄位）
  const updateExperience = (id, field, value) => {
    setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  return (

    <div className='joinus-form-wrapper'>
      <form
        className='NutriJoinus-Step3'
        onSubmit={e => e.preventDefault()}
      >
        <div className='NutriJoinusStep3-title'>
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
            <h4>執業經歷：</h4>
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
                    <td>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={e => updateExperience(exp.id, 'company', e.target.value)}
                        placeholder="單位名稱"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={e => updateExperience(exp.id, 'position', e.target.value)}
                        placeholder="工作職稱"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={exp.years}
                        onChange={e => updateExperience(exp.id, 'years', e.target.value)}
                        placeholder="年"
                        style={{ width: '40px', marginRight: '4px' }}
                      />年
                      <input
                        type="text"
                        value={exp.months}
                        onChange={e => updateExperience(exp.id, 'months', e.target.value)}
                        placeholder="月"
                        style={{ width: '40px', marginLeft: '8px', marginRight: '4px' }}
                      />月
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

        <div className='NutriStep3-NextPreButton'>
          <button type="button" className='Pre-button' onClick={onPre}>◀ 上一步</button>
          <button type="button" className='Next-button' onClick={onNext}>下一步 ▶</button>
        </div>
      </form>
    </div>

  );
}

export default NutriJoinusStep3;
