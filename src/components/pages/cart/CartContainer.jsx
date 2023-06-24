import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

export const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="contenido">
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <img>{product.img}</img>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <h5>{product.quantity}</h5>
          </div>
        );
      })}
      {/* <h1>Acá va la vista del carrito 🔜</h1> */}
    </div>
  );
};
