import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NutriJoinusStep2.scss";
import MultiSelectDropdown from "../../components/MultiSelectDropdown";

function NutriJoinusStep2({ onNext, onPre }) {
  const navigate = useNavigate();

  const [certifications, setCertifications] = useState([
    { id: Date.now(), name: "" }
  ]);

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const specialties = [
    "增肌減重", "青少年營養", "銀髮族營養", "營養攝取", "女性孕期營養", "膳食平衡",
    "外食族營養調整", "客製化飲食計畫", "運動員營養", "減脂瘦身", "健康飲食",
    "素食營養規劃", "營養配方", "飲食療法"
  ];

  const addCertification = () => {
    setCertifications([...certifications, { id: Date.now(), name: "" }]);
  };

  const deleteCertification = (id) => {
    setCertifications(certifications.filter(cert => cert.id !== id));
  };

  const updateCertificationName = (id, value) => {
    setCertifications(certifications.map(cert =>
      cert.id === id ? { ...cert, name: value } : cert
    ));
  };

  const handleSpecialtyChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      if (selectedSpecialties.length >= 6) {
        e.preventDefault();
        return;
      }
      setSelectedSpecialties([...selectedSpecialties, value]);
    } else {
      setSelectedSpecialties(selectedSpecialties.filter(item => item !== value));
    }
  };

  // ✅ 新增上下步邏輯（依螢幕寬度決定導向或執行 onNext/onPre）
  const handleNext = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 1024) {
      navigate('/NutriJoinusStep3');
    } else {
      onNext && onNext();
    }
  };

  const handlePre = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 1024) {
      navigate('/NutriJoinusStep1');
    } else {
      onPre && onPre();
    }
  };

  return (
    <div className='joinus-form-wrapper'>
      <form className='CoachJoinus-Step2' onSubmit={(e) => e.preventDefault()}>
        {/* Header */}
        <div className='JoinusStep2-header'>
          <div className='Step2-title'>
            <h4>專長</h4>
            <h5>Expertise</h5>
          </div>
          <p>2/4</p>
        </div>

        {/* 專長選項 */}
        <div className='Step2Checkbox'>
          <div className='Specitialty-title'>
            <h4>專長領域：</h4>
            <p>最多6項</p>
          </div>
          <div className='Step2Checkbox-group'>
            {specialties.map((label, index) => (
              <label key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  name="specialty"
                  value={label}
                  checked={selectedSpecialties.includes(label)}
                  onChange={handleSpecialtyChange}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <MultiSelectDropdown
          options={specialties}
          selectedOptions={selectedSpecialties}
          setSelectedOptions={setSelectedSpecialties}
          maxSelect={6}
        />

        {/* 證照說明 */}
        <div className='Step2-certification'>
          <div className='Step2-certification-header'>
            <div className='Step2-certification-title'>
              <h4>專業證照：</h4>
              <h5>至少需有一張</h5>
            </div>
            <p>
              必須包含由考選部核發的「營養師證書」（即通過營養師高等考試之證明），以確認您的專業資格。
              可另附學歷證明與其他專業證書作為加分資料。
            </p>
          </div>
        </div>

        {/* 證照輸入欄位 */}
        <fieldset className="scrollFieldset">
          <legend>證照名稱</legend>
          <div className="scrollContent" >
            {certifications.map((cert, index) => (
              <div key={cert.id} className="cert-line">
                <input
                  type="text"
                  value={cert.name}
                  onChange={(e) => updateCertificationName(cert.id, e.target.value)}
                />
                <button type="button" className='nutriupload'>上傳</button>
                <button type="button" className='delete' onClick={() => deleteCertification(cert.id)}>刪除</button>
                <button type="button" className='update' onClick={addCertification}>新增</button>
              </div>
            ))}
            {/* <div className="update-button">
              <button type="button" className='update' onClick={addCertification}>新增</button>
            </div> */}
          </div>
        </fieldset>

        {/* 上一步 / 下一步 */}
        <div className='NextPreButton'>
          <button type="button" onClick={handlePre} className='Step2Pre-button'>◀ 上一步</button>
          <button type="button" onClick={handleNext} className='Step2Next-button'>下一步 ▶</button>
        </div>
      </form>
    </div>
  );
}

export default NutriJoinusStep2;
