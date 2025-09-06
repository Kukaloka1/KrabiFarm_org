import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import logoUrl from "@/assets/logo.png";

export default function Hero(){
  const { t } = useI18n();
  const title = (t("hero.title") || "").trim() || "KrabiFarm — Marketplace para farmers de Krabi";
  const subtitle = (t("hero.subtitle") || "").trim() || "Conecta productores locales con compradores, con trazabilidad, QR y logística.";

  useEffect(()=>{
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  },[]);

  return (
    <section id="top" className="section hero">
      <Container>
        <div className="hero__grid">
          {/* LOGO IZQUIERDA (zoom-in suave) */}
          <div className="hero__visual" data-aos="zoom-in" data-aos-delay="50">
            <div className="hero__logo-wrap">
              <div className="hero__logo-inner">
                <img src={logoUrl} alt="KrabiFarm logo" className="logo-hero" />
              </div>
            </div>
          </div>

          {/* TEXTO DERECHA (fade-left + botones escalonados) */}
          <div className="hero__copy" data-aos="fade-left" data-aos-delay="120">
            <h1 className="h1 hero__title">{title}</h1>
            <p className="lead hero__subtitle">{subtitle}</p>
            <div className="hero__actions" data-aos="fade-up" data-aos-delay="220">
              <a href="#about" className="btn btn--primary">{t("hero.cta.primary") || "Ver más"}</a>
              <a href="#contact" className="btn btn--ghost">{t("hero.cta.secondary") || "Contacto"}</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



