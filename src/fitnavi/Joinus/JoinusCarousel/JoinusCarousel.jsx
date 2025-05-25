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

    // 監聽 submitCount 的變化，當它達到 2 時執行跳轉
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
            // 第一次點擊，將 submitCount 設為 1 (觸發 JoinusRow 顯示)
            if (prev === 0) return 1;
            // 第二次點擊，將 submitCount 設為 2 (觸發跳轉)
            if (prev === 1) return 2;
            return prev; // 保持現有值，以防意外情況
        });
    };

    const steps = [
        () => <JoinusStep1 onNext={handleNext} />,
        () => <JoinusStep2 onNext={handleNext} onPre={handlePrev} />,
        () => <JoinusStep3 onNext={handleNext} onPre={handlePrev} />,
        () => <JoinusStep4 onPre={handlePrev} onSubmit={handleSubmit} />
    ];

    // 當 submitCount 為 1 時，顯示 JoinusRow 效果
    if (submitCount === 1) {
        const cardList = [
            // 注意：這裡直接渲染組件，如果這些組件需要特定的 props 才能正常運作，請確保在這裡提供
            // 例如，如果 JoinusStep1 內部有表單或互動，可能需要傳遞相關的 state 或 setState 函數
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
                            <div className="card" key={i}>
                                <Card />
                            </div>
                        ))}
                    </div>
                    {/* 這裡不再顯示額外的「送出申請」按鈕 */}
                </div>
            </section>
        );
    }

    // 預設的輪播步驟顯示
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