import React from 'react'
import { useUser, useClerk } from '@clerk/clerk-react'

export default function DashboardView() {
  const { user } = useUser()
  const clerk = useClerk()

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.fullName || user?.firstName || user?.primaryEmailAddress?.emailAddress}</p>
      <button onClick={() => clerk.signOut()}>Sign out</button>
    </div>
  )
}
