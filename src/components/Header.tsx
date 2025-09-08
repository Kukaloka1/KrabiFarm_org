import { useState, useMemo, useEffect } from "react";
import Container from "@/components/Container";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#about", key: "nav.about" },
  { href: "#problem", key: "nav.problem" },
  { href: "#solution", key: "nav.solution" },
  { href: "#impact", key: "nav.impact" },
  { href: "#team", key: "nav.team" },
  { href: "#contact", key: "nav.contact" }
];

const LANG_STORAGE_KEY = "kf_lang";

export default function Header(){
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    // Guardar preferencia limpia (sin ?lang)
    localStorage.setItem(LANG_STORAGE_KEY, lang);

    // Quitar cualquier rastro de ?lang y #top de la URL actual
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) url.searchParams.delete("lang");
    if (url.hash === "#top") url.hash = "";

    const qs = url.searchParams.toString();
    const clean = url.pathname + (qs ? `?${qs}` : "") + url.hash;

    // Recargar para que I18nProvider tome el cambio (si tu provider no soporta hot switch)
    window.location.href = clean || "/";
  };

  const goHomeClean = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
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
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/10 bg-white/65 backdrop-blur-xl backdrop-saturate-150 shadow-[0_6px_24px_-6px_rgba(0,0,0,0.15)]"
          : "border-b border-transparent bg-white/35 backdrop-blur-md backdrop-saturate-150"
      ].join(" ")}
    >
      <nav className="py-2.5 md:py-3">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo/Home limpio (sin #top ni ?lang) */}
            <a href="/" onClick={goHomeClean} className="font-black tracking-tight text-slate-900 text-lg md:text-xl">
              KrabiFarm
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-5">
                {NAV.map(item=>(
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="text-slate-700 hover:text-slate-900 font-semibold transition"
                    >
                      {t(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
              {LangSwitcher}
            </div>

            {/* Mobile toggle */}
            <button
              aria-expanded={open}
              aria-controls="mobile-nav"
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

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-black/10 bg-white/85 backdrop-blur-xl"
        >
          <Container>
            <ul className="py-3 grid gap-3">
              {NAV.map(item=>(
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={()=>setOpen(false)}
                    className="block px-2 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-800"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
              <li className="px-2">{LangSwitcher}</li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

