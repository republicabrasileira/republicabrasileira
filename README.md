# República Brasileira

Site estático feito com [Astro](https://astro.build) e publicado no GitHub Pages.

## Como escrever um artigo

Crie um arquivo em `src/content/artigos/`, por exemplo `meu-texto.md`:

```markdown
---
titulo: Título do texto
descricao: Uma frase de resumo.
data: 2026-11-01
tags: [economia, opinião]
rascunho: false   # true = não aparece no site
---

Texto em Markdown...
```

O nome do arquivo vira o endereço: `/artigos/meu-texto/`.

## Como cadastrar uma promessa

Cada presidente tem uma ficha em `src/content/presidentes/` (ex.: `lula.yaml`) e cada mandato um arquivo em
`src/content/mandatos/` (ex.: `lula-3.yaml`), ligado ao presidente pelo campo `presidente: lula`.

Para cadastrar uma promessa, edite o arquivo do mandato e adicione um item em `promessas`:

```yaml
  - titulo: Texto da promessa
    tema: Saúde
    status: em_andamento   # cumprida | parcial | em_andamento | nao_cumprida | nao_iniciada
    analise: O que foi feito, com números.
    fontes:
      - titulo: Plano de governo (TSE)
        url: https://...
    verificado: true       # false mostra o selo "rascunho"
```

O placar e a página "O que cobrar" se atualizam sozinhos. O mandato mais recente (maior `inicio`) é sempre
tratado como o atual, e "O que cobrar" lista as pendências dos mandatos anteriores do mesmo presidente.

Para um novo mandato, crie `src/content/mandatos/NOME-N.yaml`:

```yaml
presidente: lula        # nome do arquivo em src/content/presidentes/
ordem: 4                # 4º mandato deste presidente
forma: direta           # direta | indireta | sucessao
inicio: 2027
fim: 2030
eleicao: 2026
promessas: []
```

## Rodar no computador

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:4321/republicabrasileira/
```

## Publicar no GitHub Pages

1. Crie um repositório chamado `republicabrasileira` no GitHub.
2. Em `astro.config.mjs`, ajuste `site` e `base` se mudar de endereço ou usar domínio próprio.
3. No repositório: **Settings → Pages → Source: GitHub Actions**.
4. Envie o código:
   ```bash
   git init -b main
   git add .
   git commit -m "Primeira versão"
   git remote add origin https://github.com/republicabrasileira/republicabrasileira.git
   git push -u origin main
   ```

A cada `git push` na branch `main`, o site é recompilado e publicado automaticamente.
