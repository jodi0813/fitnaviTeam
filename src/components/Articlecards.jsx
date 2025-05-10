import React from "react";
import styles from "./Articlecards.module.css";
import { useNavigate } from "react-router-dom";

function Articlecards({ date, img, title, content, tags, category, className }) {
    const navigate = useNavigate();
    return (
        <>
            {/* <Link to="/article" className={`article-card ${className}`}> */}
            <div className={`${styles.card}  ${className}`} onClick={() => {
                navigate("/Article");
                window.scrollTo(0, 0); // 捲動到頁面頂部
            }}
                style={{ cursor: "pointer" }}>
                <p className={styles.data}>{date}</p>
                <div className={styles.Articleimgbox}>
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
            {/* </Link> */}
        </>
    )
}
export default Articlecards;