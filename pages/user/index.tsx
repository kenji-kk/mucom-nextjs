import { VFC } from 'react'

import { Private } from '../../components/templates/Private'
import { UserPage } from '../../components/pages/UserPage'

const User: VFC = () => {

  return (
    <Private>
      <UserPage />
    </Private>
  )
}

export default User
