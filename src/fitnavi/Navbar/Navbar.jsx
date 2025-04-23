import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <>
      <header id="navbar">
        
        <Link to="/" className="logo">
          <span className="fit">Fit</span>
          <span className="navi">NAVI</span>
        </Link>

        <ul class="menu">
          <li>
            <Link to="/center">健身場地</Link>
          </li>
          <li>
            <Link to="/coach">健身教練</Link>
          </li>
          <li>
            <Link>營養師</Link>
          </li>
          <li>
            <Link>知識文章</Link>
          </li>
          <li>
            <Link>加入我們</Link>
          </li>
        </ul>
        <button type="button" class="login">
          登入 / 註冊
        </button>
      </header>
    </>
  );
}
export default Navbar;
