import { Link } from "react-router-dom";
import "./CoachCard.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  isFavorite,
  toggleFavorite,
  FAVORITES_CHANGED_EVENT,
} from "../utils/favorites";

function CoachCard({
  id,
  type,
  imageSrc,
  role,
  name,
  hashtags = [],
  description,
  link,
}) {
  const [iconSize, setIconSize] = useState(24);

  const [liked, setLiked] = useState(() => isFavorite(type, id));

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

  // 有 id/type 才與 localStorage 收藏清單同步（例如同一張卡片在別處被移除收藏）
  useEffect(() => {
    if (!id || !type) return;
    setLiked(isFavorite(type, id));
    const handleFavoritesChanged = () => setLiked(isFavorite(type, id));
    window.addEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChanged);
    return () =>
      window.removeEventListener(
        FAVORITES_CHANGED_EVENT,
        handleFavoritesChanged
      );
  }, [id, type]);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (id && type) {
      setLiked(toggleFavorite(type, id));
    } else {
      // 沒有 id/type（例如首頁展示用卡片）時，僅本地暫時切換，不寫入收藏
      setLiked((prev) => !prev);
    }
  };

  return (
    <>
      <Link to={link}>
        <div className="coach-card">
          <div className="image-container">
            <img src={imageSrc || "./images/coach03.jpg"} alt="教練照片" />
            <span className="label">{role}</span>
          </div>
          <div className="coach-box">
            <span className="coach-name">
              {name}
              <button className="heart-button" onClick={handleToggleFavorite}>
                {liked ? (
                  <AiFillHeart color="#ff8740" size={iconSize} />
                ) : (
                  <AiOutlineHeart color="#ff8740" size={iconSize} />
                )}
              </button>
            </span>
            <div className="hashtag">
              {hashtags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))}
            </div>
            <p className="coach-details">{description}</p>
          </div>
          <div className="more-button">瞭解更多▶</div>
        </div>
      </Link>
    </>
  );
}
export default CoachCard;
