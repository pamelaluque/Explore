import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productosMocks";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext/CartContext";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);
  console.log("la cantidad es: ", cantidad);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Destino agregado",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log("Producto no encontrado", err));
  }, [id]);

  console.log(productSelected);

  return (
    <ItemDetail
      productSelected={productSelected}
      cantidad={cantidad}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  );
};
