export function num(valor: number, casas = 1) {
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

export function pct(valor: number, casas = 1) {
  return `${num(valor, casas)}%`;
}

export function reais(valor: number) {
  return `R$ ${num(valor, 2)}`;
}

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/** '2026-09' -> 'set/2026' */
export function mes(aaaamm: string) {
  return `${MESES[Number(aaaamm.slice(5, 7)) - 1]}/${aaaamm.slice(0, 4)}`;
}

export function minutosDeLeitura(texto: string) {
  return Math.max(1, Math.round(texto.split(/\s+/).length / 220));
}
