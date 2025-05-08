import React from "react";
import styles from "./CommentCard.module.scss";

function CommentCard({ rate, content, commentperson, commentdate, color }) {
    function renderStars() {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starColor = i < rate ? "#FF8740" : "#989794";
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={starColor}>
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 20.202 4.665 24 6 15.601 0 9.748l8.332-1.73z" />
                </svg>
            );
        }
        return stars;
    }

    const cardStyle = {
        backgroundColor: color, // 動態設定背景顏色
    };

    return (
        <div className={styles.commentCard} style={cardStyle}>
            <div className={styles.starRate}>
                <div>{renderStars()}</div>
                <p className={styles.rate}>{rate}</p>
            </div>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <div className={styles.persondate}>
                <p className={styles.commentperson}>{commentperson}</p>
                <p className={styles.commentdate}>{commentdate}</p>
            </div>
        </div>
    );
}

export default CommentCard;