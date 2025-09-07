import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";

/* ───────── SVGs decorativos (frutas) ───────── */
import fr1 from "@/assets/fr1.svg";
import fr2 from "@/assets/fr2.svg";
import fr3 from "@/assets/fr3.svg";
import fr4 from "@/assets/fr4.svg";
import fr5 from "@/assets/fr5.svg";
import fr6 from "@/assets/fr6.svg";

/* ───────── Fotos reales: todas en .jpeg ─────── */
import somchai from "@/assets/team/some.jpeg";
import antonio from "@/assets/team/anto.jpeg";
import tety from "@/assets/team/tety.jpeg";
import natty from "@/assets/team/natty.jpeg";

/* ───────── Types ───────── */
type Member = {
  name: string;
  roleKey: string;   // i18n: team.role.<roleKey>
  descKey: string;   // i18n: team.desc.<roleKey>
  photo?: string;
  fruit: string;     // svg decorativo
};

/* ───────── Data (Team) ─────────
   Nota: fotos activadas (formato .jpeg) y svg asignado a cada uno.
---------------------------------------------------------------- */
const TEAM: Member[] = [
  { name: "Somchai",                 roleKey: "leader",     descKey: "leader",     fruit: fr1, photo: somchai },
  { name: "Antonio Fernández Ríos",  roleKey: "architect",  descKey: "architect",  fruit: fr2, photo: antonio },
  { name: "Natty",                   roleKey: "ops",        descKey: "ops",        fruit: fr3, photo: natty },
  { name: "Tety",                    roleKey: "logistics",  descKey: "logistics",  fruit: fr4, photo: tety },
  { name: "Preecha",                 roleKey: "tech",       descKey: "tech",       fruit: fr5 },
  { name: "Dao",                     roleKey: "community",  descKey: "community",  fruit: fr6 },
];

/* ───────── Utils ───────── */
function initials(name: string){
  return name
    .split(" ")
    .filter(Boolean)
    .map(n => n[0]?.toUpperCase() ?? "")
    .slice(0,2)
    .join("");
}

/* ───────── Component ───────── */
export default function Team(){
  const { t } = useI18n();

  useEffect(()=>{ 
    AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); 
  },[]);

  return (
    <section id="team" className="py-16 md:py-24">
      <Container>
        {/* Header de sección */}
        <header className="mb-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900">{t("team.title")}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t("team.subtitle") || ""}</p>
        </header>

        {/* Grid de tarjetas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i)=>(
            <article
              key={m.name}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-400/60"
              data-aos="fade-up"
              data-aos-delay={80 + i*100}
            >
              <div className="relative rounded-[20px] border border-black/10 bg-white p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
                
                {/* Foto centrada o iniciales (placeholder)
                   - Contenedor con relación 4/3
                   - La imagen ocupa todo y se centra perfectamente
                */}
                <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] mb-4">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full grid place-items-center">
                      <div className="w-16 h-16 rounded-xl bg-slate-900 text-white grid place-items-center text-2xl font-black">
                        {initials(m.name)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Nombre + fruta (svg) alineados en línea, al final del nombre */}
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">{m.name}</h3>
                  <img
                    src={m.fruit}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 shrink-0 align-middle translate-y-[1px]"
                  />
                </div>

                {/* Rol y descripción */}
                <p className="text-blue-600 font-semibold">{t(`team.role.${m.roleKey}`)}</p>
                <p className="text-slate-600 text-sm mt-2">{t(`team.desc.${m.descKey}`)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
