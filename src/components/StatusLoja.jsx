import { useState, useEffect } from "react";
import './StatusLoja.css';

function StatusLoja() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    function verificarHorario() {
      const agora = new Date();
      const hora = agora.getHours();
      const minutos = agora.getMinutes();
      const totalMinutos = hora * 60 + minutos;

      const abertura = 10 * 60; 
      const fechamento = 20 * 60;

      setAberto(totalMinutos >= abertura && totalMinutos < fechamento);
    }

    verificarHorario();

    const intervalo = setInterval(verificarHorario, 60000); // checa a cada 1 minuto

    return () => clearInterval(intervalo); // limpa ao desmontar
  }, []);

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