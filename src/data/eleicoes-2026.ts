// Eleição presidencial de 2026: resultado e propostas dos principais candidatos.
// Propostas resumidas dos planos de governo registrados no TSE, a partir das fontes listadas.

export const PRIMEIRO_TURNO = [
  { nome: 'Flávio Bolsonaro', partido: 'PL', votos: 56104503, pct: 47.03 },
  { nome: 'Lula', partido: 'PT', votos: 53879538, pct: 45.16 },
  { nome: 'Augusto Cury', partido: 'Avante', votos: 3448569, pct: 2.89 },
  { nome: 'Renan Santos', partido: 'Missão', votos: 2675887, pct: 2.24 },
  { nome: 'Ronaldo Caiado', partido: 'PSD', votos: 2605148, pct: 2.18 },
  { nome: 'Outros 7 candidatos', partido: '', votos: 587143, pct: 0.48 },
];

export const SEGUNDO_TURNO = [
  { nome: 'Lula', partido: 'PT', pct: 51.79, eleito: true },
  { nome: 'Flávio Bolsonaro', partido: 'PL', pct: 48.21, eleito: false },
];

export const CANDIDATOS = [
  { id: 'lula', nome: 'Lula', partido: 'PT', resultado: 'Eleito (51,79% no 2º turno)' },
  { id: 'flavio', nome: 'Flávio Bolsonaro', partido: 'PL', resultado: '2º lugar (48,21% no 2º turno)' },
  { id: 'cury', nome: 'Augusto Cury', partido: 'Avante', resultado: '3º lugar (2,89%)' },
  { id: 'renan', nome: 'Renan Santos', partido: 'Missão', resultado: '4º lugar (2,24%)' },
] as const;

type Linha = { tema: string } & Record<(typeof CANDIDATOS)[number]['id'], string>;

const ND = 'Não detalhado nas fontes consultadas.';

export const PROPOSTAS: Linha[] = [
  {
    tema: 'Economia e impostos',
    lula: 'Manter a isenção do IR até R$ 5 mil, taxar mais os mais ricos, zerar impostos da cesta básica e ampliar o cashback.',
    flavio: 'Revisar a reforma tributária para reduzir o IVA e os impostos sobre consumo, com controle rígido de gastos para baixar os juros.',
    cury: 'Responsabilidade fiscal, corte de ministérios, redução de impostos e fundo de até R$ 50 bilhões para criar 10 milhões de microempresas.',
    renan: 'PEC de ajuste fiscal logo no início, Zonas Econômicas Especiais no Nordeste, energia nuclear (Angra 4) e reserva nacional de bitcoin.',
  },
  {
    tema: 'Trabalho',
    lula: 'Fim da escala 6x1 (44 para 40 horas sem corte de salário), aumento real do salário mínimo e regulação do trabalho por aplicativo.',
    flavio: 'Reduzir aos poucos o custo da folha para o empregador e criar contratos flexíveis para jovens de 18 a 24 anos e maiores de 50.',
    cury: 'Empreendedorismo em massa e educação financeira; sem proposta específica sobre jornada.',
    renan: 'Frentes de trabalho remuneradas no lugar do Bolsa Família.',
  },
  {
    tema: 'Segurança',
    lula: 'Ministério da Segurança Pública (após PEC), asfixia financeira das facções, controle de armas e 138 presídios de segurança máxima.',
    flavio: 'Facções tratadas como narcoterroristas, penas mais duras, maioridade penal aos 16 anos e castração química para estupradores.',
    cury: 'Recriar o Ministério da Segurança, sistema único de inteligência entre as polícias e força municipal de segurança.',
    renan: '"Direito Penal do Inimigo" para membros de facções, Estado de Defesa em territórios dominados e banimento judicial de facções.',
  },
  {
    tema: 'Saúde',
    lula: 'Ampliar Mais Médicos, Farmácia Popular e Agora Tem Especialistas; criar a Rede Brasil contra o Câncer.',
    flavio: 'Prontuário eletrônico único, inteligência artificial para marcar consultas e uso de horários ociosos da rede privada para zerar filas.',
    cury: 'Telemedicina para cobrir cerca de 80% das consultas básicas do SUS e Programa Nacional de Saúde Mental.',
    renan: ND,
  },
  {
    tema: 'Educação',
    lula: 'Tempo integral em todas as escolas, Pé-de-Meia universal no ensino médio e estendido à faculdade, mais Institutos Federais e cotas.',
    flavio: 'Alfabetização pelo método fônico, mais escolas cívico-militares e vouchers para escola privada quando faltar vaga pública.',
    cury: 'Tempo integral, disciplinas de gestão da emoção, educação financeira e empreendedorismo, e política para alunos neurodivergentes.',
    renan: 'Fim das cotas.',
  },
  {
    tema: 'Programas sociais',
    lula: 'Manter e expandir o Bolsa Família e o Minha Casa, Minha Vida, e criar a Política Nacional de Cuidados.',
    flavio: 'Manter os programas de renda, mas ligados a trilhas de qualificação para que a família saia deles.',
    cury: ND,
    renan: 'Substituir o Bolsa Família por frentes de trabalho remuneradas.',
  },
  {
    tema: 'Meio ambiente',
    lula: 'Desmatamento líquido zero até 2030, Ibama fortalecido e combate ao garimpo ilegal.',
    flavio: 'Zerar o desmatamento ilegal até 2029, licenciamento mais rápido e produtor rural como parceiro.',
    cury: ND,
    renan: 'Polos de hidrogênio verde e aço de baixo carbono no Nordeste.',
  },
  {
    tema: 'Estado e instituições',
    lula: 'Estado como indutor do desenvolvimento (BNDES, Nova Indústria Brasil) e protagonismo no Brics e no Sul Global.',
    flavio: 'Desburocratizar, abrir o comércio, afastar-se de ditaduras e retomar a entrada na OCDE.',
    cury: 'Semipresidencialismo, mandato de 8 anos para ministros do STF e revisão do pacto federativo.',
    renan: 'Reduzir os municípios de 5.570 para cerca de 1.656, metas obrigatórias para prefeituras e blockchain para rastrear emendas.',
  },
];

export const FONTES = [
  { titulo: 'Resultados do 1º e do 2º turno por região e estado — Poder360', url: 'https://www.poder360.com.br/poder-eleicoes-2026/compare-resultados-por-regiao-e-estado-do-1o-turno-para-o-2o-turno/' },
  { titulo: 'Votos de cada candidato no 1º turno (TSE) — CartaCapital, conferido com o total do Poder360', url: 'https://www.cartacapital.com.br/politica/tse-encerra-apuracao-do-1o-turno/' },
  { titulo: 'Lula é reeleito; resultado do 2º turno — TRE-SP', url: 'https://www.tre-sp.jus.br/comunicacao/noticias/2026/Outubro/eleicoes-2026-lula-e-reeleito-presidente-da-republica-confira-resultado-do-2o-turno-em-sp' },
  { titulo: 'Compare as propostas de Flávio Bolsonaro e Lula — Gazeta do Povo', url: 'https://www.gazetadopovo.com.br/eleicoes/2026/compare-principais-propostas-plano-de-gverno-flavio-bolsonaro-lula/' },
  { titulo: 'As promessas de Lula em caso de reeleição — O Povo', url: 'https://www.opovo.com.br/noticias/politica/eleicoes/2026/10/24/confira-as-promessas-de-lula-em-caso-de-reeleicao.html' },
  { titulo: 'Plano de Augusto Cury reúne propostas para 18 áreas — Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/politica/audio/2026-08/plano-de-augusto-cury-reune-propostas-para-18-areas' },
  { titulo: 'Cury propõe mandato de 8 anos no STF e semipresidencialismo — Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/augusto-cury-propoe-mandato-de-oito-anos-no-stf-e-semipresidencialismo' },
  { titulo: 'O que diz o plano de governo de Renan Santos — Gazeta do Povo', url: 'https://www.gazetadopovo.com.br/eleicoes/2026/como-renan-santos-pretende-restaurar-o-brasil-plano-de-governo-candidato-missao/' },
  { titulo: 'Renan Santos propõe foco em segurança e reformas — CNN Brasil', url: 'https://www.cnnbrasil.com.br/eleicoes/renan-santos-propoe-foco-em-seguranca-e-reformas-em-plano-de-governo/' },
];
