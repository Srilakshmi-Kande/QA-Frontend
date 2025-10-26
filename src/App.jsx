import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import SignUp from './containers/SignUp/Signup'
import LoginContainer from './containers/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRouter from './routes/ProtectedRouter'
import Home from './pages/Home/Home'
import './App.css'
import ProfessorDashboard from './pages/Dashboard/ProfessorDashboard'
import StudentDashboard from './pages/Dashboard/StudentDashboard'
import TADashboard from './pages/Dashboard/TADashboard'
import Classroom from './pages/Dashboard/ClassRoom/ClassRoom'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
      children: [
      { path: '/', element: <Home /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LoginContainer /> },
      { path: '/dashboard', element: (
        <ProtectedRouter>
          <Dashboard />
        </ProtectedRouter>
      )},
      {
        path: "/professor/dashboard",
        element: (
          <ProtectedRouter allowedRoles={["professor"]}>
            <ProfessorDashboard />
          </ProtectedRouter>
        ),
      },
      {
        path: "/student/dashboard",
        element: (
          <ProtectedRouter allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRouter>
        ),
      },
      {
        path: "/ta/dashboard",
        element: (
          <ProtectedRouter allowedRoles={["ta"]}>
            <TADashboard />
          </ProtectedRouter>
        ),
      },
      { 
        path: '/classroom', element: (
        <ProtectedRouter>
          <Classroom />
        </ProtectedRouter>
      )}
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
