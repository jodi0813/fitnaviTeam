
import React, { useState, useEffect, useRef } from "react";

const images = [
  "./images/coach.jpg",
  "./images/coach-carousel-01.jpg",
  "./images/coach-carousel-02.jpg",
  "./images/coach-carousel-03.jpg",
  "./images/coach-carousel-04.jpg",
];

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const [showFirstSet, setShowFirstSet] = useState(true);

  const [screenType, setScreenType] = useState('large'); // 'mobile', 'tablet', 'large'
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  // 監聽視窗寬度變化
  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;
      if (width >= 393 && width <= 768) {
        setScreenType('mobile');
      } else if (width >= 769 && width <= 1024) {
        setScreenType('tablet');
      } else {
        setScreenType('large');
      }
    };

    updateScreenType();
    window.addEventListener('resize', updateScreenType);

    return () => {
      window.removeEventListener('resize', updateScreenType);
    };
  }, []);

  const len = images.length;

  // 根據螢幕類型設定尺寸
  const getConfig = () => {
    switch (screenType) {
      case 'mobile':
        const mobileWidth = Math.min(window.innerWidth - 32, 350);
        const mobileThumbWidth = (mobileWidth - 3 * 8) / 4; // 4張圖，3個間距
        return {
          GALLERY_WIDTH: mobileWidth,
          GAP: 8,
          THUMB_WIDTH: mobileThumbWidth,
          THUMB_HEIGHT: mobileThumbWidth * 1.1, // 稍微高一點
          MAIN_IMG_HEIGHT: 0, // 手機版不顯示主圖
          SHOW_THUMBS: 4, // 顯示4張縮圖
        };
      case 'tablet':
        return {
          GALLERY_WIDTH: 260,
          GAP: 12,
          THUMB_WIDTH: 78,
          THUMB_HEIGHT: 84,
          MAIN_IMG_HEIGHT: 308,
          SHOW_THUMBS: 3,
        };
      default:
        return {
          GALLERY_WIDTH: 480,
          GAP: 15,
          THUMB_WIDTH: (480 - 15 * 2) / 3,
          THUMB_HEIGHT: 130,
          MAIN_IMG_HEIGHT: 640,
          SHOW_THUMBS: 3,
        };
    }
  };

  const config = getConfig();

  const getThumbIndices = (idx) => {
    const indices = [];
    if (screenType === 'mobile') {
      // 手機版顯示連續的4張圖
      for (let i = 0; i < config.SHOW_THUMBS; i++) {
        indices.push((idx + i) % len);
      }
    } else {
      // 桌面版和平板版顯示下幾張圖
      for (let i = 1; i <= config.SHOW_THUMBS; i++) {
        indices.push((idx + i) % len);
      }
    }
    return indices;
  };

  const firstSetIndices =
    animating && !showFirstSet
      ? getThumbIndices(nextIndex ?? activeIndex)
      : getThumbIndices(activeIndex);

  const secondSetIndices =
    animating && showFirstSet
      ? getThumbIndices(nextIndex ?? activeIndex)
      : getThumbIndices(activeIndex);

  // 觸摸事件處理
  const onTouchStart = (e) => {
    if (screenType !== 'mobile') return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (screenType !== 'mobile') return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (screenType !== 'mobile' || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // 向左滑動，下一張
      const nextIdx = (activeIndex + 1) % len;
      handleClick(nextIdx);
    }
    if (isRightSwipe) {
      // 向右滑動，上一張
      const prevIdx = (activeIndex - 1 + len) % len;
      handleClick(prevIdx);
    }
  };

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
    const baseLeft = pos * (config.THUMB_WIDTH + config.GAP);
    const isAnimating = animating && showFirstSet === animatingSet;
    
    return {
      position: "absolute",
      top: 0,
      left: baseLeft,
      width: config.THUMB_WIDTH,
      height: config.THUMB_HEIGHT,
      borderRadius: screenType === 'mobile' ? 8 : 10,
      objectFit: "cover",
      boxShadow: "0 0 5px rgba(0,0,0,0.3)",
      cursor: screenType === 'mobile' ? 'default' : 'pointer',
      userSelect: "none",
      transition: "transform 600ms ease, opacity 600ms ease",
      opacity: isAnimating && pos === 0 ? 0 : 1,
      transform:
        isAnimating && pos > 0
          ? `translateX(-${config.THUMB_WIDTH + config.GAP}px)`
          : "translateX(0)",
      border: "none",
      zIndex: pos === 1 ? 2 : 1,
    };
  };

  return (
    <div style={{ textAlign: "center", padding: screenType === 'mobile' ? 16 : 50 }}>
      <style>
        {`
          img:focus {
            outline: none !important;
          }
        `}
      </style>

      {/* 主圖 - 手機版不顯示 */}
      {screenType !== 'mobile' && (
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            width: config.GALLERY_WIDTH,
            height: config.MAIN_IMG_HEIGHT,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <img
            src={images[animating ? activeIndex : nextIndex ?? activeIndex]}
            alt="main"
            style={{
              width: '100%',
              height: '100%',
              objectFit: "cover",
              borderRadius: screenType === 'mobile' ? 12 : 20,
              userSelect: "none",
              display: 'block',
            }}
            draggable={false}
            tabIndex={-1}
          />
        </div>
      )}

      {/* 縮圖列 */}
      <div
        ref={screenType === 'mobile' ? containerRef : null}
        onTouchStart={screenType === 'mobile' ? onTouchStart : undefined}
        onTouchMove={screenType === 'mobile' ? onTouchMove : undefined}
        onTouchEnd={screenType === 'mobile' ? onTouchEnd : undefined}
        style={{
          position: "relative",
          width: config.GALLERY_WIDTH,
          height: config.THUMB_HEIGHT,
          userSelect: "none",
          margin: screenType === 'mobile' ? `0 auto` : `20px auto 0`,
          cursor: screenType === 'mobile' ? 'grab' : 'default',
          overflow: screenType === 'mobile' ? 'hidden' : 'visible',
        }}
      >
        {screenType === 'mobile' && (
          <div style={{
            position: 'absolute',
            top: -20,
            right: 0,
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: '2px 6px',
            borderRadius: 4,
            fontSize: 10,
            pointerEvents: 'none',
            zIndex: 10,
          }}>
            左右滑動
          </div>
        )}
        
        {showFirstSet &&
          firstSetIndices.map((idx, pos) => (
            <img
              key={"f" + pos}
              src={images[idx]}
              alt={`thumb${pos}`}
              style={{
                ...getThumbStyle(pos, true),
                border: screenType === 'mobile' && idx === activeIndex ? '2px solid #f97316' : 'none',
              }}
              draggable={false}
              tabIndex={-1}
              onClick={screenType === 'mobile' ? undefined : () => handleClick(idx)}
            />
          ))}

        {!showFirstSet &&
          secondSetIndices.map((idx, pos) => (
            <img
              key={"s" + pos}
              src={images[idx]}
              alt={`thumb${pos}`}
              style={{
                ...getThumbStyle(pos, false),
                border: screenType === 'mobile' && idx === activeIndex ? '2px solid #f97316' : 'none',
              }}
              draggable={false}
              tabIndex={-1}
              onClick={screenType === 'mobile' ? undefined : () => handleClick(idx)}
            />
          ))}
      </div>

      {/* 圓點按鈕 - 手機版隱藏 */}
      {screenType !== 'mobile' && (
        <div
          style={{
            marginTop: 20,
            width: config.GALLERY_WIDTH,
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
      )}

      {/* 手機版頁面指示器 */}
      {screenType === 'mobile' && (
        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            gap: 6,
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: i === activeIndex ? '#f97316' : '#d1d5db',
                transition: 'background-color 300ms ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}