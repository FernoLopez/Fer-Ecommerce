import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 5000)
      })
    reset({
      email: '',
      password: ''
    })
    
  }

  return (
    <div className='container'>
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <ul className="login__test">
        <li className="flex-login">
          <b className="login-b">Email: </b>MrL1234@gmail.com
        </li>
        <li className="flex-login">
          <b className="login-b">Password:    </b>Mr1234
        </li>
      </ul>
      <h2 className="login__title">Enter your information</h2>
      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">Email</label>
          <input 
            type="email"
            className="input_email" 
            id="login-email"
            {...register('email')}
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">Password</label>
          <input 
            type="password" 
            className="input_password" 
            id="login-pass"
            {...register('password')}
          />
        </li>
      </ul>
      <div>
        {
          isErrorLogin && 'Invalid credentials, try again...'
        }
      </div>
      <button className='button'>Login</button>
    </form>
    </div>
  )
}

export default Form