import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import CoachCard from "../../components/CoachCard";
import MainTitle from "../../components/Title/MainTitle";
import "../Coach/Coach.scss";
import { getFavorites, FAVORITES_CHANGED_EVENT } from "../../utils/favorites";

function MyFavorite() {
  const [activeTab, setActiveTab] = useState("allFavoriteCards");

  const [allCoaches, setAllCoaches] = useState([]);
  const [allNutritionists, setAllNutritionists] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // 從 Firestore 取回所有教練與營養師資料，之後再依收藏清單過濾
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const [coachSnap, nutritionistSnap] = await Promise.all([
          getDocs(collection(db, "coaches")),
          getDocs(collection(db, "nutritionists")),
        ]);
        setAllCoaches(
          coachSnap.docs.map((docSnap) => ({
            id: docSnap.id,
            type: "coach",
            ...docSnap.data(),
          }))
        );
        setAllNutritionists(
          nutritionistSnap.docs.map((docSnap) => ({
            id: docSnap.id,
            type: "nutritionist",
            ...docSnap.data(),
          }))
        );
      } catch (err) {
        console.error("讀取收藏資料失敗：", err);
        setLoadError("資料載入失敗，請稍後再試");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 讀取 localStorage 收藏清單，並監聽收藏變化（例如在本頁按愛心移除收藏）
  useEffect(() => {
    setFavorites(getFavorites());
    const handleFavoritesChanged = () => setFavorites(getFavorites());
    window.addEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChanged);
    return () =>
      window.removeEventListener(
        FAVORITES_CHANGED_EVENT,
        handleFavoritesChanged
      );
  }, []);

  const isFavorited = (type, id) =>
    favorites.some((f) => f.type === type && f.id === id);

  const favoriteCoaches = allCoaches.filter((coach) =>
    isFavorited("coach", coach.id)
  );
  const favoriteNutritionists = allNutritionists.filter((nutritionist) =>
    isFavorited("nutritionist", nutritionist.id)
  );
  const favoriteCards = [...favoriteCoaches, ...favoriteNutritionists];

  const coachCount = favoriteCoaches.length;
  const nutritionistCount = favoriteNutritionists.length;

  const cardsToShow =
    activeTab === "CoachFavoriteCards"
      ? favoriteCoaches
      : activeTab === "NutriIntroFavoriteCards"
      ? favoriteNutritionists
      : favoriteCards;

  return (
    <>
      <div id="coachMain">
        <MainTitle title1="我的收藏" title2="別錯過他們的精彩課程" />

        <div className="favoriteBt">
          <div className="favoriteBt1">
            <button
              className={
                activeTab === "allFavoriteCards"
                  ? "favoriteActive"
                  : "favoriteNoActive"
              }
              onClick={() => setActiveTab("allFavoriteCards")}
            >
              全部
            </button>
            <button
              className={
                activeTab === "CoachFavoriteCards"
                  ? "favoriteActive"
                  : "favoriteNoActive"
              }
              onClick={() => setActiveTab("CoachFavoriteCards")}
            >
              健身教練
            </button>
            <button
              className={
                activeTab === "NutriIntroFavoriteCards"
                  ? "favoriteActive"
                  : "favoriteNoActive"
              }
              onClick={() => setActiveTab("NutriIntroFavoriteCards")}
            >
              營養師
            </button>
          </div>
          <div className="favorite-count">
            <div>
              <span className="c-count">{coachCount}</span> 位教練
            </div>
            <div>
              <span className="n-count">{nutritionistCount}</span> 位營養師
            </div>
          </div>
        </div>

        <div className="allCoachCards">
          {loading ? (
            <div className="noResult">收藏資料載入中...</div>
          ) : loadError ? (
            <div className="noResult">{loadError}</div>
          ) : cardsToShow.length === 0 ? (
            <div className="noResult">
              還沒有收藏的{activeTab === "NutriIntroFavoriteCards" ? "營養師" : activeTab === "CoachFavoriteCards" ? "教練" : "項目"}，去逛逛按下愛心收藏吧！
            </div>
          ) : (
            <div className="coachNineCards">
              {cardsToShow.map((card) => (
                <CoachCard
                  key={`${card.type}-${card.id}`}
                  id={card.id}
                  type={card.type}
                  name={card.name}
                  role={card.role}
                  hashtags={card.hashtags}
                  description={card.description}
                  imageSrc={card.imageSrc}
                  link={card.type === "coach" ? "/coachintro" : "/NutriIntro"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default MyFavorite;
