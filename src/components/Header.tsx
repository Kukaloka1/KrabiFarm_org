import { useState, useMemo, useEffect } from "react";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import {
  Menu, X,
  Info, AlertTriangle, Lightbulb, BarChart3, Users, Mail
} from "lucide-react";

type NavItem = { href: string; key: string; icon?: React.ComponentType<any> };

const NAV: NavItem[] = [
  { href: "#about",   key: "nav.about",   icon: Info },
  { href: "#problem", key: "nav.problem", icon: AlertTriangle },
  { href: "#solution",key: "nav.solution",icon: Lightbulb },
  { href: "#impact",  key: "nav.impact",  icon: BarChart3 },
  { href: "#team",    key: "nav.team",    icon: Users },
  { href: "#contact", key: "nav.contact", icon: Mail }
];

const LANG_STORAGE_KEY = "kf_lang";

export default function Header(){
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fondo del header más sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll del body cuando el burger está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Limpia ?lang y #top del HOME en el primer render
  useEffect(() => {
    const url = new URL(window.location.href);
    const hadLang = url.searchParams.has("lang");
    const isTop = url.hash === "#top";
    if (hadLang) url.searchParams.delete("lang");
    if (isTop) url.hash = "";
    if (hadLang || isTop) {
      const qs = url.searchParams.toString();
      const clean = url.pathname + (qs ? `?${qs}` : "") + url.hash;
      window.history.replaceState({}, "", clean || "/");
    }
  }, []);

  const setLang = (lang: "en" | "th") => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) url.searchParams.delete("lang");
    if (url.hash === "#top") url.hash = "";
    const qs = url.searchParams.toString();
    const clean = url.pathname + (qs ? `?${qs}` : "") + url.hash;
    window.location.href = clean || "/";
  };

  const goHomeClean = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.search = ""; url.hash = "";
    window.history.replaceState({}, "", url.pathname || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const LangSwitcher = useMemo(()=>(
    <div className="flex items-center gap-2">
      <button
        onClick={()=>setLang("en")}
        className="px-2.5 py-1 rounded-lg border border-black/10 bg-white/80 backdrop-blur-md text-sm font-semibold hover:-translate-y-0.5 transition"
      >
        EN
      </button>
      <span className="text-slate-400">/</span>
      <button
        onClick={()=>setLang("th")}
        className="px-2.5 py-1 rounded-lg border border-black/10 bg-white/80 backdrop-blur-md text-sm font-semibold hover:-translate-y-0.5 transition"
      >
        TH
      </button>
    </div>
  ),[]);

  return (
    <>
      {/* HEADER SIEMPRE FIJO (no se “va” jamás) */}
      <header
        className={[
          "fixed top-0 inset-x-0 z-[60] transition-all duration-300 will-change-[background,backdrop-filter,box-shadow,border-color]",
          scrolled
            ? "border-b border-black/10 bg-white/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_6px_24px_-6px_rgba(0,0,0,0.15)]"
            : "border-b border-transparent bg-white/40 backdrop-blur-md backdrop-saturate-150"
        ].join(" ")}
      >
        <nav className="py-2.5 md:py-3">
          <Container>
            <div className="flex items-center justify-between">
              {/* Logo/Home limpio (sin #top ni ?lang) */}
              <a href="/" onClick={goHomeClean} className="font-black tracking-tight text-slate-900 text-lg md:text-xl">
                KrabiFarm
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6">
                <ul className="flex items-center gap-5">
                  {NAV.map(({ href, key })=>(
                    <li key={key}>
                      <a
                        href={href}
                        className="text-slate-700 hover:text-slate-900 font-semibold transition"
                      >
                        {t(key)}
                      </a>
                    </li>
                  ))}
                </ul>
                {LangSwitcher}
              </div>

              {/* Burger */}
              <button
                aria-expanded={open}
                aria-controls="mobile-menu-dialog"
                onClick={()=>setOpen(v=>!v)}
                className={[
                  "md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border",
                  "border-black/10 bg-white/75 backdrop-blur-md transition"
                ].join(" ")}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </Container>
        </nav>
      </header>

      {/* ====== MOBILE MODAL: BLUR EN EL FONDO + MENÚ CENTRADO ====== */}
      {/* Overlay de fondo a pantalla completa (blur aquí, no en la tarjeta) */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[40] bg-slate-900/40 backdrop-blur-xl transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ].join(" ")}
        onClick={()=>setOpen(false)}
        aria-hidden={!open}
      />

      {/* Diálogo centrado */}
      <div
        id="mobile-menu-dialog"
        role="dialog"
        aria-modal="true"
        className={[
          "md:hidden fixed inset-0 z-[50] grid place-items-center p-4",
          "transition-all duration-300",
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        ].join(" ")}
      >
        <div
          className="w-[92vw] max-w-sm rounded-3xl border border-black/10 bg-white shadow-2xl ring-1 ring-black/5"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
            <span className="font-bold text-slate-900">Menu</span>
            <button
              aria-label="Close menu"
              onClick={()=>setOpen(false)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-black/10 bg-white/70 hover:bg-slate-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-2 py-1">
            <ul className="py-1 grid">
              {NAV.map(({ href, key, icon: Icon })=>(
                <li key={key}>
                  <a
                    href={href}
                    onClick={()=>setOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100/70
                               font-semibold text-slate-800 transition"
                  >
                    {Icon ? <Icon className="w-5 h-5 text-slate-600" /> : null}
                    <span className="flex-1">{t(key)}</span>
                    <span className="text-slate-400">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="px-3 py-3 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Language</span>
                {LangSwitcher}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Empuje para no tapar el contenido por el header fijo (altura aproximada) */}
      <div className="h-[60px] md:h-[64px]" aria-hidden="true" />
    </>
  );
}

