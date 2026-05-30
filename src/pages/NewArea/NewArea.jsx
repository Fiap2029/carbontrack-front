import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiArrowLeft, HiOutlineInformationCircle } from 'react-icons/hi2'
import { TbSatellite } from 'react-icons/tb'
import { useAuth } from '../../context/AuthContext'
import { areasMonitoradas } from '../../data/data'
import styles from './NewArea.module.css'

const ESTADOS = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
  'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

const BIOMAS = ['Amazônia','Caatinga','Cerrado','Mata Atlântica','Pampa','Pantanal']

export default function NewArea() {
  const navigate = useNavigate()
  const { currentOrg } = useAuth()
  const [form, setForm] = useState({
    nome: '',
    estado: '',
    bioma: '',
    tamanhoHectares: '',
    objetivoMonitoramento: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const novaArea = {
      id: areasMonitoradas.length + 1,
      idOrganizacao: currentOrg?.id || null,
      nome: form.nome,
      estado: form.estado,
      bioma: form.bioma,
      tamanhoHectares: Number(form.tamanhoHectares),
      objetivoMonitoramento: form.objetivoMonitoramento,
      status: 'Aguardando análise orbital',
      imagem: null,
    }
    areasMonitoradas.push(novaArea)
    setSubmitted(true)
    setTimeout(() => navigate('/dashboard'), 2000)
  }

  return (
    <div className={styles.page}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <HiArrowLeft />
        Voltar
      </button>

      <div className={styles.grid}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Cadastrar nova área</h2>
          <p className={styles.subtitle}>
            Preencha as informações da área ambiental que deseja monitorar.
          </p>

          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Área cadastrada com sucesso!</h3>
              <p>Redirecionando para o dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label className={styles.label}>Nome da área *</label>
                <input
                  type="text"
                  name="nome"
                  className={styles.input}
                  placeholder="Ex: Reserva Ecológica Norte"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Estado *</label>
                  <select
                    name="estado"
                    className={styles.select}
                    value={form.estado}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecionar estado</option>
                    {ESTADOS.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Bioma *</label>
                  <select
                    name="bioma"
                    className={styles.select}
                    value={form.bioma}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecionar bioma</option>
                    {BIOMAS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Tamanho (hectares) *</label>
                <input
                  type="number"
                  name="tamanhoHectares"
                  className={styles.input}
                  placeholder="Ex: 500"
                  value={form.tamanhoHectares}
                  onChange={handleChange}
                  min={1}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Objetivo do monitoramento</label>
                <textarea
                  name="objetivoMonitoramento"
                  className={styles.textarea}
                  placeholder="Descreva o objetivo do monitoramento desta área..."
                  value={form.objetivoMonitoramento}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Imagem da área</label>
                <div className={styles.uploadArea}>
                  <TbSatellite className={styles.uploadIcon} />
                  <span className={styles.uploadText}>
                    Arraste uma imagem ou clique para selecionar
                  </span>
                  <span className={styles.uploadHint}>PNG, JPG até 5 MB</span>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Cadastrar área
              </button>
            </form>
          )}
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <div className={styles.infoIconCircle}>
              <HiOutlineInformationCircle />
            </div>
            <h3 className={styles.infoTitle}>Integração orbital</h3>
          </div>
          <p className={styles.infoText}>
            Funcionalidade em desenvolvimento — a integração orbital com
            Sentinel-2 será implementada futuramente.
          </p>
          <div className={styles.infoSteps}>
            <div className={styles.infoStep}>
              <div className={styles.stepDot} />
              <span>Cadastro da área confirmado</span>
            </div>
            <div className={styles.infoStep}>
              <div className={`${styles.stepDot} ${styles.pending}`} />
              <span>Aguardando análise orbital</span>
            </div>
            <div className={styles.infoStep}>
              <div className={`${styles.stepDot} ${styles.pending}`} />
              <span>Processamento de dados ambientais</span>
            </div>
            <div className={styles.infoStep}>
              <div className={`${styles.stepDot} ${styles.pending}`} />
              <span>Relatório disponível no dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
