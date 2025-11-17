import { useTranslation } from "react-i18next"
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2"
import logo from '../../../assets/images/logo.png';

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = ["home", "about", "services", "offers", "contact"]

  return (
    <footer className="bg-primary text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Sudani Logo" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-gray-300 transition-colors text-sm font-medium">
                    {t(`footer.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t("footer.contactInfo")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiMapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">{t("about.location")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiPhone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">{t("about.phone")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Sudani Supermarket. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

