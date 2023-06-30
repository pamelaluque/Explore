import { Button } from "@mui/material";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

export const Cart = ({ total, cart, limpiarCarrito, removeItemByID }) => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "130px" }}
            src="https://res.cloudinary.com/db8btnoov/image/upload/v1688166389/EXPLORE/world_ojfmvr.svg"
          ></img>
          <h4
            style={{ textAlign: "center", padding: "30px", fontWeight: "500" }}
          >
            Tu carrito está vacío, el mundo te espera!
          </h4>
          <Button onClick={() => {navigate("/")}} size="small" variant="outlined">
            Explorar destinos
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
};
