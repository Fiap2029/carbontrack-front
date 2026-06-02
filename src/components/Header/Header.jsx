import { useState, useRef, useEffect } from 'react'
import { HiBell, HiOutlineCalendarDays, HiBars3 } from 'react-icons/hi2'
import { useAuth } from '../../context/AuthContext'
import styles from './Header.module.css'

export default function Header({ onMenuClick }) {
  const { currentOrg } = useAuth()
  const [notifOpen, setNotifOpen] = useState(false)
  const bellRef = useRef(null)

  const today = new Date()
  const dateStr = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  useEffect(() => {
    if (!notifOpen) return
    function handleOutsideClick(e) {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [notifOpen])

  // Future: receive notifications array as prop or from context
  const notifications = []

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Menu">
          <HiBars3 />
        </button>
        <div className={styles.greetingWrap}>
          <h1 className={styles.greeting}>
            Olá, {currentOrg?.nome || 'Organização'}
          </h1>
          <p className={styles.subtitle}>
            Acompanhe o status ambiental das suas áreas monitoradas.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.dateBadge}>
          <HiOutlineCalendarDays className={styles.dateIcon} />
          <span>{dateStr}</span>
        </div>

        <div className={styles.bellWrap} ref={bellRef}>
          <button
            className={`${styles.bellBtn} ${notifOpen ? styles.bellBtnActive : ''}`}
            aria-label="Notificações"
            onClick={() => setNotifOpen((v) => !v)}
          >
            <HiBell />
          </button>

          {notifOpen && (
            <div className={styles.notifDropdown} role="dialog" aria-label="Painel de notificações">
              <div className={styles.notifHeader}>
                <span className={styles.notifTitle}>Notificações</span>
                {notifications.length > 0 && (
                  <span className={styles.notifCount}>{notifications.length}</span>
                )}
              </div>

              {notifications.length === 0 ? (
                <div className={styles.notifEmpty}>
                  <div className={styles.notifIconWrap}>
                    <HiBell />
                  </div>
                  <p className={styles.notifEmptyText}>Nenhuma notificação no momento</p>
                  <p className={styles.notifEmptySub}>
                    Quando houver novos alertas ambientais ou atualizações de análises, eles aparecerão aqui.
                  </p>
                </div>
              ) : (
                <ul className={styles.notifList}>
                  {notifications.map((n) => (
                    <li key={n.id} className={styles.notifItem}>
                      {n.content}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
