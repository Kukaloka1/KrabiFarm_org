import React, { createContext, useContext, useMemo } from 'react'

/* ──────────────────────────────────────────────────────────────
 * i18n — Proveedor minimalista (EN/TH)
 * - Mantén una sola clave por idioma (evita duplicados)
 * - Las secciones están agrupadas y comentadas
 * - EN y TH están alineados 1:1 en las claves
 * ────────────────────────────────────────────────────────────── */

/** ───────── Types ───────── */
export type Lang = 'en' | 'th'
type Dict = Record<string, string>

/** ───────── Messages (EN/TH) ───────── */
const messages: Record<Lang, Dict> = {
  en: {
    /* ── NAV ─────────────────────────────────────────────── */
    'nav.about': 'About',
    'nav.problem': 'Problem',
    'nav.solution': 'Solution',
    'nav.impact': 'Impact',
    'nav.team': 'The Team',
    'nav.contact': 'Contact',

    /* ── HERO ────────────────────────────────────────────── */
    'hero.title': 'Empowering local Farmers, Krabi and Thailand',
    'hero.subtitle':
      'A practical, transparent and tech-driven initiative to boost local farmers’ income through direct sales, traceability and collaborative logistics — supported by community leadership.',
    'hero.cta.primary': 'Explore the Initiative',
    'hero.cta.secondary': 'Contact Us',

    /* ── ABOUT ───────────────────────────────────────────── */
    'about.title': 'About Us',
    'about.p1':
      'KrabiFarm is a civic-tech initiative designed to connect verified local farmers with buyers (B2C/B2B) through a modern digital layer: product profiles, instant QR payments, and traceability by lot.',
    'about.p2':
      'We collaborate with community leaders to align with Krabi’s development goals. The platform is independent and non-partisan; leadership embraces it as a concrete tool to uplift farmers.',
    'about.subtitle':
      'We empower Krabi’s local farmers with a modern digital layer: direct sales, QR payments and lot-level traceability with collaborative logistics.',
    /* KPIs */
    'about.kpis.farmers.value': '100+',
    'about.kpis.farmers.label': 'Local farmers',
    'about.kpis.trace.value': 'QR',
    'about.kpis.trace.label': 'Traceability',
    'about.kpis.logistics.value': 'Logistics',
    'about.kpis.logistics.label': 'Cold chain / last mile',
    /* Features */
    'about.features.fair.title': 'Fair price to producers',
    'about.features.fair.desc': 'Cut abusive middlemen so more revenue reaches the field.',
    'about.features.quality.title': 'Trust & quality',
    'about.features.quality.desc': 'QR-labeled lots and good practices build confidence.',
    'about.features.market.title': 'Local & global markets',
    'about.features.market.desc': 'From Krabi to the world: B2B and retail-ready catalog.',
    'about.features.training.title': 'Community & training',
    'about.features.training.desc': 'Ongoing support in digital tools and commercialization.',
    /* CTA About */
    'about.cta.text': 'Want to list your production or collaborate with KrabiFarm?',
    'about.cta.button': 'Let’s talk',

    /* ── PROBLEM / SOLUTION ─────────────────────────── */
    'ps.title': 'Problem & Our Approach',
    'ps.problem':
      'Farmers face unstable prices, limited bargaining power, and low visibility of product origin and quality.',
    'ps.solution':
      'We provide a digital marketplace backbone: direct sales, QR PromptPay, lot traceability (blockchain anchoring), and pooled logistics with local hubs.',
    'ps.problem.title': 'Problem',
    'ps.solution.title': 'Our Approach',

    /* ── SOLUTION (FEATURES RESUMEN) ─────────────────────── */
    'solution.title': 'What KrabiFarm Brings',
    'solution.f1': 'Direct sales & fairer margins',
    'solution.f2': 'QR/PromptPay payments (TouristDigiPay-ready)',
    'solution.f3': 'Lot-level traceability with QR',
    'solution.f4': 'B2B flows for hotels & restaurants',
    'solution.f5': 'Collaborative logistics (markets, hotels, airport hubs)',

    /* ── IMPACT ──────────────────────────────────────────── */
    'impact.title': 'Impact for Krabi',
    'impact.i1': 'Higher & more stable income for farmers',
    'impact.i2': 'Verified origin → trust for locals & tourists',
    'impact.i3': 'Tourism demand captured responsibly',
    'impact.i4': 'Operational efficiency through shared routes',
    'impact.i5': 'Data to inform policy & programs',

    /* ── TEAM ────────────────────────────────────────────── */
    'team.title': 'The Team',
    'team.subtitle':
      'Core group blending community leadership, tech and operations — currently building the platform and preparing for beta launch.',

    'team.role.leader': 'Community Leader',
    'team.role.architect': 'Project Architect & Non-profit Support',
    'team.role.ops': 'Operations',
    'team.role.logistics': 'Logistics',
    'team.role.tech': 'Tech Lead',
    'team.role.community': 'Community',

    /* Descriptions equilibradas */
    'team.desc.leader':
      'Political leader and public voice guiding KrabiFarm’s vision; co-initiator championing Krabi’s farmers and regional agro growth. Somchai brings the original vision and idea of supporting Krabi’s community and farmers as part of his political mission.',
    'team.desc.architect':
      'Non-profit supporter and digital architect of KrabiFarm, ensuring strategy and platform design. Antonio contributes his expertise with no commercial gain, envisioning a future startup that delivers tangible benefits to the region of Krabi and Thailand.',
    'team.desc.ops':
      'Operations strategist ensuring daily execution, partner coordination, and workflow discipline. Natty bridges field realities with KrabiFarm’s digital framework and translates local needs into action plans.',
    'team.desc.logistics':
      'Logistics architect building reliable cold-chain and last-mile delivery networks. Tety secures carrier alliances and market partnerships, strengthening the project’s capacity to scale sustainably.',
    'team.desc.tech':
      'Responsible for the digital platform and technical innovation, guiding software development and integrations to keep KrabiFarm modern and secure.',
    'team.desc.community':
      'Connects directly with farmers, builds trust on the ground, and cultivates a strong community network to anchor KrabiFarm’s impact.',

    /* ── CONTACT ─────────────────────────────────────────── */
    'contact.title': 'Contact',
    'contact.subtitle': 'Partnerships, pilots or media — let’s talk.',
    'contact.channels.title': 'Quick channels',
    'contact.channels.desc': 'Choose the fastest way to reach us.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send email',
    'contact.mail.subject': 'KrabiFarm — Contact',
    'contact.mail.bodyPrefix': 'New message from the website',
    'contact.notice': 'We usually reply within 1–2 business days.',
    'contact.bit.desc': 'Strategic technology partner.',

    /* ── GLOBAL CTA (footer) ─────────────────────────────── */
    'cta.desc':
      'A practical, transparent and tech-driven initiative to boost local farmers’ income through direct sales, traceability and collaborative logistics — supported by community leadership.',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.email': 'Email us',

    /* ── SITE / STATUS ───────────────────────────────────── */
    'site.status': '🚧 Under construction — coming soon'
  },

  th: {
    /* ── NAV ─────────────────────────────────────────────── */
    'nav.about': 'เกี่ยวกับเรา',
    'nav.problem': 'ปัญหา',
    'nav.solution': 'แนวทางแก้ไข',
    'nav.impact': 'ผลลัพธ์',
    'nav.team': 'ทีมงาน',
    'nav.contact': 'ติดต่อ',

    /* ── HERO ────────────────────────────────────────────── */
    'hero.title': 'เสริมพลังเกษตรกร เสริมพลังจังหวัดกระบี่ เสริมพลังประเทศไทย',
    'hero.subtitle':
      'โครงการที่โปร่งใสและขับเคลื่อนด้วยเทคโนโลยี เพื่อเพิ่มรายได้ให้เกษตรกรผ่านการขายตรง การตรวจสอบย้อนกลับ และโลจิสติกส์แบบร่วมมือ — พร้อมแรงสนับสนุนจากผู้นำชุมชน',
    'hero.cta.primary': 'สำรวจโครงการ',
    'hero.cta.secondary': 'ติดต่อเรา',

    /* ── ABOUT ───────────────────────────────────────────── */
    'about.title': 'เกี่ยวกับเรา',
    'about.p1':
      'KrabiFarm คือ civic-tech ที่เชื่อมเกษตรกรท้องถิ่นที่ตรวจสอบแล้วกับผู้ซื้อ (B2C/B2B) ผ่านชั้นดิจิทัลที่ทันสมัย: โปรไฟล์สินค้า การชำระเงินด้วย QR และการตรวจสอบย้อนกลับตามล็อต',
    'about.p2':
      'เราร่วมมือกับผู้นำชุมชนเพื่อสอดคล้องกับเป้าหมายการพัฒนาจังหวัด แพลตฟอร์มเป็นอิสระและไม่ฝักใฝ่ฝ่ายใด โดยผู้นำชุมชนสนับสนุนในฐานะเครื่องมือที่เป็นรูปธรรมเพื่อยกระดับเกษตรกร',
    'about.subtitle':
      'เราเสริมพลังให้เกษตรกรกระบี่ด้วยชั้นดิจิทัลสมัยใหม่: ขายตรง ชำระเงินด้วย QR และตรวจสอบย้อนกลับระดับล็อต พร้อมโลจิสติกส์แบบร่วมมือ',
    /* KPIs */
    'about.kpis.farmers.value': '100+',
    'about.kpis.farmers.label': 'เกษตรกรท้องถิ่น',
    'about.kpis.trace.value': 'QR',
    'about.kpis.trace.label': 'การตรวจสอบย้อนกลับ',
    'about.kpis.logistics.value': 'โลจิสติกส์',
    'about.kpis.logistics.label': 'ห่วงโซ่เย็น / ไมล์สุดท้าย',
    /* Features */
    'about.features.fair.title': 'ราคาที่เป็นธรรมต่อผู้ผลิต',
    'about.features.fair.desc': 'ลดตัวกลางที่เอาเปรียบ เพื่อให้รายได้ถึงมือเกษตรกรมากขึ้น',
    'about.features.quality.title': 'ความเชื่อมั่นและคุณภาพ',
    'about.features.quality.desc': 'ระบุล็อตด้วย QR และแนวปฏิบัติที่ดีเพื่อความไว้ใจ',
    'about.features.market.title': 'ตลาดท้องถิ่นและระดับโลก',
    'about.features.market.desc': 'จากกระบี่สู่ตลาดโลก: รองรับทั้ง B2B และค้าปลีก',
    'about.features.training.title': 'ชุมชนและการพัฒนา',
    'about.features.training.desc': 'สนับสนุนอย่างต่อเนื่องด้านดิจิทัลและการทำตลาด',
    /* CTA About */
    'about.cta.text': 'อยากนำผลผลิตขึ้นแพลตฟอร์มหรือร่วมงานกับ KrabiFarm ไหม?',
    'about.cta.button': 'คุยกันเลย',

    /* ── PROBLEM / SOLUTION ─────────────────────────── */
    'ps.title': 'ปัญหา & แนวทางของเรา',
    'ps.problem': 'เกษตรกรเผชิญราคาที่ผันผวน อำนาจต่อรองต่ำ และการมองเห็นแหล่งที่มา/คุณภาพที่จำกัด',
    'ps.solution':
      'เราจัดให้มีโครงสร้างดิจิทัลของมาร์เก็ตเพลส: การขายตรง ชำระด้วย QR PromptPay การตรวจสอบย้อนกลับระดับล็อต (บันทึกบนบล็อกเชน) และโลจิสติกส์ร่วมกับฮับท้องถิ่น',
    'ps.problem.title': 'ปัญหา',
    'ps.solution.title': 'แนวทางของเรา',

    /* ── SOLUTION (FEATURES RESUMEN) ─────────────────────── */
    'solution.title': 'KrabiFarm มอบอะไร',
    'solution.f1': 'ขายตรง & ส่วนแบ่งที่เป็นธรรม',
    'solution.f2': 'ชำระเงินด้วย QR/PromptPay (พร้อม TouristDigiPay)',
    'solution.f3': 'ตรวจสอบย้อนกลับระดับล็อตด้วย QR',
    'solution.f4': 'โฟลว์ B2B สำหรับโรงแรม/ร้านอาหาร',
    'solution.f5': 'โลจิสติกส์แบบร่วมมือ (ตลาด โรงแรม สนามบิน)',

    /* ── IMPACT ──────────────────────────────────────────── */
    'impact.title': 'ผลลัพธ์ต่อกระบี่',
    'impact.i1': 'รายได้เกษตรกรสูงขึ้นและมั่นคงขึ้น',
    'impact.i2': 'แหล่งที่มาตรวจสอบได้ → ความเชื่อมั่นของชุมชนและนักท่องเที่ยว',
    'impact.i3': 'ดึงดีมานด์ท่องเที่ยวอย่างมีความรับผิดชอบ',
    'impact.i4': 'ประสิทธิภาพปฏิบัติการผ่านเส้นทางร่วม',
    'impact.i5': 'ข้อมูลเชิงประจักษ์เพื่อกำหนดนโยบาย',

    /* ── TEAM ────────────────────────────────────────────── */
    'team.title': 'ทีมงาน',
    'team.subtitle':
      'ทีมหลักที่ผสานผู้นำชุมชน เทคโนโลยี และปฏิบัติการ — ขณะนี้กำลังสร้างแพลตฟอร์มและเตรียมเปิดตัวเวอร์ชันทดลอง (เบต้า)',

    'team.role.leader': 'ผู้นำชุมชน',
    'team.role.architect': 'สถาปนิโครงการ & ผู้สนับสนุนแบบไม่แสวงหากำไร',
    'team.role.ops': 'ปฏิบัติการ',
    'team.role.logistics': 'โลจิสติกส์',
    'team.role.tech': 'หัวหน้าเทคโนโลยี',
    'team.role.community': 'ชุมชน',

    /* Descriptions equilibradas */
    'team.desc.leader':
      'ผู้นำทางการเมืองและกระบอกเสียงสาธารณะ นำวิสัยทัศน์ของ KrabiFarm พร้อมทั้งเป็นผู้ร่วมริเริ่มแนวคิดในการสนับสนุนเกษตรกรกระบี่และการเติบโตภาคเกษตรของภูมิภาค Somchai นำวิสัยทัศน์และแนวคิดดั้งเดิมในการสนับสนุนชุมชนและเกษตรกรกระบี่ในฐานะพันธกิจทางการเมืองของเขา',
    'team.desc.architect':
      'ผู้สนับสนุนแบบไม่แสวงหากำไรและสถาปนิกดิจิทัลของ KrabiFarm ทำหน้าที่ออกแบบกลยุทธ์และโครงสร้างแพลตฟอร์ม Antonio ใช้ความเชี่ยวชาญโดยไม่มีผลประโยชน์เชิงพาณิชย์ มุ่งหวังอนาคตที่จะพัฒนาเป็นสตาร์ทอัพที่สร้างประโยชน์ที่จับต้องได้ให้กับภูมิภาค',
    'team.desc.ops':
      'นักกลยุทธ์ปฏิบัติการที่ดูแลการทำงานประจำวัน การประสานงานกับพาร์ทเนอร์ และวินัยของเวิร์กโฟลว์ Natty เชื่อมโยงความเป็นจริงในภาคสนามเข้ากับโครงสร้างดิจิทัลของ KrabiFarm และแปลงความต้องการท้องถิ่นเป็นแผนปฏิบัติการ',
    'team.desc.logistics':
      'สถาปนิกโลจิสติกส์ที่สร้างเครือข่ายการขนส่งเย็นและการจัดส่งไมล์สุดท้ายที่น่าเชื่อถือ Tety สร้างพันธมิตรผู้ขนส่งและความร่วมมือกับตลาด เสริมสร้างศักยภาพของโครงการให้สามารถขยายได้อย่างยั่งยืน',
    'team.desc.tech':
      'รับผิดชอบแพลตฟอร์มดิจิทัลและนวัตกรรมทางเทคนิค กำหนดทิศทางการพัฒนาและการเชื่อมต่อระบบเพื่อให้ KrabiFarm ทันสมัยและปลอดภัย',
    'team.desc.community':
      'เชื่อมโยงโดยตรงกับเกษตรกร สร้างความไว้วางใจในพื้นที่ และสร้างเครือข่ายชุมชนที่เข้มแข็งเพื่อยึดโยงผลลัพธ์ของ KrabiFarm',

    /* ── CONTACT ─────────────────────────────────────────── */
    'contact.title': 'ติดต่อเรา',
    'contact.subtitle': 'ต้องการพาร์ทเนอร์ โครงการนำร่อง หรือสื่อ? มาคุยกัน',
    'contact.channels.title': 'ช่องทางด่วน',
    'contact.channels.desc': 'เลือกวิธีที่รวดเร็วที่สุดในการติดต่อเรา',
    'contact.form.name': 'ชื่อของคุณ',
    'contact.form.email': 'อีเมล',
    'contact.form.message': 'ข้อความ',
    'contact.form.send': 'ส่งอีเมล',
    'contact.mail.subject': 'KrabiFarm — ติดต่อจากเว็บไซต์',
    'contact.mail.bodyPrefix': 'ข้อความใหม่จากเว็บไซต์',
    'contact.notice': 'ปกติเราตอบกลับภายใน 1–2 วันทำการ',
    'contact.bit.desc': 'พาร์ทเนอร์เทคโนโลยีเชิงกลยุทธ์',

    /* ── GLOBAL CTA (footer) ─────────────────────────────── */
    'cta.desc':
      'โครงการที่โปร่งใสและขับเคลื่อนด้วยเทคโนโลยี เพื่อเพิ่มรายได้ให้เกษตรกรผ่านการขายตรง การตรวจสอบย้อนกลับ และโลจิสติกส์แบบร่วมมือ — พร้อมแรงสนับสนุนจากผู้นำชุมชน',
    'cta.whatsapp': 'คุยผ่าน WhatsApp',
    'cta.email': 'ส่งอีเมลหาเรา',

    /* ── SITE / STATUS ───────────────────────────────────── */
    'site.status': '🚧 อยู่ระหว่างพัฒนา — เวอร์ชันเบต้าจะเปิดให้ใช้งานเร็ว ๆ นี้'
  }
}

/** ───────── Context ───────── */
interface I18nValue {
  lang: Lang
  t: (k: string) => string
}

const I18nCtx = createContext<I18nValue>({
  lang: 'en',
  t: (k) => k
})

/** ───────── Proveedor ───────── */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const url = new URL(window.location.href)
  const q = (url.searchParams.get('lang') || 'en').toLowerCase() as Lang
  const lang: Lang = q === 'th' ? 'th' : 'en'
  const dict = messages[lang]
  const t = useMemo(() => (key: string) => dict[key] ?? key, [dict])
  const value = useMemo<I18nValue>(() => ({ lang, t }), [lang, t])
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

/** ───────── Hook ───────── */
export function useI18n() {
  return useContext(I18nCtx)
}
