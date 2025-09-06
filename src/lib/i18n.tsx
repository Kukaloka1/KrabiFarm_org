import React, { createContext, useContext, useMemo } from "react";

/** ───────── Types ───────── */
export type Lang = "en" | "th";
type Dict = Record<string, string>;

/** ───────── Messages (EN/TH) ─────────
 * Mantén UNA clave por idioma (nada de duplicados)
 */
const messages: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.problem": "Problem",
    "nav.solution": "Solution",
    "nav.impact": "Impact",
    "nav.team": "The Team",
    "nav.contact": "Contact",

    "hero.title": "Empowering Farmers Empowering Krabi Empowering Thailand",
    "hero.subtitle": "A practical, transparent and tech-driven initiative to boost local farmers’ income through direct sales, traceability and collaborative logistics — supported by community leadership.",
    "hero.cta.primary": "Explore the Initiative",
    "hero.cta.secondary": "Contact Us",

    "about.title": "About Us",
    "about.p1": "KrabiFarm is a civic-tech initiative designed to connect verified local farmers with buyers (B2C/B2B) through a modern digital layer: product profiles, instant QR payments, and traceability by lot.",
    "about.p2": "We collaborate with community leaders to align with Krabi’s development goals. The platform is independent and non-partisan; leadership embraces it as a concrete tool to uplift farmers.",

    "ps.title": "Problem & Our Approach",
    "ps.problem": "Farmers face unstable prices, limited bargaining power, and low visibility of product origin and quality.",
    "ps.solution": "We provide a digital marketplace backbone: direct sales, QR PromptPay, lot traceability (blockchain anchoring), and pooled logistics with local hubs.",

    "ps.problem.title": "Problem",
    "ps.solution.title": "Our Approach",

    "solution.title": "What KrabiFarm Brings",
    "solution.f1": "Direct sales & fairer margins",
    "solution.f2": "QR/PromptPay payments (TouristDigiPay-ready)",
    "solution.f3": "Lot-level traceability with QR",
    "solution.f4": "B2B flows for hotels & restaurants",
    "solution.f5": "Collaborative logistics (markets, hotels, airport hubs)",

    "impact.title": "Impact for Krabi",
    "impact.i1": "Higher & more stable income for farmers",
    "impact.i2": "Verified origin → trust for locals & tourists",
    "impact.i3": "Tourism demand captured responsibly",
    "impact.i4": "Operational efficiency through shared routes",
    "impact.i5": "Data to inform policy & programs",

    "team.title": "The Team",
    "cta.title": "Let’s Work Together",
    "cta.desc": "Partnerships, pilots, sponsorship, and institutional collaboration. We welcome conversations with local organizations, hotels, markets and public sector.",
    "cta.whatsapp": "WhatsApp us",
    "cta.email": "Email us",

    /* About (AOS section) */
    "about.subtitle": "We empower Krabi’s local farmers with a modern digital layer: direct sales, QR payments and lot-level traceability with collaborative logistics.",
    "about.kpis.farmers.value": "100+",
    "about.kpis.farmers.label": "Local farmers",
    "about.kpis.trace.value": "QR",
    "about.kpis.trace.label": "Traceability",
    "about.kpis.logistics.value": "Logistics",
    "about.kpis.logistics.label": "Cold chain / last mile",
    "about.features.fair.title": "Fair price to producers",
    "about.features.fair.desc": "Cut abusive middlemen so more revenue reaches the field.",
    "about.features.quality.title": "Trust & quality",
    "about.features.quality.desc": "QR-labeled lots and good practices build confidence.",
    "about.features.market.title": "Local & global markets",
    "about.features.market.desc": "From Krabi to the world: B2B and retail-ready catalog.",
    "about.features.training.title": "Community & training",
    "about.features.training.desc": "Ongoing support in digital tools and commercialization.",
    "about.cta.text": "Want to list your production or collaborate with KrabiFarm?",
    "about.cta.button": "Let’s talk"
  },
  th: {
    "nav.about": "เกี่ยวกับเรา",
    "nav.problem": "ปัญหา",
    "nav.solution": "แนวทางแก้ไข",
    "nav.impact": "ผลลัพธ์",
    "nav.team": "ทีมงาน",
    "nav.contact": "ติดต่อ",

    "hero.title": "เสริมพลังเกษตรกร เสริมพลังจังหวัดกระบี่ เสริมพลังประเทศไทย",
    "hero.subtitle": "โครงการที่โปร่งใสและขับเคลื่อนด้วยเทคโนโลยี เพื่อเพิ่มรายได้ให้เกษตรกรผ่านการขายตรง การตรวจสอบย้อนกลับ และโลจิสติกส์แบบร่วมมือ — พร้อมแรงสนับสนุนจากผู้นำชุมชน",
    "hero.cta.primary": "สำรวจโครงการ",
    "hero.cta.secondary": "ติดต่อเรา",

    "about.title": "เกี่ยวกับเรา",
    "about.p1": "KrabiFarm คือ civic-tech ที่เชื่อมเกษตรกรท้องถิ่นที่ตรวจสอบแล้วกับผู้ซื้อ (B2C/B2B) ผ่านชั้นดิจิทัลที่ทันสมัย: โปรไฟล์สินค้า การชำระเงินด้วย QR และการตรวจสอบย้อนกลับตามล็อต",
    "about.p2": "เราร่วมมือกับผู้นำชุมชนเพื่อสอดคล้องกับเป้าหมายการพัฒนาจังหวัด แพลตฟอร์มเป็นอิสระและไม่ฝักใฝ่ฝ่ายใด โดยผู้นำชุมชนสนับสนุนในฐานะเครื่องมือที่เป็นรูปธรรมเพื่อยกระดับเกษตรกร",

    "ps.title": "ปัญหา & แนวทางของเรา",
    "ps.problem": "เกษตรกรเผชิญราคาที่ผันผวน อำนาจต่อรองต่ำ และการมองเห็นแหล่งที่มา/คุณภาพที่จำกัด",
    "ps.solution": "เราจัดให้มีโครงสร้างดิจิทัลของมาร์เก็ตเพลส: การขายตรง ชำระด้วย QR PromptPay การตรวจสอบย้อนกลับระดับล็อต (บันทึกบนบล็อกเชน) และโลจิสติกส์ร่วมกับฮับท้องถิ่น",

    "ps.problem.title": "ปัญหา",
    "ps.solution.title": "แนวทางของเรา",

    "solution.title": "KrabiFarm มอบอะไร",
    "solution.f1": "ขายตรง & ส่วนแบ่งที่เป็นธรรม",
    "solution.f2": "ชำระเงินด้วย QR/PromptPay (พร้อม TouristDigiPay)",
    "solution.f3": "ตรวจสอบย้อนกลับระดับล็อตด้วย QR",
    "solution.f4": "โฟลว์ B2B สำหรับโรงแรม/ร้านอาหาร",
    "solution.f5": "โลจิสติกส์แบบร่วมมือ (ตลาด โรงแรม สนามบิน)",

    "impact.title": "ผลลัพธ์ต่อกระบี่",
    "impact.i1": "รายได้เกษตรกรสูงขึ้นและมั่นคงขึ้น",
    "impact.i2": "แหล่งที่มาตรวจสอบได้ → ความเชื่อมั่นของชุมชนและนักท่องเที่ยว",
    "impact.i3": "ดึงดีมานด์ท่องเที่ยวอย่างมีความรับผิดชอบ",
    "impact.i4": "ประสิทธิภาพปฏิบัติการผ่านเส้นทางร่วม",
    "impact.i5": "ข้อมูลเชิงประจักษ์เพื่อกำหนดนโยบาย",

    "team.title": "ทีมงาน",
    "cta.title": "มาร่วมมือกัน",
    "cta.desc": "เปิดรับการเป็นพาร์ทเนอร์ โครงการนำร่อง สปอนเซอร์ และความร่วมมือกับหน่วยงานท้องถิ่น โรงแรม ตลาด และภาครัฐ",
    "cta.whatsapp": "แชท WhatsApp",
    "cta.email": "อีเมล",

    /* About (AOS section) */
    "about.subtitle": "เราเสริมพลังให้เกษตรกรกระบี่ด้วยชั้นดิจิทัลสมัยใหม่: ขายตรง ชำระเงินด้วย QR และตรวจสอบย้อนกลับระดับล็อต พร้อมโลจิสติกส์แบบร่วมมือ",
    "about.kpis.farmers.value": "100+",
    "about.kpis.farmers.label": "เกษตรกรท้องถิ่น",
    "about.kpis.trace.value": "QR",
    "about.kpis.trace.label": "การตรวจสอบย้อนกลับ",
    "about.kpis.logistics.value": "โลจิสติกส์",
    "about.kpis.logistics.label": "ห่วงโซ่เย็น / ไมล์สุดท้าย",
    "about.features.fair.title": "ราคาที่เป็นธรรมต่อผู้ผลิต",
    "about.features.fair.desc": "ลดตัวกลางที่เอาเปรียบ เพื่อให้รายได้ถึงมือเกษตรกรมากขึ้น",
    "about.features.quality.title": "ความเชื่อมั่นและคุณภาพ",
    "about.features.quality.desc": "ระบุล็อตด้วย QR และแนวปฏิบัติที่ดีเพื่อความไว้ใจ",
    "about.features.market.title": "ตลาดท้องถิ่นและระดับโลก",
    "about.features.market.desc": "จากกระบี่สู่ตลาดโลก: รองรับทั้ง B2B และค้าปลีก",
    "about.features.training.title": "ชุมชนและการพัฒนา",
    "about.features.training.desc": "สนับสนุนอย่างต่อเนื่องด้านดิจิทัลและการทำตลาด",
    "about.cta.text": "อยากนำผลผลิตขึ้นแพลตฟอร์มหรือร่วมงานกับ KrabiFarm ไหม?",
    "about.cta.button": "คุยกันเลย"
  }
};

/** ───────── Context ───────── */
interface I18nValue { lang: Lang; t: (k: string) => string; }

const I18nCtx = createContext<I18nValue>({
  lang: "en",
  t: (k) => k
});

/** ───────── HMR-safe exports (named functions) ───────── */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const url = new URL(window.location.href);
  const q = (url.searchParams.get("lang") || "en").toLowerCase() as Lang;
  const lang: Lang = q === "th" ? "th" : "en";
  const dict = messages[lang];

  const t = useMemo(() => (key: string) => dict[key] ?? key, [dict]);
  const value = useMemo<I18nValue>(() => ({ lang, t }), [lang, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
