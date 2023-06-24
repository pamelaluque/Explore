import { createContext, useState } from "react";

export const CartContext = createContext ()

const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState()
    const addToCart = (newProduct) => {
        setCart ([...cart, newProduct])
    }



    let data = {
        cart,
        addToCart,
    }

    return <CartContext.Provider value={data}> {children} </CartContext.Provider>
}

export default CartContextProvider