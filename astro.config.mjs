// @ts-check
import { defineConfig } from 'astro/config';

// Publicado no GitHub Pages como site de usuário, na raiz de https://republicabrasileira.github.io.
// Com domínio próprio (ex.: republicabrasileira.com.br), basta trocar o site.
export default defineConfig({
  site: 'https://republicabrasileira.github.io',
  base: '/',
});
