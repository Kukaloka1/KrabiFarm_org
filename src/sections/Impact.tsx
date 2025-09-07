import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { CircleDollarSign, ShieldCheck, Globe, Truck, BarChart3 } from "lucide-react";

export default function Impact(){
  const { t } = useI18n();
  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  const items = ["impact.i1","impact.i2","impact.i3","impact.i4","impact.i5"];
  const ICONS = [CircleDollarSign, ShieldCheck, Globe, Truck, BarChart3];

  return (
    <section id="impact" className="py-14 md:py-20">
      <Container>
        <h2 className="text-3xl md:text-[2rem] font-extrabold mb-5 text-slate-900" data-aos="fade-up">
          {t("impact.title")}
        </h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-up" data-aos-delay="80">
          {items.map((k, i)=>{
            const Icon = ICONS[i];
            return (
              <div key={k} className="p-[1px] rounded-2xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-400/60">
                <div className="rounded-[20px] border border-black/10 bg-white p-4 flex items-center justify-between gap-3 shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-14 h-14 rounded-xl grid place-items-center
                                    bg-gradient-to-br from-emerald-300/30 via-sky-300/25 to-blue-400/30 border border-black/10">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="font-bold tracking-[-0.01em] text-slate-900">{t(k)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


