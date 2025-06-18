
import React, { useState, useEffect, useRef } from "react";

const images = [
  "./images/coach.jpg",
  "./images/coach-carousel-01.jpg",
  "./images/coach-carousel-02.jpg",
  "./images/coach-carousel-03.jpg",
  "./images/coach-carousel-04.jpg"
];

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [screenType, setScreenType] = useState("large");
  
  // 手機版滑動相關狀態
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScreenType("small");
      } else if (width <= 1024) {
        setScreenType("medium");
      } else {
        setScreenType("large");
      }
    };

    updateScreenType();
    window.addEventListener("resize", updateScreenType);
    return () => window.removeEventListener("resize", updateScreenType);
  }, []);

  const len = images.length;

  // 根據螢幕類型設定尺寸
  const GALLERY_WIDTH =
    screenType === "small"
      ? 260
      : screenType === "medium"
      ? 260
      : 480;
  const GAP = screenType === "small" ? 12 : screenType === "medium" ? 12 : 15;
  const THUMB_WIDTH =
    screenType === "small" || screenType === "medium"
      ? 78
      : (GALLERY_WIDTH - GAP * 2) / 3;
  const THUMB_HEIGHT =
    screenType === "small" || screenType === "medium" ? 84 : 130;
  const MAIN_IMG_HEIGHT =
    screenType === "small" || screenType === "medium" ? 308 : 640;

  // 手機版圖片參數
  const MOBILE_IMG_WIDTH = 156;
  const MOBILE_IMG_HEIGHT = 191;
  const MOBILE_GAP = 16;
  const CONTAINER_WIDTH = window.innerWidth;
  const VISIBLE_WIDTH = MOBILE_IMG_WIDTH * 2.5 + MOBILE_GAP * 2; // 顯示2.5張圖片的寬度
  const LEFT_PADDING = 20; // 左邊距

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

  // 手機版滑動處理
  const handleTouchStart = (e) => {
    if (screenType !== "small") return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartOffset(currentOffset);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || screenType !== "small") return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const newOffset = startOffset + deltaX;
    
    // 無限滑動，不限制範圍
    setCurrentOffset(newOffset);
  };

  const handleTouchEnd = () => {
    if (!isDragging || screenType !== "small") return;
    setIsDragging(false);
    
    // 無限滑動，不需要限制範圍，但可以對齊到最近圖片
    const snapPosition = Math.round(currentOffset / (MOBILE_IMG_WIDTH + MOBILE_GAP)) * (MOBILE_IMG_WIDTH + MOBILE_GAP);
    setCurrentOffset(snapPosition);
  };

  const handleMouseStart = (e) => {
    if (screenType !== "small") return;
    setIsDragging(true);
    setStartX(e.clientX);
    setStartOffset(currentOffset);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || screenType !== "small") return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    const newOffset = startOffset + deltaX;
    
    // 無限滑動，不限制範圍
    setCurrentOffset(newOffset);
  };

  const handleMouseEnd = () => {
    if (!isDragging || screenType !== "small") return;
    setIsDragging(false);
    
    // 無限滑動，不需要限制範圍，但可以對齊到最近圖片
    const snapPosition = Math.round(currentOffset / (MOBILE_IMG_WIDTH + MOBILE_GAP)) * (MOBILE_IMG_WIDTH + MOBILE_GAP);
    setCurrentOffset(snapPosition);
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
      border: "none",
      zIndex: pos === 1 ? 2 : 1,
    };
  };

  // 手機版渲染
  if (screenType === "small") {
    return (
      <div style={{ 
        padding: "20px 0", 
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box"
      }}>
        <style>
          {`
            img:focus {
              outline: none !important;
            }
            .mobile-gallery {
              cursor: ${isDragging ? 'grabbing' : 'grab'};
            }
          `}
        </style>

        <div 
          className="mobile-gallery"
          style={{
            width: `${VISIBLE_WIDTH + LEFT_PADDING}px`,
            height: MOBILE_IMG_HEIGHT,
            overflow: "hidden",
            position: "relative",
            margin: "0 auto"
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseStart}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseEnd}
          onMouseLeave={handleMouseEnd}
          ref={containerRef}
        >
          <div
            style={{
              display: "flex",
              gap: MOBILE_GAP,
              transform: `translateX(${currentOffset}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease",
              paddingLeft: LEFT_PADDING,
            }}
          >
            {/* 創建重複的圖片序列以實現無限滑動 */}
            {[...images, ...images, ...images].map((img, index) => (
              <img
                key={`infinite-${index}`}
                src={img}
                alt={`gallery-${index % images.length}`}
                style={{
                  width: MOBILE_IMG_WIDTH,
                  height: MOBILE_IMG_HEIGHT,
                  borderRadius: 4,
                  objectFit: "cover",
                  userSelect: "none",
                  pointerEvents: "none",
                  flexShrink: 0,
                }}
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* 手機版不顯示圓點指示器 */}
      </div>
    );
  }

  // 桌面版渲染（原有邏輯）
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
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
        tabIndex={-1}
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
              tabIndex={-1}
              onClick={() => handleClick(idx)}
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
              tabIndex={-1}
              onClick={() => handleClick(idx)}
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