import React, { useEffect, useState } from "react";
import "./MemberLogin.scss";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MS = 60 * 1000;

function MemberLogin() {
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberAccount, setRememberAccount] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockUntil, setLockUntil] = useState(null);

  useEffect(() => {
    const savedAccount = localStorage.getItem("rememberedAccount");
    if (savedAccount) {
      setAccount(savedAccount);
      setRememberAccount(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const now = Date.now();
    if (lockUntil && now < lockUntil) {
      const remainSeconds = Math.ceil((lockUntil - now) / 1000);
      setErrorMessage(`登入失敗次數過多，請 ${remainSeconds} 秒後再試`);
      return;
    }

    const normalizedAccount = account.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(normalizedAccount)) {
      setErrorMessage("請輸入正確 Email 格式");
      return;
    }

    if (password.length < 6 || password.length > 72) {
      setErrorMessage("密碼長度需為 6~72 字元");
      return;
    }

    setIsLoading(true);

    try {
      // 使用 Firebase 身份驗證
      const userCredential = await signInWithEmailAndPassword(
        auth,
        normalizedAccount,
        password,
      );
      const user = userCredential.user;

      // 登入成功，保存用戶信息
      localStorage.setItem("token", user.uid);
      localStorage.setItem("userEmail", user.email);

      if (rememberAccount) {
        localStorage.setItem("rememberedAccount", normalizedAccount);
      } else {
        localStorage.removeItem("rememberedAccount");
      }
      setFailedAttempts(0);
      setLockUntil(null);

      // 根據使用者郵件決定角色（可根據需要調整邏輯）
      let userRole = "member";
      if (normalizedAccount.includes("coach")) {
        userRole = "coach";
      }
      localStorage.setItem("role", userRole);

      console.log("登入成功:", user);

      if (userRole === "coach") {
        navigate("/CoachDashboardList");
      } else {
        navigate("/memberlist");
      }
    } catch (error) {
      console.error("登入錯誤:", error.code, error.message);
      const nextFailedAttempts = failedAttempts + 1;
      setFailedAttempts(nextFailedAttempts);

      if (nextFailedAttempts >= MAX_FAILED_ATTEMPTS) {
        setLockUntil(Date.now() + LOCK_DURATION_MS);
        setErrorMessage("登入失敗次數過多，請 60 秒後再試");
        return;
      }

      // 處理特定的錯誤情況
      if (error.code === "auth/user-not-found") {
        setErrorMessage("帳號不存在，請先註冊");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("密碼錯誤，請重新輸入");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("帳號格式無效");
      } else if (error.code === "auth/invalid-credential") {
        setErrorMessage("帳號或密碼錯誤");
      } else {
        setErrorMessage("登入失敗，請稍後重試");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // google登入（官方按鈕 + Firebase）
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse?.credential;
    if (!idToken) {
      setErrorMessage("Google 登入失敗，請重試");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      const credential = GoogleAuthProvider.credential(idToken);
      const result = await signInWithCredential(auth, credential);
      const user = result.user;
      const userEmail = user.email || "";
      const userRole = userEmail.includes("coach") ? "coach" : "member";

      localStorage.setItem("token", user.uid);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userName", user.displayName || "");
      localStorage.setItem("role", userRole);

      if (userRole === "coach") {
        navigate("/CoachDashboardList");
      } else {
        navigate("/memberlist");
      }
    } catch (error) {
      console.error("Google 登入處理錯誤:", error);
      setErrorMessage("Google 登入失敗，請重試");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLoginError = () => {
    setErrorMessage("Google 登入失敗，請重試");
  };

  return (
    <section className="MemberLogin">
      <form className="MemberLogin-form" onSubmit={handleLogin}>
        <div className="MemberLogin-title">會員登入</div>

        {/* 提示訊息 */}
        <div className="mb-5 rounded border-l-4 border-l-[#ffc107] bg-[#fff3cd] p-3 text-[13px] leading-[1.6] text-[#856404]">
          <div className="mb-2 font-bold">
            此為作品展示非真實網站，請使用google登入或以下測試帳號密碼登入
          </div>
          <div>學員帳號：member@gmail.com 密碼：123456</div>
          <div className="mt-2">教練帳號：coach@gmail.com 密碼：123456</div>
        </div>

        {/* 錯誤訊息顯示 */}
        {errorMessage && (
          <div className="mb-5 rounded bg-[#ffebee] p-3 text-center text-[14px] text-[#d32f2f]">
            {errorMessage}
          </div>
        )}

        <div className="KeyinEmailAccount w-full ">
          <div className="input-wrapper flex flex-col w-full">
            <label className="w-full">帳號 (Email)</label>
            <input
              className="w-full"
              type="email"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="請輸入電子郵件"
              disabled={isLoading}
              autoComplete="username"
              maxLength={100}
              required
            />
          </div>

          <div className="password-input-wrapper relative w-full max-w-[408px]">
            <div className="password-div relative flex">
              <label className="password-label">密碼</label>

              <div className="input-eye">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[400px]"
                  disabled={isLoading}
                  autoComplete="current-password"
                  minLength={6}
                  maxLength={72}
                  required
                />
                {/* 眼睛 icon 的 div */}
                <div
                  className="eye-icon absolute right-[10px] cursor-pointer self-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* js三源=元運算子，如果現在式showpassword狀態眼睛打開，不是的話關閉 */}
                  {showPassword ? (
                    // 眼睛打開
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3A2C19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.93397 13.7788C4.7134 15.5478 7.8167 17.9999 11.3474 17.9999C14.878 17.9999 17.9807 15.5478 19.7601 13.7788C20.2294 13.3123 20.4649 13.0782 20.6143 12.6201C20.7209 12.2933 20.7209 11.7067 20.6143 11.3799C20.4649 10.9218 20.2295 10.6877 19.7601 10.2211C17.9807 8.45208 14.878 6 11.3474 6C7.8167 6 4.7134 8.45208 2.93397 10.2211C2.46431 10.688 2.22945 10.9216 2.07996 11.3799C1.97335 11.7067 1.97335 12.2933 2.07996 12.6201C2.22945 13.0784 2.4643 13.3119 2.93397 13.7788Z" />
                      <path d="M9.34717 12C9.34717 13.1046 10.2426 14 11.3472 14C12.4517 14 13.3472 13.1046 13.3472 12C13.3472 10.8954 12.4517 10 11.3472 10C10.2426 10 9.34717 10.8954 9.34717 12Z" />
                    </svg>
                  ) : (
                    // 眼睛關閉
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3A2C19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[408px] flex ml-4">
            <label className="mt-3 mb-2 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={rememberAccount}
                onChange={(e) => setRememberAccount(e.target.checked)}
                disabled={isLoading}
              />
              記住帳號
            </label>
          </div>
          <button type="submit" disabled={isLoading}>
            <span className="login-text">
              {isLoading ? "登入中..." : "登入"}
            </span>
            {!isLoading && <img src="./images/search.svg" alt="" />}
          </button>
          <div className="w-full flex justify-center m-0">
            <GoogleOAuthProvider clientId="182373470143-vge7k40i9mn15d0fmv5c3is52jublrlp.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
                text="signin_with"
                shape="rectangular"
              />
            </GoogleOAuthProvider>
          </div>
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
