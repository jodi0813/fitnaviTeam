import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header id="navbarHeader">
        <div className="container">
          <nav id="navbar">
            <Link to="/" className="logo">
              <span className="fit">Fit</span>
              <span className="navi">NAVI</span>
            </Link>
            <button class="navbarHamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
            <ul className="menu">

              <li>
                <Link to="/coach">健身教練</Link>
              </li>
              <li>
                <Link to="/nutritionist">營養師</Link>
              </li>
              <li>
                <Link to="/myfavorite">我的收藏</Link>
              </li>
              <li>
                <Link to="/allarticle">知識文章</Link>
              </li>
              <li>
                <Link to="/centerMap">健身場地</Link>
              </li>
              <li>
                <Link to="./Joinus">加入我們</Link>
              </li>
              {/* <li>
                <Link to="/memberlist">後台(暫放)</Link>
              </li> */}
            </ul>
            <button type="button" className="nbr-login" onClick={() => navigate('MemberLogin')}>
              登入 / 註冊
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
