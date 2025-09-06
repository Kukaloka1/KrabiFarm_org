import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { Leaf, Sprout, Truck, ShieldCheck, Users2, Globe } from "lucide-react";

export default function About(){
  const { t } = useI18n();

  useEffect(()=>{
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 80 });
  },[]);

  return (
    <section id="about" className="section about">
      <Container>
        {/* Header */}
        <header className="about__header" data-aos="fade-up">
          <h2 className="h2 about__title">{t("about.title")}</h2>
          <p className="lead about__subtitle">{t("about.subtitle")}</p>
        </header>

        {/* KPIs */}
        <div className="kpis" data-aos="fade-up" data-aos-delay="120">
          <article className="kpi-card">
            <div className="icon-badge"><Users2 className="icon" /></div>
            <div>
              <div className="kpi-value">{t("about.kpis.farmers.value")}</div>
              <div className="kpi-label">{t("about.kpis.farmers.label")}</div>
            </div>
          </article>

          <article className="kpi-card">
            <div className="icon-badge"><Leaf className="icon" /></div>
            <div>
              <div className="kpi-value">{t("about.kpis.trace.value")}</div>
              <div className="kpi-label">{t("about.kpis.trace.label")}</div>
            </div>
          </article>

          <article className="kpi-card">
            <div className="icon-badge"><Truck className="icon" /></div>
            <div>
              <div className="kpi-value">{t("about.kpis.logistics.value")}</div>
              <div className="kpi-label">{t("about.kpis.logistics.label")}</div>
            </div>
          </article>
        </div>

        {/* Features */}
        <div className="feature-grid" data-aos="fade-up" data-aos-delay="180">
          <article className="feature-card">
            <div className="feature-icon"><Sprout className="icon" /></div>
            <h3 className="h3">{t("about.features.fair.title")}</h3>
            <p className="muted">{t("about.features.fair.desc")}</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon"><ShieldCheck className="icon" /></div>
            <h3 className="h3">{t("about.features.quality.title")}</h3>
            <p className="muted">{t("about.features.quality.desc")}</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon"><Globe className="icon" /></div>
            <h3 className="h3">{t("about.features.market.title")}</h3>
            <p className="muted">{t("about.features.market.desc")}</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon"><Users2 className="icon" /></div>
            <h3 className="h3">{t("about.features.training.title")}</h3>
            <p className="muted">{t("about.features.training.desc")}</p>
          </article>
        </div>

        {/* CTA */}
        <div className="gwrap about-cta" data-aos="zoom-in" data-aos-delay="240">
          <div className="surface about-cta__inner">
            <p className="about-cta__text">{t("about.cta.text")}</p>
            <a href="#contact" className="btn btn--primary">{t("about.cta.button")}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

