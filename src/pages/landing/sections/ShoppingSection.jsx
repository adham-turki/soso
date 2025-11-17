import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Lottie from "lottie-react"
import shoppingCartAnimation from '../../../assets/shopping cart.json';

export default function ShoppingSection() {
  const { ref, isVisible } = useScrollAnimation()
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <>
      <style>{`
        @keyframes shoppingContentSlide {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotateY(-20deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
            filter: blur(0);
          }
        }

        @keyframes shoppingLottieFloat {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.5) rotateY(20deg);
            filter: blur(10px);
          }
          50% {
            transform: translateX(-10px) scale(1.05) rotateY(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
            filter: blur(0);
          }
        }

        @keyframes featureItemPop {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .shopping-content-animate {
          animation: shoppingContentSlide 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .shopping-lottie-animate {
          animation: shoppingLottieFloat 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }

        .feature-item-animate {
          animation: featureItemPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
      <section ref={ref} className="relative py-16 px-6 sm:px-8 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className={`space-y-8 ${isVisible ? 'shopping-content-animate' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-secondary font-semibold text-sm">{t("shopping.badge")}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t("shopping.title")} <span className="text-secondary">{t("shopping.titleHighlight")}</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t("shopping.description")}
            </p>

            <div className="space-y-4">
              <div className={`flex items-start gap-4 ${isVisible ? 'feature-item-animate' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? '0.8s' : '0s' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t("shopping.feature1.title")}</h3>
                  <p className="text-gray-600 text-sm">{t("shopping.feature1.desc")}</p>
                </div>
              </div>
              <div className={`flex items-start gap-4 ${isVisible ? 'feature-item-animate' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? '1s' : '0s' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t("shopping.feature2.title")}</h3>
                  <p className="text-gray-600 text-sm">{t("shopping.feature2.desc")}</p>
                </div>
              </div>
              <div className={`flex items-start gap-4 ${isVisible ? 'feature-item-animate' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? '1.2s' : '0s' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t("shopping.feature3.title")}</h3>
                  <p className="text-gray-600 text-sm">{t("shopping.feature3.desc")}</p>
                </div>
              </div>
            </div>

            <button className="group relative px-8 py-4 bg-secondary text-primary font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                {t("shopping.button")}
                <svg className={`w-5 h-5 transform transition-transform ${isRTL ? 'scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right side - Lottie Animation */}
          <div className={`flex items-center justify-center ${isVisible ? 'shopping-lottie-animate' : 'opacity-0'}`}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-black/10 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <Lottie
                  animationData={shoppingCartAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

