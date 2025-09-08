import { useEffect, useState } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import flagTH from "@/assets/flag.webp";
import bitLogo from "@/assets/bit.svg";

/* ===== CONFIG ===== */
const EMAIL_TO = "networkbittech@gmail.com";
const TELEGRAM_HANDLE = "bitstars3";

/* WhatsApp — E.164 sin "+" para wa.me */
const WA_SOMCHAI = "66656328895";
const WA_ANTONIO = "34631406722";
const WA_NATTY   = "66814418256";

/* Texto visible (formateado) */
const WA_SOMCHAI_DISPLAY = "+66 65 632 8895";
const WA_ANTONIO_DISPLAY = "+34 631 406 722";
const WA_NATTY_DISPLAY   = "+66 81 441 8256";

/* ===== ICONOS ===== */
const Icon = {
  WhatsApp: (props:any)=>(
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M.5 24l1.7-6.2A10.4 10.4 0 1120.6 3.4a10.4 10.4 0 01-14.2 15.2L.5 24zm6.7-9.3c.2.3 1.9 3 4.8 4.1.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.4-.2-.8-.4-.4-.2-1-.4-1.1-.4-.2 0-.4 0-.6.3-.2.3-.7 1-.8 1-.2 0-.5-.1-1.1-.4a8.4 8.4 0 01-2.5-2 10 10 0 01-1-1.7c-.1-.2 0-.4.2-.6.1-.2.3-.5.4-.7.1-.2 0-.4 0-.5 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.6-.4h-.5c-.1 0-.5.1-.7.3-.3.2-1 .9-1 2 0 1 .7 2.1.8 2.3z"/>
    </svg>
  ),
  Telegram: (props:any)=>(
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.99 2.5a1.3 1.3 0 00-1.3-.03L2.7 11.02c-.7.33-.69 1.37.02 1.68l4.9 2.08 2.02 4.73c.29.69 1.23.85 1.73.29l2.9-3.14 4.86 3.62c.7.52 1.7.12 1.9-.74l3.06-15.2c.13-.64-.24-1.27-.9-1.44z"/>
    </svg>
  )
};

export default function Contact(){
  const { t } = useI18n() as any;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(()=>{ AOS.init({ duration:700, once:true }); },[]);

  const mailtoHref = () => {
    const subject = `${t("contact.mail.subject")} — ${name || "Website"}`;
    const body = `${t("contact.mail.bodyPrefix")}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;
    return `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-18 md:py-20">
      <Container>
        {/* Header */}
        <header className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">{t("contact.title")}</h2>
          <p className="text-slate-600 max-w-prose mx-auto mt-2 sm:mt-3 text-base sm:text-[1.05rem]">
            {t("contact.subtitle")}
          </p>
        </header>

        {/* Layout responsive: 1 col (xs-sm), 2 cols (lg+) */}
        <div className="grid gap-6 sm:gap-7 lg:gap-8 lg:grid-cols-2">
          {/* Columna Izquierda: Canales + Logos */}
          <div
            className="rounded-2xl sm:rounded-3xl border border-black/10 bg-white/85 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 sm:mb-4">{t("contact.channels.title")}</h3>
              <p className="text-slate-600 mb-5 sm:mb-6 text-[0.95rem] sm:text-base">{t("contact.channels.desc")}</p>

              {/* Botones: en móviles, layout vertical elegante
                  en tablets/desktop, layout horizontal con número a la derecha */}
              <div className="flex flex-col gap-3 sm:gap-3.5">
                {/* WhatsApp — Somchai */}
                <a
                  href={`https://wa.me/${WA_SOMCHAI}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Somchai"
                  className="group w-full rounded-2xl font-semibold text-white
                             bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-xl transition
                             focus:outline-none focus:ring-2 focus:ring-emerald-400/70
                             px-5 sm:px-6 py-3.5 min-h-14
                             flex flex-col items-start gap-1.5
                             sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon.WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="leading-tight">WhatsApp Somchai</span>
                  </div>
                  <span className="text-xs sm:text-sm opacity-95 tracking-wide leading-tight">
                    {WA_SOMCHAI_DISPLAY}
                  </span>
                </a>

                {/* WhatsApp — Antonio */}
                <a
                  href={`https://wa.me/${WA_ANTONIO}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Antonio"
                  className="group w-full rounded-2xl font-semibold text-white
                             bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-xl transition
                             focus:outline-none focus:ring-2 focus:ring-emerald-400/70
                             px-5 sm:px-6 py-3.5 min-h-14
                             flex flex-col items-start gap-1.5
                             sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon.WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="leading-tight">WhatsApp Antonio</span>
                  </div>
                  <span className="text-xs sm:text-sm opacity-95 tracking-wide leading-tight">
                    {WA_ANTONIO_DISPLAY}
                  </span>
                </a>

                {/* WhatsApp — Natty */}
                <a
                  href={`https://wa.me/${WA_NATTY}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Natty"
                  className="group w-full rounded-2xl font-semibold text-white
                             bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-xl transition
                             focus:outline-none focus:ring-2 focus:ring-emerald-400/70
                             px-5 sm:px-6 py-3.5 min-h-14
                             flex flex-col items-start gap-1.5
                             sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon.WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="leading-tight">WhatsApp Natty</span>
                  </div>
                  <span className="text-xs sm:text-sm opacity-95 tracking-wide leading-tight">
                    {WA_NATTY_DISPLAY}
                  </span>
                </a>

                {/* Telegram */}
                <a
                  href={`https://t.me/${TELEGRAM_HANDLE}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="w-full rounded-2xl font-semibold
                             border border-sky-400 text-sky-600 hover:bg-sky-50 transition
                             focus:outline-none focus:ring-2 focus:ring-sky-300/70
                             px-5 sm:px-6 py-3.5 min-h-14
                             flex flex-col items-start gap-1
                             sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon.Telegram className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="leading-tight">Telegram @{TELEGRAM_HANDLE}</span>
                  </div>
                  <span className="text-xs sm:text-sm opacity-80 leading-tight">Public</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL_TO}`}
                  aria-label="Email"
                  className="w-full rounded-2xl font-semibold
                             border border-slate-300 text-slate-700 hover:bg-slate-50 transition
                             focus:outline-none focus:ring-2 focus:ring-slate-300/70
                             px-5 sm:px-6 py-3.5 min-h-14
                             flex flex-col items-start gap-1
                             sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 grid place-items-center rounded-full bg-slate-900 text-white text-[11px] sm:text-xs">@</span>
                    <span className="truncate max-w-[72vw] sm:max-w-[40ch]">{EMAIL_TO}</span>
                  </div>
                  <span className="text-xs sm:text-sm opacity-80 leading-tight">Email</span>
                </a>
              </div>
            </div>

            {/* Logos dentro de la tarjeta */}
            <div className="mt-8 sm:mt-9 md:mt-10 flex items-center gap-3.5 sm:gap-4 border-t border-slate-200 pt-5 sm:pt-6">
              <img src={flagTH} alt="Thailand flag" className="w-9 h-6 sm:w-10 sm:h-7 rounded-sm ring-1 ring-black/10" />
              <img src={bitLogo} alt="BitTech Network" className="h-8 sm:h-9 md:h-10 w-auto" />
              <div className="min-w-0">
                <div className="font-semibold text-slate-900 text-sm sm:text-base leading-tight">BitTech Network</div>
                <div className="text-slate-600 text-xs sm:text-sm leading-tight">{t("contact.bit.desc")}</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <form
            onSubmit={(e)=>{e.preventDefault(); window.location.href = mailtoHref();}}
            className="rounded-2xl sm:rounded-3xl border border-black/10 bg-white/85 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl grid gap-4 sm:gap-5"
            data-aos="fade-left"
          >
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5 sm:mb-1">{t("contact.form.name")}</label>
              <input
                value={name}
                onChange={e=>setName(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 sm:py-2.5 focus:ring-2 focus:ring-sky-400 outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5 sm:mb-1">{t("contact.form.email")}</label>
              <input
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 sm:py-2.5 focus:ring-2 focus:ring-sky-400 outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5 sm:mb-1">{t("contact.form.message")}</label>
              <textarea
                value={msg}
                onChange={e=>setMsg(e.target.value)}
                rows={5}
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:ring-2 focus:ring-sky-400 outline-none resize-y text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center min-h-12 sm:min-h-[3.25rem] px-5 sm:px-6 rounded-2xl font-bold text-white
                         bg-gradient-to-r from-blue-600 to-emerald-500 shadow-lg hover:shadow-xl transition
                         focus:outline-none focus:ring-2 focus:ring-blue-400/70 text-sm sm:text-base"
            >
              {t("contact.form.send")}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
