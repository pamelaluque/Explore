import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (!categoryId) {
      consulta = itemCollection;
    } else {
      consulta = query(itemCollection, where("category", "==", categoryId));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return <ItemList items={items} greeting={greeting} />;
};
