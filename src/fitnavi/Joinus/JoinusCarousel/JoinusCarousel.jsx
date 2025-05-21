import "./JoinusCarousel.scss";
import JoinusStep1 from "../JoinusStep1";
import JoinusStep2 from "../JoinusStep2";
import JoinusStep3 from "../JoinusStep3";
import JoinusStep4 from "../JoinusStep4";
import MainTitle from "../../../components/Title/MainTitle";
import { useState } from "react";

export default function JoinusCarousel() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState("forward"); // 新增方向

    // 事件處理
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

    // 步驟卡片（每張都傳入 onNext / onPre）
    const steps = [
        <JoinusStep1 onNext={handleNext} />,
        <JoinusStep2 onNext={handleNext} onPre={handlePrev} />,
        <JoinusStep3 onNext={handleNext} onPre={handlePrev} />,
        <JoinusStep4 onPre={handlePrev} />,
    ];

    return (
        <div className={`carousel-wrapper ${direction}`}>
            <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />

            <div className="card-area">
                {steps.map((card, idx) => {
                    let className = "card";
                    if (idx === step) className += " card-center";
                    else if (idx === step - 1) className += " card-left";
                    else if (idx === step + 1) className += " card-right";
                    else className += " card-hidden";

                    return (
                        <div className={className} key={idx}>
                            {card}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
