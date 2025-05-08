import React from "react";
import styles from "./CommentCard.module.scss";

function CommentCard({ rate, content, commentperson, commentdate}) {
    function renderStars() {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const color = i < rate ? "#FF8740" : "#E0E0E0";
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none">
                    <path
                        d="M28.0979 1.8541C28.6966 0.0114746 31.3034 0.0114799 31.9021 1.8541L..."
                        fill={color}
                    />
                </svg>
            );
        }

    }

    return (
        <div className={`${styles.card} }`}>
            <div className={styles.starRate}>
                <div>{renderStars()}</div>
                <p className={styles.rate}>{rate}</p>
            </div>

            <div className={styles.content}>
                <p>{content}</p>
            </div>

            <div className={styles.persondate}>
                <p>{commentperson}</p>
                <p>{commentdate}</p>
            </div>
        </div>
    );
}

export default CommentCard;
