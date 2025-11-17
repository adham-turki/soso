import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import supermarket1 from '../../../assets/images/supermarket1.png';

export default function CTASection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <style>{`
        @keyframes ctaContainerZoom {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateX(-10deg);
            filter: blur(15px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateX(0deg);
            filter: blur(0);
          }
        }

        @keyframes ctaTitlePulse {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
            filter: blur(8px);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes ctaDescriptionFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes ctaButtonBounce {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.7) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        .cta-container-animate {
          animation: ctaContainerZoom 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .cta-title-animate {
          animation: ctaTitlePulse 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }

        .cta-description-animate {
          animation: ctaDescriptionFade 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .cta-button-animate {
          animation: ctaButtonBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
      <section id="cta-section" ref={ref} className="py-16 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl ${isVisible ? 'cta-container-animate' : 'opacity-0'}`}>
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <img src={supermarket1} alt="CTA Background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-20 px-8 text-center">
              <h2 className={`text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-balance ${isVisible ? 'cta-title-animate' : ''}`}>
                {t("cta.title")}
              </h2>
              <p className={`text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed ${isVisible ? 'cta-description-animate' : ''}`}>
                {t("cta.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:022970968"
                className={`bg-secondary text-primary px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-800 hover:text-white transition-all transform hover:scale-110 shadow-2xl hover:shadow-gray-800/50 border-4 border-secondary/30 ${isVisible ? 'cta-button-animate' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
              >
                {t("cta.call")}
              </a>
              <a
                href="tel:0599878188"
                className={`bg-transparent border-4 border-secondary text-secondary px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-800/20 hover:text-white transition-all transform hover:scale-110 shadow-2xl hover:shadow-gray-800/50 ${isVisible ? 'cta-button-animate' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
              >
                {t("cta.mobile")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

