import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay, faLeaf, faTableColumns, faLocationDot, faBell, faSatellite,
  faFilePen, faUserGroup, faBuilding, faTree, faTractor, faChartLine,
  faMicrochip, faShield, faRocket, faArrowRight, faCircleCheck,
  faEye, faClipboardList, faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Home.module.css';

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setVideoOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={styles.page}>

      {/* ── NAVBAR ── */}
      <nav className={styles.nav}>
        <div className={styles.nav_left}>
          <a href="#" className={styles.nav_brand}>
            <img src={logo} alt="CarbonTrack Space" />
          </a>
          <div className={styles.nav_menu}>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#como_funciona">Como Funciona</a>
            <a href="#somos_nos">Sobre</a>
            <a href="#publico">Público</a>
          </div>
        </div>
        <div className={styles.nav_cta}>
          <Link to="/login" className={styles.btn_ghost}>Entrar</Link>
          <Link to="/register" className={styles.btn_primary}>
            Começar Gratuitamente
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.hero_glow} />
        <div className={styles.hero_glow2} />
        <div className={styles.hero_content}>

          <div className={styles.hero_left}>
            <div className={styles.hero_badge}>
              <FontAwesomeIcon icon={faSatellite} />
              <span>Monitoramento por Dados Orbitais</span>
            </div>
            <h1 className={styles.hero_title}>
              Proteja o meio ambiente com{' '}
              <span className={styles.accent}>inteligência orbital</span>
            </h1>
            <p className={styles.hero_description}>
              Plataforma web para monitoramento ambiental em tempo real — criada para ONGs,
              fazendas e governo acompanharem áreas protegidas, receberem alertas e tomarem
              decisões baseadas em dados.
            </p>
            <div className={styles.hero_stats}>
              <div className={styles.stat}>
                <span className={styles.stat_number}>150+</span>
                <span className={styles.stat_label}>Áreas Monitoradas</span>
              </div>
              <div className={styles.stat_divider} />
              <div className={styles.stat}>
                <span className={styles.stat_number}>98%</span>
                <span className={styles.stat_label}>Cobertura Preservada</span>
              </div>
              <div className={styles.stat_divider} />
              <div className={styles.stat}>
                <span className={styles.stat_number}>500+</span>
                <span className={styles.stat_label}>Alertas Processados</span>
              </div>
            </div>
            <div className={styles.hero_buttons}>
              <Link to="/register" className={styles.btn_primary}>
                Começar Agora
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <button className={styles.btn_ghost} onClick={() => setVideoOpen(true)}>
                <FontAwesomeIcon icon={faPlay} />
                Ver Demonstração
              </button>
            </div>
          </div>

          <div className={styles.hero_right}>
            <div className={styles.dashboard_mock}>
              <div className={styles.dashboard_header}>
                <span className={styles.dashboard_title}>Dashboard Ambiental</span>
              </div>
              <div className={styles.dashboard_stats}>
                <div className={styles.dash_stat}>
                  <span className={styles.dash_stat_value}>342</span>
                  <span className={styles.dash_stat_label}>Alertas Ativos</span>
                </div>
                <div className={`${styles.dash_stat} ${styles.dash_stat_green}`}>
                  <span className={styles.dash_stat_value}>94%</span>
                  <span className={styles.dash_stat_label}>Índice Verde</span>
                </div>
                <div className={styles.dash_stat}>
                  <span className={styles.dash_stat_value}>28k</span>
                  <span className={styles.dash_stat_label}>Ton CO₂</span>
                </div>
              </div>
              <div className={styles.dashboard_chart}>
                <div className={styles.chart_bars}>
                  {[60, 80, 45, 90, 70, 85, 65].map((h, i) => (
                    <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className={styles.chart_label}>Cobertura Vegetal — últimos 7 dias</div>
              </div>
              <div className={styles.dashboard_alert}>
                <FontAwesomeIcon icon={faBell} className={styles.alert_icon} />
                <div className={styles.alert_body}>
                  <span className={styles.alert_title}>Alerta detectado</span>
                  <span className={styles.alert_desc}>Risco de queimada em Mato Grosso</span>
                </div>
                <span className={styles.alert_time}>2m atrás</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={styles.features_section} id="funcionalidades">
        <div className={styles.inner}>
          <div className={styles.section_header}>
            <span className={styles.section_tag}>
              <FontAwesomeIcon icon={faTableColumns} />
              Funcionalidades
            </span>
            <h2 className={styles.section_title}>
              Tudo que você precisa pra <span className={styles.accent}>monitorar</span>
            </h2>
            <p className={styles.section_description}>
              Do cadastro de áreas aos alertas automáticos, o CarbonTrack Space centraliza
              o monitoramento ambiental em um único lugar.
            </p>
          </div>
          <div className={styles.cards_grid}>
            {[
              { icon: faTableColumns, title: 'Dashboard Ambiental',    desc: 'Painel com métricas em tempo real: áreas monitoradas, índice verde médio, carbono preservado e alertas ativos.' },
              { icon: faLocationDot,  title: 'Áreas Monitoradas',      desc: 'Cadastre e acompanhe reservas, fazendas e corredores ecológicos com status e análise por bioma.' },
              { icon: faBell,         title: 'Alertas Ambientais',     desc: 'Receba alertas automáticos de desmatamento, risco de queimada e degradação detectados via dados orbitais.' },
              { icon: faSatellite,    title: 'Análise Orbital',        desc: 'Dados simulados de satélite com cobertura vegetal, índice NDVI e variação histórica por área.' },
              { icon: faFilePen,      title: 'Relatórios em PDF',      desc: 'Exporte relatórios completos das áreas monitoradas para apoiar decisões e auditorias ambientais.' },
              { icon: faUserGroup,    title: 'Perfis por Organização', desc: 'Login separado para Fazendas, ONGs e Governo, com dados e áreas filtradas por organização.' },
            ].map((feat, i) => (
              <div className={styles.feature_card} key={i}>
                <div className={styles.feature_icon_wrap}>
                  <FontAwesomeIcon icon={feat.icon} />
                </div>
                <h3 className={styles.feature_title}>{feat.title}</h3>
                <p className={styles.feature_desc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.how_section} id="como_funciona">
        <div className={styles.inner}>
          <div className={styles.section_header}>
            <span className={styles.section_tag}>
              <FontAwesomeIcon icon={faCircleCheck} />
              Como Funciona
            </span>
            <h2 className={styles.section_title}>
              Monitoramento em <span className={styles.accent}>4 passos simples</span>
            </h2>
            <p className={styles.section_description}>
              Da configuração à geração de alertas, nossa plataforma cobre todo o
              ciclo de monitoramento ambiental.
            </p>
          </div>
          <div className={styles.timeline}>
            {[
              { num: '01', icon: faClipboardList, title: 'Cadastro da Área',         desc: 'Registre sua área de preservação com coordenadas, bioma e dados da organização.' },
              { num: '02', icon: faSatellite,     title: 'Coleta de Dados Orbitais', desc: 'Nossa plataforma processa imagens e índices orbitais simulados para a sua área.' },
              { num: '03', icon: faChartLine,     title: 'Análise Ambiental',        desc: 'Algoritmos analisam NDVI, cobertura vegetal e variações históricas em tempo real.' },
              { num: '04', icon: faBell,          title: 'Alertas e Relatórios',     desc: 'Receba alertas automáticos e gere relatórios detalhados para tomada de decisão.' },
            ].map((step, i) => (
              <div className={styles.timeline_step} key={i}>
                <div className={styles.step_number}>{step.num}</div>
                <h4 className={styles.step_title}>{step.title}</h4>
                <p className={styles.step_desc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.about_section} id="somos_nos">
        <div className={styles.inner}>
          <div className={styles.section_header}>
            <span className={styles.section_tag}>
              <FontAwesomeIcon icon={faLeaf} />
              Quem Somos
            </span>
            <h2 className={styles.section_title}>
              Nascemos para tornar o monitoramento{' '}
              <span className={styles.accent}>mais acessível</span>
            </h2>
          </div>
          <div className={styles.about_grid}>
            <div className={styles.about_text}>
              <p className={styles.about_paragraph}>
                O CarbonTrack Space nasceu para tornar o monitoramento ambiental mais acessível,
                preciso e eficiente — conectando dados orbitais simulados a decisões reais de preservação.
              </p>
              <blockquote className={styles.about_quote}>
                "Nossa missão é empoderar organizações, ONGs, fazendas e o governo com informações
                ambientais em tempo real — para que a preservação do planeta seja baseada em dados,
                não em suposições."
              </blockquote>
            </div>
            <div className={styles.about_cards}>
              {[
                { icon: faEye,       title: 'Nossa Visão',      desc: 'Ser a principal plataforma de monitoramento ambiental por dados orbitais do Brasil, conectando ciência e preservação.' },
                { icon: faRocket,    title: 'Nossa Missão',     desc: 'Democratizar o acesso a dados ambientais de qualidade, permitindo que qualquer organização monitore áreas naturais.' },
                { icon: faShield,    title: 'Nossos Valores',   desc: 'Transparência nos dados, compromisso com a preservação ambiental, inovação tecnológica e responsabilidade.' },
                { icon: faMicrochip, title: 'Nossa Tecnologia', desc: 'Dados orbitais simulados combinados com indicadores como NDVI, cobertura vegetal e risco de queimada.' },
              ].map((card, i) => (
                <div className={styles.about_card} key={i}>
                  <div className={styles.about_card_icon}>
                    <FontAwesomeIcon icon={card.icon} />
                  </div>
                  <h4 className={styles.about_card_title}>{card.title}</h4>
                  <p className={styles.about_card_desc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className={styles.audience_section} id="publico">
        <div className={styles.inner}>
          <div className={styles.section_header}>
            <span className={styles.section_tag}>
              <FontAwesomeIcon icon={faUserGroup} />
              Público-Alvo
            </span>
            <h2 className={styles.section_title}>
              Uma plataforma, <span className={styles.accent}>três perfis</span>
            </h2>
            <p className={styles.section_description}>
              O CarbonTrack Space foi desenvolvido para atender diferentes tipos de organização
              que atuam na preservação ambiental.
            </p>
          </div>
          <div className={styles.audience_grid}>
            <div className={`${styles.audience_card} ${styles.audience_gov}`}>
              <div className={styles.audience_icon}>
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h3 className={styles.audience_title}>Governo</h3>
              <p className={styles.audience_desc}>
                Secretarias e órgãos ambientais que precisam supervisionar grandes extensões
                de território com dados confiáveis e auditorias baseadas em evidências.
              </p>
            </div>
            <div className={`${styles.audience_card} ${styles.audience_ngo}`}>
              <div className={styles.audience_icon}>
                <FontAwesomeIcon icon={faTree} />
              </div>
              <h3 className={styles.audience_title}>ONGs Ambientais</h3>
              <p className={styles.audience_desc}>
                Institutos e organizações que monitoram áreas de preservação, corredores
                ecológicos e recuperação ambiental com recursos otimizados.
              </p>
            </div>
            <div className={`${styles.audience_card} ${styles.audience_farm}`}>
              <div className={styles.audience_icon}>
                <FontAwesomeIcon icon={faTractor} />
              </div>
              <h3 className={styles.audience_title}>Fazendas</h3>
              <p className={styles.audience_desc}>
                Propriedades rurais que precisam monitorar suas reservas legais e garantir
                conformidade ambiental com relatórios precisos e rastreáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footer_glow} />
        <div className={styles.footer_cta}>
          <h2>Comece a monitorar hoje</h2>
          <p>Cadastre sua organização e tenha acesso ao dashboard ambiental completo.</p>
          <div className={styles.footer_cta_buttons}>
            <Link to="/register" className={styles.btn_primary}>
              Crie uma conta
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/login" className={styles.btn_ghost}>Faça o login</Link>
          </div>
        </div>
        <div className={styles.footer_main}>
          <div className={styles.footer_grid}>
            <div className={styles.footer_brand}>
              <div className={styles.footer_logo}>
                <img src={logo} alt="Logo" />
                <span>CarbonTrack Space</span>
              </div>
              <p className={styles.footer_brand_desc}>
                Plataforma de monitoramento ambiental por dados orbitais.
                Proteção do meio ambiente baseada em dados.
              </p>
            </div>
            <div className={styles.footer_col}>
              <h6>Plataforma</h6>
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#como_funciona">Como Funciona</a>
              <Link to="/login">Acessar</Link>
              <Link to="/register">Criar Conta</Link>
            </div>
            <div className={styles.footer_col}>
              <h6>Organização</h6>
              <a href="#somos_nos">Quem Somos</a>
              <a href="#publico">Público-Alvo</a>
              <a href="#">Contato</a>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <span className={styles.footer_copyright}>
              © 2026 CarbonTrack Space. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>

      {/* ── VIDEO MODAL ── */}
      {videoOpen && (
        <div className={styles.modal_overlay} onClick={() => setVideoOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modal_close} onClick={() => setVideoOpen(false)} aria-label="Fechar">
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={styles.modal_header}>
              <span className={styles.section_tag}>
                <FontAwesomeIcon icon={faSatellite} />
                CarbonTrack Space
              </span>
              <h3 className={styles.modal_title}>Pitch da Plataforma</h3>
              <p className={styles.modal_subtitle}>Veja como o CarbonTrack Space transforma dados orbitais em ações de preservação.</p>
            </div>
            <div className={styles.modal_video}>
              <div className={styles.video_placeholder}>
                <div className={styles.video_play_btn}>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className={styles.video_coming}>Vídeo em breve</span>
                <span className={styles.video_hint}>O pitch será hospedado aqui em breve.</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
