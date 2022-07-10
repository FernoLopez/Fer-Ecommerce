import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/product.slice'
import Card from './Card'
import InputSearch from './InputSearch'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    console.log(products)
    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    

    return (
      <div className='home'>
        <InputSearch />
        <div className='products-container'>
          {
            products.map(product => (
              <Card 
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </div>
    )
  }
  
  export default Home