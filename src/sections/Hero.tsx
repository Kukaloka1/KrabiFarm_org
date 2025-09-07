import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import logoUrl from "@/assets/logo.png";

export default function Hero(){
  const { t } = useI18n();
  const title = (t("hero.title") || "").trim() || "KrabiFarm — Marketplace para farmers de Krabi";
  const subtitle = (t("hero.subtitle") || "").trim() || "Conecta productores locales con compradores, con trazabilidad, QR y logística.";

  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  return (
    <section id="top" className="pt-24 md:pt-28">
      <Container>
        <div className="grid gap-8 items-center grid-cols-1 lg:grid-cols-[5fr_7fr]">
          {/* LOGO IZQUIERDA: marco degradado + panel negro */}
          <div className="grid place-items-center" data-aos="zoom-in" data-aos-delay="50">
            <div className="p-2 rounded-3xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-400/60 shadow-[0_28px_60px_rgba(59,130,246,0.16)]">
              <div className="rounded-3xl bg-black border border-neutral-800 p-5 grid place-items-center shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                <img src={logoUrl} alt="KrabiFarm logo"
                     className="w-[min(520px,44vw)] max-w-full h-auto rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.10)]" />
              </div>
            </div>
          </div>

          {/* TEXTO DERECHA */}
          <div data-aos="fade-left" data-aos-delay="120">
            <h1 className="font-extrabold leading-[1.05] tracking-[-0.0125em]
                           text-4xl sm:text-5xl md:text-6xl xl:text-[4.75rem] text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-slate-600 text-[1.05rem] md:text-[1.15rem] max-w-[62ch] mb-6">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="220">
              <a href="#about"
                 className="inline-flex items-center justify-center min-h-12 px-5 rounded-2xl font-bold
                            text-white bg-gradient-to-r from-blue-600 to-emerald-500
                            shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5">
                {t("hero.cta.primary") || "Ver más"}
              </a>
              <a href="#contact"
                 className="inline-flex items-center justify-center min-h-12 px-5 rounded-2xl font-bold
                            border border-black/10 bg-white/90 backdrop-blur hover:-translate-y-0.5
                            transition-transform">
                {t("hero.cta.secondary") || "Contacto"}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



