export const STATUS = ['cumprida', 'parcial', 'em_andamento', 'nao_cumprida', 'nao_iniciada'] as const;
export type Status = (typeof STATUS)[number];

export const STATUS_LABEL: Record<Status, string> = {
  cumprida: 'Cumprida',
  parcial: 'Parcialmente cumprida',
  em_andamento: 'Em andamento',
  nao_cumprida: 'Não cumprida',
  nao_iniciada: 'Ainda não iniciada',
};

// Promessas que entram na lista de cobranças do mandato seguinte
export const PENDENTES: Status[] = ['parcial', 'em_andamento', 'nao_cumprida'];

/** Percentual de cumprimento: cumprida = 1, parcial = 0,5. Ignora as não iniciadas. */
export function placar(promessas: { status: Status }[]) {
  const avaliadas = promessas.filter((p) => p.status !== 'nao_iniciada');
  const contagem = Object.fromEntries(STATUS.map((s) => [s, 0])) as Record<Status, number>;
  for (const p of promessas) contagem[p.status]++;
  const pontos = contagem.cumprida + contagem.parcial * 0.5;
  const percentual = avaliadas.length ? Math.round((pontos / avaliadas.length) * 100) : null;
  return { total: promessas.length, avaliadas: avaliadas.length, contagem, percentual };
}
