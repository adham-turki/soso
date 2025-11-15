import { useTranslation } from 'react-i18next'
import { Counter } from './Counter'

export function Stats() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-gradient-to-r from-primary via-gray-900 to-primary text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl group-hover:bg-secondary/50 transition-all"></div>
              <div className="relative text-6xl md:text-7xl font-black text-secondary mb-2 drop-shadow-2xl [text-shadow:0_0_30px_rgba(255,215,0,0.8)]">
                <Counter end={1000} suffix="+" />
              </div>
            </div>
            <p className="text-xl font-bold text-secondary group-hover:text-secondary-light transition-colors">{t('stats.products')}</p>
          </div>
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl group-hover:bg-secondary/50 transition-all"></div>
              <div className="relative text-6xl md:text-7xl font-black text-secondary mb-2 drop-shadow-2xl [text-shadow:0_0_30px_rgba(255,215,0,0.8)]">
                <Counter end={5000} suffix="+" />
              </div>
            </div>
            <p className="text-xl font-bold text-secondary group-hover:text-secondary-light transition-colors">{t('stats.customers')}</p>
          </div>
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl group-hover:bg-secondary/50 transition-all"></div>
              <div className="relative text-6xl md:text-7xl font-black text-secondary mb-2 drop-shadow-2xl [text-shadow:0_0_30px_rgba(255,215,0,0.8)]">
                <Counter end={15} suffix="+" />
              </div>
            </div>
            <p className="text-xl font-bold text-secondary group-hover:text-secondary-light transition-colors">{t('stats.years')}</p>
          </div>
          <div className="text-center group">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl group-hover:bg-secondary/50 transition-all"></div>
              <div className="relative text-6xl md:text-7xl font-black text-secondary mb-2 drop-shadow-2xl [text-shadow:0_0_30px_rgba(255,215,0,0.8)]">
                <Counter end={50} suffix="+" />
              </div>
            </div>
            <p className="text-xl font-bold text-secondary group-hover:text-secondary-light transition-colors">{t('stats.offers')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

