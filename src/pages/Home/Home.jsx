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
                <a href="#somos_nos">Quem somos nós</a>
                <a href="#funcionalidades">Funcionalidades</a>
                <a href="#publico">Público-Alvo</a>
              </div>
          </div>

          <div className={styles.nav_button}>
            <Link to="/login" type="button" className={styles.button}>Acesse a Plataforma</Link>
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
            <a href="#" className={styles.text}>
              <FontAwesomeIcon icon={faPlay}/>
              <span >Prévia da plataforma</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div>
          <h5 id="funcionalidades">Funcionalidades</h5>
          <h4 className={styles.informations_subtitle}>Tudo que você precisa pra monitorar</h4>
          <p className={styles.features_description}>Do cadastro de áreas aos alertas automáticos, o CarbonTrack Space centraliza o monitoramento 
            ambiental em um único lugar.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <a>
              <FontAwesomeIcon icon={faTableColumns} className={styles.icon}/>
              <h6 className={styles.card_title}>Dashboard Ambiental</h6>
              <p>Painel com métricas em tempo real: áreas monitoradas, índice verde médio, carbono preservado 
                e alertas ativos.
              </p>
            </a>
          </div>

          <div className={styles.card}>
            <a>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
              <h6 className={styles.card_title}>Áreas Monitoradas</h6>
              <p>Cadastre e acompanhe reservas, fazendas e corredores ecológicos com status e análise por bioma.</p>
            </a>
          </div>

          <div className={styles.card}>
            <a>
              <FontAwesomeIcon icon={faBell} className={styles.icon}/>
              <h6 className={styles.card_title}>Alertas Ambientais</h6>
              <p>Receba alertas automáticos de desmatamento, risco de queimada e degradação detectados via 
                dados orbitais.
              </p>
            </a>
          </div>

          <div className={styles.card}>
            <a>
              <FontAwesomeIcon icon={faSatellite} className={styles.icon}/>
              <h6 className={styles.card_title}>Análise Orbital</h6>
              <p>Dados simulados de satélite com cobertura vegetal, índice NDVI e variação histórica por área.</p>
            </a>
          </div>

          <div className={styles.card}>
            <a>
              <FontAwesomeIcon icon={faFilePen} className={styles.icon}/>
              <h6 className={styles.card_title}>Relatórios em PDF</h6>
              <p>Exporte relatórios completos das áreas monitoradas para apoiar decisões e auditorias ambientais. </p>
            </a>
          </div>

          <div className={styles.card}>
            <a>
              <FontAwesomeIcon icon={faUserGroup} className={styles.icon}/>
              <h6 className={styles.card_title}>Perfis por organização</h6>
              <p>Login separado para Fazendas, ONGs e Governo, com dados e áreas filtradas por organização.</p>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div>         
          <h5 className={styles.informations_subtitle} id="somos_nos">Quem somos nós</h5>
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

        <div className={styles.profiles}>
          <div className={styles.profiles_text}>
            <span className={styles.informations_subtitle} id="publico">Para quem</span>

            <div>
              <h2>Uma plataforma</h2>
              <h2 className={styles.informations_subtitle}>Três Perfis</h2>
            </div>

            <p>O CarbonTrack Space foi desenvolvido para atender diferentes tipos de organização que atuam na 
              preservação ambiental.
            </p>
          </div>

          <div className={styles.board}>
            <div>
              <h6 className={styles.informations_subtitle}>Governo</h6>
              <p>Secretarias e órgãos ambientais que precisam supervisionar grandes extensões de território 
                com dados confiáveis.
              </p>
            </div>

            <div>
              <h6 className={styles.informations_subtitle}>ONGs ambientais</h6>
              <p>Institutos e organizações que monitoram áreas de preservação, corrredores ecológicos e 
                recuperação ambiental.
              </p>
            </div>

            <div>
              <h6 className={styles.informations_subtitle}>Fazendas</h6>
              <p>Propriedades rurais que precisam monitorar suas reservas legais e garantir conformidade ambiental.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}> 
        <div className={styles.glow}/>
        <div  className={styles.footer_structure}>
          <div className={styles.footer_text}>
            <h2>Comece a monitorar hoje</h2>
            <span>Cadastre sua organização e tenha acesso ao dashboard ambiental completo.</span>
          </div>

          <div className={styles.footer_buttons}>
            <Link to="/register" type="button" className={styles.button}>Crie uma conta</Link>
            <Link to="/login" type="button" className={styles.button}>Faça o login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
