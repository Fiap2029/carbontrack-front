import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineChartBar, HiOutlineUser } from 'react-icons/hi2'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/logo.png'
import styles from './Sidebar.module.css'

export default function Sidebar({ isOpen, onClose }) {
  const { currentOrg, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logoArea}>
        <img src={logo} alt="CarbonTrack Space" className={styles.logoImg} />
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          <HiOutlineChartBar className={styles.navIcon} />
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          <HiOutlineUser className={styles.navIcon} />
          Perfil
        </NavLink>
      </nav>

      <div className={styles.footer}>
        {currentOrg && (
          <div className={styles.userRow}>
            <div
              className={styles.avatar}
              style={{ background: currentOrg.cor || '#1e3a5f' }}
            >
              {currentOrg.iniciais}
            </div>
            <span className={styles.userName}>{currentOrg.nome}</span>
          </div>
        )}
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <RiLogoutBoxLine />
          Sair da Plataforma
        </button>
      </div>
    </aside>
  )
}
