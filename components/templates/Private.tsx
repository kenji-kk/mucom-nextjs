import { useEffect } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store'
import { authSlice } from '../../store/auth';
import { AuthPage } from '../pages/AuthPage';


export const Private = ({children}: {children: React.ReactElement}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)
  const {isSignedIn, jwt} = auth.auth

    if (isSignedIn) {
      return children
    } else {
      if (Cookies.get("_access_token")) {
        dispatch(authSlice.actions.authSetJWT(
          Cookies.get("_access_token")
        ))
        dispatch(authSlice.actions.authSetIsSignedIn(
          true
        ))
        return children
      } else {
        return <AuthPage />
      }
    }
  
}

