import React from "react";
import "./MemberLogin.scss";
import { Link, useNavigate } from "react-router-dom";

function MemberLogin() {
  const navigate = useNavigate();
  return (
    <>
      <section className="MemberLogin">
        <form action="" className="MemberLogin-form">
          <div className="MemberLogin-title">會員登入</div>

          <div className="KeyinEmailAccount">
            <label htmlFor="">輸入帳號</label>
            <input type="text" />
            <label htmlFor="">輸入密碼</label>
            <input
              type="text"
              placeholder="密碼組合為英數字混合之8位數以上字元"
            />
            <Link to="/memberlist">{/* 綁後台會員管理(芝) */}
              <button>登入</button>
            </Link>
          </div>

          <div className="MemberLogin-option">
            <button
              className="MemberLogin-forgetpassword"
              onClick={() => navigate("/ForgetPassword")}
            >
              忘記帳號密碼
            </button>
            <button onClick={() => navigate("/MemberSignup")}>
              還不是會員？會員加入
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default MemberLogin;
