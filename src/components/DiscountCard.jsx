import { useTranslation } from 'react-i18next'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function DiscountCard({ discount, delay }) {
  const { t } = useTranslation()
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] border-4 border-secondary/30 hover:border-secondary ${
        isIntersecting ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={discount.img}
          alt={discount.title}
          className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
        <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-3xl font-black text-secondary mb-4 drop-shadow-2xl">{discount.title}</h3>
          <button className="bg-secondary text-primary px-8 py-4 rounded-full font-black text-lg hover:bg-secondary-light transition-all transform hover:scale-105 shadow-xl border-4 border-secondary/30">
            {t('discounts.viewDetails')}
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full font-black text-sm shadow-lg">
        HOT
      </div>
    </div>
  )
}

