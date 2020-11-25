import React,{ useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProductContext } from '../context/ProductContext';
import { CardActionArea, Grid } from '@material-ui/core';

const CartItem = ({cartItem}) => {
    const { dispatch  } = useContext(ProductContext);
//console.log(parseInt(parseInt(cartItem.price) + parseInt(cartItem.qty)))
    return (
        <div style={{marginTop : 20}}>
            <Card style={{marginTop: 15}}>
            <Grid container direction="row">
                <Grid item sm={6}>
                    {/* <CardMedia
                        component="img"
                        alt={cartItem.title}
                        height="200"
                        width ="100"
                        image={cartItem.imageUrl}
                        title="Contemplative Reptile"
                    /> */}
                    <img src={cartItem.imageUrl} style={{width : 200}}/>
                </Grid>
                <Grid item sm={6}>
                    <Typography align="center">
                        {cartItem.title}
                    </Typography>
                    <Typography align="center">
                        ${cartItem.price}
                    </Typography>
                   <CardActionArea style={{marginLeft : 140}}>
                         <Button varient="contained" 
                                style={{background : "salmon"}}
                                onClick={()=>dispatch({type: "INCREASE_QTY", id: cartItem.id, qty: cartItem.qty +  1 })}>
                            +
                        </Button>
                        <Button  varient="contained" 
                                 style={{background : "red", marginLeft : 20}}
                                 disabled={cartItem.qty <= 1}
                                 onClick={()=>dispatch({type: "INCREASE_QTY", id: cartItem.id, qty: cartItem.qty -  1 })}>
                            -
                        </Button>
                        <Button  varient="contained" 
                                 style={{background : "red", marginLeft : 20}}
                                 //disabled={cartItem.qty <= 1}
                                 onClick={()=>dispatch({type: "REMOVE_ITEM", id: cartItem.id})}>
                            Remove Item
                        </Button>
                   </CardActionArea>
                    <Typography style={{marginTop : 20}} align="center">
                       Item Total  {cartItem.price} x {cartItem.qty} = ${ parseFloat(cartItem.price * cartItem.qty)}
                    </Typography>

                </Grid>
            </Grid>
            
            </Card>
        </div>
    )
}

export default CartItem
