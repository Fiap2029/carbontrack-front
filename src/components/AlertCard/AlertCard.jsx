import StatusBadge from '../StatusBadge/StatusBadge'
import styles from './AlertCard.module.css'

const SEVERITY_CLASS = {
  Crítica: 'criticalBorder',
  Alta: 'altaBorder',
  Média: 'mediaBorder',
  Baixa: 'baixaBorder',
}

export default function AlertCard({ alerta, areaName, compact = false }) {
  const borderClass = SEVERITY_CLASS[alerta.severidade] || 'mediaBorder'

  return (
    <div className={`${styles.card} ${styles[borderClass]}`}>
      <div className={styles.top}>
        <div className={styles.meta}>
          <span className={styles.tipo}>{alerta.tipo}</span>
          {areaName && (
            <span className={styles.area}>{areaName}</span>
          )}
        </div>
        <StatusBadge status={alerta.severidade} size="sm" />
      </div>

      {!compact && (
        <p className={styles.descricao}>{alerta.descricao}</p>
      )}

      <div className={styles.footer}>
        <span className={styles.ref}>{alerta.dataAlerta}</span>
        <StatusBadge status={alerta.status} size="sm" />
      </div>
    </div>
  )
}
