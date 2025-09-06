import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { CircleDollarSign, QrCode, ShieldCheck, Building2, Truck, MapPin } from "lucide-react";

export default function Solution(){
  const { t, lang } = useI18n();

  useEffect(()=>{
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 80 });
  },[]);

  // 6 features → 3x2 en desktop
  const feats = ["solution.f1","solution.f2","solution.f3","solution.f4","solution.f5","solution.f6"];
  const ICONS = [CircleDollarSign, QrCode, ShieldCheck, Building2, Truck, MapPin];

  const FALLBACK: Record<string,{en:string; th:string}> = {
    "solution.f6": { en: "Local hubs & pick-up points", th: "จุดรับสินค้า/ฮับท้องถิ่น" }
  };

  return (
    <section id="solution" className="section solution">
      <Container>
        <h2 className="h2 solution__title" data-aos="fade-up">{t("solution.title")}</h2>

        <ul className="grid-feats" data-aos="fade-up" data-aos-delay="80">
          {feats.map((k, i)=>{
            const Icon = ICONS[i];
            const raw = t(k);
            const label = raw !== k ? raw : (FALLBACK[k]?.[lang] ?? raw);

            return (
              <li key={k} className="gwrap solution-card" data-aos="fade-up" data-aos-delay={120 + i*70}>
                <div className="surface solution-item">
                  <div className="solution-icon"><Icon className="icon" /></div>
                  <div className="solution-text">{label}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

