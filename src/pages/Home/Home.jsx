import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Landing Page em desenvolvimento</h1>
        <p className={styles.subtitle}>Desenvolva Aqui</p>
        <Link to="/login" className={styles.btn}>Entrar</Link>
      </div>
    </div>
  )
}
