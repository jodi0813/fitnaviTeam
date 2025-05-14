import React, { useState } from "react";

const images = [
  "./images/01.jpg",
  "./images/02.jpg",
  "./images/03.jpg",
  "./images/04.jpg",
  "./images/05.jpg",
];

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 取出 activeIndex 開始的 3 張小圖，確保不超過陣列長度
  const getThumbnails = () => {
    if (activeIndex <= 1) return images.slice(0, 3);
    if (activeIndex >= images.length - 1) return images.slice(-3);
    return images.slice(activeIndex - 1, activeIndex + 2);
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainImageWrapper}>
        <img
          src={images[activeIndex]}
          alt="main"
          style={styles.mainImage}
        />
      </div>

      <div style={styles.thumbnailWrapper}>
        {getThumbnails().map((img, index) => {
          const actualIndex = images.indexOf(img);
          return (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              onClick={() => setActiveIndex(actualIndex)}
              style={{
                ...styles.thumbnail,
                border: actualIndex === activeIndex ? "2px solid #007bff" : "2px solid transparent",
              }}
            />
          );
        })}
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
    width: "400px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
  },
  thumbnailWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  thumbnail: {
    width: "100px",
    height: "75px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "border 0.3s",
  },
};

export default PhotoGallery;
