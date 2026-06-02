import { useMemo } from 'react'
import {
  HiOutlineMap,
  HiOutlineExclamationTriangle,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import { TbTree } from 'react-icons/tb'
import { useAuth } from '../../context/AuthContext'
import {
  getAreasByOrg,
  getAnaliseByArea,
  getAlertasByOrg,
  calcularMetricasOrg,
} from '../../data/data'
import MetricCard from '../../components/MetricCard/MetricCard'
import AreaCard from '../../components/AreaCard/AreaCard'
import AlertCard from '../../components/AlertCard/AlertCard'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { currentOrg } = useAuth()

  const orgId = currentOrg?.id
  const areas = useMemo(() => (orgId ? getAreasByOrg(orgId) : []), [orgId])
  const alertas = useMemo(() => (orgId ? getAlertasByOrg(orgId) : []), [orgId])
  const metricas = useMemo(
    () => (orgId ? calcularMetricasOrg(orgId) : {}),
    [orgId]
  )

  const areasComAnalise = areas.map((area) => ({
    area,
    analise: getAnaliseByArea(area.id),
  }))

  const alertasRecentes = alertas.slice(0, 3)

  const getAreaName = (idArea) => {
    const a = areas.find((ar) => ar.id === idArea)
    return a ? a.nome : ''
  }

  return (
    <div className={styles.page}>
      {/* Metric Cards */}
      <div className={styles.metricsGrid}>
        <MetricCard
          icon={<HiOutlineMap />}
          label="Áreas monitoradas"
          value={metricas.totalAreas ?? 0}
          color="blue"
        />
        <MetricCard
          icon={<HiOutlineExclamationTriangle />}
          label="Alertas ativos"
          value={metricas.alertasAnalise ?? 0}
          color="orange"
        />
        <MetricCard
          icon={<TbTree />}
          label="Carbono preservado"
          value={`${(metricas.carbonoTotal ?? 0).toLocaleString('pt-BR')} tCO₂`}
          color="teal"
        />
        <MetricCard
          icon={<HiOutlineChartBar />}
          label="Índice verde médio"
          value={`${metricas.indiceMedio ?? 0}/100`}
          color="green"
        />
      </div>

      {/* Main content */}
      <div className={styles.contentGrid}>
        {/* Left: Areas */}
        <div className={styles.areasSection}>
          <h2 className={styles.sectionTitle}>Áreas em destaque</h2>
          <div className={styles.areasList}>
            {areasComAnalise.length > 0 ? (
              areasComAnalise.map(({ area, analise }) => (
                <AreaCard key={area.id} area={area} analise={analise} />
              ))
            ) : (
              <div className={styles.empty}>
                <p>Nenhuma área cadastrada ainda.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Orbital + Alerts */}
        <div className={styles.rightPanel}>
          <div className={styles.orbitalSection}>
            <h2 className={styles.sectionTitle}>Dados orbitais atualizados</h2>
            <div className={styles.orbitalCard}>
              <div className={styles.orbitalAccent} />
              <div className={styles.orbitalGrid}>
                <div className={styles.orbitalItem}>
                  <span className={styles.orbitalLabel}>Fonte simulada</span>
                  <span className={styles.orbitalValue}>
                    {metricas.fonteSimulada}
                  </span>
                </div>
                <div className={styles.orbitalItem}>
                  <span className={styles.orbitalLabel}>Última análise</span>
                  <span className={styles.orbitalValue}>
                    {metricas.ultimaAnalise}
                  </span>
                </div>
                <div className={styles.orbitalItem}>
                  <span className={styles.orbitalLabel}>
                    Cobertura vegetal média
                  </span>
                  <span className={styles.orbitalValue}>
                    {metricas.coberturaMed}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.alertsSection}>
            <h2 className={styles.sectionTitle}>Alertas recentes</h2>
            <div className={styles.alertsList}>
              {alertasRecentes.length > 0 ? (
                alertasRecentes.map((alerta) => (
                  <AlertCard
                    key={alerta.id}
                    alerta={alerta}
                    areaName={getAreaName(alerta.idArea)}
                  />
                ))
              ) : (
                <div className={styles.noAlerts}>
                  <p>Nenhum alerta ativo no momento.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
