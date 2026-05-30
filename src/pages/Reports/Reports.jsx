import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineDocumentArrowDown,
  HiOutlineDocumentText,
  HiChevronRight,
} from 'react-icons/hi2'
import { useAuth } from '../../context/AuthContext'
import {
  getAreasByOrg,
  getRelatorioByArea,
  getAnaliseByArea,
} from '../../data/data'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import { downloadRelatorio } from '../../utils/downloadPDF'
import styles from './Reports.module.css'

export default function Reports() {
  const { currentOrg } = useAuth()
  const navigate = useNavigate()

  const orgId = currentOrg?.id
  const areas = useMemo(() => (orgId ? getAreasByOrg(orgId) : []), [orgId])

  const reportItems = areas.map((area) => ({
    area,
    analise: getAnaliseByArea(area.id),
    relatorio: getRelatorioByArea(area.id),
  }))

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Relatórios Ambientais</h2>
          <p className={styles.pageSubtitle}>
            Visualize e exporte os relatórios de monitoramento das suas áreas.
          </p>
        </div>
      </div>

      <div className={styles.list}>
        {reportItems.length > 0 ? (
          reportItems.map(({ area, analise, relatorio }) => (
            <div key={area.id} className={styles.reportCard}>
              <div className={styles.cardLeft}>
                <div className={styles.docIcon}>
                  <HiOutlineDocumentText />
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.areaName}>{area.nome}</h3>
                  <p className={styles.areaMeta}>
                    {area.estado} • {area.bioma}
                  </p>
                  {relatorio && (
                    <p className={styles.resumoPreview}>
                      {relatorio.resumo.substring(0, 100)}…
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.cardMiddle}>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>Data</span>
                  <span className={styles.metricValue}>
                    {relatorio?.dataGeracao || '--'}
                  </span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>Índice Verde</span>
                  <span
                    className={styles.metricValue}
                    style={{
                      color:
                        (analise?.indiceVerde ?? 0) >= 80
                          ? 'var(--success)'
                          : (analise?.indiceVerde ?? 0) >= 60
                          ? 'var(--warning)'
                          : 'var(--danger)',
                    }}
                  >
                    {analise?.indiceVerde ?? '--'}/100
                  </span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>Status</span>
                  <StatusBadge status={area.status} size="sm" />
                </div>
              </div>

              <div className={styles.cardActions}>
                <button
                  className={styles.downloadBtn}
                  title="Baixar relatório em PDF"
                  onClick={() => downloadRelatorio(area.nome)}
                >
                  <HiOutlineDocumentArrowDown />
                  PDF
                </button>
                <button
                  className={styles.viewBtn}
                  onClick={() => navigate(`/areas/${area.id}`)}
                >
                  Ver detalhes
                  <HiChevronRight />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.empty}>
            <HiOutlineDocumentText className={styles.emptyIcon} />
            <p>Nenhum relatório disponível.</p>
            <p className={styles.emptySub}>
              Cadastre áreas para visualizar seus relatórios aqui.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
