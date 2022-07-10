import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions;

export const getAllProducts = () => (dispatch) => {

    dispatch(setIsLoading(true))
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    
    return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
    .finally(() =>  dispatch(setIsLoading(false)))
}

export default productsSlice.reducer;
