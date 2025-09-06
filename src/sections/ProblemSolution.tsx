import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import probSvg from "@/assets/prob.svg";
import soluSvg from "@/assets/solu.svg";

export default function ProblemSolution(){
  const { t } = useI18n();

  useEffect(()=>{
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 80 });
  },[]);

  return (
    <section id="problem" className="section ps">
      <Container>
        <h2 className="h2 ps__title" data-aos="fade-up">{t("ps.title")}</h2>

        <div className="grid-responsive-2 ps-grid">
          {/* PROBLEM */}
          <article className="gwrap ps-card" data-aos="fade-up" data-aos-delay="60">
            <div className="surface ps-item">
              <div className="ps-figure">
                <div className="ps-badge">
                  <img src={probSvg} alt="" className="ps-svg" />
                </div>
              </div>
              <div className="ps-body">
                <h3 className="h3">{t("ps.problem.title")}</h3>
                <p className="muted">{t("ps.problem")}</p>
              </div>
            </div>
          </article>

          {/* SOLUTION */}
          <article className="gwrap ps-card" data-aos="fade-up" data-aos-delay="140">
            <div className="surface ps-item">
              <div className="ps-figure">
                <div className="ps-badge is-solution">
                  <img src={soluSvg} alt="" className="ps-svg" />
                </div>
              </div>
              <div className="ps-body">
                <h3 className="h3">{t("ps.solution.title")}</h3>
                <p className="muted">{t("ps.solution")}</p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

