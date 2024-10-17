'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const DashboardPage = () => {
const { status, data: session } = useSession();

  return (
    <div> {session?.user && `${session.user.name}'s Dashboard`} </div>
  )
}

export default DashboardPage