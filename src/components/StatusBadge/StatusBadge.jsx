import styles from './StatusBadge.module.css'

const VARIANTS = {
  Estável: 'stable',
  Monitorando: 'monitoring',
  Atenção: 'warning',
  Crítico: 'critical',
  Ativo: 'active',
  'Em análise': 'analysis',
  Resolvido: 'resolved',
  Ativa: 'stable',
  Inativa: 'inactive',
  Alta: 'alta',
  Média: 'media',
  Baixo: 'baixo',
  Médio: 'medio',
  Alto: 'alto',
  Crítica: 'critica',
}

export default function StatusBadge({ status, size = 'md' }) {
  const variant = VARIANTS[status] || 'default'
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {status}
    </span>
  )
}
