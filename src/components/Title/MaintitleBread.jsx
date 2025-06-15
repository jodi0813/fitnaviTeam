import { useNavigate } from "react-router-dom";
import "./MainTitleBread.scss";
import { HiChevronRight } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa";
function MainTitleBread({ title1, title2, breadcrumbList = [] }) {
  const back = useNavigate();
  return (
    <>
      <div className="mainTitleBreadBox">
        <header className="mainTitleBread">
          <div className="titleBoxBread">
            <button onClick={() => back(-1)} className="titleBackBt">
              <FaAngleLeft size={20} />
            </button>
            <h2 className="title1">{title1}</h2>
            <p className="title2">{title2}</p>
          </div>
          <nav>
            <ol className="breadcrumb">
              {breadcrumbList.map((item, i) => {
                const isLast = i === breadcrumbList.length - 1;
                return (
                  <li key={i} className="bread">
                    {/* 如果是最後一個，就只顯示文字，不加箭頭 */}
                    <a href={item.link}>{item.label}</a>
                    {!isLast && (
                      <span className="separator">
                        <HiChevronRight />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </header>
        <div className="member-line"></div> {/* 橫線 */}
        <button onClick={() => back(-1)} className="backBt">
          <FaAngleLeft size={20} /> <span className="backText">返回列表</span>
        </button>
      </div>
    </>
  );
}
export default MainTitleBread;
