import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import arTranslations from './locales/ar/translation.json'
import enTranslations from './locales/en/translation.json'

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  }
}

// Get saved language from localStorage or default to 'ar'
const savedLanguage = localStorage.getItem('language') || 'ar'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  })

// Update document direction and language based on current language
i18n.on('languageChanged', (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', lng)
  localStorage.setItem('language', lng)
})

// Set initial direction
const initialDir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
document.documentElement.setAttribute('dir', initialDir)
document.documentElement.setAttribute('lang', savedLanguage)

export default i18n

