import "./NutriJoinusCarousel.scss";
import JoinusStep1 from "../JoinusStep1";
import NutriJoinusStep2 from "../NutriJoinusStep2";
import NutriJoinusStep3 from "../NutriJoinusStep3";
import JoinusStep4 from "../JoinusStep4";
import MainTitle from "../../../components/Title/MainTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NutriJoinusCarousel() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState("forward");
    const [submitCount, setSubmitCount] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (step < 3) {
            setDirection("forward");
            setStep(s => s + 1);
        }
    };
    const handlePrev = () => {
        if (step > 0) {
            setDirection("backward");
            setStep(s => s - 1);
        }
    };

    const handleSubmit = () => {
        console.log("submitCount:", submitCount);
        if (submitCount === 0) {
            setSubmitCount(1);
        } else {
            navigate("/JoinusLoading");
        }
    };

    const steps = [
        () => <JoinusStep1 onNext={handleNext} />,
        () => <NutriJoinusStep2 onNext={handleNext} onPre={handlePrev} />,
        () => <NutriJoinusStep3 onNext={handleNext} onPre={handlePrev} />,
        () => <JoinusStep4 onPre={handlePrev} onSubmit={handleSubmit} />
    ];

    if (submitCount === 1) {
        const cardList = [
            () => <JoinusStep1 key="1" />,
            () => <NutriJoinusStep2 key="2" />,
            () => <NutriJoinusStep3 key="3" />,
            () => <JoinusStep4 key="4" onPre={handlePrev} onSubmit={handleSubmit} />
        ];
        return (
            <section id="NutriJoinusStep4-Cards">
                <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />
                <div className="JoinusStep4-container">
                    <div className="Joinuscard-row">
                        {cardList.map((Card, i) => (
                            <div className="card" key={i}>
                                <Card />
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 32 }}>
                        <button
                            type="button"
                            className="final-submit-btn"
                            onClick={handleSubmit}
                        >
                            送出申請 ▶
                        </button>
                    </div>
                </div>
            </section>
        );
    }

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