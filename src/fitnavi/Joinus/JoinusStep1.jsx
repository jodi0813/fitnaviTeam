
import React, { useState } from 'react';
import "./JoinusStep1.scss";
import { useNavigate, useSearchParams } from 'react-router-dom';
import MainTitle from "../../components/Title/MainTitle";

function JoinusStep1() {
  const navigate = useNavigate(); //
  const [searchParams] = useSearchParams(); // 讀取 URL 查詢參數
  const from = searchParams.get("from"); // 從 URL 中拿到 "from" 參數的值
  const [isLeaving, setIsLeaving] = useState(false); // 控制是否要執行換頁動畫

  const handleNext = (e) => {
    e.preventDefault(); // 防止 form 預設送出跳頁
    setIsLeaving(true);

    setTimeout(() => {
      // 根據 "from" 參數決定導航的頁面
      if (from === 'imcoach-joinbutton') {
        navigate('/JoinusStep2');
      } else {
        navigate('/NutriJoinusStep2');
      }
      window.scrollTo(0, 0); // 跳轉後滾動到頁面頂部
    }, 500); // 轉頁時間，與動畫時間同步
  };

    // 轉業動畫
    const wrapperClassName = isLeaving
    ? "CoachJoinus-Step1-wrapper leave-left" // 如果 isLeaving 是 true，增加 "leave-left" class
    : "CoachJoinus-Step1-wrapper"; //不然就維持
  

    return (
      <>
        <section id='JoinusStep1-Form'>
          <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />

          <div className={wrapperClassName}>
            <form className='CoachJoinus-Step1-form'>
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
                <label>暱稱</label>
                <input type="text" />
                <label>性別</label>
                <input type="text" placeholder='自動帶入的內容' />
                <label>生日</label>
                <input type="text" placeholder='自動帶入的內容' />
                <label>Email</label>
                <input type="text" placeholder='自動帶入的內容' />
                <label>連絡電話</label>
                <input type="text" placeholder='自動帶入的內容' />
                <label>通訊地址</label>
                <input type="text" />
              </div>

              <button className='Step1-form-button' onClick={handleNext}>
                下一步 ▶
              </button>
            </form>
          </div>
        </section>
      </>
    )
  }


export default JoinusStep1;
