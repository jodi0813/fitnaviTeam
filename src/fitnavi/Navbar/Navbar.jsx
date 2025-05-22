import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

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

            <div>
            <ul className="menu">
              <div>
                <li>
                  <Link to="/coach">健身教練</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/nutritionist">營養師</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/myfavorite">我的收藏</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/allarticle">知識文章</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/centerMap">健身場地</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="./Joinus">加入我們</Link>
                </li>
              </div>
            </ul></div>
            <button
              type="button"
              className="nbr-login"
              onClick={() => navigate("MemberLogin")}
            >
              登入 / 註冊
            </button>
             <button className="navbarHamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </nav>
          
        </div>
      </header>
    </>
  );
}
export default Navbar;
