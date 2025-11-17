import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import discount1 from '../../../assets/images/discount1.png'
import discount2 from '../../../assets/images/discount2.png'
import discount3 from '../../../assets/images/discount3.png'
import discount4 from '../../../assets/images/discount4.png'

export function DiscountsSection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()

  const discounts = [
    { img: discount1, title: t('discounts.today') },
    { img: discount2, title: t('discounts.week') },
    { img: discount3, title: t('discounts.special') },
    { img: discount4, title: t('discounts.big') },
  ]

  return (
    <>
      <style>{`
        @keyframes discountTitleGlow {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(0.8);
            filter: blur(10px);
            text-shadow: 0 0 0 rgba(255, 215, 0, 0);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          }
        }

        @keyframes discountCardFlip {
          0% {
            opacity: 0;
            transform: translateY(80px) rotateX(-45deg) rotateY(15deg) scale(0.6);
            filter: blur(12px);
          }
          50% {
            transform: translateY(-15px) rotateX(5deg) rotateY(-5deg) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes discountDividerExpand {
          0% {
            width: 0;
            opacity: 0;
            box-shadow: 0 0 0 rgba(255, 215, 0, 0);
          }
          100% {
            width: 128px;
            opacity: 1;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
          }
        }

        .discount-title-animate {
          animation: discountTitleGlow 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .discount-card-animate {
          animation: discountCardFlip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .discount-divider-animate {
          animation: discountDividerExpand 0.8s ease-out 0.3s forwards;
          width: 0;
        }
      `}</style>
      <section id="discounts-section" ref={ref} className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className={`text-center mb-12 ${isVisible ? 'discount-title-animate' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 drop-shadow-lg">{t('discounts.title')}</h2>
            <p className="text-xl text-secondary mb-6 font-semibold">{t('discounts.subtitle')}</p>
            <div className={`h-2 bg-secondary mx-auto shadow-lg ${isVisible ? 'discount-divider-animate' : ''}`}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {discounts.map((discount, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border-2 border-secondary/20 hover:border-gray-800 transition-all duration-500 ${isVisible ? 'discount-card-animate' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${0.5 + idx * 0.15}s` : "0ms" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={discount.img}
                    alt={discount.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-secondary">{discount.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {t('discounts.viewDetails')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

