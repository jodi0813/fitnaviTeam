// Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token"); //
    setIsLoggedIn(!!token);
  }, [location]);
  /* 判斷會員管理狀態是哪個後臺 */
  const handleGoToDashboard = () => {
    const role = localStorage.getItem("role");

    if (role === "coach") {
      navigate("/CoachDashboardList");
    } else if (role === "member") {
      navigate("/memberlist");
    } else {
      alert("請先登入");
      navigate("/login");
    }
  };
  return (
    <header id="navbarHeader">
      <div className="container">
        <nav id="navbar">
          <Link to="/" className="logo">
            <span className="fit">Fit</span>
            <span className="navi">NAVI</span>
          </Link>
          <div className="mobile-logo">
            <Link to="/">
              <img src="./images/FitNAVI-favicon.png" alt="LOGO" />
            </Link>
          </div>
          <button
            className={`navbarHamburger ${isMenuOpen ? "is-active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className="menu">
            <ul>
              <li>
                <NavLink
                  to="/coach"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  健身教練
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nutritionist"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  營養師
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myfavorite"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  我的收藏
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allarticle"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  知識文章
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/centerMap"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  健身場地
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Joinus"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  加入我們
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="desktop-menu">
            {isLoggedIn ? (
              <div className="nbr-login">
              <button
                type="button"
                // className="nbr-login"
                onClick={handleGoToDashboard}
              >
                會員管理
              </button>
              </div>
            ) : (
              <div className="nbr-login">
              <button
                type="button"
                // className="nbr-login"
                onClick={() => navigate("/MemberLogin")}
              >
                登入 / 註冊
              </button>
              </div>
            )}
          </div>
          {/* 手機版全畫面選單 */}
          <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
            <div className="mobile-title">
              <img src="./images/FitNAVI-favicon.png" alt="LOGO" />
              <button
                className="mobile-close"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaXmark size={30} />
              </button>
            </div>
            <div className="mobile-navbar">
              <ul>
                <div className="mobile-navbarBox">
                  <li>
                    <Link to="/coach" onClick={() => setIsMenuOpen(false)}>
                      健身教練
                    </Link>
                    <FaAngleRight size={22} />
                  </li>
                  <div className="mobile-line"></div>
                </div>

                <div className="mobile-navbarBox">
                  <li>
                    <Link
                      to="/nutritionist"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      營養師
                    </Link>
                    <FaAngleRight size={22} />
                  </li>
                  <div className="mobile-line"></div>
                </div>

                <div className="mobile-navbarBox">
                  <li>
                    <Link to="/myfavorite" onClick={() => setIsMenuOpen(false)}>
                      我的收藏
                    </Link>{" "}
                    <FaAngleRight size={22} />
                  </li>
                  <div className="mobile-line"></div>
                </div>

                <div className="mobile-navbarBox">
                  <li>
                    <Link to="/allarticle" onClick={() => setIsMenuOpen(false)}>
                      知識文章
                    </Link>
                    <FaAngleRight size={22} />
                  </li>
                  <div className="mobile-line"></div>
                </div>

                <div className="mobile-navbarBox">
                  <li>
                    <Link to="/centerMap" onClick={() => setIsMenuOpen(false)}>
                      健身場地
                    </Link>
                    <FaAngleRight size={22} />
                  </li>
                  <div className="mobile-line"></div>
                </div>
                <div className="mobile-navbarBox">
                  <li>
                    <Link to="/Joinus" onClick={() => setIsMenuOpen(false)}>
                      加入我們
                    </Link>
                    <FaAngleRight size={22} />
                  </li>
                  <div className="mobile-line"></div>
                </div>
              </ul>
              {isLoggedIn ? (
                <button
                  type="button"
                  className="nbr-login"
                  onClick={handleGoToDashboard}
                >
                  會員管理
                </button>
              ) : (
                <button
                  type="button"
                  className="nbr-login"
                  onClick={() => {
                    navigate("/MemberLogin");
                    setIsMenuOpen(false);
                  }}
                >
                  登入 / 註冊
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
