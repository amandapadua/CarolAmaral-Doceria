import './StatusLoja.css';

function StatusLoja() {
  const aberto = true; // troque para false quando estiver fechado

  return (
    <div className="status-loja">
      <span className={`status-bolinha ${aberto ? 'aberto' : 'fechado'}`}></span>
      <span className="status-texto">
        {aberto ? 'Estamos abertos!' : 'Estamos fechados no momento'}
      </span>
    </div>
  );
}

export default StatusLoja;