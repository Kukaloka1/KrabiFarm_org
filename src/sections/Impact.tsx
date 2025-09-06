import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { CircleDollarSign, ShieldCheck, Globe, Truck, BarChart3 } from "lucide-react";

export default function Impact(){
  const { t } = useI18n();

  useEffect(()=>{
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 80 });
  },[]);

  const items = ["impact.i1","impact.i2","impact.i3","impact.i4","impact.i5"];
  const ICONS = [CircleDollarSign, ShieldCheck, Globe, Truck, BarChart3];

  return (
    <section id="impact" className="section impact">
      <Container>
        <h2 className="h2 impact__title" data-aos="fade-up">{t("impact.title")}</h2>

        <div className="grid-responsive-2" data-aos="fade-up" data-aos-delay="80">
          {items.map((k, i)=> {
            const Icon = ICONS[i];
            return (
              <div key={k} className="gwrap impact-card" data-aos="fade-up" data-aos-delay={120 + i*70}>
                <div className="surface impact-item">
                  <div className="impact-icon"><Icon className="icon" /></div>
                  <div className="impact-text">{t(k)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

