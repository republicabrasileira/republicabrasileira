import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { STATUS } from './lib/status';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    data: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    rascunho: z.boolean().default(false),
  }),
});

const fonte = z.object({ titulo: z.string(), url: z.string().url() });

const presidentes = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/presidentes' }),
  schema: z.object({
    nome: z.string(),
    nomeCompleto: z.string(),
    partido: z.string(),
    resumo: z.string(),
    fontes: z.array(fonte).default([]),
  }),
});

const mandatos = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/mandatos' }),
  schema: z.object({
    presidente: reference('presidentes'),
    // 1º, 2º... mandato deste presidente
    ordem: z.number(),
    inicio: z.number(),
    fim: z.number(),
    // direta = eleito pelo voto; indireta = Colégio Eleitoral; sucessao = vice que assumiu
    forma: z.enum(['direta', 'indireta', 'sucessao']),
    eleicao: z.number().optional(),
    resumo: z.string().optional(),
    planoDeGoverno: z.string().url().optional(),
    promessas: z
      .array(
        z.object({
          titulo: z.string(),
          tema: z.string(),
          status: z.enum(STATUS),
          analise: z.string().optional(),
          fontes: z.array(fonte).default([]),
          // false = rascunho: aparece com aviso até dados e fontes serem conferidos
          verificado: z.boolean().default(false),
        }),
      )
      .default([]),
  }),
});

export const collections = { artigos, presidentes, mandatos };
