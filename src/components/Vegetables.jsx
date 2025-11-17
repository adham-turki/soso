import { useTranslation } from 'react-i18next'
import vegetablessections from '../assets/images/vegetablessections.png'

export function Vegetables() {
  const { t } = useTranslation()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={vegetablessections}
          alt={t('vegetables.title')}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/85 to-black/80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">{t('vegetables.title')}</h2>
          <p className="text-2xl text-secondary mb-6 font-bold">{t('vegetables.subtitle')}</p>
          <div className="w-32 h-2 bg-secondary mx-auto shadow-lg"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-secondary/30 shadow-2xl">
            <h3 className="text-4xl font-black text-secondary mb-8">{t('vegetables.heading')}</h3>
            <p className="text-xl text-white/95 mb-6 leading-relaxed">
              {t('vegetables.description1')}
            </p>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              {t('vegetables.description2')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-secondary text-primary px-8 py-4 rounded-full font-black text-lg shadow-lg border-4 border-secondary/30">
                {t('vegetables.fresh')}
              </div>
              <div className="bg-white text-primary px-8 py-4 rounded-full font-black text-lg shadow-lg border-4 border-white/30">
                {t('vegetables.competitive')}
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 bg-gray-800/40 rounded-3xl blur-3xl group-hover:bg-gray-700/60 transition-all duration-500"></div>
            <img
              src={vegetablessections}
              alt={t('vegetables.title')}
              className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 border-4 border-gray-800/40 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

