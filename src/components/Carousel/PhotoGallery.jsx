import React, { useState } from "react";

const images = [
  "./images/coach.jpg",
  "./images/coach-carousel-01.jpg",
  "./images/coach-carousel-02.jpg",
  "./images/coach-carousel-03.jpg",
  "./images/coach-carousel-04.jpg",
];

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
                border:
                  actualIndex === activeIndex
                    ? "2px solid #007bff"
                    : "2px solid transparent",
              }}
            />
          );
        })}
      </div>

      <div style={styles.turnButton}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              ...styles.dotButton,
              // backgroundColor: activeIndex === index ? "#007bff" : "transparent",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="5" fill="#989794" />
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
  turnButton: {
    marginBottom: "20px",
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
    transition: "background-color 0.3s",
  },
  thumbnailWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "2rem",
  },
  thumbnail: {
    width: "10rem",
    height: "10rem",
    borderRadius: "20px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "20px",
    transition: "border 0.3s",
  },
};

export default PhotoGallery;
