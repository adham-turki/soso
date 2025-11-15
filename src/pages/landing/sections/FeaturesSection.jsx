import { useTranslation } from "react-i18next"
import { HiSparkles, HiShieldCheck, HiCurrencyDollar, HiSquares2X2, HiUserGroup, HiMapPin } from "react-icons/hi2"
import supermarket2 from '../../../assets/images/supermarket2.png';
import supermarket3 from '../../../assets/images/supermarket3.png';

export default function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      number: "01",
      key: "dailyOffers",
      icon: HiSparkles,
    },
    {
      number: "02",
      key: "quality",
      icon: HiShieldCheck,
    },
    {
      number: "03",
      key: "prices",
      icon: HiCurrencyDollar,
    },
    {
      number: "04",
      key: "variety",
      icon: HiSquares2X2,
    },
    {
      number: "05",
      key: "service",
      icon: HiUserGroup,
    },
    {
      number: "06",
      key: "location",
      icon: HiMapPin,
    },
  ]

  return (
    <section id="features-section" className="py-16 px-6 sm:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative p-10 rounded-2xl bg-white border-2 border-gray-200 hover:border-secondary hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-3xl group-hover:bg-secondary/5 transition-colors"></div>

                <div className="relative z-10">
                  <span className="text-7xl font-black text-gray-300 group-hover:text-secondary/20 transition-colors" dir="ltr">
                    {feature.number}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3 flex items-center gap-3">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    )}
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{t(`features.${feature.key}.desc`)}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Large featured image */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl h-96">
            <img
              src={supermarket2}
              alt="Sudani Supermarket"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white">{t("features.image1Title")}</h3>
              <p className="text-gray-200 mt-2">{t("features.image1Desc")}</p>
            </div>
          </div>

          {/* Side image */}
          <div className="relative group overflow-hidden rounded-3xl h-96">
            <img
              src={supermarket3}
              alt="Fresh Products"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-xl font-bold text-white">{t("features.image2Title")}</h3>
              <p className="text-gray-200 text-sm mt-2">{t("features.image2Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

