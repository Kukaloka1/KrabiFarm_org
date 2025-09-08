import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { CircleDollarSign, ShieldCheck, Globe, Truck, BarChart3 } from "lucide-react";

type Item = { key: string; Icon: React.ComponentType<any>; dkey: string };

export default function Impact(){
  const { t, lang } = useI18n() as any;
  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  const ITEMS: Item[] = [
    { key: "impact.i1", Icon: CircleDollarSign, dkey: "impact.d1" },
    { key: "impact.i2", Icon: ShieldCheck,      dkey: "impact.d2" },
    { key: "impact.i3", Icon: Globe,            dkey: "impact.d3" },
    { key: "impact.i4", Icon: Truck,            dkey: "impact.d4" },
    { key: "impact.i5", Icon: BarChart3,        dkey: "impact.d5" },
  ];

  // Fallbacks para nuevas descripciones y KPIs (por si aún no están en i18n)
  const FALLBACK: any = {
    en: {
      d1: "More predictable, higher margins via direct sales, pooled routes and demand aggregation.",
      d2: "Traceability and verified origin build trust for locals and visitors.",
      d3: "Capture tourism demand responsibly through clear sourcing and fair pricing.",
      d4: "Shared logistics reduce waste and empty runs; better route density.",
      d5: "Operational data to inform public programs and targeted support."
    },
    th: {
      d1: "รายได้คาดการณ์ได้และสูงขึ้น ผ่านการขายตรง เส้นทางร่วม และการรวมดีมานด์",
      d2: "การตรวจสอบย้อนกลับและแหล่งที่มาตรวจสอบได้ สร้างความเชื่อมั่น",
      d3: "ดึงดีมานด์ท่องเที่ยวอย่างรับผิดชอบ ด้วยแหล่งที่มาชัดเจนและราคายุติธรรม",
      d4: "โลจิสติกส์ร่วม ลดความสูญเปล่าและเที่ยววิ่งเปล่า หนาแน่นเส้นทางดีขึ้น",
      d5: "ข้อมูลปฏิบัติการเพื่อใช้กำหนดนโยบายและการสนับสนุนที่ตรงจุด"
    }
  };

  const KPIS = [
    { k: "impact.kpi1", fb: lang==="th" ? "+30% รายได้เฉลี่ย" : "+30% avg. income" },
    { k: "impact.kpi2", fb: lang==="th" ? "100% ตรวจสอบย้อนกลับ" : "100% lot traceability" },
    { k: "impact.kpi3", fb: lang==="th" ? "−20% ของเสียโลจิสติกส์" : "−20% logistics waste" },
  ];

  return (
    <section id="impact" className="relative overflow-hidden py-16 md:py-20">
      {/* Blobs decorativos para diferenciar la sección */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 h-60
                                  bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 w-[420px] h-[420px] rounded-full blur-3xl
                                  bg-gradient-to-br from-emerald-200/40 via-sky-200/40 to-blue-200/40" />

      <Container>
        <div className="grid gap-10 items-start lg:grid-cols-[5fr_7fr]">
          {/* LADO IZQ: título + descripción + KPIs */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-[2rem] font-extrabold text-slate-900">
              {t("impact.title")}
            </h2>

            {/* Descripción ampliada (dos párrafos cortos) */}
            <p className="mt-3 text-slate-600 max-w-[62ch]">
              {/* usa tus textos actuales como contexto; añadimos narrativa */}
              {t("impact.blurb1") !== "impact.blurb1"
                ? t("impact.blurb1")
                : (lang==="th"
                    ? "KrabiFarm ยกระดับรายได้ ความเชื่อมั่น และประสิทธิภาพ ด้วยการขายตรง QR และโลจิสติกส์ร่วม"
                    : "KrabiFarm raises income, trust and efficiency through direct sales, QR payments and shared logistics.")}
            </p>
            <p className="mt-2 text-slate-600 max-w-[62ch]">
              {t("impact.blurb2") !== "impact.blurb2"
                ? t("impact.blurb2")
                : (lang==="th"
                    ? "ข้อมูลปฏิบัติการที่โปร่งใสช่วยให้ผู้นำชุมชนและภาครัฐตัดสินใจได้ดีขึ้น พร้อมขยายผลไปยังอำเภอ/จังหวัดอื่น"
                    : "Transparent operational data informs community leadership and public programs, with a path to scale across districts.")}
            </p>

            {/* KPIs chips */}
            <ul className="mt-5 flex flex-wrap gap-2.5" data-aos="fade-up" data-aos-delay="120">
              {KPIS.map(({k, fb})=>(
                <li key={k}
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur
                               px-3.5 py-2 shadow-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
                  <span className="font-semibold text-slate-900">
                    {t(k) !== k ? t(k) : fb}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* LADO DER: Timeline “steps” con icono y descripción */}
          <div className="relative" data-aos="fade-left" data-aos-delay="80">
            {/* Línea vertical */}
            <div aria-hidden className="absolute left-4 top-3 bottom-3 w-[2px] bg-gradient-to-b from-slate-300 to-transparent" />
            <div className="grid gap-4">
              {ITEMS.map(({key, Icon, dkey}, i)=>(
                <div key={key}
                     className="relative pl-10">
                  {/* nodo */}
                  <span className="absolute left-[10px] top-5 inline-block w-3.5 h-3.5 rounded-full
                                   bg-gradient-to-r from-emerald-400 to-sky-400 ring-2 ring-white" />
                  {/* card */}
                  <article
                    className="group rounded-2xl border border-black/10 bg-white/90 backdrop-blur
                               p-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5">
                    <div className="flex items-start gap-3">
                      <div className="w-14 h-14 rounded-xl grid place-items-center shrink-0
                                      bg-gradient-to-br from-emerald-300/30 via-sky-300/25 to-blue-400/30 border border-black/10">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        {/* texto principal (tus bullets actuales) */}
                        <h3 className="font-bold tracking-[-0.01em] text-slate-900">
                          {t(key)}
                        </h3>
                        {/* descripción ampliada */}
                        <p className="mt-1 text-slate-600">
                          {t(dkey) !== dkey ? t(dkey) : FALLBACK[lang][dkey.split(".").pop() as string]}
                        </p>

                        {/* micro-sparkline decorativa para diferenciar visualmente */}
                        <svg viewBox="0 0 120 20" className="mt-3 w-full h-5 overflow-visible">
                          <defs>
                            <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#2563eb" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,15 C10,14 20,6 30,8 C40,10 50,4 60,6 C70,8 80,3 90,7 C100,11 110,9 120,5"
                            fill="none"
                            stroke={`url(#grad-${i})`}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


