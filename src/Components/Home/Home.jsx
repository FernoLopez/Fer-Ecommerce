import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/product.slice'
import Card from './Card'
import InputSearch from './InputSearch'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    console.log(products)
    
    const [productsSearch, setProductsSearch] = useState()
    const [filterProducts, setFilterProducts] = useState()
    
    console.log(products) 
    
    useEffect(() => {
      if(products){
        setFilterProducts(products.filter(e => e.title.includes(productsSearch.toLowerCase())))
      }
    }, [productsSearch])

    return(
      <div className='home'>
        <InputSearch setProductsSearch={setProductsSearch}/>
      <div className='products-container'>
      {
          filterProducts ?
          filterProducts?.map(product => (
            <Card 
              key={product.id}
              product={product}
            />
          ))
        :
          products?.map(product => (
          <ProductCards
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