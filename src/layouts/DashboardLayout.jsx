import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import styles from './DashboardLayout.module.css'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={styles.layout}>
      {sidebarOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className={styles.main}>
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
