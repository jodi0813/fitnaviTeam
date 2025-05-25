// JoinusCarousel.jsx
import "./JoinusCarousel.scss";
import JoinusStep1 from "../JoinusStep1";
import JoinusStep2 from "../JoinusStep2";
import JoinusStep3 from "../JoinusStep3";
import JoinusStep4 from "../JoinusStep4";
import MainTitle from "../../../components/Title/MainTitle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinusCarousel() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState("forward");
    const [submitCount, setSubmitCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (submitCount === 2) {
            navigate("/JoinusLoading");
        }
    }, [submitCount, navigate]);

    const handleNext = () => {
        if (step < 3) {
            setDirection("forward");
            setStep((s) => s + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setDirection("backward");
            setStep((s) => s - 1);
        }
    };

    const handleSubmit = () => {
        setSubmitCount((prev) => {
            if (prev === 0) return 1;
            if (prev === 1) return 2;
            return prev;
        });
    };

    const steps = [
        () => <JoinusStep1 onNext={handleNext} />,
        () => <JoinusStep2 onNext={handleNext} onPre={handlePrev} />,
        () => <JoinusStep3 onNext={handleNext} onPre={handlePrev} />,
        () => <JoinusStep4 onPre={handlePrev} onSubmit={handleSubmit} />
    ];

    // 顯示四張卡片動畫效果
    if (submitCount === 1) {
        const cardList = [
            () => <JoinusStep1 key="1" />,
            () => <JoinusStep2 key="2" />,
            () => <JoinusStep3 key="3" />,
            () => <JoinusStep4 key="4" onPre={handlePrev} onSubmit={handleSubmit} />
        ];

        return (
            <section id="JoinusStep4-Cards">
                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
                <div className="JoinusStep4-container">
                    <div className="Joinuscard-row">
                        {cardList.map((Card, i) => (
                            <div className="card animate" key={`card-${i}-${submitCount}`}>
                                <Card />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // 預設輪播顯示
    return (
        <div className={`carousel-wrapper ${direction}`}>
            <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
            <div className="card-area">
                {steps.map((Step, idx) => {
                    let className = "card";
                    if (idx === step) className += " card-center";
                    else if (idx === step - 1) className += " card-left";
                    else if (idx === step + 1) className += " card-right";
                    else className += " card-hidden";
                    return (
                        <div className={className} key={idx}>
                            <Step />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
