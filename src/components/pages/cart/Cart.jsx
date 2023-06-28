import { Button } from "@mui/material";
import "./Cart.css";
import { Link } from "react-router-dom";

export const Cart = ({ total, cart, limpiarCarrito, removeItemByID }) => {
  return (
    <div className="mainContainer">
      <div className="containerCart">
        <div className="divCartLeft">
          {cart.map((product) => {
            return (
              <div className="itemCartDetail" key={product.id}>
                <img src={product.img} alt="" style={{ width: "100px" }} />
                <h5>{product.title}</h5>
                <h5>${product.price}/por Noche</h5>
                <h5>Cantidad: {product.quantity}</h5>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => removeItemByID(product.id)}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="divCartRight">
          <h2>Detalle del carrito</h2>
          <h3>Total de destinos: </h3>
          <h3>Total ${total}</h3>
          {cart.length > 0 ? (
            <div className="btnCart">
              <Button
                style={{ margin: "10px" }}
                size="small"
                variant="contained"
                onClick={limpiarCarrito}
              >
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button
                  style={{ margin: "10px" }}
                  size="small"
                  variant="contained"
                >
                  Finalizar compra
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button
                style={{ margin: "10px" }}
                size="small"
                variant="contained"
              >
                Continuar comprando
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
