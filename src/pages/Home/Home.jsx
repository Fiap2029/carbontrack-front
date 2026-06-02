import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLeaf, faTableColumns, faLocationDot, faBell, faSatellite, faFilePen, faUserGroup } from "@fortawesome/free-solid-svg-icons";
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
            <p className={styles.informations_description}>Plataforma web para monitoramento ambiental em tempo
              real — criada para ONGs, fazendas e governo acompanharem áreas protegidas, receberem alertas e 
              tomarem decisões baseadas em dados.
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

      <div className={styles.features}>
        <div>
          <h5>Funcionalidades</h5>
          <h4 className={styles.informations_subtitle}>Tudo que você precisa pra monitorar</h4>
          <p className={styles.features_description}>Do cadastro de áreas aos alertas automáticos, o CarbonTrack Space centraliza o monitoramento 
            ambiental em um único lugar.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <a href="#">
              <FontAwesomeIcon icon={faTableColumns} className={styles.icon}/>
              <h6 className={styles.card_title}>Dashboard Ambiental</h6>
              <p>Painel com métricas em tempo real: áreas monitoradas, índice verde médio, carbono preservado 
                e alertas ativos.
              </p>
            </a>
          </div>

          <div className={styles.card}>
            <a href="#">
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
              <h6 className={styles.card_title}>Áreas Monitoradas</h6>
              <p>Cadastre e acompanhe reservas, fazendas e corredores ecológicos com status e análise por bioma.</p>
            </a>
          </div>

          <div className={styles.card}>
            <a href="#">
              <FontAwesomeIcon icon={faBell} className={styles.icon}/>
              <h6 className={styles.card_title}>Alertas Ambientais</h6>
              <p>Receba alertas automáticos de desmatamento, risco de queimada e degradação detectados via 
                dados orbitais.
              </p>
            </a>
          </div>

          <div className={styles.card}>
            <a href="#">
              <FontAwesomeIcon icon={faSatellite} className={styles.icon}/>
              <h6 className={styles.card_title}>Análise Orbital</h6>
              <p>Dados simulados de satélite com cobertura vegetal, índice NDVI e variação histórica por área.</p>
            </a>
          </div>

          <div className={styles.card}>
            <a href="#">
              <FontAwesomeIcon icon={faFilePen} className={styles.icon}/>
              <h6 className={styles.card_title}>Relatórios em PDF</h6>
              <p>Exporte relatórios completos das áreas monitoradas para apoiar decisões e auditorias ambientais. </p>
            </a>
          </div>

          <div className={styles.card}>
            <a href="#">
              <FontAwesomeIcon icon={faUserGroup} className={styles.icon}/>
              <h6 className={styles.card_title}>Perfis por organização</h6>
              <p>Login separado para Fazendas, ONGs e Governo, com dados e áreas filtradas por organização.</p>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div>         
          <h5 className={styles.informations_subtitle}>Quem somos nós</h5>
          <p className={styles.informations_description}>O CarbonTrack Space nasceu para tornar o monitoramento ambiental mais acessível, preciso e 
            eficiente — conectando dados orbitais simulados a decisões reais de preservação.
          </p>
        </div>

        <div className={styles.quote}>
          <p>"Nossa missão é empoderar organizações, ONGs, fazendas e o governo com informações ambientais 
            em tempo real — para que a preservação do planeta seja baseada em dados, não em suposições."
          </p>
        </div>

        <div className={styles.horizontal_card}>
          <div className={styles.organization_card}>
            <h6 className={styles.informations_subtitle}>Nossa visão</h6>
            <p>Ser a principal plataforma de monitoramento ambiental por dados orbitais do Brasil, conectando
                ciência e preservação em um ecossistema digital.
            </p>
          </div>

          <div className={styles.organization_card}>
            <h6 className={styles.informations_subtitle}>Nossa missão</h6>
            <p>Democratizar o acesso a dados ambientais de qualidade, permitindo que qualquer organização 
              monitore e proteja áreas naturais com eficiência.
            </p>
          </div>

          <div className={styles.organization_card}>
            <h6 className={styles.informations_subtitle}>Nossos valores</h6>
            <p>Transparência nos dados, compromisso com a preservação ambiental, inovação tecnológica e 
              responsabilidade com o futuro do planeta.
            </p>
          </div>

          <div className={styles.organization_card}>
            <h6 className={styles.informations_subtitle}>Nossa tecnologia</h6>
            <p>Dados orbitais simulados combinados com indicadores como NDVI, cobertura vegetal e risco de 
              queimada para gerar alertas precisos.
            </p>
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
