import React,{ useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { ProductContext } from '../context/ProductContext';

const ProductCard = ({product}) => {
   // console.log(product)
   const { cartList, dispatch } = useContext(ProductContext);
   let selectedProduct = cartList.find(pro=> pro.id === product.id)
   let disable = selectedProduct ? true : false;
   const handleClick =()=> dispatch({type: "ADD_TO_CART", product: product})
    return (
        <Card style={{marginTop : 15}}>
            <CardContent>
                <CardHeader
                    avatar={
                            <Avatar aria-label="recipe" >
                                R
                            </Avatar>
                            }
                    title={product.title }
                />
                {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    width ="150"
                    image={product.imageUrl}
                    title="Contemplative Reptile"
                /> */}
                <img src={product.imageUrl} style={{width : 200}}/>
                </CardContent>
                <Typography>
                    {product.description }
                </Typography>
                <Typography variant="h6" component="h6" align="center" style={{color:"red", marginTop : 10}}>
                     Price  {product.price}
                </Typography>
                <Button variant="contained" fullWidth 
                        style={{background : "salmon", marginTop : 10}}
                        disabled={disable}
                        onClick={handleClick}
                        >
                    Add to Card
                </Button>
        </Card>
    )
}

export default ProductCard
