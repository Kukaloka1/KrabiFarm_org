import { useState } from "react";
import { useI18n } from "@/lib/i18n";

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

  return (
    <header className="site-header">
      <nav className="container-xl nav">
        <a href="#top" className="nav__brand">KrabiFarm</a>

        <button className="nav__mobile" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-nav">
          Menu
        </button>

        <ul className="nav__list">
          {NAV.map(item=>(
            <li key={item.key}><a href={item.href}>{t(item.key)}</a></li>
          ))}
          <li className="lang-row">
            <button onClick={()=>setLang("en")}>EN</button>
            <span> / </span>
            <button onClick={()=>setLang("th")}>TH</button>
          </li>
        </ul>
      </nav>

      {open && (
        <div id="mobile-nav" className="mobile-menu">
          <ul className="mobile-list">
            {NAV.map(item=>(
              <li key={item.key}><a href={item.href} onClick={()=>setOpen(false)}>{t(item.key)}</a></li>
            ))}
            <li className="lang-row">
              <button onClick={()=>setLang("en")}>EN</button>
              <span>/</span>
              <button onClick={()=>setLang("th")}>TH</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
