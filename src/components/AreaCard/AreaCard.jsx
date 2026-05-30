import { useNavigate } from 'react-router-dom'
import { HiEye } from 'react-icons/hi2'
import { TbSignalH } from 'react-icons/tb'
import StatusBadge from '../StatusBadge/StatusBadge'
import styles from './AreaCard.module.css'

export default function AreaCard({ area, analise }) {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.name}>{area.nome}</h3>
          <p className={styles.location}>
            {area.estado} • {area.bioma}
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>ÍNDICE VERDE (NDVI)</span>
          <span className={styles.metricValue}>{analise?.indiceVerde ?? '--'}/100</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>STATUS</span>
          <StatusBadge status={area.status} size="sm" />
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>ÁREA TOTAL</span>
          <span className={styles.metricValue}>
            {area.tamanhoHectares.toLocaleString('pt-BR')} ha
          </span>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.orbital}>
          <TbSignalH className={styles.signalIcon} />
          Fluxo de dados orbital ativo
        </span>
        <button
          className={styles.reportBtn}
          onClick={() => navigate(`/areas/${area.id}`)}
        >
          <HiEye />
          Ver relatório completo
        </button>
      </div>
    </div>
  )
}
