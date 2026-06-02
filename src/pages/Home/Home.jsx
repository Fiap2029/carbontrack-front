import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLeaf  } from "@fortawesome/free-solid-svg-icons";
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

          <div className={styles.nav_button}>
            <button type="button" className={styles.button}>Acesse a Plataforma</button>
          </div>
        </nav>

        <div className={styles.informations}>
          <div>
            <a className={styles.informations_card}>
              <FontAwesomeIcon icon={faLeaf} />
              Monitoramento Ambiental por Dados Orbitais
            </a>
          </div>

          <div>
            <h1 className={styles.informations_title}>Proteja o meio ambiente com</h1>
            <h1 className={styles.informations_subtitle}>inteligência orbital</h1>
            <p className={styles.informations_description}>Plataforma web para monitoramento ambiental em tempo real — criada para ONGs, fazendas e 
              governo acompanharem áreas protegidas, receberem alertas e tomarem decisões baseadas em dados.
            </p>
          </div>

          <div className={styles.informations_buttons}>
            <button type="button" className={styles.button}>Explorar plataforma</button>
            <a href="#" className={styles.text}>
              <FontAwesomeIcon icon={faPlay}/>
              <span >Prévia da plataforma</span>
            </a>
          </div>
        </div>

      </div>

      {/* <div className={styles.card}>
        <h1 className={styles.title}>Landing Page em desenvolvimento</h1>
        <p className={styles.subtitle}>Desenvolva Aqui</p>
        <Link to="/login" className={styles.btn}>Entrar</Link>
      </div> */}
    </div>
  )
}
