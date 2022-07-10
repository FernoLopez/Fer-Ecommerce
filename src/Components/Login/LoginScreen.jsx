import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './style/LoginScreen.css'
import { useEffect } from 'react'
import Form from './style/Form'
import Logged from './style/Logged'

const LoginScreen = () => {

const [token, setToken] = useState('')

const changedToken= localStorage.getItem('token')

useEffect(() => {
  setToken(changedToken)
}, [changedToken])


  return (
    <div>
      {
        token ?
        <Logged />
    :
        <Form />
      }
    </div>
  )
}

export default LoginScreen