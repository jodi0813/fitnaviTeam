import React, { useState } from "react";

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

  const len = images.length;

  const GALLERY_WIDTH = 480;
  const GAP = 15;
  const THUMB_WIDTH = (GALLERY_WIDTH - GAP * 2) / 3; // 150px

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
      height: 100,
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
      border: pos === 1 ? "2px solid #007bff" : "none",
      zIndex: pos === 1 ? 2 : 1,
    };
  };

  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      {/* 主圖 */}
      <img
        src={images[animating ? activeIndex : nextIndex ?? activeIndex]}
        alt="main"
        style={{
          width: GALLERY_WIDTH,
          height: "40rem",
          objectFit: "cover",
          borderRadius: 20,
          marginBottom: 20,
          userSelect: "none",
        }}
        draggable={false}
      />

      {/* 縮圖列 */}
      <div
        style={{
          position: "relative",
          width: GALLERY_WIDTH,
          height: 100,
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
            />
          ))}
      </div>

      {/* SVG 圓點按鈕（皆為灰色） */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {images.map((_, i) => {
          const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="5" fill="#989794"/>
            </svg>
          `;

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
