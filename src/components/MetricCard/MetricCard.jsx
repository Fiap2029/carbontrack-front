import styles from './MetricCard.module.css'

export default function MetricCard({ icon, label, value, color = 'blue' }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.iconWrap} ${styles[color]}`}>{icon}</div>
      <div className={styles.info}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  )
}
