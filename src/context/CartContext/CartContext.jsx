import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {

    let exist = isInCart (newProduct.id);

    if (exist){
      let newArray = cart.map ((product)=>{
        if (product.id === newProduct.id){
          return{
            ...product,
            quantity: newProduct.quantity
          } 
        } else{
          return product
        }
      })
      setCart(newArray);
  }else{
    setCart ([...cart, newProduct])
  }
}

  const isInCart = (id) =>{
    let exist = cart.some ((product)=> product.id === id)
      return exist;
  }

  const clearCart = () => {
    setCart ([])
  }

  const removeItemByID = (id) => {
    let newArray = cart.filter ((product)=> product.id !== id)
    setCart (newArray)
  }

  const getTotalQuantityById = (id) => {
    let producto = cart.find ((product)=> product.id === +id)
    console.log (producto?.quantity)
    return producto?.quantity
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeItemByID,
    getTotalQuantityById
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
