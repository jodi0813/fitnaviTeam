// 收藏功能共用工具：把收藏的教練 / 營養師存在瀏覽器 localStorage
// 每筆收藏格式為 { type: "coach" | "nutritionist", id: string }
const STORAGE_KEY = "favoriteCards";
export const FAVORITES_CHANGED_EVENT = "favoritesChanged";

function readFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("讀取收藏資料失敗：", err);
    return [];
  }
}

function writeFavorites(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(FAVORITES_CHANGED_EVENT));
}

// 取得目前所有收藏
export function getFavorites() {
  return readFavorites();
}

// 判斷某張卡片是否已收藏
export function isFavorite(type, id) {
  if (!type || !id) return false;
  return readFavorites().some((item) => item.type === type && item.id === id);
}

// 切換收藏狀態，回傳切換後是否為已收藏
export function toggleFavorite(type, id) {
  if (!type || !id) return false;
  const list = readFavorites();
  const exists = list.some((item) => item.type === type && item.id === id);
  const next = exists
    ? list.filter((item) => !(item.type === type && item.id === id))
    : [...list, { type, id }];
  writeFavorites(next);
  return !exists;
}
