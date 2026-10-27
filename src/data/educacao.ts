// Educação e programas sociais: dados oficiais (IBGE, Inep, MEC, OCDE) e histórico dos programas.

// Taxa de analfabetismo, 15 anos ou mais (%). Censos do IBGE.
export const ANALFABETISMO_CENSO = [
  { ano: 1980, valor: 25.5 },
  { ano: 1991, valor: 20.1 },
  { ano: 2000, valor: 13.6 },
  { ano: 2010, valor: 9.6 },
  { ano: 2022, valor: 7.0 },
];

// PNAD Contínua (metodologia diferente do Censo, por isso em série separada)
export const ANALFABETISMO_PNAD = { inicio: { ano: 2016, valor: 6.7 }, fim: { ano: 2025, valor: 4.9 } };

// Ideb (Inep), escala de 0 a 10, rede pública e privada.
export const IDEB = {
  anos: [2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023, 2025],
  series: [
    { id: 'iniciais', nome: 'Anos iniciais (1º ao 5º ano)', valores: [3.8, 4.2, 4.6, 5.0, 5.2, 5.5, 5.8, 5.9, 5.8, 6.0, 6.3] },
    { id: 'finais', nome: 'Anos finais (6º ao 9º ano)', valores: [3.5, 3.8, 4.0, 4.1, 4.2, 4.5, 4.7, 4.9, 5.1, 5.0, 5.3] },
    { id: 'medio', nome: 'Ensino médio', valores: [3.4, 3.5, 3.6, 3.7, 3.7, 3.7, 3.8, 4.2, 4.2, 4.3, 4.5] },
  ],
};

// Pisa (OCDE): pontuação média do Brasil
export const PISA = [
  { ano: 2018, matematica: 384, leitura: 413, ciencias: 404 },
  { ano: 2022, matematica: 379, leitura: 410, ciencias: 403 },
  { ano: 2025, matematica: 377, leitura: 408, ciencias: 409 },
];

// Matrículas no ensino superior (milhões), Censo da Educação Superior / Inep
export const MATRICULAS_SUPERIOR = [
  { ano: 1995, valor: 1.7 },
  { ano: 2006, valor: 4.94 },
  { ano: 2010, valor: 6.38 },
  { ano: 2018, valor: 8.45 },
  { ano: 2024, valor: 10.23 },
];

// Universidades federais criadas por lei em cada governo
export const UNIVERSIDADES = [
  {
    governo: 'JK (1956–1961), antes da ditadura',
    quantidade: 11,
    doZero: null,
    exemplos: 'Ex.: UFJF (1960), que reuniu e federalizou cinco faculdades que já existiam em Juiz de Fora; UFES (1961), que era uma universidade estadual',
    nota: 'Segundo lugar na contagem do MEC. Como as de Lula, a maioria nasceu de faculdades ou universidades que já existiam e foram federalizadas.',
  },
  {
    governo: 'Ditadura militar (1964–1985)',
    quantidade: null,
    doZero: null,
    exemplos: 'Só no governo Costa e Silva (1967–1969) foram 6, segundo o MEC. Ex.: UFSCar e UFS (1968), UFOP, UFPel e FURG (1969), UFMT (1970), UFMS (1979), UNIR (1982)',
    nota: 'A rede federal cresceu, mas a marca do período foi a Reforma Universitária de 1968, que abriu caminho para a expansão das faculdades privadas.',
  },
  {
    governo: 'FHC',
    quantidade: 6,
    doZero: 1,
    exemplos: 'UFLA e Unifesp (1994), UFT (2000), UFCG, Univasf e UFRA (2002)',
    nota: 'Só a Univasf nasceu do zero; as outras vieram de escolas federais, de campi desmembrados ou da antiga universidade estadual do Tocantins. As leis da UFLA e da Unifesp são de dezembro de 1994 (governo Itamar), mas o MEC as conta com FHC. Desmente a frase "tucanos não criaram nenhuma universidade".',
  },
  {
    governo: 'Lula (2003–2010)',
    quantidade: 14,
    doZero: 5,
    exemplos: 'Do zero: UFABC, Unipampa, UFFS, Unila e Unilab. Transformadas de escolas e faculdades: UTFPR, Unifal, UFTM, UFVJM, UFERSA e UFCSPA. Desmembradas de campi: UFGD, UFRB e UFOPA',
    nota: 'O maior número da história. Das escolas transformadas, só a da UFERSA (ESAM, 1967) e o campus de Dourados (UFGD, anos 1970) vêm da ditadura; as demais são de 1909 a 1961. Houve ainda o Reuni (2007), que ampliou vagas nas federais existentes, e 38 Institutos Federais (2008).',
  },
  {
    governo: 'Dilma',
    quantidade: 4,
    doZero: 1,
    exemplos: 'Do zero: UFSB. Desmembradas: UFOB, UFCA e Unifesspa (2013)',
    nota: 'Também enviou ao Congresso os projetos de universidades que só seriam sancionadas em 2018.',
  },
  { governo: 'Temer', quantidade: 5, doZero: 0, exemplos: 'UFCAT, UFJ, UFR, UFAPE e UFDPar (2018)', nota: 'Todas por desmembramento de campi existentes; quatro vieram de projetos do governo Dilma.' },
  { governo: 'Bolsonaro', quantidade: 1, doZero: 0, exemplos: 'UFNT (2019)', nota: 'Desmembrada da UFT.' },
  { governo: 'Lula (2023–2026)', quantidade: 2, doZero: null, exemplos: 'Unind e UFEsporte (2026)', nota: 'Projetos enviados em 2025.' },
];

// Programas mais conhecidos: quem criou, quem mudou e como estão hoje
export const PROGRAMAS = [
  { nome: 'SUS', area: 'Saúde', criou: 'Constituição de 1988 (governo Sarney) e Lei 8.080/1990 (Collor)', mudou: 'Saúde da Família (Itamar, 1994), remédios genéricos (FHC, 1999), Mais Médicos (Dilma, 2013)', hoje: 'Ativo' },
  { nome: 'BPC', area: 'Assistência', criou: 'Constituição de 1988 e LOAS (Itamar, 1993)', mudou: 'Benefício de um salário mínimo para idosos e pessoas com deficiência de baixa renda', hoje: 'Ativo' },
  { nome: 'Bolsa Família', area: 'Renda', criou: 'Bolsa Escola, Bolsa Alimentação e Auxílio-Gás (FHC, 2001); unificados no Bolsa Família (Lula, 2003)', mudou: 'Virou Auxílio Brasil, com valor mínimo maior (Bolsonaro, 2021); voltou a ser Bolsa Família com adicional por criança (Lula, 2023)', hoje: 'Ativo' },
  { nome: 'Auxílio Emergencial', area: 'Renda', criou: 'Congresso e governo Bolsonaro (2020), na pandemia', mudou: 'Valor reduzido em 2021', hoje: 'Encerrado' },
  { nome: 'Farmácia Popular', area: 'Saúde', criou: 'Lula (2004)', mudou: 'Remédios gratuitos para hipertensão e diabetes (Dilma, 2011); gratuidade ampliada (Lula, 2025)', hoje: 'Ativo' },
  { nome: 'Mais Médicos', area: 'Saúde', criou: 'Dilma (2013)', mudou: 'Substituído pelo Médicos pelo Brasil (Bolsonaro, 2019); retomado (Lula, 2023)', hoje: 'Ativo' },
  { nome: 'Minha Casa, Minha Vida', area: 'Moradia', criou: 'Lula (2009)', mudou: 'Virou Casa Verde e Amarela (Bolsonaro, 2020); retomado (Lula, 2023)', hoje: 'Ativo' },
  { nome: 'Fundef / Fundeb', area: 'Educação', criou: 'Fundef (FHC, 1996)', mudou: 'Fundeb, ampliado ao ensino infantil e médio (Lula, 2007); tornado permanente pelo Congresso (2020)', hoje: 'Ativo' },
  { nome: 'Enem e Sisu', area: 'Educação', criou: 'Enem (FHC, 1998)', mudou: 'Enem vira porta de entrada nas federais com o Sisu (Lula, 2009–2010)', hoje: 'Ativo' },
  { nome: 'Fies', area: 'Educação', criou: 'FHC (1999)', mudou: 'Forte expansão (Dilma, 2010–2014), seguida de cortes e regras mais duras a partir de 2015', hoje: 'Ativo, menor' },
  { nome: 'ProUni', area: 'Educação', criou: 'Lula (2004)', mudou: 'Bolsas em faculdades privadas em troca de isenção de impostos', hoje: 'Ativo' },
  { nome: 'Lei de Cotas', area: 'Educação', criou: 'Dilma (2012)', mudou: 'Revisada e mantida (Lula, 2023)', hoje: 'Ativo' },
  { nome: 'Pé-de-Meia', area: 'Educação', criou: 'Lula (2024)', mudou: 'Poupança para alunos de baixa renda que concluem o ensino médio', hoje: 'Ativo' },
];

export const FONTES = [
  { titulo: 'Censo 2022: alfabetizados no país são 93% — Correio Braziliense', url: 'https://www.correiobraziliense.com.br/brasil/2024/05/6859829-alfabetizados-no-pais-sao-93-mostra-censo.html' },
  { titulo: 'Analfabetismo cai para 4,9% em 2025 (PNAD Contínua/IBGE) — Diário do Nordeste', url: 'https://diariodonordeste.verdesmares.com.br/ultima-hora/pais/taxa-de-analfabetismo-no-brasil-cai-para-49-e-chega-a-nivel-historico-desde-2016-1.3771762' },
  { titulo: 'Ideb 2005–2023 — infográfico do MEC/Inep', url: 'https://www.gov.br/mec/pt-br/centrais-de-conteudo/infograficos/ideb/documentos/bra-ago-24.pdf' },
  { titulo: 'Ideb 2025 mostra avanço da educação básica — O Povo', url: 'https://www.opovo.com.br/noticias/brasil/2026/08/05/ideb-mostra-avanco-da-educacao-basica-no-pais.html' },
  { titulo: 'Divulgados os resultados do Pisa 2022 — Agência Gov', url: 'https://agenciagov.ebc.com.br/noticias/202312/divulgados-os-resultados-do-pisa-2022' },
  { titulo: 'Comparação das posições do Brasil no Pisa — Aos Fatos', url: 'https://www.aosfatos.org/noticias/comparacao-posicoes-brasil-pisa/' },
  { titulo: '73% dos alunos não sabem o básico em matemática, diz Pisa — O Povo', url: 'https://mais.opovo.com.br/jornal/cidades/2023/12/06/73-dos-alunos-nao-sabem-o-basico-em-matematica-diz-pisa.html' },
  { titulo: 'Por que o Ceará tem as melhores escolas públicas do Brasil — Gazeta do Povo', url: 'https://www.gazetadopovo.com.br/educacao/por-que-o-ceara-tem-as-melhores-escolas-publicas-do-brasil-32nzq3njgh0o8kgb2p4wi223p/' },
  { titulo: 'Brasil tem mais alunos a distância que presenciais (Censo da Educação Superior) — Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2025-09/brasil-tem-mais-alunos-em-cursos-distancia-que-em-presenciais' },
  { titulo: 'Universidades criadas por presidente, com dados do MEC: Lula 14, JK 11, Costa e Silva e FHC 6 — Agência Pública (2017)', url: 'https://apublica.org/checagem/2017/11/truco-exageros-e-imprecisoes-marcam-discurso-de-lula-em-caravana/' },
  { titulo: 'História da UFJF: lei de 1960 federalizou cinco faculdades — UFJF', url: 'https://www2.ufjf.br/60anos/historia/' },
  { titulo: 'História da Ufes: universidade estadual federalizada em 1961 — Ufes', url: 'https://international.ufes.br/en/history-0' },
  { titulo: 'Lista de universidades federais, com o ano de fundação das instituições de origem — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Lista_de_universidades_federais_do_Brasil' },
  { titulo: 'ProUni e novas universidades: 14 com Lula e 4 com Dilma (MEC) — Agência Pública', url: 'https://apublica.org/checagem/2015/09/truco-prouni-e-novas-universidades-nao-e-bem-assim-marcon/' },
  { titulo: 'Lei 10.419/2002, que cria a UFCG — Planalto', url: 'https://planalto.gov.br/ccivil_03/LEIS/2002/L10419.htm' },
  { titulo: 'MEC conclui criação de 5 universidades — Poder360', url: 'https://www.poder360.com.br/governo/ministerio-da-educacao-empossa-reitores-e-conclui-criacao-de-5-universidades/' },
  { titulo: 'Sancionada a lei que cria a UFNT — Conexão Tocantins', url: 'https://conexaoto.com.br/2019/07/09/sancionada-lei-que-cria-a-universidade-federal-do-norte-do-tocantins' },
  { titulo: 'Reforma universitária de 1968 e expansão privada — Revista Pesquisa FAPESP', url: 'https://revistapesquisa.fapesp.br/modelos-recriados/' },
  { titulo: 'Bolsa Família: histórico — Wikipedia', url: 'https://en.wikipedia.org/wiki/Bolsa_Fam%C3%ADlia' },
];
