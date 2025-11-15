import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

// Set initial direction based on language
const initialLang = localStorage.getItem('i18nextLng') || 'ar'
document.documentElement.setAttribute('dir', initialLang === 'ar' ? 'rtl' : 'ltr')
document.documentElement.setAttribute('lang', initialLang)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
