import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png'
import supermarket1 from '../assets/images/supermarket1.png'

export function Hero() {
    const { t } = useTranslation()

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <img
                    src={supermarket1}
                    alt={t('hero.title')}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="mb-8 animate-fade-in-down">
                    <img src={logo} alt="Logo" className="h-40 w-auto mx-auto mb-8 drop-shadow-2xl" />
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-secondary mb-6 animate-fade-in-up drop-shadow-lg">
                    {t('hero.title')}
                </h2>
                <p className="text-3xl md:text-5xl text-secondary mb-6 font-bold animate-fade-in-up animation-delay-200 drop-shadow-lg">
                    {t('hero.subtitle')}
                </p>
                <p className="text-xl md:text-2xl text-secondary mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed font-medium">
                    {t('hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
                    <a href="#discounts" className="bg-secondary text-primary px-10 py-5 rounded-full font-black text-xl hover:bg-secondary-light transition-all transform hover:scale-110 shadow-2xl hover:shadow-secondary/50 border-4 border-secondary/20">
                        {t('hero.cta1')}
                    </a>
                    <a href="#about" className="bg-transparent border-4 border-secondary text-secondary px-10 py-5 rounded-full font-black text-xl hover:bg-secondary/20 transition-all transform hover:scale-110 shadow-2xl hover:shadow-secondary/50">
                        {t('hero.cta2')}
                    </a>
                </div>
            </div>
        </section>
    )
}

