import React from 'react'
import Admin from './Admin'
import Guest from './Guest'
import User from './User'
import { useState } from 'react'
import { GlobalContext } from './Context/context'
import { useContext } from 'react';
import { decodeToken } from 'react-jwt'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}
export const AppRoute ='/'
const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {

  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      console.log(res)
      return res?.Role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}
