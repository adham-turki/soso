import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function FeatureCard({ feature, delay }) {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:shadow-2xl border-2 border-secondary/20 hover:border-secondary/50 group ${
        isIntersecting ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
      <div className="relative z-10">
        <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
        <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">{feature.title}</h3>
        <p className="text-gray-700 leading-relaxed font-medium">{feature.desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  )
}

