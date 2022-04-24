import React from 'react'

import { Private } from '../../components/templates/Private'
import { UserPage } from '../../components/pages/UserPage'

const User = () => {
  return (
    <Private>
      <UserPage />
    </Private>
  )
}

export default User
