/**
 * Máscara de telefone: (XX) XXXXX-XXXX
 */
export function maskPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2)  return digits.length ? `(${digits}` : '';
  if (digits.length <= 7)  return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
  if (digits.length <= 11) return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  return value;
}

/**
 * Validação básica do formulário de encomenda
 */
export function validateForm(form) {
  const errors = {};
  if (!form.nome.trim())     errors.nome     = 'Informe seu nome.';
  if (!form.telefone.trim()) errors.telefone = 'Informe seu telefone.';
  else if (form.telefone.replace(/\D/g, '').length < 10)
                             errors.telefone = 'Telefone inválido.';
  if (!form.produto)         errors.produto  = 'Selecione um produto.';
  if (!form.data)            errors.data     = 'Informe a data desejada.';
  return errors;
}

/**
 * Monta a mensagem formatada para WhatsApp
 */
export function buildWhatsAppMessage(form) {
  const lines = [
    '🍬 *Nova Encomenda — Carol Amaral Doceria*',
    '',
    `👤 *Nome:* ${form.nome}`,
    `📞 *Telefone:* ${form.telefone}`,
    `🍫 *Produto:* ${form.produto}`,
    `📅 *Data de entrega:* ${formatDate(form.data)}`,
  ];

  if (form.quantidade) lines.push(`📦 *Quantidade:* ${form.quantidade}`);
  if (form.observacoes) lines.push(`📝 *Obs:* ${form.observacoes}`);

  return encodeURIComponent(lines.join('\n'));
}

function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
