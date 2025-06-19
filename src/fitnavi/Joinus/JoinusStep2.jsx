import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./JoinusStep2.scss";
import MultiSelectDropdown from "../../components/MultiSelectDropdown";
// import MainTitle from "../../components/Title/MainTitle";

function JoinusStep2({ onNext, onPre }) {
  const navigate = useNavigate();

  const [certifications, setCertifications] = useState([
    { id: Date.now(), name: "" }
  ]);

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const specialties = [
    "新手教學", "減脂瘦身", "核心訓練", "徒手訓練", "功能性訓練", "肌力與爆發力",
    "體適能訓練", "術後復健訓練", "運動按摩與伸展", "銀髮族訓練",
    "運動防護與傷害訓練", "居家訓練規劃", "體能雕塑", "HIIT高強度間歇運動"
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

  const handleNext = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth <= 1024) {
      navigate('/JoinusStep3');
    } else {
      onNext && onNext();
    }
  };

  const handlePre = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth <= 1024) {
      navigate('/JoinusStep1');
    } else {
      onPre && onPre();
    }
  };

  return (
    <>
      {/* <MainTitle title1="加入我們" title2="成為我們的合作夥伴" /> */}
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

          {/* 專長選項（checkbox 與 dropdown 共存） */}
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
                    onChange={(e) => {
                      const value = e.target.value;
                      if (e.target.checked) {
                        if (selectedSpecialties.length < 6) {
                          setSelectedSpecialties([...selectedSpecialties, value]);
                        } else {
                          alert("最多選擇6項專長！");
                        }
                      } else {
                        setSelectedSpecialties(selectedSpecialties.filter(item => item !== value));
                      }
                    }}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* 下拉多選（可選） */}
          <MultiSelectDropdown
            options={specialties}
            selectedOptions={selectedSpecialties}
            setSelectedOptions={setSelectedSpecialties}
            maxSelect={6}
          />

          {/* 專業證照區塊 */}
          <div className='Step2-certification'>
            <div className='Step2-certification-header'>
              <div className='Step2-certification-title'>
                <h4>專業證照：</h4>
                <h5>至少需有一張</h5>
              </div>
              <p>
                我們歡迎具備國際專業證照（如 NSCA、ACE、NASM）的教練加入，
                但若您仍在準備中，只要有豐富經驗與熱忱，也非常歡迎您與我們合作！
              </p>
            </div>
          </div>

          {/* 證照輸入欄位（可滾動） */}
          <fieldset className="scrollFieldset">
            <legend>證照名稱</legend>
            <div className="coach-scrollContent">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-line">
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) => updateCertificationName(cert.id, e.target.value)}
                  />
                  <button type="button" className='upload'>上傳</button>
                  <button type="button" className='delete' onClick={() => deleteCertification(cert.id)}>刪除</button>
                </div>
              ))}
              <div className="update-button">
                <button type="button" className='update' onClick={addCertification}>新增</button>
              </div>
            </div>
          </fieldset>

          {/* 導覽按鈕 */}
          <div className='NextPreButton'>
            <button type="button" onClick={handlePre} className='Step2Pre-button'>◀ 上一步</button>
            <button type="button" onClick={handleNext} className='Step2Next-button'>下一步 ▶</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default JoinusStep2;
