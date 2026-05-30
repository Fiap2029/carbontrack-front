import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  HiOutlineBuildingOffice,
  HiOutlineUsers,
  HiOutlineFlag,
  HiOutlineCheckCircle,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiArrowLeft,
  HiOutlineDocumentArrowDown,
} from 'react-icons/hi2'
import { TbLeaf, TbTree, TbFlame, TbMountain, TbSatellite } from 'react-icons/tb'
import { MdOutlineWarning } from 'react-icons/md'
import {
  areasMonitoradas,
  getAnaliseByArea,
  getAlertasByArea,
  getRelatorioByArea,
  organizacoes,
} from '../../data/data'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import { downloadRelatorio } from '../../utils/downloadPDF'
import styles from './AreaDetails.module.css'

export default function AreaDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const area = useMemo(
    () => areasMonitoradas.find((a) => a.id === Number(id)),
    [id]
  )
  const analise = useMemo(
    () => (area ? getAnaliseByArea(area.id) : null),
    [area]
  )
  const alertas = useMemo(
    () => (area ? getAlertasByArea(area.id) : []),
    [area]
  )
  const relatorio = useMemo(
    () => (area ? getRelatorioByArea(area.id) : null),
    [area]
  )
  const org = useMemo(
    () => organizacoes.find((o) => o.id === area?.idOrganizacao),
    [area]
  )

  if (!area) {
    return (
      <div className={styles.notFound}>
        <p>Área não encontrada.</p>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <HiArrowLeft /> Voltar
        </button>
      </div>
    )
  }

  const getRiscoColor = (risco) => {
    if (risco === 'Alto' || risco === 'Crítico') return 'var(--danger)'
    if (risco === 'Médio') return 'var(--warning)'
    return 'var(--success)'
  }

  return (
    <div className={styles.page}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <HiArrowLeft />
        Voltar
      </button>

      {/* Hero card */}
      <div className={styles.heroCard}>
        <div className={styles.heroImg}>
          <img
            src={area.imagem}
            alt={area.nome}
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&q=60'
            }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.areaName}>{area.nome}</h1>
          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <HiOutlineBuildingOffice className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Organização responsável</span>
                <span className={styles.metaValue}>{org?.nome || '--'}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <HiOutlineUsers className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Tipo da organização</span>
                <span className={styles.metaValue}>{org?.tipo || '--'}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <TbMountain className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Área total</span>
                <span className={styles.metaValue}>
                  {area.tamanhoHectares.toLocaleString('pt-BR')} ha
                </span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <HiOutlineFlag className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Estado</span>
                <span className={styles.metaValue}>{area.estado}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <TbLeaf className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Bioma</span>
                <span className={styles.metaValue}>{area.bioma}</span>
              </div>
            </div>
            <div className={styles.metaItem}>
              <HiOutlineCheckCircle className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Status</span>
                <StatusBadge status={area.status} size="sm" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroObjective}>
          <div className={styles.objectiveCircle} />
          <div>
            <span className={styles.objectiveLabel}>
              Objetivo do monitoramento
            </span>
            <p className={styles.objectiveText}>
              {area.objetivoMonitoramento}
            </p>
          </div>
        </div>
      </div>

      {/* Analise metrics */}
      {analise && (
        <div className={styles.analyticsGrid}>
          <div className={styles.analyticCard}>
            <HiOutlineCalendarDays className={styles.analyticIcon} style={{ color: 'var(--primary)' }} />
            <span className={styles.analyticLabel}>Última análise</span>
            <span className={styles.analyticValue}>{analise.dataAnalise}</span>
          </div>
          <div className={styles.analyticCard}>
            <TbLeaf className={styles.analyticIcon} style={{ color: 'var(--success)' }} />
            <span className={styles.analyticLabel}>Cobertura vegetal</span>
            <span
              className={styles.analyticValue}
              style={{ color: 'var(--success)' }}
            >
              {analise.coberturaVegetal}%
            </span>
          </div>
          <div className={styles.analyticCard}>
            <MdOutlineWarning
              className={styles.analyticIcon}
              style={{ color: getRiscoColor(analise.riscoDesmatamento) }}
            />
            <span className={styles.analyticLabel}>Risco de desmatamento</span>
            <span
              className={styles.analyticValue}
              style={{ color: getRiscoColor(analise.riscoDesmatamento) }}
            >
              {analise.riscoDesmatamento}
            </span>
          </div>
          <div className={styles.analyticCard}>
            <TbFlame
              className={styles.analyticIcon}
              style={{ color: getRiscoColor(analise.riscoQueimada) }}
            />
            <span className={styles.analyticLabel}>Risco de queimada</span>
            <span
              className={styles.analyticValue}
              style={{ color: getRiscoColor(analise.riscoQueimada) }}
            >
              {analise.riscoQueimada}
            </span>
          </div>
          <div className={styles.analyticCard}>
            <TbTree className={styles.analyticIcon} style={{ color: '#0ea5e9' }} />
            <span className={styles.analyticLabel}>Carbono preservado</span>
            <span className={styles.analyticValue} style={{ color: '#0ea5e9' }}>
              {analise.carbonoPreservado.toLocaleString('pt-BR')} tCO₂
            </span>
          </div>
          <div className={styles.analyticCard}>
            <HiOutlineChartBar
              className={styles.analyticIcon}
              style={{ color: 'var(--success)' }}
            />
            <span className={styles.analyticLabel}>Índice verde</span>
            <span
              className={styles.analyticValue}
              style={{ color: 'var(--success)' }}
            >
              {analise.indiceVerde}/100
            </span>
          </div>
        </div>
      )}

      {/* Bottom sections */}
      <div className={styles.bottomGrid}>
        {/* Alert */}
        <div>
          <h2 className={styles.sectionTitle}>Alertas ambientais</h2>
          {alertas.length > 0 ? (
            <div className={styles.alertSection}>
              {alertas.map((alerta) => (
                <div key={alerta.id} className={styles.alertCard}>
                  <div className={styles.alertRow}>
                    <div className={styles.alertField}>
                      <span className={styles.alertLabel}>Tipo</span>
                      <span className={styles.alertValue}>{alerta.tipo}</span>
                    </div>
                    <div className={styles.alertField}>
                      <span className={styles.alertLabel}>Severidade</span>
                      <StatusBadge status={alerta.severidade} size="sm" />
                    </div>
                    <div className={styles.alertField}>
                      <span className={styles.alertLabel}>Status</span>
                      <StatusBadge status={alerta.status} size="sm" />
                    </div>
                    <div className={styles.alertField}>
                      <span className={styles.alertLabel}>Data</span>
                      <span className={styles.alertValue}>{alerta.dataAlerta}</span>
                    </div>
                  </div>
                  <div className={styles.alertDesc}>
                    <span className={styles.alertLabel}>Descrição</span>
                    <p className={styles.alertDescText}>{alerta.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noAlert}>
              <p>Nenhum alerta ativo para esta área.</p>
            </div>
          )}
        </div>

        {/* Report */}
        <div>
          <h2 className={styles.sectionTitle}>Relatório ambiental</h2>
          {relatorio ? (
            <div className={styles.reportCard}>
              <div className={styles.reportContent}>
                <div className={styles.reportSection}>
                  <span className={styles.reportLabel}>Resumo</span>
                  <p className={styles.reportText}>{relatorio.resumo}</p>
                </div>
                <div className={styles.reportSection}>
                  <span className={styles.reportLabel}>Recomendação</span>
                  <p className={styles.reportText}>{relatorio.recomendacao}</p>
                </div>
              </div>
              <div className={styles.reportIconArea}>
                <div className={styles.reportIconCircle}>
                  <TbLeaf className={styles.reportLeafIcon} />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.noAlert}>
              <p>Relatório não disponível.</p>
            </div>
          )}
        </div>
      </div>

      {/* Actions footer */}
      <div className={styles.actionsFooter}>
        <h3 className={styles.actionsTitle}>Ações do relatório</h3>
        <div className={styles.actionsRight}>
          <button
            className={styles.pdfBtn}
            onClick={() => downloadRelatorio(area.nome)}
          >
            <HiOutlineDocumentArrowDown />
            Baixar relatório em PDF
          </button>
          <button
            className={styles.orbitalBtn}
            onClick={() => navigate('/orbital-analysis')}
          >
            <TbSatellite />
            Solicitar nova análise orbital
          </button>
        </div>
      </div>
    </div>
  )
}
