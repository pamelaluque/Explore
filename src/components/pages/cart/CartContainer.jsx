import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeItemByID, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div className="contenido">
      <button onClick={clearCart}>Limpiar carrito</button>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.img} alt="" style={{ width: "100px" }} />
            <h2>{product.title}</h2>
            <h2>${product.price}/por Noche</h2>
            <h2>Cantidad de noches: {product.quantity}</h2>
            <button onClick={() => removeItemByID(product.id)}>Eliminar</button>
            {/* Sacar este total de este div para que salga como general */}
            <h2>Total del carrito ${total}</h2>
          </div>
        );
      })}
      {/* <h1>Acá va la vista del carrito 🔜</h1> */}
    </div>
  );
};
