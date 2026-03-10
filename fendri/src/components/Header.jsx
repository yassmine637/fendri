import { useEffect, useState } from "react";
import "../index.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""} id="header">
<a href="#home" className="logo">Fendri</a>


      <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        
      </div>

      <nav>
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">Histoire</a></li>
          <li><a href="#factory">Usine</a></li>
          <li><a href="#product">Produits</a></li>
          <li><a href="#awards">Récompenses</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>
    </header>
  );
}
