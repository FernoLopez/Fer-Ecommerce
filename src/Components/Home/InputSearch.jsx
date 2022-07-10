import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
/* import { useNavigate } from 'react-router-dom'  */
import { getAllProducts } from '../../store/slices/product.slice'

const InputSearch = () => {

    const {handleSubmit, register, reset} = useForm()

    const dispatch = useDispatch()
   /* const navigate = useNavigate() */ 
  
    const submit = data => {
      dispatch(getAllProducts(data.products))
      reset({products: ''})
    }

   /*  navigate('/')  */
  
    return (
      <form onSubmit={handleSubmit(submit)} className='form-home'>
        <input type="text" className='input-home'{...register('products')} />
        <button className='button-home'>Search</button>
      </form>
    )
  }
  
export default InputSearch