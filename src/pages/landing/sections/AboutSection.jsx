import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCountUp } from "@/hooks/use-count-up"
import supermarket1 from '../../../assets/images/supermarket1.png';

export default function AboutSection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()
  const products = useCountUp(isVisible ? 5000 : 0, 0, 2000, '')
  const customers = useCountUp(isVisible ? 10000 : 0, 0, 2000, '')

  return (
    <section id="about-section" ref={ref} className="relative py-4 px-6 sm:px-8 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with enhanced effects */}
          <div
            className={`relative hidden lg:block group transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-secondary/20 via-black/10 to-secondary/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500">
              <img
                src={supermarket1}
                alt="Sudani Supermarket"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-4 border-secondary/20 group-hover:border-secondary/40 transition-colors duration-300 pointer-events-none"></div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-secondary to-secondary-dark text-primary px-6 py-3 rounded-full shadow-xl transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
              <div className="text-sm font-bold">{t("about.badge")}</div>
            </div>
          </div>

          {/* Content with enhanced design */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="text-center lg:text-start">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance leading-tight">
                {t("about.heading")}
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="relative pl-6 border-l-4 border-secondary/30 [dir='rtl']:pl-0 [dir='rtl']:pr-6 [dir='rtl']:border-l-0 [dir='rtl']:border-r-4">
                {t("about.description1")}
              </p>
              <p>
                {t("about.description2")}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div className="group relative">
                <div className="text-4xl md:text-5xl font-bold text-secondary transition-all duration-300 group-hover:scale-110 tabular-nums" dir="ltr">
                  {products >= 1000 ? `${(products / 1000).toFixed(1)}K` : products}+
                </div>
                <div className="text-sm text-gray-600 mt-1">{t("about.products")}</div>
              </div>
              <div className="group relative">
                <div className="text-4xl md:text-5xl font-bold text-secondary transition-all duration-300 group-hover:scale-110 tabular-nums" dir="ltr">
                  {customers >= 1000 ? `${(customers / 1000).toFixed(1)}K` : customers}+
                </div>
                <div className="text-sm text-gray-600 mt-1">{t("about.customers")}</div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-gray-700 font-semibold flex items-center gap-2">
                <span className="text-secondary">📍</span>
                {t("about.location")}
              </p>
              <p className="text-gray-700 font-semibold flex items-center gap-2">
                <span className="text-secondary">📞</span>
                {t("about.phone")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

