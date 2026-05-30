import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiXMark } from 'react-icons/hi2'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/logo.png'
import styles from './Register.module.css'

const TIPOS_ORGANIZACAO = [
  'Fazenda',
  'ONG Ambiental',
  'Governo',
  'Empresa Privada',
  'Órgão Governamental',
  'Instituição de Pesquisa',
  'Universidade',
  'Cooperativa Agrícola',
  'Produtor Rural',
  'Fundação Ambiental',
  'Associação Comunitária',
  'Consultoria Ambiental',
]

function maskCNPJ(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}

function isValidCNPJ(cnpj) {
  const nums = cnpj.replace(/\D/g, '')
  if (nums.length !== 14) return false
  if (/^(\d)\1{13}$/.test(nums)) return false
  let sum = 0
  let weight = 5
  for (let i = 0; i < 12; i++) {
    sum += parseInt(nums[i]) * weight--
    if (weight === 1) weight = 9
  }
  let rem = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (parseInt(nums[12]) !== rem) return false
  sum = 0
  weight = 6
  for (let i = 0; i < 13; i++) {
    sum += parseInt(nums[i]) * weight--
    if (weight === 1) weight = 9
  }
  rem = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  return parseInt(nums[13]) === rem
}

function getPasswordStrength(password) {
  if (!password) return 0
  let score = 0
  if (password.length >= 8) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  return score
}

const STRENGTH_INFO = [
  { label: '', color: '' },
  { label: 'Muito fraca', color: '#ef4444' },
  { label: 'Fraca', color: '#f97316' },
  { label: 'Razoável', color: '#eab308' },
  { label: 'Forte', color: '#22c55e' },
  { label: 'Muito forte', color: '#10b981' },
]

function validateField(name, value, form) {
  switch (name) {
    case 'nome':
      if (!value.trim()) return 'Nome da organização é obrigatório.'
      if (value.trim().length < 3) return 'Mínimo de 3 caracteres.'
      if (value.trim().length > 100) return 'Máximo de 100 caracteres.'
      return ''
    case 'tipo':
      if (!value) return 'Selecione o tipo da organização.'
      return ''
    case 'cnpj':
      if (!value) return 'CNPJ é obrigatório.'
      if (!isValidCNPJ(value)) return 'CNPJ inválido. Verifique o número digitado.'
      return ''
    case 'email':
      if (!value.trim()) return 'E-mail é obrigatório.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Formato de e-mail inválido.'
      return ''
    case 'senha':
      if (!value) return 'Senha é obrigatória.'
      if (value.length < 8) return 'Mínimo de 8 caracteres.'
      if (!/[A-Z]/.test(value)) return 'Deve conter ao menos 1 letra maiúscula.'
      if (!/[a-z]/.test(value)) return 'Deve conter ao menos 1 letra minúscula.'
      if (!/\d/.test(value)) return 'Deve conter ao menos 1 número.'
      return ''
    case 'confirmarSenha':
      if (!value) return 'Confirmação de senha é obrigatória.'
      if (value !== form.senha) return 'As senhas não coincidem.'
      return ''
    default:
      return ''
  }
}

const ALL_FIELDS = ['nome', 'tipo', 'cnpj', 'email', 'senha', 'confirmarSenha']

export default function Register() {
  const [form, setForm] = useState({
    nome: '',
    tipo: '',
    cnpj: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  })
  const [touched, setTouched] = useState({})
  const [showSenha, setShowSenha] = useState(false)
  const [showConfirmar, setShowConfirmar] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register } = useAuth()
  const navigate = useNavigate()

  const errors = Object.fromEntries(
    ALL_FIELDS.map((f) => [f, touched[f] ? validateField(f, form[f], form) : ''])
  )

  const isFormValid = ALL_FIELDS.every((f) => validateField(f, form[f], form) === '')

  const handleChange = (e) => {
    const { name, value } = e.target
    const processed = name === 'cnpj' ? maskCNPJ(value) : value
    setForm((prev) => ({ ...prev, [name]: processed }))
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const clearField = (name) => {
    setForm((prev) => ({ ...prev, [name]: '' }))
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(ALL_FIELDS.map((f) => [f, true]))
    setTouched(allTouched)
    if (!isFormValid) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 700))
    register(form)
    setLoading(false)
    navigate('/dashboard')
  }

  const fieldClass = (name) => {
    if (!touched[name]) return styles.input
    if (errors[name]) return `${styles.input} ${styles.inputError}`
    if (form[name]) return `${styles.input} ${styles.inputValid}`
    return styles.input
  }

  const strength = getPasswordStrength(form.senha)
  const strengthInfo = STRENGTH_INFO[strength]

  return (
    <div className={styles.page}>
      <div className={styles.glow} />

      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <img src={logo} alt="CarbonTrack Space" className={styles.logoImg} />
        </div>
        <div className={styles.navActions}>
          <Link to="/login" className={`${styles.navBtn} ${styles.navBtnOutline}`}>
            Entrar
          </Link>
          <Link to="/register" className={`${styles.navBtn} ${styles.navBtnActive}`}>
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
          <p className={styles.formTitle}>Crie sua conta institucional</p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>

            {/* Nome da organização */}
            <div className={styles.fieldGroup}>
              <div className={styles.inputWrap}>
                <input
                  type="text"
                  name="nome"
                  className={fieldClass('nome')}
                  placeholder="Nome da organização"
                  value={form.nome}
                  maxLength={100}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {form.nome && (
                  <button type="button" className={styles.inputBtn} onClick={() => clearField('nome')}>
                    <HiXMark />
                  </button>
                )}
              </div>
              {errors.nome && <p className={styles.errorMsg}>{errors.nome}</p>}
            </div>

            {/* Tipo da organização */}
            <div className={styles.fieldGroup}>
              <div className={styles.inputWrap}>
                <select
                  name="tipo"
                  className={`${fieldClass('tipo')} ${styles.select} ${!form.tipo ? styles.selectPlaceholder : ''}`}
                  value={form.tipo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" disabled>Tipo da organização</option>
                  {TIPOS_ORGANIZACAO.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              {errors.tipo && <p className={styles.errorMsg}>{errors.tipo}</p>}
            </div>

            {/* CNPJ */}
            <div className={styles.fieldGroup}>
              <div className={styles.inputWrap}>
                <input
                  type="text"
                  name="cnpj"
                  className={fieldClass('cnpj')}
                  placeholder="CNPJ (00.000.000/0000-00)"
                  value={form.cnpj}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {form.cnpj && (
                  <button type="button" className={styles.inputBtn} onClick={() => clearField('cnpj')}>
                    <HiXMark />
                  </button>
                )}
              </div>
              {errors.cnpj && <p className={styles.errorMsg}>{errors.cnpj}</p>}
            </div>

            {/* E-mail */}
            <div className={styles.fieldGroup}>
              <div className={styles.inputWrap}>
                <input
                  type="email"
                  name="email"
                  className={fieldClass('email')}
                  placeholder="E-mail"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {form.email && (
                  <button type="button" className={styles.inputBtn} onClick={() => clearField('email')}>
                    <HiXMark />
                  </button>
                )}
              </div>
              {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
            </div>

            {/* Senha */}
            <div className={styles.fieldGroup}>
              <div className={styles.inputWrap}>
                <input
                  type={showSenha ? 'text' : 'password'}
                  name="senha"
                  className={fieldClass('senha')}
                  placeholder="Senha"
                  value={form.senha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className={styles.inputBtn}
                  onClick={() => setShowSenha((v) => !v)}
                >
                  {showSenha ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
              {form.senha && (
                <div className={styles.strengthWrap}>
                  <div className={styles.strengthBars}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={styles.strengthBar}
                        style={{ background: i <= strength ? strengthInfo.color : undefined }}
                      />
                    ))}
                  </div>
                  <span className={styles.strengthLabel} style={{ color: strengthInfo.color }}>
                    {strengthInfo.label}
                  </span>
                </div>
              )}
              {errors.senha && <p className={styles.errorMsg}>{errors.senha}</p>}
            </div>

            {/* Confirmar senha */}
            <div className={styles.fieldGroup}>
              <div className={styles.inputWrap}>
                <input
                  type={showConfirmar ? 'text' : 'password'}
                  name="confirmarSenha"
                  className={fieldClass('confirmarSenha')}
                  placeholder="Confirmar senha"
                  value={form.confirmarSenha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className={styles.inputBtn}
                  onClick={() => setShowConfirmar((v) => !v)}
                >
                  {showConfirmar ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
              {errors.confirmarSenha && <p className={styles.errorMsg}>{errors.confirmarSenha}</p>}
            </div>

            <p className={styles.loginHintInline}>
              Já possui uma conta?{' '}
              <Link to="/login" className={styles.hintLink}>
                Entrar
              </Link>
            </p>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading || !isFormValid}
            >
              {loading ? <span className={styles.spinner} /> : 'Criar Conta'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
