import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { HiChevronDown } from "react-icons/hi2"
import logo from '../../../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef(null)
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangDropdownOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 px-6 border-gray-200">
      <div className="mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Sudani Logo" className="h-16 md:h-20 w-auto" />
          </div>

          {/* Desktop Navigation - Centered Buttons */}
          <div className="hidden md:flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('features-section')}
              className="group relative px-5 py-2.5 text-lg text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md overflow-hidden"
            >
              <span className="relative z-10">{t("navbar.services")}</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="group relative px-5 py-2.5 text-lg text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md overflow-hidden"
            >
              <span className="relative z-10">{t("navbar.aboutUs")}</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('discounts-section')}
              className="group relative px-5 py-2.5 text-lg text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md overflow-hidden"
            >
              <span className="relative z-10">{t("navbar.offers")}</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('cta-section')}
              className="group relative px-5 py-2.5 text-lg text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md overflow-hidden"
            >
              <span className="relative z-10">{t("navbar.contact")}</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Right Side - Language */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Language Switcher - Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="group relative flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10">{i18n.language === 'ar' ? 'عربي' : 'EN'}</span>
                <HiChevronDown className={`w-4 h-4 transition-transform duration-300 relative z-10 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              {isLangDropdownOpen && (
                <div className={`absolute top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 min-w-[120px] ${isRTL ? 'left-0' : 'right-0'}`}>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full px-4 py-2 text-sm font-semibold ${isRTL ? 'text-right' : 'text-left'} hover:bg-gray-100 transition-colors ${i18n.language === 'en' ? 'bg-gray-100 text-gray-800' : 'text-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`w-full px-4 py-2 text-sm font-semibold ${isRTL ? 'text-right' : 'text-left'} hover:bg-secondary/10 transition-colors ${i18n.language === 'ar' ? 'bg-secondary/10 text-secondary' : 'text-gray-700'}`}
                  >
                    عربي
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t-2 border-gray-200 pt-4">
            <button
              onClick={() => scrollToSection('about-section')}
              className="w-full px-6 py-3 text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {t("navbar.aboutUs")}
            </button>
            <button
              onClick={() => scrollToSection('features-section')}
              className="w-full px-6 py-3 text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {t("navbar.services")}
            </button>
            <button
              onClick={() => scrollToSection('discounts-section')}
              className="w-full px-6 py-3 text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {t("navbar.offers")}
            </button>
            <button
              onClick={() => scrollToSection('cta-section')}
              className="w-full px-6 py-3 text-gray-700 hover:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {t("navbar.contact")}
            </button>

            {/* Language Switcher - Dropdown */}
            <div className="px-4">
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="group relative w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-md overflow-hidden"
                >
                  <span className="relative z-10">{i18n.language === 'ar' ? 'عربي' : 'EN'}</span>
                  <HiChevronDown className={`w-4 h-4 transition-transform duration-300 relative z-10 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                {isLangDropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full px-4 py-2 text-sm font-semibold ${isRTL ? 'text-right' : 'text-left'} hover:bg-gray-100 transition-colors ${i18n.language === 'en' ? 'bg-gray-100 text-gray-800' : 'text-gray-700'}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => changeLanguage('ar')}
                      className={`w-full px-4 py-2 text-sm font-semibold ${isRTL ? 'text-right' : 'text-left'} hover:bg-secondary/10 transition-colors ${i18n.language === 'ar' ? 'bg-secondary/10 text-secondary' : 'text-gray-700'}`}
                    >
                      عربي
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


