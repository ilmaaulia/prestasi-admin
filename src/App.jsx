import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPageAdmin from './pages/admin/login'
import DashboardPageAdmin from './pages/admin/dashboard'
import UsersPageAdmin from './pages/admin/users'
import AchievementsPageAdmin from './pages/admin/achievements'
import AchievementsCreatePage from './pages/admin/achievements/create'
import AchievementsEditPage from './pages/admin/achievements/edit'
import NewsPageAdmin from './pages/admin/news'
import { listen } from './redux/listener'

function App() {
  useEffect(() => {
    listen()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<LoginPageAdmin />} />
        <Route path="/admin/dashboard" element={<DashboardPageAdmin />} />
        <Route path="/admin/users" element={<UsersPageAdmin />} />
        <Route path="/admin/achievements" element={<AchievementsPageAdmin />} />
        <Route path="/admin/achievements/create" element={<AchievementsCreatePage />} />
        <Route path="/admin/achievements/edit/:id" element={<AchievementsEditPage />} />
        <Route path="/admin/news" element={<NewsPageAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
