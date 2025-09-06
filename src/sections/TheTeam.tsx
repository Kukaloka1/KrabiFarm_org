import Container from "@/components/Container";
import { TEAM } from "@/data/team";
import { useI18n } from "@/lib/i18n";

export default function TheTeam(){
  const { t } = useI18n();
  return (
    <section id="team" className="section">
      <Container>
        <h2 className="h2 mb-12">{t("team.title")}</h2>
        <div className="team-grid">
          {TEAM.map(m=>(
            <article key={m.id} className="card team-card">
              <div className="team-photo mb-4">
                <img src={m.photo || "/placeholder.webp"} alt={m.name} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <h3 className="h3">{m.name}</h3>
              <p className="team-role mb-4">{m.role}</p>
              <p className="muted">{m.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
