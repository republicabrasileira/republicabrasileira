// Contexto econômico de cada governo. Os números vêm de economia.json (Banco Central/IBGE);
// estes textos são a leitura do site sobre o que cada um herdou, encontrou e decidiu.

export interface Contexto {
  presidente: string; // id em src/content/presidentes
  herdou: string;
  cenario: string;
  decisoes: string;
  nota?: string;
}

export const CONTEXTO: Record<string, Contexto> = {
  sarney: {
    presidente: 'sarney',
    herdou: 'Dívida externa enorme e inflação alta deixadas pela ditadura.',
    cenario: 'A "década perdida" da América Latina: crédito externo fechado e juros americanos altos. Em 1987 o Brasil decretou moratória da dívida externa.',
    decisoes: 'Cinco planos econômicos com congelamento de preços: Cruzado (1986), Cruzado II, Bresser (1987) e Verão (1989). Todos fracassaram.',
    nota: 'O PIB cresceu, mas o governo terminou em hiperinflação, acima de 1.000% ao ano.',
  },
  collor: {
    presidente: 'collor',
    herdou: 'Hiperinflação.',
    cenario: 'Fim da Guerra Fria e onda de liberalização econômica no mundo.',
    decisoes: 'Plano Collor, com bloqueio de 80% da poupança. Abertura comercial, com redução das tarifas de importação, e início do programa de privatizações.',
    nota: 'Recessão de 4,3% em 1990, e a inflação voltou a subir.',
  },
  itamar: {
    presidente: 'itamar',
    herdou: 'Hiperinflação e uma crise política após o impeachment.',
    cenario: 'Juros internacionais em queda e capital voltando aos países emergentes.',
    decisoes: 'Plano Real: a URV em fevereiro de 1994 e a nova moeda em julho, com Fernando Henrique Cardoso no Ministério da Fazenda.',
    nota: 'A inflação média do governo é altíssima porque inclui os meses antes do Real. Depois de julho de 1994, ela despencou.',
  },
  fhc: {
    presidente: 'fhc',
    herdou: 'Uma moeda nova e frágil, ainda em teste.',
    cenario: 'Ambiente externo hostil, com crises no México (1995), na Ásia (1997), na Rússia (1998) e na Argentina (2001), além do apagão de energia (2001).',
    decisoes: 'Câmbio controlado até 1999, depois o tripé macroeconômico: metas de inflação, câmbio flutuante e superávit primário. Privatizações (Vale, Telebras), Lei de Responsabilidade Fiscal e acordos com o FMI.',
    nota: 'O dólar saiu de R$ 0,85 para R$ 3,63. O salto de 2002 refletiu também o medo do mercado com a eleição de Lula.',
  },
  'lula-1': {
    presidente: 'lula',
    herdou: 'Inflação controlada, o tripé macroeconômico e um dólar caro.',
    cenario: 'O superciclo das commodities, com a China comprando minério, soja e petróleo como nunca. Juros baixos no mundo até a crise global de 2008.',
    decisoes: 'Manteve o tripé no início, quitou a dívida com o FMI (2005) e acumulou reservas. Bolsa Família, aumento real do salário mínimo e expansão do crédito. Em 2008, estímulos para enfrentar a crise.',
    nota: 'O PIB chegou a crescer 7,5% em 2010 e o dólar caiu de R$ 3,44 para R$ 1,69. Parte do mérito é do cenário externo favorável.',
  },
  dilma: {
    presidente: 'dilma',
    herdou: 'Economia aquecida, mas com o fim do boom das commodities se aproximando.',
    cenario: 'Queda dos preços das commodities e desaceleração da China.',
    decisoes: '"Nova Matriz Econômica": redução forçada dos juros em 2012, desonerações para setores escolhidos e controle dos preços de energia e combustíveis. As "pedaladas fiscais" levaram ao impeachment.',
    nota: 'Recessão de 3,5% em 2015, uma das piores da história. O desemprego subiu de 8,0% para 11,3%.',
  },
  temer: {
    presidente: 'temer',
    herdou: 'A recessão de 2015–2016 em curso e desemprego alto.',
    cenario: 'Recuperação lenta do mundo e preços das commodities ainda baixos.',
    decisoes: 'Teto de gastos, reforma trabalhista e queda da Selic de 14,25% para 6,5%. Greve dos caminhoneiros em 2018.',
    nota: 'O PIB médio é negativo porque 2016, ano de recessão iniciada antes dele, entra na conta. Em 2017 e 2018, o PIB cresceu 1,3% e 1,8%.',
  },
  bolsonaro: {
    presidente: 'bolsonaro',
    herdou: 'Economia saindo da recessão, inflação baixa e desemprego acima de 12%.',
    cenario: 'A pandemia de 2020 e, em 2022, a guerra na Ucrânia, que encareceu energia e alimentos no mundo inteiro.',
    decisoes: 'Reforma da Previdência (2019) e autonomia do Banco Central. Auxílio Emergencial na pandemia e corte de impostos sobre combustíveis em 2022.',
    nota: 'O PIB caiu 3,3% em 2020 e a inflação chegou a 10% em 2021. O desemprego caiu de 12,2% para 7,9% na retomada pós-pandemia.',
  },
  'lula-3': {
    presidente: 'lula',
    herdou: 'Desemprego em queda, inflação alta recém-controlada e pressão por mais gastos sociais.',
    cenario: 'Juros altos nos EUA e dólar forte no mundo.',
    decisoes: 'PEC da Transição, com aumento de gastos, novo arcabouço fiscal, reforma tributária e isenção do IR até R$ 5 mil. O Banco Central levou a Selic a 15% para conter a inflação.',
    nota: 'O desemprego chegou ao menor nível da série histórica (5,3%). A dívida pública e o custo dos juros são a principal preocupação do mercado.',
  },
};
