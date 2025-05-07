import React from 'react';
import "./JoinusLoading.scss";
import MainTitle from "../../components/Title/MainTitle";

function JoinusLoading() {
    return (
        <>
            <section className="JoinusLoading-header">
                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
            </section>

            <div className='Loading'> 
                <div className="host">
                    <p>送出表單中</p>
                    <div className="loading loading-0"></div>
                    <div className="loading loading-1"></div>
                    <div className="loading loading-2"></div>
                </div>
            </div>
        </>

    )
}

export default JoinusLoading