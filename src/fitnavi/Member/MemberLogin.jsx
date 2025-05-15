import React, { useState } from "react";
import "./MemberLogin.scss";
import { useNavigate } from "react-router-dom";

function MemberLogin() {
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  // 可以加入多組帳密
  const validUsers = [
    { account: "huahua0303@gmail.com", password: "1234" },
    { account: "Jackcoach@gmail.com", password: "222" },
    // 其他帳號
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const match = validUsers.find(
      (user) => user.account === account && user.password === password
    );

    if (match) {
      navigate("/memberlist");
    } else {
      const accountExists = validUsers.some((user) => user.account === account);
      const passwordMatches = validUsers.some((user) => user.password === password);

      if (!accountExists && !passwordMatches) {
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
            onClick={() => {
              if (account === "huahua0303@gmail.com") {
                navigate("/MemberList");
              } else if (account === "Jackcoach@gmail.com") {
                navigate("/Allarticle");
              }
            }}
          >
            還不是會員？會員加入
          </button>
        </div>
      </form>
    </section>
  );
}

export default MemberLogin;