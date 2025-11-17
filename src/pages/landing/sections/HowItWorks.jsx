import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import supermarket1 from '../../../assets/images/supermarket1.png';
import supermarket2 from '../../../assets/images/supermarket2.png';
import supermarket3 from '../../../assets/images/supermarket3.png';
import supermarket4 from '../../../assets/images/fridge.png';
import vegetablessections from '../../../assets/images/vegetablessections.png';

export default function HowItWorks() {
    const { ref, isVisible } = useScrollAnimation()
    const { t, i18n } = useTranslation()
    const isRTL = i18n.language === 'ar'

    const steps = [
        {
            number: "01",
            key: "step1",
            image: supermarket1,
        },
        {
            number: "02",
            key: "step2",
            image: vegetablessections,
        },
        {
            number: "03",
            key: "step3",
            image: supermarket2,
        },
        {
            number: "04",
            key: "step4",
            image: supermarket4,
        },
    ]

    return (
        <>
            <style>{`
                @keyframes stepTitleBounce {
                    0% {
                        opacity: 0;
                        transform: translateY(-30px) scale(0.8);
                        filter: blur(8px);
                    }
                    50% {
                        transform: translateY(5px) scale(1.05);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0);
                    }
                }

                @keyframes stepCardReveal {
                    0% {
                        opacity: 0;
                        transform: translateY(60px) rotateX(-30deg) scale(0.7);
                        filter: blur(10px);
                    }
                    50% {
                        transform: translateY(-10px) rotateX(5deg) scale(1.05);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) rotateX(0deg) scale(1);
                        filter: blur(0);
                    }
                }

                @keyframes stepImageZoom {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) rotate(-10deg);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) rotate(0deg);
                    }
                }

                .step-title-animate {
                    animation: stepTitleBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .step-card-animate {
                    animation: stepCardReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .step-image-animate {
                    animation: stepImageZoom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
            `}</style>
            <section ref={ref} className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                {/* Yellow accent */}
                <div className="absolute right-0 top-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2"></div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
                    <div className={`text-center mb-12 ${isVisible ? 'step-title-animate' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {t("howItWorks.title")}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("howItWorks.subtitle")}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`${isVisible ? 'step-card-animate' : 'opacity-0'}`}
                                style={{ animationDelay: isVisible ? `${0.3 + index * 0.15}s` : "0ms" }}
                            >
                            <div className="flex flex-col h-full">
                                <div className="relative mb-6">
                                    <div className="text-6xl font-bold text-black/10" dir="ltr">{step.number}</div>
                                    <div className="absolute inset-0 flex items-end">
                                        <h3 className="text-xl font-bold text-gray-900">{t(`howItWorks.${step.key}.title`)}</h3>
                                    </div>
                                </div>

                                <div className={`mb-6 rounded-xl overflow-hidden border border-gray-200/50 bg-gradient-to-br from-gray-100 to-gray-50 h-48 ${isVisible ? 'step-image-animate' : 'opacity-0'}`}
                                    style={{ animationDelay: isVisible ? `${0.5 + index * 0.15}s` : "0ms" }}>
                                    <img src={step.image} alt={t(`howItWorks.${step.key}.title`)} className="w-full h-full object-cover" />
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t(`howItWorks.${step.key}.description`)}</p>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex justify-end mt-8">
                                        <svg className={`w-6 h-6 text-secondary/40 ${isRTL ? 'scale-x-[-1]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

