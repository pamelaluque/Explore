import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeItemByID } = useContext(CartContext);

  return (
    <div className="contenido">
      <button onClick={clearCart}>Limpiar carrito</button>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <h5>{product.quantity}</h5>
            <button onClick={()=>removeItemByID(product.id)}>Eliminar</button>
          </div>
        );
      })}
      {/* <h1>Acá va la vista del carrito 🔜</h1> */}
    </div>
  );
};
