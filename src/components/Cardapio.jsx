import React, { useState, useEffect, useCallback } from 'react';
import useInView from '../hooks/useInView';
import useCarrinho from '../hooks/useCarrinho';
import { PRODUTOS, CATEGORIAS } from '../dados/produtos';
import './Cardapio.css';
import StatusLoja from './StatusLoja';


const WHATSAPP = '5534998303082';

const fmt = (v) => 'R$ ' + v.toFixed(2).replace('.', ',');

// ── Ícone placeholder quando imagem não carrega ─────────
function ProdutoImg({ src, alt }) {
  const [erro, setErro] = useState(false);
  return erro ? (
    <div className="prod-img-placeholder" aria-hidden="true">🍬</div>
  ) : (
    <img src={src} alt={alt} className="prod-img" onError={() => setErro(true)} />
  );
}

// ── Controle de quantidade no card ──────────────────────
function QtyCtrl({ qtd, onAdd, onRemove }) {
  if (qtd === 0) {
    return (
      <button className="btn-add-prod" onClick={onAdd} aria-label="Adicionar ao carrinho">
        Adicionar
      </button>
    );
  }
  return (
    <div className="qty-ctrl" role="group" aria-label="Quantidade">
      <button onClick={onRemove} aria-label="Remover um">−</button>
      <span>{qtd}</span>
      <button onClick={onAdd}    aria-label="Adicionar um">+</button>
    </div>
  );
}

// ── Modal do carrinho ────────────────────────────────────
function ModalCarrinho({ aberto, onFechar, carrinho }) {
  const { lista, total, qtdTotal, adicionar, remover, limpar } = carrinho;
  const [aba, setAba]           = useState('pedido');
  const [enviado, setEnviado]   = useState(false);

  // Campos pedido rápido
  const [nome, setNome]         = useState('');
  const [wpp,  setWpp]          = useState('');
  const [pag,  setPag]          = useState('');
  const [ret,  setRet]          = useState('');
  const [end,  setEnd]          = useState('');
  const [obs,  setObs]          = useState('');

  // Taxa de entrega (só aplica quando escolher "Entrega")
  const TAXA_ENTREGA = 10;
  const taxaEntrega = ret === 'Entrega' ? TAXA_ENTREGA : 0;
  const totalFinal = total + taxaEntrega;

  // Campos encomenda
  const [eNome,  setENome]      = useState('');
  const [eWpp,   setEWpp]       = useState('');
  const [eData,  setEData]      = useState('');
  const [eHora,  setEHora]      = useState('');
  const [eTipo,  setETipo]      = useState('');
  const [eQtd,   setEQtd]       = useState('');
  const [eSabor, setESabor]     = useState('');
  const [eEnd,   setEEnd]       = useState('');
  const [eObs,   setEObs]       = useState('');

  // Fechar com ESC
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onFechar(); };
    if (aberto) window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [aberto, onFechar]);

  // Bloquear scroll quando aberto
  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [aberto]);

  const LINHA = '──────────────────────────';

  const enviarPedido = () => {
    if (!lista.length) return alert('Adicione produtos ao carrinho primeiro!');
    if (!nome.trim() || !wpp.trim() || !pag) return alert('Preencha nome, WhatsApp e forma de pagamento.');

    let msg = `*NOVO PEDIDO — Carol Amaral Doceria* 🎂\n${LINHA}\n`;
    msg += `*Cliente:* ${nome}\n*WhatsApp:* ${wpp}\n`;
    if (ret) msg += `*Retirada/Entrega:* ${ret}\n`;
    if (end) msg += `*Endereço:* ${end}\n`;
    msg += `${LINHA}\n*PRODUTOS:*\n`;
    lista.forEach(i => {
      msg += `   ${i.qtd}x ${i.nome}  —  ${fmt(i.preco * i.qtd)}\n`;
    });
    if (taxaEntrega > 0) {
      msg += `${LINHA}\n*Subtotal:* ${fmt(total)}\n*Taxa de entrega:* ${fmt(taxaEntrega)}\n`;
    }
    msg += `${LINHA}\n*TOTAL: ${fmt(totalFinal)}*\n*Pagamento:* ${pag}\n`;
    if (obs) msg += `*Obs:* ${obs}\n`;
    msg += `${LINHA}\n_Pedido recebido pelo site Carol Amaral Doceria_`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    limpar();
    setEnviado(true);
  };

  const enviarEncomenda = () => {
    if (!eNome.trim() || !eWpp.trim()) return alert('Preencha nome e WhatsApp.');
    const LINHA2 = '──────────────────────────';
    let msg = `*ENCOMENDA — Carol Amaral Doceria* 🎂\n${LINHA2}\n`;
    msg += `*Nome:* ${eNome}\n*WhatsApp:* ${eWpp}\n`;
    if (eTipo)  msg += `*Tipo de evento:* ${eTipo}\n`;
    if (eData) {
      const p = eData.split('-');
      msg += `*Data:* ${p[2]}/${p[1]}/${p[0]}\n`;
    }
    if (eHora)  msg += `*Horário:* ${eHora}\n`;
    if (eQtd)   msg += `*Quantidade:* ${eQtd}\n`;
    if (eSabor) msg += `*Sabor/personalização:* ${eSabor}\n`;
    if (eEnd)   msg += `*Endereço:* ${eEnd}\n`;
    if (eObs)   msg += `*Obs:* ${eObs}\n`;
    msg += `${LINHA2}\n_Encomenda recebida pelo site Carol Amaral Doceria_`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  };

  if (!aberto) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onFechar()}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label="Carrinho">
        <div className="modal-handle" />
        <div className="modal-header">
          <span className="modal-title">🛒 Meu Carrinho</span>
          <button className="modal-close" onClick={onFechar} aria-label="Fechar">✕</button>
        </div>

        <div className="modal-tabs">
          <button className={`modal-tab${aba === 'pedido'    ? ' active' : ''}`} onClick={() => setAba('pedido')}>Pedido Rápido</button>
          <button className={`modal-tab${aba === 'encomenda' ? ' active' : ''}`} onClick={() => setAba('encomenda')}>Encomenda</button>
        </div>

        {/* ABA PEDIDO */}
        {aba === 'pedido' && (
          <div className="modal-scroll">
            {enviado ? (
              <div className="modal-success">
                <span>🎉</span>
                <h3>Pedido enviado!</h3>
                <p>Aguarde nosso contato pelo WhatsApp em breve.</p>
                <button className="btn-primary" onClick={() => { setEnviado(false); onFechar(); }}>
                  Fechar
                </button>
              </div>
            ) : (
              <>
                {lista.length === 0 ? (
                  <div className="modal-vazio">
                    <span>🛒</span>
                    <p>Seu carrinho está vazio.<br />Adicione produtos do cardápio!</p>
                  </div>
                ) : (
                  <>
                    <div className="modal-itens">
                      {lista.map(item => (
                        <div className="modal-item" key={item.id}>
                          <div className="modal-item-info">
                            <p className="modal-item-nome">{item.nome}</p>
                            <p className="modal-item-preco">{fmt(item.preco)} cada</p>
                          </div>
                          <div className="modal-item-right">
                            <span className="modal-item-sub">{fmt(item.preco * item.qtd)}</span>
                            <div className="qty-ctrl-modal">
                              <button onClick={() => remover(item.id)}>−</button>
                              <span>{item.qtd}</span>
                              <button onClick={() => adicionar(item)}>+</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="modal-resumo">
                      {taxaEntrega > 0 && (
                        <div className="resumo-row">
                          <span>Taxa de entrega</span>
                          <span>{fmt(taxaEntrega)}</span>
                        </div>
                      )}
                      <div className="resumo-row total">
                        <span>Total</span>
                        <span>{fmt(totalFinal)}</span>
                      </div>
                    </div>
                  </>
                )}

                <div className="modal-form">
                  <div className="mf-row">
                    <input className="mf-input" type="text"  placeholder="Nome completo *" value={nome} onChange={e => setNome(e.target.value)} />
                    <input className="mf-input" type="tel"   placeholder="WhatsApp *"       value={wpp}  onChange={e => setWpp(e.target.value)}  />
                  </div>
                  <div className="mf-row">
                    <select className="mf-input" value={pag} onChange={e => setPag(e.target.value)}>
                      <option value="">Forma de pagamento *</option>
                      <option value="Pix">💠 Pix</option>
                      <option value="Dinheiro">💵 Dinheiro</option>
                      <option value="Cartão de Débito">💳 Cartão de Débito</option>
                      <option value="Cartão de Crédito">💳 Cartão de Crédito</option>
                    </select>
                    <select className="mf-input" value={ret} onChange={e => setRet(e.target.value)}>
                      <option value="">Retirada ou Entrega?</option>
                      <option value="Retirada no local">Retirada no local</option>
                      <option value="Entrega">Entrega</option>
                    </select>
                  </div>
                  <input className="mf-input" type="text" placeholder="Endereço de entrega (se aplicável)" value={end} onChange={e => setEnd(e.target.value)} style={{ marginBottom: 8 }} />
                  <textarea className="mf-input mf-textarea" placeholder="Observações..." value={obs} onChange={e => setObs(e.target.value)} />
                  <button className="btn-whatsapp" onClick={enviarPedido}>
                    💬 Finalizar pelo WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* ABA ENCOMENDA */}
        {aba === 'encomenda' && (
          <div className="modal-scroll">
            <div className="modal-form">
              <div className="mf-row">
                <input className="mf-input" type="text" placeholder="Nome completo *" value={eNome} onChange={e => setENome(e.target.value)} />
                <input className="mf-input" type="tel"  placeholder="WhatsApp *"       value={eWpp}  onChange={e => setEWpp(e.target.value)}  />
              </div>
              <div className="mf-row">
                <input className="mf-input" type="date" value={eData} onChange={e => setEData(e.target.value)} min={new Date().toISOString().split('T')[0]} />
                <input className="mf-input" type="time" value={eHora} onChange={e => setEHora(e.target.value)} />
              </div>
              <div className="mf-row">
                <select className="mf-input" value={eTipo} onChange={e => setETipo(e.target.value)}>
                  <option value="">Tipo de evento</option>
                  <option>Aniversário</option>
                  <option>Chá de bebê / revelação</option>
                  <option>Evento corporativo</option>
                  <option>Presente</option>
                  <option>Outro</option>
                </select>
                <input className="mf-input" type="text" placeholder="Quantidade (ex: 50 docinhos)" value={eQtd} onChange={e => setEQtd(e.target.value)} />
              </div>
              <input className="mf-input" type="text" placeholder="Sabor / personalização" value={eSabor} onChange={e => setESabor(e.target.value)} style={{ marginBottom: 8 }} />
              <input className="mf-input" type="text" placeholder="Endereço de entrega (opcional)" value={eEnd} onChange={e => setEEnd(e.target.value)} style={{ marginBottom: 8 }} />
              <textarea className="mf-input mf-textarea" placeholder="Observações especiais..." value={eObs} onChange={e => setEObs(e.target.value)} />
              <button className="btn-whatsapp" onClick={enviarEncomenda}>
                💬 Enviar Encomenda pelo WhatsApp
              </button>
              <p className="modal-note">Pedidos com mínimo 7 dias de antecedência</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────
export default function Cardapio() {
  const [ref, inView]       = useInView({ threshold: 0.05 });
  const [catAtiva, setCat]  = useState('todos');
  const [modalAberto, setModal] = useState(false);
  const carrinho = useCarrinho();
  const { itens, qtdTotal, total, adicionar, remover } = carrinho;

  const produtosFiltrados = PRODUTOS.filter(p =>
    p.ativo && (catAtiva === 'todos' || p.cat === catAtiva)
  );

  const abrirCarrinho = useCallback(() => setModal(true),  []);
  const fecharCarrinho = useCallback(() => setModal(false), []);

  return (
    <section className="cardapio" id="cardapio" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className={`cardapio__header${inView ? ' in-view' : ''}`}>
          <span className="section-label">Nossos Produtos</span>
          <h2 className="section-title">Cardápio</h2>
          <StatusLoja/>
          <div className="ornament">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
        </div>

        {/* Tabs de categoria */}
        <div className="cat-tabs" role="tablist" aria-label="Categorias">
          <button
            role="tab"
            aria-selected={catAtiva === 'todos'}
            className={`cat-tab${catAtiva === 'todos' ? ' active' : ''}`}
            onClick={() => setCat('todos')}
          >
            Todos
          </button>
          {CATEGORIAS.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={catAtiva === c.id}
              className={`cat-tab${catAtiva === c.id ? ' active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.nome}
            </button>
          ))}
        </div>

        {/* Grade de produtos */}
        <div className="produto-grid">
          {produtosFiltrados.map((p, i) => {
            const qtd = itens[p.id]?.qtd || 0;
            return (
              <article
                key={p.id}
                className={`produto-card${inView ? ' in-view' : ''}`}
                style={{ transitionDelay: `${0.05 * (i % 6)}s` }}
              >
                <div className="produto-card__img-wrap">
                  <ProdutoImg src={p.imagem} alt={p.nome} />
                </div>
                <div className="produto-card__body">
                  <h3 className="produto-card__nome">{p.nome}</h3>
                  <p className="produto-card__desc">{p.desc}</p>
                  <div className="produto-card__footer">
                    <span className="produto-card__preco">{fmt(p.preco)}</span>
                    <QtyCtrl
                      qtd={qtd}
                      onAdd={() => adicionar(p)}
                      onRemove={() => remover(p.id)}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Barra flutuante do carrinho */}
      {qtdTotal > 0 && (
        <div className="cart-bar" onClick={abrirCarrinho} role="button" tabIndex={0} aria-label={`Ver carrinho — ${qtdTotal} itens`}>
          <div className="cart-bar__left">
            <span className="cart-bar__badge">{qtdTotal}</span>
            <span className="cart-bar__label">Ver carrinho</span>
          </div>
          <span className="cart-bar__total">{fmt(total)}</span>
        </div>
      )}

      {/* Modal */}
      <ModalCarrinho
        aberto={modalAberto}
        onFechar={fecharCarrinho}
        carrinho={carrinho}
      />
    </section>
  );
}