import React from "react";
// import { Link } from "react-router-dom";

function Articlecards({ date, img, title, content, tags, category, className }) {
    return (
        <>
            {/* <Link to={`/allarticle/${id}`} className={`article-card ${className}`}></Link> */}
            <div className={className}>
                <p>{date}</p>
                <div className="img-box">
                    <img src={img} alt="" /></div>
                <div className="content-box">
                    {/* 因為帶有html標籤所以要輸入dangerouslySetInnerHtml */}
                    <h4 dangerouslySetInnerHTML={{ __html: title }} />
                    <p>{content}</p>
                    <div className="tag">
                        {tags.map((tag, index) => {
                            const tagText = `#${tag}`;  // 先將 tag 字串加上 `#` 符號
                            return <p key={index}>{tagText}</p>; // 返回包含 tagText 的 <p> 標籤
                        })}
                    </div>
                </div>
                <div className="tag-box">{category}</div>
            </div>
        </>
    )
}
export default Articlecards;