import React, { useState } from "react";
import "./MemberLogin.scss";
import { useNavigate } from "react-router-dom";

function MemberLogin() {
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validUsers = [
    { account: "huahua0303@gmail.com", password: "1234" },
    { account: "Jackcoach@gmail.com", password: "222" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    let match = null;
    let accountExists = false;
    let passwordMatches = false;

    for (let i = 0; i < validUsers.length; i++) {
      const user = validUsers[i];

      if (user.account === account && user.password === password) {
        match = user;
        break;
      }

      if (user.account === account) {
        accountExists = true;
      }

      if (user.password === password) {
        passwordMatches = true;
      }
    }

    if (match !== null) {
      if (account === "Jackcoach@gmail.com") {
        navigate("/CoachDashboardList");
      } else {
        navigate("/memberlist");
      }
    } else {
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
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="密碼組合為英數字混合之8位數以上字元"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "400px", paddingRight: "40px" }}
            />

            {/* 眼睛icon的div */}
            <div
              //js反邏輯寫法 如果式前面的狀態點擊後變成相反狀態
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {/* js三源=元運算子，如果現在式showpassword狀態眼睛打開，不是的話關閉 */}
              {showPassword ? (
                // 眼睛打開
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A2C19" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.93397 13.7788C4.7134 15.5478 7.8167 17.9999 11.3474 17.9999C14.878 17.9999 17.9807 15.5478 19.7601 13.7788C20.2294 13.3123 20.4649 13.0782 20.6143 12.6201C20.7209 12.2933 20.7209 11.7067 20.6143 11.3799C20.4649 10.9218 20.2295 10.6877 19.7601 10.2211C17.9807 8.45208 14.878 6 11.3474 6C7.8167 6 4.7134 8.45208 2.93397 10.2211C2.46431 10.688 2.22945 10.9216 2.07996 11.3799C1.97335 11.7067 1.97335 12.2933 2.07996 12.6201C2.22945 13.0784 2.4643 13.3119 2.93397 13.7788Z" />
                  <path d="M9.34717 12C9.34717 13.1046 10.2426 14 11.3472 14C12.4517 14 13.3472 13.1046 13.3472 12C13.3472 10.8954 12.4517 10 11.3472 10C10.2426 10 9.34717 10.8954 9.34717 12Z" />
                </svg>
              ) : (
                // 眼睛關閉
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A2C19" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" />
                </svg>
              )}
            </div>
          </div>

          <button type="submit">
            <span className="login-text">登入</span>
            <img src="/images/search.svg" alt="" />
          </button>
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
            還不是會員？
            <span>會員加入</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default MemberLogin;
