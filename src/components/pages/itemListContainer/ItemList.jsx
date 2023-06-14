import { CardProduct } from "../../common/CardProduct/CardProduct";
import { MainImage } from "../../common/MainImage/MainImage";

export const ItemList = ( { items, greeting }) => {
  return (
    <div className="contenido">
      <div className="saludo">
        <MainImage />
        <h1> {greeting} </h1>
      </div>
      <div className="zoneCatalogo">
        <h2> LOS MEJORES DESTINOS! </h2>
        <div className="cardsContainer">
          {items.map((elemento) => {
            return <CardProduct key={elemento.id} elemento={elemento} />;
          })}
        </div>
      </div>
    </div>
  )
}
