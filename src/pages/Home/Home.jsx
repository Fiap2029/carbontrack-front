import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.glow}/>       
          <nav className={styles.nav}>
            <div className={styles.div_structure}>
              <a className={styles.image} href="#">
                <img src="/src/assets/icon-carbontracker.svg" alt="Logo" />
                <span>CarbonTracker Space</span>
              </a>

                <div className={styles.menu}>
                  <a href="#">Quem somos nós</a>
                  <a href="#">Funcionalidades</a>
                  <a href="#">Público-Alvo</a>
                </div>
            </div>

            <div className={styles.button}>
              <button type="button">Acesse a Plataforma</button>
            </div>
          </nav>
      </div>

      {/* <div className={styles.card}>
        <h1 className={styles.title}>Landing Page em desenvolvimento</h1>
        <p className={styles.subtitle}>Desenvolva Aqui</p>
        <Link to="/login" className={styles.btn}>Entrar</Link>
      </div> */}
    </div>
  )
}
