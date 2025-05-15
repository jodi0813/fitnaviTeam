import React, { useState } from "react";
import "./MemberLogin.scss";
import { useNavigate } from "react-router-dom";

function MemberLogin() {
  const navigate = useNavigate();

  // 儲存使用者輸入帳號密碼
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 檢查或帳密比對
    if (account === "huahua0303@gmail.com" && password === "1234") {
      // 帳密正確就導頁
      navigate("/memberlist");
    } else {
      alert("帳號或密碼錯誤");
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
          <button type="button" onClick={() => navigate("/MemberSignup")}>
            還不是會員？會員加入
          </button>
        </div>
      </form>
    </section>
  );
}

export default MemberLogin;
