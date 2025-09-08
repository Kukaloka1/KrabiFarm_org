import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import logoUrl from "@/assets/logo5.png";

export default function Hero(){
  const { t } = useI18n();
  const title = (t("hero.title") || "").trim() || "KrabiFarm — Marketplace para farmers de Krabi";
  const subtitle = (t("hero.subtitle") || "").trim() || "Conecta productores locales con compradores, con trazabilidad, QR y logística.";
  const statusLabel = (t("site.status") || "").trim() || "🚧 In construction — Beta coming soon";

  useEffect(()=>{ 
    AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); 
  },[]);

  return (
    // ↓ Menos padding arriba en mobile/tablet; desktop (lg) queda igual
    <section id="top" className="pt-16 md:pt-20 lg:pt-28">
      <Container>
        <div className="grid gap-8 items-center grid-cols-1 lg:grid-cols-[5fr_7fr]">
          {/* LOGO IZQUIERDA */}
          <div className="grid place-items-center" data-aos="zoom-in" data-aos-delay="50">
            <div className="relative">
              {/* Badge */}
              <div
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10"
                data-aos="fade-down"
                data-aos-delay="80"
              >
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2
                             rounded-full text-[0.72rem] md:text-sm font-extrabold
                             bg-gradient-to-r from-amber-300 via-yellow-300 to-rose-300
                             text-black shadow-[0_10px_25px_rgba(0,0,0,0.10)]
                             ring-2 ring-black/10 select-none"
                  aria-label={statusLabel}
                  title={statusLabel}
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {statusLabel}
                </span>
              </div>

              <div className="p-2 rounded-3xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-400/60 shadow-[0_28px_60px_rgba(59,130,246,0.16)]">
                {/* Panel negro: subido SOLO en sm/md; desktop intacto */}
                <div
                  className="rounded-3xl bg-black border border-neutral-800 p-4 md:p-5 grid place-items-center
                             shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                             sm:-translate-y-1 md:-translate-y-2 lg:translate-y-0 will-change-transform"
                >
                  <img
                    src={logoUrl}
                    alt="KrabiFarm logo"
                    className="
                      w-full
                      max-w-[74vw] sm:max-w-[70vw] md:max-w-[64vw]
                      lg:max-w-none lg:w-[min(520px,44vw)]
                      h-auto rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.10)]
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TEXTO DERECHA */}
          <div data-aos="fade-left" data-aos-delay="120">
            <h1
              className="font-extrabold leading-[1.05] tracking-[-0.0125em]
                         text-4xl sm:text-5xl md:text-6xl xl:text-[4.75rem] text-slate-900 mb-4"
            >
              {title}
            </h1>
            <p className="text-slate-600 text-[1.05rem] md:text-[1.15rem] max-w-[62ch] mb-6">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="220">
              <a
                href="#about"
                className="inline-flex items-center justify-center min-h-12 px-5 rounded-2xl font-bold
                           text-white bg-gradient-to-r from-blue-600 to-emerald-500
                           shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
              >
                {t("hero.cta.primary") || "Ver más"}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-12 px-5 rounded-2xl font-bold
                           border border-black/10 bg-white/90 backdrop-blur hover:-translate-y-0.5
                           transition-transform"
              >
                {t("hero.cta.secondary") || "Contacto"}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
