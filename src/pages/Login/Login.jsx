import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiXMark, HiOutlineInformationCircle } from 'react-icons/hi2'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/logo.png'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showSenha, setShowSenha] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [forgotModal, setForgotModal] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !senha) {
      setError('Preencha todos os campos.')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    const result = login(email, senha)
    setLoading(false)
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.glow} />

      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <img src={logo} alt="CarbonTrack Space" className={styles.logoImg} />
        </Link>
        <div className={styles.navActions}>
          <Link to="/login" className={`${styles.navBtn} ${styles.navBtnActive}`}>
            Entrar
          </Link>
          <Link to="/register" className={`${styles.navBtn} ${styles.navBtnOutline}`}>
            Criar Conta
          </Link>
        </div>
      </nav>

      <div className={styles.body}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Monitore áreas ambientais com inteligência espacial.
          </h1>
          <p className={styles.heroSub}>
            Acompanhe áreas monitoradas, alertas ambientais e relatórios de
            carbono em uma única plataforma.
          </p>
        </div>

        <div className={styles.formArea}>
          <p className={styles.formTitle}>Acesse sua organização</p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.inputWrap}>
              <input
                type="email"
                className={styles.input}
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              {email && (
                <button
                  type="button"
                  className={styles.inputBtn}
                  onClick={() => setEmail('')}
                  aria-label="Limpar"
                >
                  <HiXMark />
                </button>
              )}
            </div>

            <div className={styles.inputWrap}>
              <input
                type={showSenha ? 'text' : 'password'}
                className={styles.input}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.inputBtn}
                onClick={() => setShowSenha((v) => !v)}
                aria-label={showSenha ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showSenha ? <RiEyeOffLine /> : <RiEyeLine />}
              </button>
            </div>

            <div className={styles.forgotRow}>
              <button
                type="button"
                className={styles.forgotBtn}
                onClick={() => setForgotModal(true)}
              >
                Esqueceu a senha?
              </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? <span className={styles.spinner} /> : 'Entrar'}
            </button>
          </form>

          <p className={styles.hint}>
            Não tem conta?{' '}
            <Link to="/register" className={styles.hintLink}>
              Criar conta
            </Link>
          </p>
        </div>
      </div>

      {forgotModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setForgotModal(false)}
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalIconWrap}>
              <HiOutlineInformationCircle />
            </div>
            <h2 className={styles.modalTitle}>Recuperação de senha</h2>
            <p className={styles.modalBody}>
              A recuperação de senha ainda não está disponível nesta versão
              demonstrativa do CarbonTrack Space. Esta funcionalidade será
              implementada em versões futuras.
            </p>
            <button
              type="button"
              className={styles.modalBtn}
              onClick={() => setForgotModal(false)}
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
