import React from 'react';
import "./NutriJoinusStep1.scss";
import { useNavigate } from 'react-router-dom';
// import MainTitle from "../../components/Title/MainTitle";

function NutriJoinusStep1({ onNext }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      navigate('/NutriJoinusStep2');
    } else {
      onNext && onNext();
    }
  };

  return (
    <>
      {/* <MainTitle title1="加入我們" title2="成為我們的合作夥伴" /> */}

      <div className="joinus-form-wrapper">
        <form className="CoachJoinus-Step1-form" onSubmit={handleSubmit}>
          <div className="JoinusStep1-title">
            <div className="Step1-title">
              <h3>基本資料</h3>
              <h4>Basic information</h4>
            </div>
            <p>1/4</p>
          </div>

          <div className="Step1-form">
            <label htmlFor="Step1-form-name">真實姓名</label>
            <input type="text" placeholder="自動帶入的內容" id="Step1-form-name" />

            <label>暱稱</label>
            <input type="text" />

            <label>性別</label>
            <input type="text" placeholder="自動帶入的內容" />

            <label>生日</label>
            <input type="text" placeholder="自動帶入的內容" />

            <label>Email</label>
            <input type="text" placeholder="自動帶入的內容" />

            <label>連絡電話</label>
            <input type="text" placeholder="自動帶入的內容" />

            <label>通訊地址</label>
            <input type="text" />
          </div>

          <button className="Step1-form-button" type="submit">
            <span>下一步</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M10 6L0 0.226497V11.7735L10 6Z" fill="#FF8740" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default NutriJoinusStep1;
