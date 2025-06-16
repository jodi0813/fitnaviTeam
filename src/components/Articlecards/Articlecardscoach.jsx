import React from "react";
import "../Articlecards/articlecardscoach.css";
import { useNavigate } from "react-router-dom";

function Articlecardscoach({ date, img, title, content, tags, category, className }) {
    const navigate = useNavigate();

    return (
        <div
            className={`card ${className}`}
            onClick={() => {
                navigate("/Article");
                window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer" }}
        >
            <div className="Articleimgbox">
                <img src={img} alt="" />
            </div>

            <p className="data">{date}</p>

            <div className="contentBox">
                <h4 dangerouslySetInnerHTML={{ __html: title }} />
                <p>{content}</p>
                <div className="tag">
                    {tags.map((tag, index) => (
                        <p key={index}>#{tag}</p>
                    ))}
                </div>
            </div>

            <div className="tagBox">{category}</div>
        </div>
    );
}

export default Articlecardscoach;
