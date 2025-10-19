import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import AppLayout from './Applayout/AppLayout'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LoginContainer from './pages/LoginContainer'
import Dashboard from './pages/Dashboard'
import ProtectedRouter from './routes/ProtectedRouter'
import './App.css'

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || ''

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
  if (!clerkPublishableKey) {
    return (
      <div style={{ padding: 20, color: 'red' }}>
        Missing Clerk publishable key. Copy .env.example to .env and set VITE_CLERK_PUBLISHABLE_KEY.
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  )
}

export default App
