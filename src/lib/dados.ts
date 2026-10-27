import { getCollection, type CollectionEntry } from 'astro:content';

export type Mandato = CollectionEntry<'mandatos'>;
export type Presidente = CollectionEntry<'presidentes'> & { mandatos: Mandato[] };

export const FORMA_LABEL: Record<Mandato['data']['forma'], string> = {
  direta: 'Eleição direta',
  indireta: 'Eleição indireta (Colégio Eleitoral)',
  sucessao: 'Vice que assumiu a Presidência',
};

/** Todos os mandatos em ordem cronológica. */
export async function getMandatos() {
  return (await getCollection('mandatos')).sort((a, b) => a.data.inicio - b.data.inicio || a.data.ordem - b.data.ordem);
}

/** Presidentes em ordem cronológica, cada um com seus mandatos. */
export async function getPresidentes(): Promise<Presidente[]> {
  const mandatos = await getMandatos();
  const presidentes = await getCollection('presidentes');
  return presidentes
    .map((p) => ({ ...p, mandatos: mandatos.filter((m) => m.data.presidente.id === p.id) }))
    .filter((p) => p.mandatos.length > 0)
    .sort((a, b) => a.mandatos[0].data.inicio - b.mandatos[0].data.inicio);
}

export function periodo(p: Presidente) {
  return `${p.mandatos[0].data.inicio}–${p.mandatos.at(-1)!.data.fim}`;
}
