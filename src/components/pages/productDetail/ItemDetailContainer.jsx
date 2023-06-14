import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productosMocks";
import './ItemDetail.css'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const {id} = useParams()

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

  return <ItemDetail productSelected={productSelected} />;
};
