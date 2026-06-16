import React, { useState } from 'react';
import { maskPhone, buildWhatsAppMessage, validateForm } from '../utils/helpers';
import useInView from '../hooks/useInView';
import './FormularioEncomenda.css';

const WHATSAPP = '5534998303082';

const PRODUTOS = [
  'Brigadeiros Gourmet',
  'Trufas Artesanais',
  'Bolo no Pote',
  'Caixinha Personalizada',
  'Torta',
  'Outro',
];

const initialState = {
  nome: '',
  telefone: '',
  produto: '',
  data: '',
  quantidade: '',
  observacoes: '',
};

export default function FormularioEncomenda() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'telefone' ? maskPhone(value) : value,
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const msg = buildWhatsAppMessage(form);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank', 'noopener');
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="formulario" id="encomenda" ref={ref}>
      <div className="container">
        <div className={`formulario__inner${inView ? ' in-view' : ''}`}>
          {/* Left info */}
          <div className="formulario__info">
            <span className="section-label">Encomendas</span>
            <h2 className="section-title formulario__title">
              Faça seu<br /><em>pedido especial</em>
            </h2>
            <div className="ornament">
              <span className="ornament-line" />
              <span className="ornament-diamond" />
              <span className="ornament-line" />
            </div>
            <p className="formulario__desc">
              Preencha o formulário ao lado e finalize seu pedido pelo WhatsApp.
              Respondemos em até 2 horas!
            </p>

            <ul className="formulario__benefits">
              {[
                '100% artesanal e feito sob encomenda',
                'Entrega em Araguari e região',
                'Pagamento facilitado',
                'Embalagem presenteável inclusa',
              ].map(b => (
                <li key={b} className="formulario__benefit">
                  <span className="formulario__benefit-dot" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="formulario__card">
            {submitted ? (
              <div className="formulario__success">
                <span className="formulario__success-icon" aria-hidden="true">🎉</span>
                <h3>Pedido enviado!</h3>
                <p>Sua mensagem foi aberta no WhatsApp. Aguarde nossa confirmação em breve.</p>
                <button className="btn-primary" onClick={handleReset}>
                  Novo pedido
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group${errors.nome ? ' error' : ''}`}>
                    <label htmlFor="nome">Nome completo *</label>
                    <input
                      id="nome" name="nome" type="text"
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.nome && <span className="form-error">{errors.nome}</span>}
                  </div>

                  <div className={`form-group${errors.telefone ? ' error' : ''}`}>
                    <label htmlFor="telefone">Telefone / WhatsApp *</label>
                    <input
                      id="telefone" name="telefone" type="tel"
                      placeholder="(34) 99999-9999"
                      value={form.telefone}
                      onChange={handleChange}
                      autoComplete="tel"
                      maxLength={15}
                    />
                    {errors.telefone && <span className="form-error">{errors.telefone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group${errors.produto ? ' error' : ''}`}>
                    <label htmlFor="produto">Produto desejado *</label>
                    <select
                      id="produto" name="produto"
                      value={form.produto}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      {PRODUTOS.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.produto && <span className="form-error">{errors.produto}</span>}
                  </div>

                  <div className={`form-group${errors.data ? ' error' : ''}`}>
                    <label htmlFor="data">Data de entrega *</label>
                    <input
                      id="data" name="data" type="date"
                      value={form.data}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.data && <span className="form-error">{errors.data}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="quantidade">Quantidade / Tamanho</label>
                  <input
                    id="quantidade" name="quantidade" type="text"
                    placeholder="Ex: 30 unidades, caixa com 12..."
                    value={form.quantidade}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="observacoes">Observações</label>
                  <textarea
                    id="observacoes" name="observacoes"
                    rows={3}
                    placeholder="Alguma personalização, alergia ou detalhe especial?"
                    value={form.observacoes}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary formulario__submit">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.32.36 2.55.96 3.63L1.5 16.5l3.87-.96A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
                    <path d="M6.75 9.75s.37.5 2.25 2c2.25-2.5 3-4 3-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Enviar pelo WhatsApp
                </button>

                <p className="formulario__privacy">
                  Seus dados são usados apenas para contato sobre seu pedido.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
