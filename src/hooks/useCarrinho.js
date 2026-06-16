import { useState, useCallback } from 'react';

export default function useCarrinho() {
  const [itens, setItens] = useState({});

  const adicionar = useCallback((produto) => {
    setItens(prev => ({
      ...prev,
      [produto.id]: {
        ...produto,
        qtd: (prev[produto.id]?.qtd || 0) + 1,
      },
    }));
  }, []);

  const remover = useCallback((id) => {
    setItens(prev => {
      const novo = { ...prev };
      if (novo[id]?.qtd > 1) {
        novo[id] = { ...novo[id], qtd: novo[id].qtd - 1 };
      } else {
        delete novo[id];
      }
      return novo;
    });
  }, []);

  const limpar = useCallback(() => setItens({}), []);

  const qtdTotal = Object.values(itens).reduce((s, i) => s + i.qtd, 0);
  const total    = Object.values(itens).reduce((s, i) => s + i.preco * i.qtd, 0);
  const lista    = Object.values(itens);

  return { itens, lista, qtdTotal, total, adicionar, remover, limpar };
}
