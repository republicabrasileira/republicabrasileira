// @ts-check
import { defineConfig } from 'astro/config';

// Ao publicar no GitHub Pages em https://SEU-USUARIO.github.io/republicabrasileira:
//   site: 'https://SEU-USUARIO.github.io', base: '/republicabrasileira'
// Com domínio próprio (ex.: republicabrasileira.com.br):
//   site: 'https://republicabrasileira.com.br', base: '/'
export default defineConfig({
  site: 'https://republicabrasileira.github.io',
  base: '/republicabrasileira',
});
