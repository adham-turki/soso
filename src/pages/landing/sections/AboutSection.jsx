import { useTranslation } from "react-i18next"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCountUp } from "@/hooks/use-count-up"
import supermarket1 from '../../../assets/images/supermarket1.png';

export default function AboutSection() {
  const { t } = useTranslation()
  const { ref, isVisible } = useScrollAnimation()
  const products = useCountUp(isVisible ? 5000 : 0, 0, 2000, '')
  const customers = useCountUp(isVisible ? 10000 : 0, 0, 2000, '')

  return (
    <>
      <style>{`
        @keyframes badgePop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes titleSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes dividerExpand {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 80px;
            opacity: 1;
          }
        }

        @keyframes contentSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-80px) rotateY(-15deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
            filter: blur(0);
          }
        }

        @keyframes imageReveal {
          0% {
            opacity: 0;
            transform: translateX(80px) rotateY(15deg) scale(0.8);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes statCardFlip {
          0% {
            opacity: 0;
            transform: rotateX(-90deg) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) scale(1);
          }
        }

        .badge-animate {
          animation: badgePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .title-animate {
          animation: titleSlideDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        .divider-animate {
          animation: dividerExpand 0.8s ease-out 0.5s forwards;
          width: 0;
        }

        .content-animate {
          animation: contentSlideIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
          opacity: 0;
        }

        .image-animate {
          animation: imageReveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
          opacity: 0;
        }

        .stat-card-animate {
          animation: statCardFlip 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
      <section id="about-section" ref={ref} className="relative py-16 px-6 sm:px-8 bg-gradient-to-br from-white via-background to-white overflow-hidden">
        {/* Enhanced decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Title with enhanced styling */}
          <div className="text-center mb-16">
            <div className={`inline-block mb-4 ${isVisible ? 'badge-animate' : 'opacity-0'}`}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full">
                {t("about.badge") || "Our Story"}
              </span>
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight ${isVisible ? 'title-animate' : ''}`}>
              {t("about.title")}
            </h2>
            <div className={`mt-4 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full ${isVisible ? 'divider-animate' : ''}`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content with enhanced design */}
            <div className={`space-y-8 ${isVisible ? 'content-animate' : ''}`}>
              {/* Main heading */}
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight mb-6">
                  {t("about.heading")}
                </h3>
              </div>

              {/* Description cards with visual structure */}
              <div className="space-y-5">
                <div className="relative pl-6 border-l-4 border-secondary/50 hover:border-secondary transition-colors duration-300 [dir='rtl']:pl-0 [dir='rtl']:pr-6 [dir='rtl']:border-l-0 [dir='rtl']:border-r-4">
                  <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                    {t("about.description1")}
                  </p>
                </div>
                <div className="relative pl-6 border-l-4 border-accent/50 hover:border-accent transition-colors duration-300 [dir='rtl']:pl-0 [dir='rtl']:pr-6 [dir='rtl']:border-l-0 [dir='rtl']:border-r-4">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t("about.description2")}
                  </p>
                </div>
              </div>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-border">
                {/* Products Stat Card */}
                <div className={`group relative bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-xl border border-secondary/10 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg ${isVisible ? 'stat-card-animate' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? '1.2s' : '0s' }}>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-3xl md:text-4xl font-bold text-secondary tabular-nums" dir="ltr">
                      {products >= 1000 ? `${(products / 1000).toFixed(1)}K` : products}+
                    </div>
                    <div className="text-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">📦</div>
                  </div>
                  <p className="text-sm text-foreground/60 font-semibold uppercase tracking-wide">{t("about.products")}</p>
                </div>

                {/* Customers Stat Card */}
                <div className={`group relative bg-gradient-to-br from-accent/5 to-secondary/5 p-6 rounded-xl border border-accent/10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg ${isVisible ? 'stat-card-animate' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? '1.4s' : '0s' }}>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums" dir="ltr">
                      {customers >= 1000 ? `${(customers / 1000).toFixed(1)}K` : customers}+
                    </div>
                    <div className="text-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">👥</div>
                  </div>
                  <p className="text-sm text-foreground/60 font-semibold uppercase tracking-wide">{t("about.customers")}</p>
                </div>
              </div>

              {/* Contact Information with better styling */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <span className="text-lg">📍</span>
                  </div>
                  <p className="text-foreground/80 font-medium group-hover:text-secondary transition-colors duration-300">
                    {t("about.location")}
                  </p>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <span className="text-lg">📞</span>
                  </div>
                  <p className="text-foreground/80 font-medium group-hover:text-accent transition-colors duration-300">
                    {t("about.phone")}
                  </p>
                </div>
              </div>
            </div>

            {/* Image with premium effects */}
            <div className={`relative hidden lg:block group ${isVisible ? 'image-animate' : ''}`}>
              {/* Animated gradient halo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-secondary/30 via-accent/20 to-secondary/30 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Image container with premium styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={supermarket1 || "/placeholder.svg"}
                  alt="Sudani Supermarket"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-secondary/50 rounded-full group-hover:border-secondary transition-all duration-300"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-2 border-secondary/50 rounded-full group-hover:border-secondary transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
