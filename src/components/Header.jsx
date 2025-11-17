import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png'

export function Header() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lng)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt={t('header.title')} className="h-16 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary">{t('header.title')}</h1>
              <p className="text-sm text-gray-600">{t('header.tagline')}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-primary hover:text-gray-800 transition-colors font-semibold">
              {t('header.home')}
            </a>
            <a href="#about" className="text-primary hover:text-gray-800 transition-colors font-semibold">
              {t('header.about')}
            </a>
            <a href="#discounts" className="text-primary hover:text-gray-800 transition-colors font-semibold">
              {t('header.discounts')}
            </a>
            <a href="#products" className="text-primary hover:text-gray-800 transition-colors font-semibold">
              {t('header.products')}
            </a>
            <a href="#contact" className="bg-secondary text-primary px-6 py-2 rounded-full font-bold hover:bg-gray-800 hover:text-white transition-all transform hover:scale-105">
              {t('header.contact')}
            </a>
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage('ar')}
                className={`px-3 py-1 rounded ${i18n.language === 'ar' ? 'bg-secondary text-primary font-bold' : 'text-gray-600'}`}
              >
                عربي
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-secondary text-primary font-bold' : 'text-gray-600'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

