import { useTranslation } from 'react-i18next'
import supermarket2 from '../assets/images/supermarket2.png'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={supermarket2}
          alt={t('about.title')}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">{t('about.title')}</h2>
          <div className="w-32 h-2 bg-secondary mx-auto shadow-lg"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-secondary/30 shadow-2xl">
            <h3 className="text-4xl font-black text-secondary mb-8">{t('about.heading')}</h3>
            <p className="text-xl text-white/95 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 bg-secondary/20 p-4 rounded-xl">
                <div className="w-4 h-4 bg-secondary rounded-full shadow-lg"></div>
                <p className="text-lg font-bold text-white">{t('about.location')}</p>
              </div>
              <div className="flex items-center gap-4 bg-secondary/20 p-4 rounded-xl">
                <div className="w-4 h-4 bg-secondary rounded-full shadow-lg"></div>
                <p className="text-lg font-bold text-white">{t('about.phone')}</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-800/30 rounded-3xl blur-2xl group-hover:bg-gray-700/50 transition-all duration-500"></div>
            <img
              src={supermarket2}
              alt={t('about.title')}
              className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 border-4 border-secondary/30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

