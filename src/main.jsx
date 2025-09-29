"use client"

import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Tourists from "./pages/Tourists.jsx"
import Alerts from "./pages/Alerts.jsx"
import AIMonitoring from "./pages/AIMonitoring.jsx"
import Reports from "./pages/Reports.jsx"
import Settings from "./pages/Settings.jsx"
import { AuthProvider, useAuth } from "./state/auth.jsx"

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
