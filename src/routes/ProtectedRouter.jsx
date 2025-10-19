import React from 'react'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

export default function ProtectedRouter({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
