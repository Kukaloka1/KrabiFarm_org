import { useEffect } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";

/* ───────── Icons (SVG de assets) ───────── */
import icB2B from "@/assets/b2b.svg";
import icDirect from "@/assets/direct_sales.svg";
import icLogistics from "@/assets/logistics.svg";
import icPin from "@/assets/pin.svg";
import icTrace from "@/assets/trace.svg";
import icQR from "@/assets/qr.svg";

export default function Solution(){
  const { t, lang } = useI18n();
  useEffect(()=>{ AOS.init({ duration:700, easing:"ease-out-cubic", once:true, offset:80 }); },[]);

  /* ── Título + Subtítulo (fallback si falta en i18n) ── */
  const subtitleRaw = t("solution.subtitle");
  const SUB_FALLBACK = {
    en: "A concrete, end-to-end backbone: direct sales with instant QR payments, lot-level traceability, B2B flows for hospitality and pooled logistics with local hubs.",
    th: "โครงสร้างพื้นฐานครบวงจร: ขายตรงพร้อมชำระเงินผ่าน QR การตรวจสอบย้อนกลับระดับล็อต โฟลว์ B2B สำหรับภาคโรงแรม/ร้านอาหาร และโลจิสติกส์ร่วมกับฮับท้องถิ่น"
  };
  const subtitle = subtitleRaw !== "solution.subtitle" ? subtitleRaw : (lang === "th" ? SUB_FALLBACK.th : SUB_FALLBACK.en);

  /* ── Labels (i18n) + Descripciones (fallback locales EN/TH) ── */
  const FALLBACK_LABELS: Record<string, {en:string; th:string}> = {
    "solution.f6": { en: "Local hubs & pick-up points", th: "จุดรับสินค้า/ฮับท้องถิ่น" }
  };

  const DESC: Record<string, {en:string; th:string; icon: string; alt: string}> = {
    "solution.f1": {
      en: "Producers sell directly with fairer margins and price transparency.",
      th: "เกษตรกรขายตรง ได้ส่วนแบ่งยุติธรรม โปร่งใสราคา",
      icon: icDirect, alt: "Direct sales"
    },
    "solution.f2": {
      en: "Instant QR/PromptPay; TouristDigiPay-ready for travelers and events.",
      th: "ชำระเงินทันทีผ่าน QR/PromptPay และรองรับ TouristDigiPay",
      icon: icQR, alt: "QR / PromptPay"
    },
    "solution.f3": {
      en: "Each lot labeled with a QR trace: origin, handling and quality signals.",
      th: "แต่ละล็อตมี QR เพื่อตรวจสอบย้อนกลับ แหล่งที่มาและคุณภาพ",
      icon: icTrace, alt: "Traceability"
    },
    "solution.f4": {
      en: "B2B requests, volume pricing and scheduled deliveries for hotels/HoReCa.",
      th: "คำสั่งซื้อ B2B ราคาปริมาณ และนัดส่งสำหรับโรงแรม/HoReCa",
      icon: icB2B, alt: "B2B for hospitality"
    },
    "solution.f5": {
      en: "Shared routes and partner carriers to cut costs and improve reliability.",
      th: "เส้นทางร่วมและพาร์ทเนอร์ขนส่ง ลดต้นทุน เพิ่มความน่าเชื่อถือ",
      icon: icLogistics, alt: "Collaborative logistics"
    },
    "solution.f6": {
      en: "Local hubs/pick-up points across Krabi for faster, cheaper last-mile.",
      th: "ฮับ/จุดรับในพื้นที่ทั่วกระบี่ เพื่อลดต้นทุนและเร็วขึ้น",
      icon: icPin, alt: "Local hubs"
    }
  };

  const KEYS = ["solution.f1","solution.f2","solution.f3","solution.f4","solution.f5","solution.f6"];

  return (
    <section id="solution" className="py-16 md:py-20">
      <Container>
        {/* Title + subtitle */}
        <header className="mb-8" data-aos="fade-up">
          <h2 className="text-3xl md:text-[2rem] font-extrabold tracking-tight text-slate-900">
            {t("solution.title")}
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            {subtitle}
          </p>
        </header>

        {/* Grid (cards con estilo distinto al resto) */}
        <ul
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {KEYS.map((k, i) => {
            const labelRaw = t(k);
            const label = labelRaw !== k ? labelRaw : (FALLBACK_LABELS[k]?.[lang] ?? labelRaw);
            const meta = DESC[k];
            const desc = lang === "th" ? meta.th : meta.en;

            return (
              <li key={k}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
                {/* Acento lateral para diferenciar estilo */}
                <div className="h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500" />

                <div className="p-5 flex items-start gap-4">
                  {/* Icono desde assets (SVG) */}
                  <div className="shrink-0 rounded-xl ring-1 ring-slate-200 p-3 bg-slate-50 group-hover:bg-white transition">
                    <img src={meta.icon} alt={meta.alt} className="w-15 h-15" />
                  </div>

                  {/* Texto */}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 tracking-tight">
                      {label}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

