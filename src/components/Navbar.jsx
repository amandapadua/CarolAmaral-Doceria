import React, { useState, useEffect } from 'react';
import logoSrc from '../assets/logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Início',        href: '#hero-section'  },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Sobre',         href: '#sobre'         },
  { label: 'Cardápio',      href: '#cardapio'      },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#inicio" className="navbar__logo-link" aria-label="Carol Amaral Doceria - Início">
          <span className="navbar__logo-wrapper">
            <img
              src={logoSrc}
              alt="Carol Amaral Doceria"
              className="navbar__logo-img"
              width={52}
              height={52}
            />
            <span className="navbar__logo-glow" aria-hidden="true" />
          </span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Carol Amaral</span>
            <span className="navbar__logo-tagline">Doceria Artesanal</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Menu principal">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="navbar__link">
                  {label}
                  <span className="navbar__link-underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a href="#encomenda" className="navbar__cta btn-primary">
          Fazer Encomenda
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="navbar__drawer" aria-hidden={!menuOpen}>
        <ul className="navbar__drawer-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar__drawer-link" onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#encomenda" className="btn-primary navbar__drawer-cta" onClick={handleLinkClick}>
              Fazer Encomenda
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
