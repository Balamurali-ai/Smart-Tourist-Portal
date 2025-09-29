"use client"

import "../src/index.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import App from "../src/App.jsx"
import Login from "../src/pages/Login.jsx"
import Dashboard from "../src/pages/Dashboard.jsx"
import Tourists from "../src/pages/Tourists.jsx"
import Alerts from "../src/pages/Alerts.jsx"
import AIMonitoring from "../src/pages/AIMonitoring.jsx"
import Reports from "../src/pages/Reports.jsx"
import Settings from "../src/pages/Settings.jsx"
import { AuthProvider, useAuth } from "../src/state/auth.jsx"

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function Page() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="tourists" element={<Tourists />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="ai" element={<AIMonitoring />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
