import React from 'react'
import { SignIn } from '@clerk/clerk-react'

export default function LoginView() {
  return (
    <div>
      <h2>Login</h2>
      <SignIn path="/login" routing="path" />
    </div>
  )
}
