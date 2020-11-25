export const productReducer = ( cartList, action ) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return [...cartList, action.product]

        case "INCREASE_QTY":
             
            const cartItem = cartList.map(item => {
                            if(item.id === action.id){
                            return {...item, qty : action.qty }
                            }
                        return item })

                    return cartItem

        case "REMOVE_ITEM":
            return cartList.filter(item => item.id !== action.id)
            
                        
            
        default :
            return cartList;
    }
}