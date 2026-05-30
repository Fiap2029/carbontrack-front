import { useState, useEffect } from 'react'
import { TbSatellite, TbRadar, TbSignalH } from 'react-icons/tb'
import {
  HiOutlineCheckCircle,
  HiOutlineArrowPath,
  HiOutlineInformationCircle,
} from 'react-icons/hi2'
import styles from './OrbitalAnalysis.module.css'

const STEPS = [
  { label: 'Conexão com satélite Sentinel-2', duration: 2000 },
  { label: 'Sincronização de dados orbitais', duration: 2500 },
  { label: 'Processamento de imagens espectrais', duration: 3000 },
  { label: 'Análise de cobertura vegetal', duration: 2000 },
  { label: 'Geração de relatório ambiental', duration: 1500 },
]

export default function OrbitalAnalysis() {
  const [running, setRunning] = useState(false)
  const [step, setStep] = useState(-1)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!running) return

    let currentStep = 0
    let elapsed = 0
    const total = STEPS.reduce((s, st) => s + st.duration, 0)
    let timer

    const runStep = (idx) => {
      if (idx >= STEPS.length) {
        setStep(STEPS.length)
        setProgress(100)
        setDone(true)
        setRunning(false)
        return
      }
      setStep(idx)
      const start = Date.now()
      const stepElapsed = STEPS.slice(0, idx).reduce((s, st) => s + st.duration, 0)

      const tick = () => {
        const now = Date.now() - start
        const totalElapsed = stepElapsed + Math.min(now, STEPS[idx].duration)
        setProgress(Math.round((totalElapsed / total) * 100))
        if (now < STEPS[idx].duration) {
          timer = setTimeout(tick, 50)
        } else {
          runStep(idx + 1)
        }
      }
      tick()
    }

    runStep(0)
    return () => clearTimeout(timer)
  }, [running])

  const handleStart = () => {
    setStep(-1)
    setProgress(0)
    setDone(false)
    setRunning(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.heroCard}>
        <div className={styles.iconArea}>
          <div className={`${styles.orbitRing} ${running ? styles.spinning : ''}`}>
            <TbSatellite className={styles.satelliteIcon} />
          </div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>Análise Orbital</h1>
          <p className={styles.subtitle}>
            Conecte-se aos satélites Sentinel-2 para obter dados ambientais atualizados
            das suas áreas monitoradas.
          </p>

          <div className={styles.devBanner}>
            <HiOutlineInformationCircle className={styles.devIcon} />
            <span>
              Funcionalidade em desenvolvimento — a integração com satélites reais ainda não está disponível. Clique em "Iniciar Análise" para executar uma demonstração do fluxo de análise orbital.
            </span>
          </div>
        </div>
      </div>

      {/* Status cards */}
      <div className={styles.statusCards}>
        <div className={styles.statusCard}>
          <TbRadar className={styles.statusCardIcon} style={{ color: 'var(--primary)' }} />
          <div>
            <span className={styles.statusCardLabel}>Satélite</span>
            <span className={styles.statusCardValue}>Sentinel-2</span>
          </div>
        </div>
        <div className={styles.statusCard}>
          <TbSignalH className={styles.statusCardIcon} style={{ color: 'var(--success)' }} />
          <div>
            <span className={styles.statusCardLabel}>Cobertura</span>
            <span className={styles.statusCardValue}>Disponível</span>
          </div>
        </div>
        <div className={styles.statusCard}>
          <HiOutlineCheckCircle className={styles.statusCardIcon} style={{ color: 'var(--success)' }} />
          <div>
            <span className={styles.statusCardLabel}>Última sincronização</span>
            <span className={styles.statusCardValue}>01/06/2026</span>
          </div>
        </div>
        <div className={styles.statusCard}>
          <HiOutlineArrowPath className={styles.statusCardIcon} style={{ color: 'var(--warning)' }} />
          <div>
            <span className={styles.statusCardLabel}>Próximo ciclo</span>
            <span className={styles.statusCardValue}>08/06/2026</span>
          </div>
        </div>
      </div>

      {/* Simulation panel */}
      <div className={styles.simCard}>
        <h2 className={styles.simTitle}>Simulação de Processamento Orbital</h2>

        {!running && !done && (
          <button className={styles.startBtn} onClick={handleStart}>
            <TbSatellite />
            Iniciar análise orbital simulada
          </button>
        )}

        {(running || done) && (
          <>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.progressLabel}>{progress}% concluído</div>

            <div className={styles.steps}>
              {STEPS.map((s, idx) => {
                const state =
                  done || idx < step
                    ? 'done'
                    : idx === step
                    ? 'active'
                    : 'pending'
                return (
                  <div key={idx} className={`${styles.stepItem} ${styles[state]}`}>
                    <div className={styles.stepIndicator}>
                      {state === 'done' ? '✓' : state === 'active' ? '⟳' : '○'}
                    </div>
                    <span>{s.label}</span>
                  </div>
                )
              })}
            </div>

            {done && (
              <div className={styles.doneMsg}>
                <HiOutlineCheckCircle className={styles.doneMsgIcon} />
                <div>
                  <p className={styles.doneMsgTitle}>Análise orbital concluída!</p>
                  <p className={styles.doneMsgSub}>
                    Os dados foram processados com sucesso. Verifique o dashboard para visualizar
                    os novos indicadores.
                  </p>
                </div>
                <button className={styles.startBtn} onClick={handleStart}>
                  Nova análise
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
