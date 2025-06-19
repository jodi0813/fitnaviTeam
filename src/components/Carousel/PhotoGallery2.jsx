import React, { useState, useEffect } from "react";

const images = [
  "./images/Nutri-selfie.jpg",
  "./images/Nutri-carousel-01.jpg",
  "./images/Nutri-carousel-02.jpg",
  "./images/Nutri-carousel-03.jpg",
  "./images/Nutri-carousel-04.jpg"
];

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const [showFirstSet, setShowFirstSet] = useState(true);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // 監聽視窗寬度 769 ~ 1024px
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");

    const handler = (e) => {
      setIsSmallScreen(e.matches);
    };

    handler(mediaQuery); // 初始化判斷
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  const len = images.length;

  // 根據是否小螢幕設定寬高與間距
  const GALLERY_WIDTH = isSmallScreen ? 260 : 480;
  const GAP = isSmallScreen ? 12 : 15;
  const THUMB_WIDTH = isSmallScreen ? 78 : (GALLERY_WIDTH - GAP * 2) / 3; // 小圖寬度
  const THUMB_HEIGHT = isSmallScreen ? 84 : 130; // 小圖高度
  const MAIN_IMG_HEIGHT = isSmallScreen ? 308 : 640; // 主圖高度 (40rem約640px)

  const getThumbIndices = (idx) => [
    (idx + 1) % len,
    (idx + 2) % len,
    (idx + 3) % len,
  ];

  const firstSetIndices =
    animating && !showFirstSet
      ? getThumbIndices(nextIndex ?? activeIndex)
      : getThumbIndices(activeIndex);

  const secondSetIndices =
    animating && showFirstSet
      ? getThumbIndices(nextIndex ?? activeIndex)
      : getThumbIndices(activeIndex);

  const handleClick = (index) => {
    if (animating || index === activeIndex) return;
    setNextIndex(index);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
      setNextIndex(null);
      setShowFirstSet((prev) => !prev);
    }, 600);
  };

  const getThumbStyle = (pos, animatingSet) => {
    const baseLeft = pos * (THUMB_WIDTH + GAP);
    const isAnimating = animating && showFirstSet === animatingSet;
    return {
      position: "absolute",
      top: 0,
      left: baseLeft,
      width: THUMB_WIDTH,
      height: THUMB_HEIGHT,
      borderRadius: 10,
      objectFit: "cover",
      boxShadow: "0 0 5px rgba(0,0,0,0.3)",
      cursor: "pointer",
      userSelect: "none",
      transition: "transform 600ms ease, opacity 600ms ease",
      opacity: isAnimating && pos === 0 ? 0 : 1,
      transform:
        isAnimating && pos > 0
          ? `translateX(-${THUMB_WIDTH + GAP}px)`
          : "translateX(0)",
      border:  "none",
      zIndex: pos === 1 ? 2 : 1,
    };
  };

  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      {/* ✅ 全局移除 img focus 的藍框 */}
      <style>
        {`
          img:focus {
            outline: none !important;
          }
        `}
      </style>

      {/* 主圖 */}
      <img
        src={images[animating ? activeIndex : nextIndex ?? activeIndex]}
        alt="main"
        style={{
          width: GALLERY_WIDTH,
          height: MAIN_IMG_HEIGHT,
          objectFit: "cover",
          borderRadius: 20,
          marginBottom: 20,
          userSelect: "none",
        }}
        draggable={false}
        tabIndex={-1} // ✅ 防止聚焦藍框
      />

      {/* 縮圖列 */}
      <div
        style={{
          position: "relative",
          width: GALLERY_WIDTH,
          height: THUMB_HEIGHT,
          userSelect: "none",
        }}
      >
        {showFirstSet &&
          firstSetIndices.map((idx, pos) => (
            <img
              key={"f" + pos}
              src={images[idx]}
              alt={`thumb${pos}`}
              style={getThumbStyle(pos, true)}
              draggable={false}
              tabIndex={-1} // ✅ 防止聚焦藍框
            />
          ))}

        {!showFirstSet &&
          secondSetIndices.map((idx, pos) => (
            <img
              key={"s" + pos}
              src={images[idx]}
              alt={`thumb${pos}`}
              style={getThumbStyle(pos, false)}
              draggable={false}
              tabIndex={-1} // ✅ 防止聚焦藍框
            />
          ))}
      </div>

      {/* 圓點按鈕 */}
      <div
        style={{
          marginTop: 20,
          width: GALLERY_WIDTH,
          margin: "20px auto 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {images.map((_, i) => {
          const svg =
            i === activeIndex
              ? `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="5" fill="#f97316"/>
                </svg>`
              : `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="5" fill="#989794"/>
                </svg>`;

          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={animating}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                padding: 0,
                width: 10,
                height: 10,
                cursor: animating ? "not-allowed" : "pointer",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              dangerouslySetInnerHTML={{ __html: svg }}
              aria-label={`切換到第${i + 1}張圖`}
            />
          );
        })}
      </div>
    </div>
  );
}
