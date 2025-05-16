import React, { useState } from "react";
import "./MemberLogin.scss";
import { useNavigate } from "react-router-dom";

function MemberLogin() {
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const validUsers = [
    { account: "huahua0303@gmail.com", password: "1234" },
    { account: "Jackcoach@gmail.com", password: "222" },
    // 學員和教練的帳號
  ];


    const handleLogin = (e) => {
      e.preventDefault(); // 防止表單送出後頁面重新整理

      let match = null; // 用來儲存找到的使用者（如果有的話）
      let accountExists = false;
      let passwordMatches = false;

      // 一筆一筆檢查 validUsers 裡面的帳號密碼
      for (let i = 0; i < validUsers.length; i++) {
        const user = validUsers[i];

        if (user.account === account && user.password === password) {
          match = user; // 找到完全正確的帳密
          break;        // 找到了就不用再繼續找，直接跳出
        }

        if (user.account === account) {
          accountExists = true;
        }

        if (user.password === password) {
          passwordMatches = true;
        }
      }

      // 如果帳密完全正確
      if (match !== null) {
        // 根據帳號決定要跳轉去哪一個頁面
        if (account === "Jackcoach@gmail.com") {
          navigate("/CoachDashboardList");
        } else {
          navigate("/memberlist");
        }
      } else {
        // 帳密錯誤的情況提示使用者
        if (accountExists === false && passwordMatches===false) {
          alert("帳號密碼錯誤");
        } else if (!accountExists) {
          alert("帳號錯誤");
        } else {
          alert("密碼錯誤");
        }
      }
  };

  return (
    <section className="MemberLogin">
      <form className="MemberLogin-form" onSubmit={handleLogin}>
        <div className="MemberLogin-title">會員登入</div>

        <div className="KeyinEmailAccount">
          <label>輸入帳號</label>
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />

          <label>輸入密碼</label>
          <input
            type="password"
            placeholder="密碼組合為英數字混合之8位數以上字元"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">登入</button>
        </div>

        <div className="MemberLogin-option">
          <button
            type="button"
            className="MemberLogin-forgetpassword"
            onClick={() => navigate("/ForgetPassword")}
          >
            忘記帳號密碼
          </button>

          <button
            type="button"
            onClick={() => navigate("/MemberSignup")} 
          >
            還不是會員？會員加入
          </button>
        </div>
      </form>
    </section>
  );
}

export default MemberLogin;
