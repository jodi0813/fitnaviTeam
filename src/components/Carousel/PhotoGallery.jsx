import React, { useState, useEffect } from "react";

const images = [
  "./images/coach.jpg",
  "./images/coach-carousel-01.jpg",
  "./images/coach-carousel-02.jpg",
  "./images/coach-carousel-03.jpg",
  "./images/coach-carousel-04.jpg",
];

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // 取得三張縮圖，根據 activeIndex 循環取圖
  const getThumbnails = () => {
    return [1, 2, 3].map((offset) => (activeIndex + offset) % images.length);
  };

  // 觸發切換動畫
  const handleNext = (index) => {
    if (animating) return; // 防止動畫中重複點擊

    setAnimating(true);

    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 500); // 動畫持續時間，必須跟 CSS transition 時間一致
  };

  const thumbnails = getThumbnails();

  return (
    <div style={styles.container}>
      {/* 主圖 */}
      <div style={styles.mainImageWrapper}>
        <img
          src={images[activeIndex]}
          alt="main"
          style={styles.mainImage}
        />
      </div>

      {/* 縮圖列 */}
      <div style={styles.thumbnailWrapper}>
        {thumbnails.map((imgIndex, i) => {
          let style = { ...styles.thumbnail };

          // 動畫狀態
          if (animating) {
            if (i === 0) {
              // 左邊圖淡出
              style = {
                ...style,
                opacity: 0,
                transition: "opacity 0.5s ease",
                position: "relative",
                zIndex: 1,
              };
            }
            if (i === 1) {
              // 中間圖向左移動
              style = {
                ...style,
                transform: "translateX(-120%)",
                transition: "transform 0.5s ease",
                position: "relative",
                zIndex: 2,
              };
            }
            if (i === 2) {
              // 右邊圖保持不動或可做淡入
              style = {
                ...style,
                opacity: 1,
                transition: "opacity 0.5s ease",
                position: "relative",
                zIndex: 0,
              };
            }
          } else {
            // 正常狀態回復
            style = {
              ...style,
              opacity: 1,
              transform: "translateX(0)",
              transition: "none",
              position: "relative",
              zIndex: 0,
              border:
                imgIndex === activeIndex
                  ? "2px solid #007bff"
                  : "2px solid transparent",
            };
          }

          return (
            <img
              key={imgIndex}
              src={images[imgIndex]}
              alt={`thumb-${imgIndex}`}
              onClick={() => handleNext(imgIndex)}
              style={style}
            />
          );
        })}
      </div>

      {/* 底下小圓點按鈕 */}
      <div style={styles.turnButton}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => !animating && setActiveIndex(index)}
            style={styles.dotButton}
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
                fill={activeIndex === index ? "#007bff" : "#989794"}
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  mainImageWrapper: {
    marginBottom: "20px",
  },
  mainImage: {
    width: "35rem",
    height: "40rem",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
  },
  thumbnailWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    overflow: "hidden",
    width: "36rem",
  },
  thumbnail: {
    width: "10rem",
    height: "10rem",
    objectFit: "cover",
    borderRadius: "20px",
    cursor: "pointer",
  },
  turnButton: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
  dotButton: {
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    borderRadius: "50%",
    background: "transparent",
  },
};

export default PhotoGallery;
