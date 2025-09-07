import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { CircleDollarSign, QrCode, ShieldCheck, Building2, Truck, MapPin } from "lucide-react";

export default function Solution(){
  const { t, lang } = useI18n();
  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  const feats = ["solution.f1","solution.f2","solution.f3","solution.f4","solution.f5","solution.f6"];
  const ICONS = [CircleDollarSign, QrCode, ShieldCheck, Building2, Truck, MapPin];
  const FALLBACK: Record<string,{en:string; th:string}> = {
    "solution.f6": { en: "Local hubs & pick-up points", th: "จุดรับสินค้า/ฮับท้องถิ่น" }
  };

  return (
    <section id="solution" className="py-14 md:py-20">
      <Container>
        <h2 className="text-3xl md:text-[2rem] font-extrabold mb-5 text-slate-900" data-aos="fade-up">
          {t("solution.title")}
        </h2>

        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="80">
          {feats.map((k, i)=>{
            const Icon = ICONS[i];
            const raw = t(k);
            const label = raw !== k ? raw : (FALLBACK[k]?.[lang] ?? raw);
            return (
              <li key={k} className="p-[1px] rounded-2xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-400/60">
                <div className="rounded-[20px] border border-black/10 bg-white p-4 flex items-center gap-3
                                shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
                  <div className="w-14 h-14 rounded-xl grid place-items-center
                                  bg-gradient-to-br from-emerald-300/30 via-sky-300/25 to-blue-400/30 border border-black/10">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="font-bold tracking-[-0.01em] text-slate-900">{label}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

