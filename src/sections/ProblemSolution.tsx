import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import probSvg from "@/assets/prob.svg";
import soluSvg from "@/assets/solu.svg";

export default function ProblemSolution(){
  const { t } = useI18n();
  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  return (
    <section id="problem" className="py-14 md:py-20">
      <Container>
        <h2 className="text-3xl md:text-[2rem] font-extrabold mb-5 text-slate-900" data-aos="fade-up">
          {t("ps.title")}
        </h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* PROBLEM */}
          <article className="p-[1px] rounded-2xl bg-gradient-to-br from-yellow-300/60 via-pink-300/50 to-sky-300/60" data-aos="fade-up" data-aos-delay="60">
            <div className="rounded-[20px] border border-black/10 bg-white p-5 grid grid-cols-[auto_1fr] items-center gap-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
              <div className="grid place-items-center">
                <div className="w-[92px] h-[92px] md:w-[104px] md:h-[104px] rounded-2xl grid place-items-center
                                bg-gradient-to-br from-yellow-300/60 via-pink-300/50 to-sky-300/60 border border-black/10">
                  <img src={probSvg} alt="" className="w-12 h-12 md:w-14 md:h-14" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg mb-1 text-slate-900">{t("ps.problem.title")}</h3>
                <p className="text-slate-600">{t("ps.problem")}</p>
              </div>
            </div>
          </article>

          {/* SOLUTION */}
          <article className="p-[1px] rounded-2xl bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-500/60" data-aos="fade-up" data-aos-delay="140">
            <div className="rounded-[20px] border border-black/10 bg-white p-5 grid grid-cols-[auto_1fr] items-center gap-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
              <div className="grid place-items-center">
                <div className="w-[92px] h-[92px] md:w-[104px] md:h-[104px] rounded-2xl grid place-items-center
                                bg-gradient-to-br from-emerald-300/60 via-sky-300/50 to-blue-500/60 border border-black/10">
                  <img src={soluSvg} alt="" className="w-12 h-12 md:w-14 md:h-14" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg mb-1 text-slate-900">{t("ps.solution.title")}</h3>
                <p className="text-slate-600">{t("ps.solution")}</p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

