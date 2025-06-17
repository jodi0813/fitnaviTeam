import React from 'react';
import "./JoinusStep1.scss";

function JoinusStep1({ onNext }) {
  return (
    <div className="joinus-form-wrapper">
      <form
        className="CoachJoinus-Step1-form"
        onSubmit={(e) => {
          e.preventDefault(); // 防止頁面重新整理
          onNext();           // 切換到下一步
          window.scrollTo(0, 0); // 捲動到最上方（可選）
        }}
      >
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
  );
}

export default JoinusStep1;
