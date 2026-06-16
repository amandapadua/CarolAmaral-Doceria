import React from 'react';
import useInView from '../hooks/useInView';
import './ComoFunciona.css';

const STEPS = [
  {
    num: '01',
    icon: '✍️',
    title: 'Escolha seus doces',
    desc: 'Navegue pelo cardápio e escolha os produtos que mais combinam com a sua ocasião.',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Entre em contato',
    desc: 'Preencha o formulário de encomenda ou nos chame diretamente pelo WhatsApp.',
  },
  {
    num: '03',
    icon: '💛',
    title: 'Confirmamos o pedido',
    desc: 'Alinhamos todos os detalhes, data de entrega e forma de pagamento com você.',
  },
  {
    num: '04',
    icon: '🎁',
    title: 'Receba com carinho',
    desc: 'Seu pedido é preparado artesanalmente e entregue com toda a atenção que merece.',
  },
];

export default function ComoFunciona() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="como-funciona" id="como-funciona" ref={ref}>
      <div className="container">
        <div className={`como-funciona__header${inView ? ' in-view' : ''}`}>
          <span className="section-label">O processo</span>
          <h2 className="section-title">Como funciona</h2>
          <div className="ornament">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">
            Do pedido à entrega, cada etapa é pensada para tornar sua experiência simples e especial.
          </p>
        </div>

        <div className="como-funciona__steps">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`cf-step${inView ? ' in-view' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="cf-step__num">{step.num}</div>
              <div className="cf-step__icon">{step.icon}</div>
              <h3 className="cf-step__title">{step.title}</h3>
              <p className="cf-step__desc">{step.desc}</p>
              {i < STEPS.length - 1 && <span className="cf-step__arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
