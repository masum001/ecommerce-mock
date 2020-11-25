import React,{ createContext, useReducer, useState } from 'react'
import Products from "../items"
import { productReducer } from '../reducer/productReducer';

export const ProductContext =  createContext();

const ProductContextProvider = (props) =>{

    const [ productList ] = useState(Products);
    const [ cartList , dispatch ] = useReducer( productReducer, [])
    
    return (
        <ProductContext.Provider value={{productList, cartList, dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;