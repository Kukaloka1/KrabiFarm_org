import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.png";

export default function Footer(){
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">
      <Container>
        <div className="py-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="KrabiFarm" className="w-12 h-12 object-contain" />
              <span className="font-extrabold text-2xl tracking-tight">KrabiFarm</span>
            </div>
            <p className="text-slate-300 text-sm max-w-xs leading-relaxed">
              {t("cta.desc")}
            </p>
          </div>

          {/* Nav */}
          <ul className="grid grid-cols-2 gap-2 text-sm md:justify-center">
            <li><a href="#about" className="hover:underline underline-offset-4">{t("nav.about")}</a></li>
            <li><a href="#problem" className="hover:underline underline-offset-4">{t("nav.problem")}</a></li>
            <li><a href="#solution" className="hover:underline underline-offset-4">{t("nav.solution")}</a></li>
            <li><a href="#impact" className="hover:underline underline-offset-4">{t("nav.impact")}</a></li>
            <li><a href="#team" className="hover:underline underline-offset-4">{t("nav.team")}</a></li>
            <li><a href="#contact" className="hover:underline underline-offset-4">{t("nav.contact")}</a></li>
          </ul>

          {/* Contact mini-CTA */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <a href="#contact"
               className="inline-flex items-center justify-center min-h-11 px-6 rounded-xl font-bold
                          text-white bg-gradient-to-r from-blue-600 to-emerald-500 shadow-lg
                          hover:scale-105 hover:shadow-xl transition-transform">
              {t("cta.whatsapp")}
            </a>
            <a href="#contact"
               className="inline-flex items-center justify-center min-h-11 px-6 rounded-xl font-semibold
                          border border-slate-500/40 bg-white/10 hover:bg-white/20 transition">
              {t("cta.email")}
            </a>
          </div>
        </div>

        {/* Divider bottom */}
        <div className="py-5 text-center text-xs text-slate-400 border-t border-white/10">
          © {year} KrabiFarm — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}


