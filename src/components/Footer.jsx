import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-primary via-gray-900 to-black py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Logo" className="h-20 w-auto mb-6 drop-shadow-lg" />
            <p className="text-secondary/90 text-lg leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-black mb-6 text-secondary">{t('footer.contactInfo')}</h4>
            <div className="space-y-3">
              <p className="text-secondary/90 text-lg flex items-center gap-2">📍 <span>{t('about.location')}</span></p>
              <p className="text-secondary/90 text-lg flex items-center gap-2">📞 <span>02-2970968</span></p>
              <p className="text-secondary/90 text-lg flex items-center gap-2">📱 <span>0599-878188</span></p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-black mb-6 text-secondary">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-secondary/90 hover:text-secondary transition-colors text-lg font-semibold">{t('header.home')}</a></li>
              <li><a href="#about" className="text-secondary/90 hover:text-secondary transition-colors text-lg font-semibold">{t('header.about')}</a></li>
              <li><a href="#discounts" className="text-secondary/90 hover:text-secondary transition-colors text-lg font-semibold">{t('header.discounts')}</a></li>
              <li><a href="#products" className="text-secondary/90 hover:text-secondary transition-colors text-lg font-semibold">{t('header.products')}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary/30 pt-8 text-center">
          <p className="text-secondary/70 text-lg">&copy; {new Date().getFullYear()} {t('header.title')}. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

