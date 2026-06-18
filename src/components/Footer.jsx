import React from 'react';
import logoSrc from '../assets/logo.png';
import './Footer.css';

const WHATSAPP = '5534998303082';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <img src={logoSrc} alt="Carol Amaral Doceria" className="footer__logo" />
          <p className="footer__tagline">
            Doces artesanais feitos com amor<br />e ingredientes selecionados.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="footer__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.32.36 2.55.96 3.63L1.5 16.5l3.87-.96A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
            </svg>
            (34) 99830-3082
          </a>
        </div>


  <div className="footer__contact">
  <h4 className="footer__nav-title">Contato</h4>
  <ul className="footer__contact-list">
    <li>
      <span className="footer__contact-label">WhatsApp</span>
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
        (34) 99830-3082
      </a>
    </li>
    <li>
      <span className="footer__contact-label">Cidade</span>
      <span>Araguari, MG</span>
    </li>
    <li>
      <span className="footer__contact-label">Atendimento</span>
      <span> Ter – Sáb, 10h–20h</span>
    </li>
  </ul>
</div>

<div className="footer__social">
  <h4 className="footer__nav-title">Redes Sociais</h4>
  <div className="footer__social-links">
    <a href="https://instagram.com/carolamaraldoceria" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
      Instagram
    </a>
    <a href="https://facebook.com/carolamaraldoceria" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
      Facebook
    </a>
    <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.32.36 2.55.96 3.63L1.5 16.5l3.87-.96A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
      WhatsApp
    </a>
  </div>
</div>
      </div>

      <div className="footer__bottom container">
        <div className="footer__divider" aria-hidden="true" />
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} Carol Amaral Doceria. Todos os direitos reservados.
          </p>
          <p className="footer__made">
            Feito com <span aria-label="amor">♥</span> em Araguari, MG
          </p>
        </div>
      </div>
    </footer>
  );
}
