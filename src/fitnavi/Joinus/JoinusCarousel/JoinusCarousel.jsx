import "./JoinusCarousel.scss";
import JoinusStep1 from "../JoinusStep1";
import JoinusStep2 from "../JoinusStep2";
import JoinusStep3 from "../JoinusStep3";
import JoinusStep4 from "../JoinusStep4";
import MainTitle from "../../../components/Title/MainTitle";
import { useState } from "react";

export default function JoinusCarousel() {
    const [step, setStep] = useState(0);

    // 步驟卡片資料陣列
    const steps = [
        <JoinusStep1 onNext={() => setStep(step + 1)} />,
        <JoinusStep2 onNext={() => setStep(step + 1)} onPre={() => setStep(step - 1)} />,
        <JoinusStep3 onNext={() => setStep(step + 1)} onPre={() => setStep(step - 1)} />,
        <JoinusStep4 onPre={() => setStep(step - 1)} />,
    ];

    return (
        <div className="carousel-wrapper">
            <MainTitle title1="加入我們" title2="成為我們的合作夥伴" />

            <div className="card-area">
                {steps.map((card, idx) => {
                    let className = "card";
                    //如果index=step，將scss card-center的類別家過去
                    if (idx === step) className += " card-center";
                    else if (idx === step - 1) className += " card-left";
                    else if (idx === step + 1) className += " card-right";
                    else className += " card-hidden"; // 其他未顯示的卡片給 hidden 狀態

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