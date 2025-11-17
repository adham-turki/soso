import { useTranslation } from 'react-i18next'
import supermarket3 from '../assets/images/supermarket3.png'

export function Products() {
  const { t } = useTranslation()

  const items = [
    t('products.items.food'),
    t('products.items.fresh'),
    t('products.items.drinks'),
    t('products.items.household'),
    t('products.items.health'),
    t('products.items.toys'),
  ]

  return (
    <section id="products" className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={supermarket3}
          alt={t('products.title')}
          className="w-full h-full object-cover scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">{t('products.title')}</h2>
          <p className="text-2xl text-secondary mb-6 font-bold">{t('products.subtitle')}</p>
          <div className="w-32 h-2 bg-secondary mx-auto shadow-lg"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gray-800/40 rounded-3xl blur-3xl group-hover:bg-gray-700/60 transition-all duration-500"></div>
              <img
                src={supermarket3}
                alt={t('products.title')}
                className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 border-4 border-gray-800/40 w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 bg-black/30 backdrop-blur-md rounded-3xl p-10 border-2 border-secondary/30 shadow-2xl">
              <h3 className="text-5xl font-black text-secondary mb-8">{t('products.heading')}</h3>
              <p className="text-xl text-secondary mb-8 leading-relaxed font-medium">
                {t('products.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-secondary/20 p-4 rounded-xl hover:bg-gray-800/30 transition-colors">
                    <div className="w-3 h-3 bg-secondary rounded-full shadow-lg"></div>
                    <span className="text-lg font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

