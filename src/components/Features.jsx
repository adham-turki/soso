import { useTranslation } from 'react-i18next'
import { FeatureCard } from './FeatureCard'

export function Features() {
  const { t } = useTranslation()

  const features = [
    { title: t('features.dailyOffers.title'), desc: t('features.dailyOffers.desc'), icon: '🎯' },
    { title: t('features.quality.title'), desc: t('features.quality.desc'), icon: '⭐' },
    { title: t('features.prices.title'), desc: t('features.prices.desc'), icon: '💰' },
    { title: t('features.variety.title'), desc: t('features.variety.desc'), icon: '🛒' },
    { title: t('features.service.title'), desc: t('features.service.desc'), icon: '👥' },
    { title: t('features.location.title'), desc: t('features.location.desc'), icon: '📍' },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-primary mb-6">{t('features.title')}</h2>
          <div className="w-32 h-2 bg-secondary mx-auto shadow-lg"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

