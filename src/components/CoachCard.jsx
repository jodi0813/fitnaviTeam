import { Link } from "react-router-dom";
import "./CoachCard.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
function CoachCard({ imageSrc, role, name, hashtags = [], description }) {
  const [liked, setLiked] = useState(false);
  return (
    <>
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
                <AiFillHeart color="#ff8740" size={24} />
              ) : (
                <AiOutlineHeart color="#ff8740" size={24} />
              )}
            </button>
          </span>
          <div className="hashtag">
            {hashtags.map((tag, index) => (
              <a href="#" key={index}>
                #{tag}
              </a>
            ))}
          </div>
          <p className="coach-details">{description}</p>
        </div>
        <Link to="/coachintro" className="more-button">
          瞭解更多▶
        </Link>
      </div>
    </>
  );
}
export default CoachCard;
