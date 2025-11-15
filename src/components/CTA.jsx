import { useTranslation } from 'react-i18next'
import supermarket1 from '../assets/images/supermarket1.png'

export function CTA() {
  const { t } = useTranslation()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={supermarket1} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-secondary mb-8 drop-shadow-2xl">{t('cta.title')}</h2>
        <p className="text-2xl md:text-3xl text-secondary mb-12 max-w-3xl mx-auto font-bold drop-shadow-lg">
          {t('cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:022970968"
            className="bg-secondary text-primary px-12 py-6 rounded-full font-black text-xl hover:bg-secondary-light transition-all transform hover:scale-110 shadow-2xl hover:shadow-secondary/50 border-4 border-secondary/30 min-w-[280px]"
          >
            {t('cta.call')}
          </a>
          <a
            href="tel:0599878188"
            className="bg-transparent border-4 border-secondary text-secondary px-12 py-6 rounded-full font-black text-xl hover:bg-secondary/20 transition-all transform hover:scale-110 shadow-2xl hover:shadow-secondary/50 min-w-[280px]"
          >
            {t('cta.mobile')}
          </a>
        </div>
      </div>
    </section>
  )
}

