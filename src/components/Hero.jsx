import React, { useEffect, useRef } from 'react';
import logoSrc from '../assets/logo.png';
import './Hero.css';

export default function Hero() {
  const canvasRef   = useRef(null);
  const parallaxRef = useRef(null);
  const typedRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let W, H, particles = [], raf;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function Particle() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.4 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.a  = Math.random() * 0.35 + 0.05;
    }

    resize();
    for (let i = 0; i < 60; i++) particles.push(new Particle());

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.a})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const hero  = document.getElementById('hero-section');
    const layer = parallaxRef.current;
    if (!layer) return;

    const onMove = e => {
      const rect = hero.getBoundingClientRect();
      const cx   = rect.width  / 2;
      const cy   = rect.height / 2;
      const dx   = (e.clientX - rect.left - cx) / cx;
      const dy   = (e.clientY - rect.top  - cy) / cy;
      layer.style.transition = 'transform 0.1s ease';
      layer.style.transform  = `translate(${dx * 14}px, ${dy * 8}px)`;
    };

    const onLeave = () => {
      layer.style.transition = 'transform 0.8s ease';
      layer.style.transform  = 'translate(0, 0)';
    };

    hero.addEventListener('mousemove',  onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove',  onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const frases = ['em forma de Doce'];
    let fi = 0, ci = 0, apagando = false, timer;

    function typeLoop() {
      const el    = typedRef.current;
      if (!el) return;
      const frase = frases[fi];

      if (!apagando) {
        el.textContent = frase.slice(0, ci + 1);
        ci++;
        if (ci === frase.length) { apagando = true; timer = setTimeout(typeLoop, 2400); return; }
        timer = setTimeout(typeLoop, 85);
      } else {
        el.textContent = frase.slice(0, ci - 1);
        ci--;
        if (ci === 0) { apagando = false; fi = (fi + 1) % frases.length; timer = setTimeout(typeLoop, 400); return; }
        timer = setTimeout(typeLoop, 42);
      }
    }

    const init = setTimeout(typeLoop, 1500);
    return () => { clearTimeout(init); clearTimeout(timer); };
  }, []);

  useEffect(() => {
    function animCount(id, target, suffix = '', duration = 1800) {
      const el    = document.getElementById(id);
      if (!el) return;
      const start = performance.now();
      function step(now) {
        const p    = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    const t = setTimeout(() => {
      animCount('stat-clientes', 200, '+');
      animCount('stat-receitas', 50, '+');
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero-section">

      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-pattern" />
      </div>

      <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />

      <div ref={parallaxRef} className="hero__parallax" aria-hidden="true">
        <div className="hero__deco-circle hdc-1" />
        <div className="hero__deco-circle hdc-2" />
        <div className="hero__deco-circle hdc-3" />
        <div className="hero__deco-line hdl-1" />
        <div className="hero__deco-line hdl-2" />
        <div className="hero__deco-dot hdd-1" />
        <div className="hero__deco-dot hdd-2" />
      </div>

      <div className="hero__content container">

        <div className="hero__logo-wrap">
          <img src={logoSrc} alt="Carol Amaral Doceria" className="hero__logo" width={120} height={120} />
          <div className="hero__logo-glow" aria-hidden="true" />
        </div>

        <h1 className="hero__title">
          Amor
          <span className="hero__typed-wrap">
            <span ref={typedRef} className="hero__typed-text" aria-live="polite" />
            <span className="hero__cursor" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero__subtitle">
          Criações artesanais feitas com ingredientes selecionados,<br />
          perfeitas para tornar cada momento ainda mais especial.
        </p>

        <div className="hero__actions">
          <a href="#cardapio" className="btn-primary hero__cta-main">Ver Cardápio</a>
          <a href="#encomenda" className="btn-primary hero__cta-main hero__cta-outline">Fazer Encomenda</a>
          <a href="https://wa.me/5534998303082" target="_blank" rel="noopener noreferrer" className="btn-primary hero__cta-main hero__cta-outline">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ marginRight: 6 }}>
              <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.32.36 2.55.96 3.63L1.5 16.5l3.87-.96A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
            </svg>
            WhatsApp
          </a>
          <a href="#como-funciona" className="hero__cta-secondary">
            Como funciona
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Role para descobrir</span>
        <div className="hero__scroll-line" />
      </div>

    </section>
  );
}