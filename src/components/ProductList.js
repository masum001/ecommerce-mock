import React,{ useContext } from 'react'
import { Grid } from '@material-ui/core'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard'

const ProductList = () => {
    const { productList } = useContext(ProductContext);
    return (
        <div>
        <Grid container spacing={4}>
           
                {
                    productList.map(product=>(
                        <Grid item xs={12} sm={4} >
                            <ProductCard key={product.id} product={product}/>
                        </Grid>
                    ))
                }
            
        </Grid>
       
          
        </div>
    )
}

export default ProductList
