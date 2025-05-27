// Navbar.jsx
import { Link, NavLink } from "react-router-dom";
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
          <div className="mobile-logo">
            <img src="./images/FitNAVI-favicon.png" alt="LOGO" />
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
              <li><NavLink to="/coach" className={({ isActive }) => isActive ? "active" : ""}>健身教練</NavLink></li>
              <li><NavLink to="/nutritionist" className={({ isActive }) => isActive ? "active" : ""}>營養師</NavLink></li>
              <li><NavLink to="/myfavorite" className={({ isActive }) => isActive ? "active" : ""}>我的收藏</NavLink></li>
              <li><NavLink to="/allarticle" className={({ isActive }) => isActive ? "active" : ""}>知識文章</NavLink></li>
              <li><NavLink to="/centerMap" className={({ isActive }) => isActive ? "active" : ""}>健身場地</NavLink></li>
              <li><NavLink to="/Joinus" className={({ isActive }) => isActive ? "active" : ""}>加入我們</NavLink></li>
            </ul>
          </div>

          <button
            type="button"
            className="nbr-login"
            onClick={() => navigate("/MemberLogin")}
          >
            登入 / 註冊
          </button>

          {/* 手機版全畫面選單 */}
          <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
            <div className="mobile-title">
              <img src="./images/FitNAVI-favicon.png" alt="LOGO" />
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
              </ul>
            </div>
            <Link to="/MemberLogin" onClick={() => setIsMenuOpen(false)}>
              <button
                type="button"
                className="mobile-login"
              >
                登入 / 註冊
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

