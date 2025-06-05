import { Link } from "react-router-dom";
import "./CoachCard.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";




function CoachCard({ imageSrc, role, name, hashtags = [], description, link }) {
 const [iconSize, setIconSize] = useState(24);

  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const handleResize = () => {  
      if (window.innerWidth < 1025) {
        setIconSize(18);
      } else {
        setIconSize(24);
      }
    };

    handleResize(); // 初始執行一次
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>

      <Link to={link} >
        <div className="coach-card">
          <div className="image-container">
            <img src={imageSrc || "./images/coach03.jpg"} alt="教練照片" />
            <span className="label">{role}</span>
          </div>
          <div className="coach-box">
            <span className="coach-name">
              {name}
              <button className="heart-button" onClick={() => setLiked(!liked)}>
                {liked ? (
                  <AiFillHeart color="#ff8740" size={iconSize} />
                ) : (
                  <AiOutlineHeart color="#ff8740" size={iconSize} />
                )}
              </button>
            </span>
            <div className="hashtag">
              {hashtags.map((tag, index) => (
                <span key={index}>
                  #{tag}
                </span>
              ))}
            </div>
            <p className="coach-details">{description}</p>
          </div>
          <div className="more-button">
            瞭解更多▶</div>
        </div>
      </Link>
    </>
  );
}
export default CoachCard;
