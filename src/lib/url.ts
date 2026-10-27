/** Monta links respeitando o `base` do astro.config (necessário no GitHub Pages). */
export function url(caminho = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${caminho.replace(/^\//, '')}`;
}

export function dataBR(data: Date) {
  return data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
