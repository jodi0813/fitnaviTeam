import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Articlecards.module.css";

function Articlecards({ date, img, title, content, tags, category, className }) {
    return (
        <>
            {/* <Link to={`/allarticle/${id}`} className={`article-card ${className}`}></Link> */}
            <div className={`${styles.card}  ${className}`}>
                <p className={styles.data}>{date}</p>
                <div className={styles.imgbox}>
                    <img src={img} alt="" /></div>
                <div className={styles.contentBox}>
                    {/* 因為帶有html標籤所以要輸入dangerouslySetInnerHtml */}
                    <h4 dangerouslySetInnerHTML={{ __html: title }} />
                    <p>{content}</p>
                    <div className={styles.tag} >
                        {tags.map((tag, index) => {
                            const tagText = `#${tag}`;  // 先將 tag 字串加上 `#` 符號
                            return <p key={index} className={styles.tagText}>{tagText}</p>;// 返回包含 tagText 的 <p> 標籤
                        })}
                    </div>
                </div>
                <div className={styles.tagBox}>{category}</div>
            </div>
        </>
    )
}
export default Articlecards;