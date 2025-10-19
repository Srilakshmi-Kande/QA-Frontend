import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

export default function AppLayoutView({ children }) {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
        <Link to="/">Home</Link> | <Link to="/signup">Sign up</Link> | <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
        <div style={{ float: 'right' }}>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut />
        </div>
      </header>
      <main style={{ padding: 16 }}>{children}</main>
    </div>
  )
}
