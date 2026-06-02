import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineMap,
  HiOutlineExclamationTriangle,
  HiOutlineChartBar,
  HiOutlineBuildingOffice,
  HiOutlineIdentification,
  HiOutlineEnvelope,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlinePlusCircle,
  HiOutlineTableCells,
  HiChevronRight,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2'
import { TbTree } from 'react-icons/tb'
import { useAuth } from '../../context/AuthContext'
import {
  getAreasByOrg,
  getAnaliseByArea,
  getAlertasByOrg,
  calcularMetricasOrg,
} from '../../data/data'
import MetricCard from '../../components/MetricCard/MetricCard'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import styles from './Profile.module.css'

export default function Profile() {
  const { currentOrg, logout } = useAuth()
  const navigate = useNavigate()

  const orgId = currentOrg?.id
  const areas = useMemo(() => (orgId ? getAreasByOrg(orgId) : []), [orgId])
  const metricas = useMemo(
    () => (orgId ? calcularMetricasOrg(orgId) : {}),
    [orgId]
  )

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className={styles.page}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <HiArrowLeft />
        Voltar
      </button>
      <div className={styles.mainGrid}>
        {/* Left: Profile info + metrics + areas */}
        <div className={styles.leftCol}>
          {/* Org card */}
          <div className={styles.orgCard}>
            <div className={styles.orgHeader}>
              <div className={styles.orgAvatar}>
                {currentOrg?.nome?.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h2 className={styles.orgName}>{currentOrg?.nome}</h2>
              </div>
            </div>

            <div className={styles.orgInfoGrid}>
              <div className={styles.orgInfoItem}>
                <HiOutlineBuildingOffice className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Tipo</span>
                  <span className={styles.infoValue}>{currentOrg?.tipo}</span>
                </div>
              </div>
              <div className={styles.orgInfoItem}>
                <HiOutlineIdentification className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>CNPJ</span>
                  <span className={styles.infoValue}>{currentOrg?.cnpj || '--'}</span>
                </div>
              </div>
              <div className={styles.orgInfoItem}>
                <HiOutlineEnvelope className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>E-mail institucional</span>
                  <span className={styles.infoValue}>{currentOrg?.email}</span>
                </div>
              </div>
              <div className={styles.orgInfoItem}>
                <HiOutlineCheckCircle className={styles.infoIcon} />
                <div className={styles.statusInfoCol}>
                  <span className={styles.infoLabel}>Status da conta</span>
                  <StatusBadge status={currentOrg?.statusConta || 'Ativa'} size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Metric cards */}
          <div className={styles.metricsGrid}>
            <MetricCard
              icon={<HiOutlineMap />}
              label="Áreas monitoradas"
              value={metricas.totalAreas ?? 0}
              color="blue"
            />
            <MetricCard
              icon={<HiOutlineExclamationTriangle />}
              label="Alertas ativos"
              value={metricas.alertasAnalise ?? 0}
              color="orange"
            />
            <MetricCard
              icon={<TbTree />}
              label="Carbono preservado"
              value={`${(metricas.carbonoTotal ?? 0).toLocaleString('pt-BR')} tCO₂`}
              color="teal"
            />
            <MetricCard
              icon={<HiOutlineChartBar />}
              label="Índice verde médio"
              value={`${metricas.indiceMedio ?? 0}/100`}
              color="green"
            />
          </div>

          {/* Areas list */}
          <div className={styles.areasSection}>
            <h3 className={styles.sectionTitle}>Áreas Cadastradas</h3>
            <div className={styles.areasList}>
              {areas.length > 0 ? (
                areas.map((area) => {
                  const analise = getAnaliseByArea(area.id)
                  return (
                    <div
                      key={area.id}
                      className={styles.areaRow}
                      onClick={() => navigate(`/areas/${area.id}`)}
                    >
                      <img
                        src={area.imagem}
                        alt={area.nome}
                        className={styles.areaImg}
                        onError={(e) => {
                          e.target.src =
                            'https://images.unsplash.com/photo-1448375240586-882707db888b?w=120&h=80&fit=crop&q=60'
                        }}
                      />
                      <div className={styles.areaInfo}>
                        <span className={styles.areaName}>{area.nome}</span>
                        <span className={styles.areaMeta}>
                          {area.estado} • {area.bioma}
                        </span>
                      </div>
                      <div className={styles.areaStat}>
                        <span className={styles.areaStatLabel}>Tamanho</span>
                        <span className={styles.areaStatValue}>
                          {area.tamanhoHectares.toLocaleString('pt-BR')} ha
                        </span>
                      </div>
                      <div className={styles.areaStat}>
                        <span className={styles.areaStatLabel}>Status</span>
                        <StatusBadge status={area.status} size="sm" />
                      </div>
                      <div className={styles.areaStat}>
                        <span className={styles.areaStatLabel}>Índice Verde</span>
                        <span
                          className={styles.areaStatValue}
                          style={{
                            color:
                              (analise?.indiceVerde ?? 0) >= 80
                                ? '#16a34a'
                                : (analise?.indiceVerde ?? 0) >= 60
                                ? '#d97706'
                                : '#dc2626',
                          }}
                        >
                          {analise?.indiceVerde ?? '--'}/100
                        </span>
                      </div>
                      <button
                        className={styles.openBtn}
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/areas/${area.id}`)
                        }}
                      >
                        Abrir relatório
                      </button>
                      <HiChevronRight className={styles.chevron} />
                    </div>
                  )
                })
              ) : (
                <div className={styles.emptyAreas}>
                  <p>Nenhuma área cadastrada ainda.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Actions + Info */}
        <div className={styles.rightCol}>
          <div className={styles.actionsCard}>
            <h3 className={styles.actionsTitle}>Ações da conta</h3>
            <div className={styles.actionsButtons}>
              <button
                className={styles.actionBtnPrimary}
                onClick={() => navigate('/new-area')}
              >
                <HiOutlinePlusCircle />
                Cadastrar nova área
              </button>
              <button
                className={styles.actionBtnOutline}
                onClick={() => navigate('/dashboard')}
              >
                <HiOutlineTableCells />
                Ver áreas cadastradas
              </button>
              <button
                className={styles.actionBtnDanger}
                onClick={handleLogout}
              >
                <HiOutlineArrowRightOnRectangle />
                Sair da conta
              </button>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div className={styles.infoIcon2}>ℹ</div>
              <span className={styles.infoCardTitle}>Informação</span>
            </div>
            <p className={styles.infoCardText}>
              Novas áreas cadastradas entram inicialmente com o status
              &ldquo;Aguardando análise orbital&rdquo; até que os dados ambientais
              sejam processados.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
