"""Baixa séries do Banco Central (SGS) e calcula indicadores por governo.

Uso: python scripts/economia.py
Gera src/data/economia.json, lido pelas páginas de Economia.

Séries:
  7326  PIB - variação real anual (%)                 fonte original: IBGE
  433   IPCA - variação mensal (%)                    fonte original: IBGE
  3698  Dólar comercial (venda) - média mensal (R$)   fonte: Banco Central
  24369 Taxa de desocupação - PNAD Contínua (%)       fonte original: IBGE, desde 2012
"""

import json
import math
import urllib.request
from pathlib import Path

SAIDA = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'economia.json'

# Mês de início e de fim (inclusive) de cada governo, e os anos do PIB atribuídos a ele.
# Convenção: o ano do PIB fica com quem governou a maior parte dele.
GOVERNOS = [
    ('sarney', 'Sarney', '1985-03', '1990-02', 1985, 1989),
    ('collor', 'Collor', '1990-03', '1992-09', 1990, 1992),
    ('itamar', 'Itamar', '1992-10', '1994-12', 1993, 1994),
    ('fhc', 'FHC', '1995-01', '2002-12', 1995, 2002),
    ('lula-1', 'Lula (1º e 2º)', '2003-01', '2010-12', 2003, 2010),
    ('dilma', 'Dilma', '2011-01', '2016-04', 2011, 2015),
    ('temer', 'Temer', '2016-05', '2018-12', 2016, 2018),
    ('bolsonaro', 'Bolsonaro', '2019-01', '2022-12', 2019, 2022),
    ('lula-3', 'Lula (3º)', '2023-01', '2026-12', 2023, 2026),
]

INICIO_REAL = '1994-07'


def serie(codigo):
    url = f'https://api.bcb.gov.br/dados/serie/bcdata.sgs.{codigo}/dados?formato=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        dados = json.load(r)
    # 'dd/mm/aaaa' -> 'aaaa-mm'
    return {f"{d['data'][6:]}-{d['data'][3:5]}": float(d['valor']) for d in dados}


def no_periodo(serie_mensal, inicio, fim):
    return [(m, v) for m, v in sorted(serie_mensal.items()) if inicio <= m <= fim]


def main():
    pib = {int(m[:4]): v for m, v in serie(7326).items()}
    ipca = serie(433)
    dolar = serie(3698)
    desemprego = serie(24369)

    governos = []
    for id_, nome, inicio, fim, ano_ini, ano_fim in GOVERNOS:
        anos = [a for a in range(ano_ini, ano_fim + 1) if a in pib]
        fator = math.prod(1 + pib[a] / 100 for a in anos)
        pib_medio = (fator ** (1 / len(anos)) - 1) * 100 if anos else None

        meses_ipca = no_periodo(ipca, inicio, fim)
        acumulado = math.prod(1 + v / 100 for _, v in meses_ipca)
        ipca_anual = (acumulado ** (12 / len(meses_ipca)) - 1) * 100

        # Antes do Real a moeda era outra: o dólar não é comparável
        meses_dolar = no_periodo(dolar, max(inicio, INICIO_REAL), fim) if inicio >= INICIO_REAL else []
        meses_desemp = no_periodo(desemprego, inicio, fim)

        governos.append({
            'id': id_,
            'nome': nome,
            'inicio': inicio,
            'fim': fim if fim <= max(ipca) else max(ipca),
            'emAndamento': fim > max(ipca),
            'pib': {
                'mediaAnual': round(pib_medio, 2) if pib_medio is not None else None,
                'anos': {a: pib[a] for a in anos},
            },
            'ipca': {
                'acumulado': round((acumulado - 1) * 100, 1),
                'mediaAnual': round(ipca_anual, 1),
                'meses': len(meses_ipca),
            },
            'dolar': {
                'medio': round(sum(v for _, v in meses_dolar) / len(meses_dolar), 2),
                'inicio': meses_dolar[0][1],
                'fim': meses_dolar[-1][1],
            } if meses_dolar else None,
            'desemprego': {
                'inicio': meses_desemp[0][1],
                'inicioMes': meses_desemp[0][0],
                'fim': meses_desemp[-1][1],
                'fimMes': meses_desemp[-1][0],
            } if meses_desemp else None,
        })

    resultado = {
        'atualizadoEm': max(ipca),
        'governos': governos,
        'pibAnual': [{'ano': a, 'valor': v} for a, v in sorted(pib.items()) if a >= 1985],
        'dolarMensal': [{'mes': m, 'valor': v} for m, v in sorted(dolar.items()) if m >= INICIO_REAL],
    }
    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    SAIDA.write_text(json.dumps(resultado, ensure_ascii=False, indent=1), encoding='utf-8')
    print(f'Gravado {SAIDA} (dados até {resultado["atualizadoEm"]})')


if __name__ == '__main__':
    main()
