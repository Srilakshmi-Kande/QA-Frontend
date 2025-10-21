import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import SignUp from './containers/SignUp/Signup'
import LoginContainer from './containers/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRouter from './routes/ProtectedRouter'
import Home from './pages/Home/Home'
import './App.css'


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
          ) },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
