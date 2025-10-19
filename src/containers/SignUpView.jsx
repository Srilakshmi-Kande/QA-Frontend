import React from 'react'
import { SignUp } from '@clerk/clerk-react'

export default function SignUpView() {
  return (
    <div>
      <h2>Sign up</h2>
      <SignUp path="/signup" routing="path" />
    </div>
  )
}
