import { useTranslation } from "react-i18next"
import supermarket1 from '../../../assets/images/supermarket1.png';

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section id="cta-section" className="py-16 px-6 sm:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img src={supermarket1} alt="CTA Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-balance">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:022970968"
                className="bg-secondary text-primary px-12 py-6 rounded-full font-bold text-xl hover:bg-secondary-light transition-all transform hover:scale-110 shadow-2xl hover:shadow-secondary/50 border-4 border-secondary/30"
              >
                {t("cta.call")}
              </a>
              <a
                href="tel:0599878188"
                className="bg-transparent border-4 border-secondary text-secondary px-12 py-6 rounded-full font-bold text-xl hover:bg-secondary/20 transition-all transform hover:scale-110 shadow-2xl hover:shadow-secondary/50"
              >
                {t("cta.mobile")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

