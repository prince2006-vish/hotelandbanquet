import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HOTEL } from "../config";

const links = [
  ["Experience", "#about"],
  ["Stay", "#rooms"],
  ["Celebrations", "#banquet"],
  ["Restaurant Menu", "#restaurant-menu"],
  ["Gallery", "#gallery"],
  ["Find us", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label={HOTEL.fullName + " home"}>
          <span className="brand-mark">MP</span>
          <span className="brand-name">
            <strong>MEETHA PANI</strong>
            <small>HOTEL & BANQUET</small>
          </span>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#booking" onClick={() => setOpen(false)}>
            Enquire <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
