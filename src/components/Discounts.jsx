import { useTranslation } from 'react-i18next'
import discount1 from '../assets/images/discount1.png'
import discount2 from '../assets/images/discount2.png'
import discount3 from '../assets/images/discount3.png'
import discount4 from '../assets/images/discount4.png'
import { DiscountCard } from './DiscountCard'

export function Discounts() {
  const { t } = useTranslation()

  const discounts = [
    { img: discount1, title: t('discounts.today') },
    { img: discount2, title: t('discounts.week') },
    { img: discount3, title: t('discounts.special') },
    { img: discount4, title: t('discounts.big') },
  ]

  return (
    <section id="discounts" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_50%)]"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">{t('discounts.title')}</h2>
          <p className="text-2xl text-secondary mb-6 font-bold">{t('discounts.subtitle')}</p>
          <div className="w-32 h-2 bg-secondary mx-auto shadow-lg"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {discounts.map((discount, idx) => (
            <DiscountCard key={idx} discount={discount} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

