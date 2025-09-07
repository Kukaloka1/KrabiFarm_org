import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { Leaf, Sprout, Truck, ShieldCheck, Users2, Globe } from "lucide-react";

export default function About(){
  const { t } = useI18n();
  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  return (
    <section id="about" className="py-14 md:py-20">
      <Container>
        <header className="mb-6" data-aos="fade-up">
          <h2 className="h2 text-3xl md:text-[2rem] font-extrabold mb-2 text-slate-900">{t("about.title")}</h2>
          <p className="lead text-slate-600 max-w-[62ch]">{t("about.subtitle")}</p>
        </header>

        {/* KPIs */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-7" data-aos="fade-up" data-aos-delay="100">
          {[
            [<Users2 key="u" />, t("about.kpis.farmers.value"), t("about.kpis.farmers.label")],
            [<Leaf key="l" />, t("about.kpis.trace.value"), t("about.kpis.trace.label")],
            [<Truck key="t" />, t("about.kpis.logistics.value"), t("about.kpis.logistics.label")]
          ].map(([Icon, val, lab], i)=>(
            <article key={i} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-md">
              <div className="w-11 h-11 rounded-xl grid place-items-center
                              bg-gradient-to-br from-emerald-300/30 via-sky-300/25 to-blue-400/30 border border-black/10">
                <div className="w-5 h-5 text-blue-600">{Icon as React.ReactNode}</div>
              </div>
              <div>
                <div className="font-extrabold tracking-[-0.01em]">{val as string}</div>
                <div className="text-slate-600 text-sm">{lab as string}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Features */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-6" data-aos="fade-up" data-aos-delay="160">
          {[
            [<Sprout key="s" />, t("about.features.fair.title"), t("about.features.fair.desc")],
            [<ShieldCheck key="sc" />, t("about.features.quality.title"), t("about.features.quality.desc")],
            [<Globe key="g" />, t("about.features.market.title"), t("about.features.market.desc")],
            [<Users2 key="u2" />, t("about.features.training.title"), t("about.features.training.desc")]
          ].map(([Icon, title, desc], i)=>(
            <article key={i}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl grid place-items-center mb-2
                              bg-gradient-to-br from-emerald-300/30 via-sky-300/25 to-blue-400/30 border border-black/10">
                <div className="w-5 h-5 text-blue-600">{Icon as React.ReactNode}</div>
              </div>
              <h3 className="font-bold text-lg mb-1 text-slate-900">{title as string}</h3>
              <p className="text-slate-600">{desc as string}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-400/60" data-aos="zoom-in" data-aos-delay="220">
          <div className="rounded-3xl border border-black/10 bg-white/90 backdrop-blur p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between shadow-xl">
            <p className="font-bold tracking-[-0.01em] text-slate-900">{t("about.cta.text")}</p>
            <a href="#contact"
               className="inline-flex items-center justify-center min-h-12 px-5 rounded-2xl font-bold
                          text-white bg-gradient-to-r from-blue-600 to-emerald-500 shadow-lg hover:shadow-xl
                          transition-transform hover:-translate-y-0.5">
              {t("about.cta.button")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

