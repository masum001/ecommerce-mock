import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Badge, Button } from '@material-ui/core';
import {  Link } from "react-router-dom"
import ProductList from './ProductList';
import Cart from './Cart';
import { ProductContext } from '../context/ProductContext'

const useStyles = makeStyles(()=>({
    root : {
        flexGrow : 1,
        background : "darkred"
    },
    buttonStyle : {

        background : "white"
    },
    titleStyle : {
        flexGrow : 1
    }
}))
const Header = () => {

    const { cartList } = useContext(ProductContext)
    const classes = useStyles();
    return (
        <div>
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Typography className={classes.titleStyle}>
                    <Button style={{color : "white"}} component={Link} to='/'>E-Buy</Button>
                </Typography>
                <Badge badgeContent={cartList.length} color="error">
                    <Button component={ Link } to='/cart' variant="contained" style={{background : "white"}}>
                        Cart
                    </Button>
                </Badge>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header
