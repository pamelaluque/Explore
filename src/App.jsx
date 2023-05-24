import { NavBar } from "./components/layout/navBar/NavBar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"ENJOY THE ROUTE 🚌"} />
    </div>
  );
};

export default App;
