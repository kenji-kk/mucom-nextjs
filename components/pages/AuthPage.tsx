import { VFC } from 'react'
import { useState } from 'react'

import { SignupPage } from '../organisms/SignupPage'
import { SigninPage } from '../organisms/SigninPage'


export const AuthPage: VFC = () => {
  const [ formToggle, setFormToggle ] = useState(true)

  return (
    <>
    { formToggle ?
      <SigninPage setFormToggle={setFormToggle}/> :
      <SignupPage setFormToggle={setFormToggle}/>
    }
    </>
  )
}
