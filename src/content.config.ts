import { defineCollection, z } from 'astro:content';
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

const mandatos = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/mandatos' }),
  schema: z.object({
    numero: z.number(),
    presidente: z.string(),
    inicio: z.number(),
    fim: z.number(),
    eleicao: z.number(),
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
          // false = rascunho: aparece com aviso até você conferir dados e fontes
          verificado: z.boolean().default(false),
        }),
      )
      .default([]),
  }),
});

export const collections = { artigos, mandatos };
