import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCountUp } from "@/hooks/use-count-up"
import { HiBuildingStorefront } from "react-icons/hi2"
import sudaniImage from '../../../assets/images/sudani.png';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  // Count animations - only start when section is visible
  const products = useCountUp(isVisible ? 5000 : 0, 0, 2000, '')
  const customers = useCountUp(isVisible ? 10000 : 0, 0, 2000, '')
  const years = useCountUp(isVisible ? 15 : 0, 0, 2000, '')
  const dailyOffers = "24/7"

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={sudaniImage}
          alt="Sudani Supermarket"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
      </div>

      {/* Yellow accent overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 px-6 sm:px-8 py-12 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-secondary/40">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-secondary font-semibold text-sm">{t("hero.badge")}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {t("hero.title")}
              <span className="block text-secondary"> {t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-secondary text-primary font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]">
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta1")}
                  <svg className={`w-5 h-5 transform transition-transform ${isRTL ? 'scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-8 py-4 bg-black/30 text-white font-bold rounded-lg border border-secondary/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:border-secondary/60 hover:bg-black/50">
                <span className="relative z-10">{t("hero.cta2")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-secondary/30">
              <div className="group relative min-w-[120px]">
                <div className="absolute -inset-2 bg-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-secondary transition-all duration-300 group-hover:scale-110 tabular-nums" dir="ltr">
                    <span className="inline-block min-w-[100px] text-left">
                      {products >= 1000 ? `${(products / 1000).toFixed(1)}K` : products}+
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{t("hero.products")}</div>
                </div>
              </div>
              <div className="group relative min-w-[120px]">
                <div className="absolute -inset-2 bg-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-secondary transition-all duration-300 group-hover:scale-110 tabular-nums" dir="ltr">
                    <span className="inline-block min-w-[100px] text-left">
                      {customers >= 1000 ? `${(customers / 1000).toFixed(1)}K` : customers}+
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{t("hero.customers")}</div>
                </div>
              </div>
              <div className="group relative min-w-[120px]">
                <div className="absolute -inset-2 bg-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-secondary transition-all duration-300 group-hover:scale-110 tabular-nums" dir="ltr">
                    <span className="inline-block min-w-[100px] text-left">
                      {years}+
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{t("hero.years")}</div>
                </div>
              </div>
              <div className="group relative min-w-[120px]">
                <div className="absolute -inset-2 bg-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-secondary transition-all duration-300 group-hover:scale-110 tabular-nums" dir="ltr">
                    <span className="inline-block min-w-[100px] text-left">
                      {dailyOffers}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{t("hero.offers")}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className={`relative w-full max-w-sm flex items-center justify-center ${isRTL ? 'mr-60' : 'ml-60'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-black/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full p-20 border-4 border-secondary/30 backdrop-blur-sm">
                    <HiBuildingStorefront className="w-72 h-72 text-secondary drop-shadow-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

