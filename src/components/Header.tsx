import { useState, useMemo } from "react";
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

export default function Header(){
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const setLang = (lang: "en" | "th") => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.href = url.toString();
  };

  const LangSwitcher = useMemo(()=>(
    <div className="flex items-center gap-2">
      <button onClick={()=>setLang("en")} className="px-2.5 py-1 rounded-lg border border-black/10 bg-white/90 backdrop-blur text-sm font-semibold hover:-translate-y-0.5 transition">
        EN
      </button>
      <span className="text-slate-400">/</span>
      <button onClick={()=>setLang("th")} className="px-2.5 py-1 rounded-lg border border-black/10 bg-white/90 backdrop-blur text-sm font-semibold hover:-translate-y-0.5 transition">
        TH
      </button>
    </div>
  ),[]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <nav className="py-3">
        <Container>
          <div className="flex items-center justify-between">
            <a href="#top" className="font-black tracking-tight text-slate-900 text-xl">KrabiFarm</a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-5">
                {NAV.map(item=>(
                  <li key={item.key}>
                    <a href={item.href} className="text-slate-700 hover:text-slate-900 font-semibold transition">
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
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-black/10 bg-white/90"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-black/10 bg-white">
          <Container>
            <ul className="py-3 grid gap-3">
              {NAV.map(item=>(
                <li key={item.key}>
                  <a href={item.href} onClick={()=>setOpen(false)} className="block px-2 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-800">
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

