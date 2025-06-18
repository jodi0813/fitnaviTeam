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
  const [screenType, setScreenType] = useState("large");

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;
      if (width >= 393 && width <= 768) {
        setScreenType("mobile");
      } else if (width >= 769 && width <= 1024) {
        setScreenType("tablet");
      } else {
        setScreenType("large");
      }
    };
    updateScreenType();
    window.addEventListener("resize", updateScreenType);
    return () => window.removeEventListener("resize", updateScreenType);
  }, []);

  const len = images.length;
  const THUMB_WIDTH = 156;
  const THUMB_HEIGHT = 191;
  const GAP = 8;
  const MOBILE_GALLERY_WIDTH = THUMB_WIDTH * 2.5 + GAP * 1.5;

  const getThumbIndices = (startIdx) => {
    const indices = [];
    for (let i = 0; i < 4; i++) {
      indices.push((startIdx + i) % len);
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

  const onTouchStart = (e) => {
    if (screenType !== "mobile") return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (screenType !== "mobile") return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (screenType !== "mobile" || touchStart === null || touchEnd === null)
      return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      const nextIdx = (activeIndex + 1) % len;
      handleClick(nextIdx);
    } else if (distance < -50) {
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

  return (
    <div style={{ textAlign: "center", padding: "0 40px", boxSizing: "border-box" }}>
      {screenType !== "mobile" && (
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            width: 480,
            height: 640,
            margin: "0 auto 20px",
            position: "relative",
          }}
        >
          <img
            src={images[animating ? activeIndex : nextIndex ?? activeIndex]}
            alt="main"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              userSelect: "none",
              display: "block",
            }}
            draggable={false}
            tabIndex={-1}
          />
        </div>
      )}

      <div
        ref={screenType === "mobile" ? containerRef : null}
        onTouchStart={screenType === "mobile" ? onTouchStart : undefined}
        onTouchMove={screenType === "mobile" ? onTouchMove : undefined}
        onTouchEnd={screenType === "mobile" ? onTouchEnd : undefined}
        style={{
          position: "relative",
          width: screenType === "mobile" ? MOBILE_GALLERY_WIDTH : 480,
          height: THUMB_HEIGHT,
          userSelect: "none",
          margin: "0 auto",
          cursor: screenType === "mobile" ? "grab" : "default",
          overflow: "hidden",
        }}
      >
        {screenType === "mobile" && (
          <div
            style={{
              position: "absolute",
              top: -20,
              right: 0,
              background: "rgba(0,0,0,0.5)",
              color: "white",
              padding: "2px 6px",
              borderRadius: 4,
              fontSize: 10,
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            左右滑動
          </div>
        )}

        {showFirstSet &&
          firstSetIndices.map((idx, pos) => (
            <img
              key={"f" + pos}
              src={images[idx]}
              alt={`thumb${pos}`}
              style={getThumbStyle(pos, true)}
              draggable={false}
              tabIndex={-1}
              onClick={screenType === "mobile" ? undefined : () => handleClick(idx)}
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
              onClick={screenType === "mobile" ? undefined : () => handleClick(idx)}
            />
          ))}
      </div>

      {screenType !== "mobile" && (
        <div
          style={{
            marginTop: 20,
            width: 480,
            margin: "20px auto 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          {images.map((_, i) => (
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={`切換到第${i + 1}張圖`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="5"
                  fill={i === activeIndex ? "#FF8740" : "#989794"}
                />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
