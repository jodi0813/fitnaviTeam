// Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiX } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="navbarHeader">
      <div className="container">
        <nav id="navbar">
          <Link to="/" className="logo">
            <span className="fit">Fit</span>
            <span className="navi">NAVI</span>
          </Link>

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
              <li><Link to="/coach">健身教練</Link></li>
              <li><Link to="/nutritionist">營養師</Link></li>
              <li><Link to="/myfavorite">我的收藏</Link></li>
              <li><Link to="/allarticle">知識文章</Link></li>
              <li><Link to="/centerMap">健身場地</Link></li>
              <li><Link to="/Joinus">加入我們</Link></li>
            </ul>
          </div>

          <button
            type="button"
            className="nbr-login"
            onClick={() => navigate("/MemberLogin")}
          >
            登入 / 註冊
          </button>

          {/* 手機版全畫面選單
          <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
            <div className="mobile-title">
              <img src="/images/FitNAVI-favicon.png" alt="LOGO" />
              <button className="mobile-close" onClick={() => setIsMenuOpen(false)}><HiX /></button>
            </div>
            <div>
              <ul>
                <li><Link to="/coach" onClick={() => setIsMenuOpen(false)}>健身教練</Link></li>
                <li><Link to="/nutritionist" onClick={() => setIsMenuOpen(false)}>營養師</Link></li>
                <li><Link to="/myfavorite" onClick={() => setIsMenuOpen(false)}>我的收藏</Link></li>
                <li><Link to="/allarticle" onClick={() => setIsMenuOpen(false)}>知識文章</Link></li>
                <li><Link to="/centerMap" onClick={() => setIsMenuOpen(false)}>健身場地</Link></li>
                <li><Link to="/Joinus" onClick={() => setIsMenuOpen(false)}>加入我們</Link></li>
              </ul></div>
            <button
              type="button"
              className="mobile-login"
              onClick={() => navigate("/MemberLogin")}
            >
              登入 / 註冊
            </button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

