import Container from "@/components/Container";
import { CONTACT } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function CTA(){
  const { t } = useI18n();
  const waLink = `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g,"")}`;
  return (
    <section id="contact" className="section">
      <Container>
        <div className="cta-wrap">
          <div className="cta">
            <div>
              <h2 className="h2 mb-4">{t("cta.title")}</h2>
              <p className="muted max-60ch">{t("cta.desc")}</p>
            </div>
            <div className="btn-row">
              <a className="btn btn--primary" href={waLink} target="_blank" rel="noreferrer">{t("cta.whatsapp")}</a>
              <a className="btn btn--ghost" href={`mailto:${CONTACT.email}`}>{t("cta.email")}</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
