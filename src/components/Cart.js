import { Grid } from '@material-ui/core'
import React,{ useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import CartItem from './CartItem'

const Cart = () => {

    const { cartList } = useContext(ProductContext)
   // console.log(cartList) 
   const grandTotal = cartList.reduce(( total, cartList)=>{
     return  total  + cartList.price * cartList.qty
   },0)
    return (
        <div>
            <Grid container direction="column">
            {
                (cartList.length  > 0) ? 
                (
                    cartList.map(cartItem=>(
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))

                   
                )
                
               
                
                : 
                
                (<h3  align="center">You have no Items in cart</h3>)
            }
            </Grid>
            {
                cartList.length > 0 ? (
                     <h3 style={{float : "right"}}>Grand Total {parseFloat(grandTotal)}</h3>) 
                : null
            }
        </div>
    )
}

export default Cart
