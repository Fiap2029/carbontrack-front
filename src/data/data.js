import amazoniaA17 from '../assets/amazonia-a17.jpg'
import reservaRioNorte from '../assets/reserva-rio-norte.jpg'
import zonaFiscalizacaoLeste from '../assets/zona-fiscalizacao.jpg'
import corredorVerdeSul from '../assets/corredor-verde-sul.jpg'
import mataAtlanticaProtegida from '../assets/mata-atlantica-protegida.jpg'
import fazendaValeVerde from '../assets/fazenda-vale-verde.jpg'

export const organizacoes = [
  {
    id: 1,
    nome: 'Fazenda Vale Verde',
    tipo: 'Fazenda',
    cnpj: '12.345.678/0001-90',
    email: 'fazenda@carbontrack.com',
    senha: 'F123456',
    statusConta: 'Ativa',
  },
  {
    id: 2,
    nome: 'Instituto Verde Vivo',
    tipo: 'ONG Ambiental',
    cnpj: '23.456.789/0001-80',
    email: 'ong@carbontrack.com',
    senha: 'O123456',
    statusConta: 'Ativa',
  },
  {
    id: 3,
    nome: 'Secretaria Ambiental da Amazônia',
    tipo: 'Governo',
    cnpj: '34.567.890/0001-70',
    email: 'governo@carbontrack.com',
    senha: 'S123456',
    statusConta: 'Ativa',
  },
];

export const areasMonitoradas = [
  {
    id: 1,
    idOrganizacao: 1,
    nome: 'Reserva Legal Norte',
    estado: 'GO',
    bioma: 'Cerrado',
    tamanhoHectares: 320,
    objetivoMonitoramento:
      'Monitorar reserva legal, cobertura vegetal e risco de queimada na propriedade.',
    status: 'Atenção',
    imagem: fazendaValeVerde,
  },
  {
    id: 2,
    idOrganizacao: 2,
    nome: 'Mata Atlântica Protegida',
    estado: 'BA',
    bioma: 'Mata Atlântica',
    tamanhoHectares: 850,
    objetivoMonitoramento:
      'Acompanhar preservação ambiental e identificar possíveis sinais de degradação.',
    status: 'Estável',
    imagem: mataAtlanticaProtegida,
  },
  {
    id: 3,
    idOrganizacao: 2,
    nome: 'Corredor Verde Sul',
    estado: 'PR',
    bioma: 'Mata Atlântica',
    tamanhoHectares: 430,
    objetivoMonitoramento:
      'Monitorar recuperação ambiental e conectividade entre áreas verdes.',
    status: 'Monitorando',
    imagem: corredorVerdeSul,
  },
  {
    id: 4,
    idOrganizacao: 3,
    nome: 'Trecho Amazônia A-17',
    estado: 'AM',
    bioma: 'Amazônia',
    tamanhoHectares: 2500,
    objetivoMonitoramento:
      'Fiscalizar possível perda de cobertura vegetal em área crítica.',
    status: 'Crítico',
    imagem: amazoniaA17,
  },
  {
    id: 5,
    idOrganizacao: 3,
    nome: 'Reserva Rio Norte',
    estado: 'PA',
    bioma: 'Amazônia',
    tamanhoHectares: 1800,
    objetivoMonitoramento:
      'Acompanhar risco de queimada e pressão de desmatamento.',
    status: 'Atenção',
    imagem: reservaRioNorte,
  },
  {
    id: 6,
    idOrganizacao: 3,
    nome: 'Zona de Fiscalização Leste',
    estado: 'MT',
    bioma: 'Amazônia',
    tamanhoHectares: 3200,
    objetivoMonitoramento:
      'Monitoramento preventivo de grande extensão territorial.',
    status: 'Monitorando',
    imagem: zonaFiscalizacaoLeste,
  },
];

export const analisesAmbientais = [
  {
    id: 1,
    idArea: 1,
    dataAnalise: '01/06/2026',
    coberturaVegetal: 74,
    riscoDesmatamento: 'Médio',
    riscoQueimada: 'Alto',
    carbonoPreservado: 180,
    indiceVerde: 74,
    fonteSimulada: 'Sentinel-2',
  },
  {
    id: 2,
    idArea: 2,
    dataAnalise: '01/06/2026',
    coberturaVegetal: 91,
    riscoDesmatamento: 'Baixo',
    riscoQueimada: 'Baixo',
    carbonoPreservado: 620,
    indiceVerde: 91,
    fonteSimulada: 'Sentinel-2',
  },
  {
    id: 3,
    idArea: 3,
    dataAnalise: '01/06/2026',
    coberturaVegetal: 78,
    riscoDesmatamento: 'Médio',
    riscoQueimada: 'Baixo',
    carbonoPreservado: 310,
    indiceVerde: 78,
    fonteSimulada: 'Sentinel-2',
  },
  {
    id: 4,
    idArea: 4,
    dataAnalise: '01/06/2026',
    coberturaVegetal: 63,
    riscoDesmatamento: 'Alto',
    riscoQueimada: 'Médio',
    carbonoPreservado: 1400,
    indiceVerde: 58,
    fonteSimulada: 'Sentinel-2',
  },
  {
    id: 5,
    idArea: 5,
    dataAnalise: '01/06/2026',
    coberturaVegetal: 71,
    riscoDesmatamento: 'Médio',
    riscoQueimada: 'Alto',
    carbonoPreservado: 1050,
    indiceVerde: 69,
    fonteSimulada: 'Sentinel-2',
  },
  {
    id: 6,
    idArea: 6,
    dataAnalise: '01/06/2026',
    coberturaVegetal: 84,
    riscoDesmatamento: 'Baixo',
    riscoQueimada: 'Médio',
    carbonoPreservado: 1900,
    indiceVerde: 82,
    fonteSimulada: 'Sentinel-2',
  },
];

export const alertasAmbientais = [
  {
    id: 1,
    idAnalise: 1,
    idArea: 1,
    tipo: 'Risco de queimada',
    severidade: 'Alta',
    descricao:
      'Foi identificado risco elevado de queimada na área monitorada, exigindo acompanhamento preventivo.',
    dataAlerta: '01/06/2026',
    status: 'Ativo',
  },
  {
    id: 2,
    idAnalise: 3,
    idArea: 3,
    tipo: 'Redução de cobertura vegetal',
    severidade: 'Média',
    descricao:
      'A análise identificou redução moderada na cobertura vegetal da área, recomendando novo acompanhamento.',
    dataAlerta: '01/06/2026',
    status: 'Em análise',
  },
  {
    id: 3,
    idAnalise: 4,
    idArea: 4,
    tipo: 'Possível desmatamento',
    severidade: 'Crítica',
    descricao:
      'A análise indicou risco alto de desmatamento em trecho monitorado da Amazônia.',
    dataAlerta: '01/06/2026',
    status: 'Ativo',
  },
  {
    id: 4,
    idAnalise: 4,
    idArea: 4,
    tipo: 'Perda de cobertura vegetal',
    severidade: 'Alta',
    descricao:
      'Foi identificada redução significativa na cobertura vegetal da área monitorada.',
    dataAlerta: '01/06/2026',
    status: 'Ativo',
  },
  {
    id: 5,
    idAnalise: 5,
    idArea: 5,
    tipo: 'Risco de queimada',
    severidade: 'Alta',
    descricao:
      'A região apresenta risco elevado de queimada, exigindo prioridade de monitoramento.',
    dataAlerta: '01/06/2026',
    status: 'Ativo',
  },
  {
    id: 6,
    idAnalise: 6,
    idArea: 6,
    tipo: 'Monitoramento preventivo',
    severidade: 'Média',
    descricao:
      'A área apresenta risco moderado e deve continuar em acompanhamento preventivo.',
    dataAlerta: '01/06/2026',
    status: 'Em análise',
  },
];

export const relatoriosAmbientais = [
  {
    id: 1,
    idArea: 1,
    dataGeracao: '01/06/2026',
    resumo:
      'A Reserva Legal Norte apresenta cobertura vegetal moderada, mas possui risco elevado de queimada.',
    recomendacao:
      'Recomenda-se monitoramento contínuo, reforço na prevenção contra queimadas e nova análise orbital nos próximos dias.',
  },
  {
    id: 2,
    idArea: 2,
    dataGeracao: '01/06/2026',
    resumo:
      'A Mata Atlântica Protegida apresenta alta cobertura vegetal e baixo risco ambiental no momento.',
    recomendacao:
      'Manter o acompanhamento periódico e utilizar os dados como evidência de preservação ambiental.',
  },
  {
    id: 3,
    idArea: 3,
    dataGeracao: '01/06/2026',
    resumo:
      'O Corredor Verde Sul apresenta boa cobertura vegetal, porém há sinais moderados de redução na vegetação.',
    recomendacao:
      'Realizar nova análise ambiental e acompanhar a recuperação da área nos próximos ciclos de monitoramento.',
  },
  {
    id: 4,
    idArea: 4,
    dataGeracao: '01/06/2026',
    resumo:
      'O Trecho Amazônia A-17 apresenta situação crítica, com risco alto de desmatamento e redução significativa da cobertura vegetal.',
    recomendacao:
      'Priorizar fiscalização ambiental, solicitar nova análise orbital e acompanhar alertas ativos da região.',
  },
  {
    id: 5,
    idArea: 5,
    dataGeracao: '01/06/2026',
    resumo:
      'A Reserva Rio Norte apresenta estado de atenção, com risco elevado de queimada e pressão moderada de desmatamento.',
    recomendacao:
      'Reforçar o monitoramento preventivo e acompanhar focos de calor na região.',
  },
  {
    id: 6,
    idArea: 6,
    dataGeracao: '01/06/2026',
    resumo:
      'A Zona de Fiscalização Leste apresenta boa cobertura vegetal, mas ainda exige acompanhamento preventivo.',
    recomendacao:
      'Manter o monitoramento regular e comparar os próximos dados orbitais para identificar possíveis alterações.',
  },
];

export function getAreasByOrg(idOrganizacao) {
  return areasMonitoradas.filter((a) => a.idOrganizacao === idOrganizacao);
}

export function getAnaliseByArea(idArea) {
  return analisesAmbientais.find((a) => a.idArea === idArea) || null;
}

export function getAlertasByArea(idArea) {
  return alertasAmbientais.filter((a) => a.idArea === idArea);
}

export function getAlertasByOrg(idOrganizacao) {
  const areas = getAreasByOrg(idOrganizacao);
  const areaIds = areas.map((a) => a.id);
  return alertasAmbientais.filter((al) => areaIds.includes(al.idArea));
}

export function getRelatorioByArea(idArea) {
  return relatoriosAmbientais.find((r) => r.idArea === idArea) || null;
}

export function calcularMetricasOrg(idOrganizacao) {
  const areas = getAreasByOrg(idOrganizacao);
  const analises = areas.map((a) => getAnaliseByArea(a.id)).filter(Boolean);
  const alertas = getAlertasByOrg(idOrganizacao);

  const carbonoTotal = analises.reduce(
    (sum, a) => sum + (a.carbonoPreservado || 0),
    0
  );
  const indicesMedio =
    analises.length > 0
      ? Math.round(
          analises.reduce((sum, a) => sum + (a.indiceVerde || 0), 0) /
            analises.length
        )
      : 0;
  const alertasAnalise = alertas.filter(
    (a) => a.status === 'Em análise' || a.status === 'Ativo'
  ).length;
  const coberturaMed =
    analises.length > 0
      ? Math.round(
          analises.reduce((sum, a) => sum + (a.coberturaVegetal || 0), 0) /
            analises.length
        )
      : 0;

  return {
    totalAreas: areas.length,
    alertasAnalise,
    carbonoTotal,
    indiceMedio: indicesMedio,
    coberturaMed,
    ultimaAnalise: analises[0]?.dataAnalise || '--',
    fonteSimulada: 'Sentinel-2',
  };
}
