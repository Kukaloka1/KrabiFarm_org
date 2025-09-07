import { useEffect, useState } from "react";
import AOS from "aos";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import flagTH from "@/assets/flag.webp";
import bitLogo from "@/assets/bit.svg";

/* ===== CONFIG ===== */
const EMAIL_TO = "networkbittech@gmail.com";
const TELEGRAM_HANDLE = "bitstars3";
const WHATSAPP_NUMBER = "66XXXXXXXXX";

/* ===== ICONOS ===== */
const Icon = {
  WhatsApp: (props:any)=>(
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.5 24l1.7-6.2A10.4 10.4 0 1120.6 3.4a10.4 10.4 0 01-14.2 15.2L.5 24zm6.7-9.3c.2.3 1.9 3 4.8 4.1.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.4-.2-.8-.4-.4-.2-1-.4-1.1-.4-.2 0-.4 0-.6.3-.2.3-.7 1-.8 1-.2 0-.5-.1-1.1-.4a8.4 8.4 0 01-2.5-2 10 10 0 01-1-1.7c-.1-.2 0-.4.2-.6.1-.2.3-.5.4-.7.1-.2 0-.4 0-.5 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.6-.4h-.5c-.1 0-.5.1-.7.3-.3.2-1 .9-1 2 0 1 .7 2.1.8 2.3z"/>
    </svg>
  ),
  Telegram: (props:any)=>(
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
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
    <section id="contact" className="py-20">
      <Container>
        {/* Header simple */}
        <header className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t("contact.title")}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Columna Izquierda: Canales + Logos */}
          <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-md p-8 shadow-xl flex flex-col justify-between"
               data-aos="fade-right">
            
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">{t("contact.channels.title")}</h3>
              <p className="text-slate-600 mb-6">{t("contact.channels.desc")}</p>

              <div className="flex flex-col gap-4">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white
                              bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg hover:shadow-xl transition">
                  <Icon.WhatsApp className="w-6 h-6" />
                  WhatsApp
                </a>
                <a href={`https://t.me/${TELEGRAM_HANDLE}`} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold
                              border border-sky-400 text-sky-600 hover:bg-sky-50 transition">
                  <Icon.Telegram className="w-6 h-6" />
                  Telegram @{TELEGRAM_HANDLE}
                </a>
                <a href={`mailto:${EMAIL_TO}`} 
                   className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold
                              border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
                  <span className="w-6 h-6 grid place-items-center rounded-full bg-slate-900 text-white">@</span>
                  {EMAIL_TO}
                </a>
              </div>
            </div>

            {/* Logos dentro de la tarjeta */}
            <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
              <img src={flagTH} alt="Thailand flag" className="w-10 h-7 rounded-sm ring-1 ring-black/10" />
              <img src={bitLogo} alt="BitTech Network" className="h-10 w-auto" />
              <div>
                <div className="font-semibold text-slate-900">BitTech Network</div>
                <div className="text-slate-600 text-sm">{t("contact.bit.desc")}</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <form onSubmit={(e)=>{e.preventDefault(); window.location.href = mailtoHref();}}
                className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-md p-8 shadow-xl grid gap-5"
                data-aos="fade-left">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">{t("contact.form.name")}</label>
              <input value={name} onChange={e=>setName(e.target.value)} required
                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:ring-2 focus:ring-sky-400 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">{t("contact.form.email")}</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required
                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:ring-2 focus:ring-sky-400 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">{t("contact.form.message")}</label>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={5} required
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:ring-2 focus:ring-sky-400 outline-none resize-y" />
            </div>
            <button type="submit"
                    className="inline-flex items-center justify-center min-h-12 px-6 rounded-2xl font-bold text-white
                               bg-gradient-to-r from-blue-600 to-emerald-500 shadow-lg hover:shadow-xl transition">
              {t("contact.form.send")}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
