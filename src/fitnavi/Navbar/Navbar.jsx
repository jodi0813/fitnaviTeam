import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <>
      <header id="header">
        <div className="container">
          <nav id="navbar">
            <Link to="/" className="logo">
              <span className="fit">Fit</span>
              <span className="navi">NAVI</span>
            </Link>

            <ul className="menu">

              <li>
                <Link to="/coach">健身教練</Link>
              </li>
              <li>
                <Link to="/coachintro">營養師</Link>
              </li>
              <li>
                <Link>我的收藏</Link>
              </li>
              <li>
                <Link to="/allarticle">知識文章</Link>
              </li>
              <li>
                <Link to="/centerMap">健身場地</Link>
              </li>
              <li>
                <Link>加入我們</Link>
              </li>
              <li>
                <Link to="/memberlist">後台(暫放)</Link>
              </li>
            </ul>
            <button type="button" className="login">
              登入 / 註冊
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
