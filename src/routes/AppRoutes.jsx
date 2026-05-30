import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import Profile from '../pages/Profile/Profile'
import AreaDetails from '../pages/AreaDetails/AreaDetails'
import NewArea from '../pages/NewArea/NewArea'
import OrbitalAnalysis from '../pages/OrbitalAnalysis/OrbitalAnalysis'
import Reports from '../pages/Reports/Reports'
import DashboardLayout from '../layouts/DashboardLayout'

function ProtectedLayout() {
  const { currentOrg } = useAuth()
  if (!currentOrg) return <Navigate to="/login" replace />
  return <DashboardLayout />
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/areas/:id" element={<AreaDetails />} />
          <Route path="/new-area" element={<NewArea />} />
          <Route path="/orbital-analysis" element={<OrbitalAnalysis />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
