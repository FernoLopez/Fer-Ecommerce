import { configureStore } from "@reduxjs/toolkit";
import products from './slices/product.slice'
import isLoading from './slices/isLoading.slice'
import cart from './slices/cart.slice'

export default configureStore({
  reducer: {
    products,
    isLoading,
    cart
  }
})