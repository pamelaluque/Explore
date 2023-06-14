import { Layout } from "./components/layout/Layout";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/productDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer greeting={"ENJOY THE ROUTE 🚌"} />} />  
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"ENJOY THE ROUTE 🚌"} />} />
          <Route path="/DetalleDelProducto/:id" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;