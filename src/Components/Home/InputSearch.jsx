import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
/* import { useNavigate } from 'react-router-dom'  */
import { getAllProducts } from '../../store/slices/product.slice'

const InputSearch = ({setProductsSearch}) => {

    const changeInputText = e => {
        setProductsSearch(e.target.value)
    }
    return (
      <form>
          <div>
              <label htmlFor='search-input'>Search</label>
              <input type='text' placeholder='Search your product' onChange={changeInputText}/>
          </div>
      </form>
)
}
  
export default InputSearch