import React from 'react';
import "./JoinusLoading.scss";
// import MainTitle from "../../components/Title/MainTitle";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import memberImg from '../../../public/images/coach&nutri-393.png';

function JoinusLoading() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/JoinusSuccess');
        }, 3000); // 10秒

        return () => clearTimeout(timer); // 清理 timer 避免記憶體洩漏
    }, [navigate]);


    return (
        <>
            <section id='Joinus-Loading'>
                {/* <MainTitle title1="加入我們" title2="成為我們的合作夥伴" /> */}


                <div className="Loading">
                    <div
                        className="background"
                        style={{
                            backgroundImage: `url(${memberImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: 0.6,
                        }}
                    ></div>

                    <div className="host">
                        <p>送出表單中</p>
                        <div className="loading loading-0"></div>
                        <div className="loading loading-1"></div>
                        <div className="loading loading-2"></div>
                    </div>
                </div>


            </section>
        </>

    )
}

export default JoinusLoading