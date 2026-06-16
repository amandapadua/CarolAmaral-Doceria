import React from 'react';
import logoSrc from '../assets/logo.png';
import useInView from '../hooks/useInView';
import './Sobre.css';

export default function Sobre() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="sobre" id="sobre" ref={ref}>
      <div className="container">
        <div className={`sobre__grid${inView ? ' in-view' : ''}`}>
          <div className="sobre__visual">
            <div className="sobre__logo-frame">
              <img src={logoSrc} alt="Carol Amaral Doceria" className="sobre__logo" />
            </div>
          </div>

          <div className="sobre__text">
            <span className="section-label">Nossa história</span>
            <h2 className="section-title">Feito com amor,<br /><em>entregue com carinho</em></h2>
            <div className="ornament">
              <span className="ornament-line" />
              <span className="ornament-diamond" />
              <span className="ornament-line" />
            </div>
            <p className="sobre__paragraph">
              A Carol Amaral Doceria nasceu da paixão de transformar ingredientes simples em
              momentos inesquecíveis. Cada brigadeiro, cada trufa, cada bolo é preparado
              artesanalmente com receitas refinadas ao longo de anos de dedicação.
            </p>
            <p className="sobre__paragraph">
              Acreditamos que um doce bem-feito tem o poder de transformar qualquer ocasião —
              seja o aniversário mais íntimo ou o evento mais grandioso.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
