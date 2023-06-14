import "./ItemListContainer.css";
import { products } from "../../../productosMocks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryId
    );

    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? productosFiltrados : products);
      }, 300);
    });

    obtenerProductos
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return <ItemList items={items} greeting={greeting}/>;
};
