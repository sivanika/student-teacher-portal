import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"

import StudentDashboard from "./pages/student/StudentDashboard"
import ProfessorDashboard from "./pages/professor/ProfessorDashboard"
import Sessions from "./pages/student/Sessions"
import Progress from "./pages/student/Progress"
import CreateSession from "./pages/professor/CreateSession"
import AdminDashboard from "./pages/admin/AdminDashboard"
import MySessions from "./pages/student/MySessions"


import SessionChat from "./pages/chat/SessionChat"

import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Auth */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          />

          {/* Student */}
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/sessions"
            element={
              <ProtectedRoute role="student">
                <Sessions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/progress"
            element={
              <ProtectedRoute role="student">
                <Progress />
              </ProtectedRoute>
            }
          />

          {/* Professor */}
          <Route
            path="/professor/dashboard"
            element={
              <ProtectedRoute role="professor">
                <ProfessorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/professor/create-session"
            element={
              <ProtectedRoute role="professor">
                <CreateSession />
              </ProtectedRoute>
            }
          />

          {/* Admin */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />


          

          <Route
            path="/chat/:sessionId"
            element={
              <ProtectedRoute>
                <SessionChat />
              </ProtectedRoute>
            }
          />
          <Route path="/student/my-sessions" element={<MySessions />} />
          <Route
            path="/chat/:sessionId"
            element={
              <ProtectedRoute>
                <SessionChat />
              </ProtectedRoute>
            }
          />


        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
