"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Page22() {
    const session = useSession();

  return (
    <div>
        {JSON.stringify(session)}

    </div>
  )
}
