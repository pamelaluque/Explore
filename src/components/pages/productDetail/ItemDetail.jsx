import { ItemCount } from "../../common/ItemCount/ItemCount";

export const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log(data);
  };

  return (
    <div className="mainContainer">
      <div className="containerItemDetail">
        <div className="itemDivLeft">
          <img src={productSelected.img} alt="Imagen de destino" style={{ width:"100%", margin: "0 auto", borderRadius:"8px" }}/>
        </div>

        <div className="itemDivRight">
          <h3>{productSelected.title}</h3>
          <hr />
          <span>${productSelected.price}/por noche.</span>
          <p>{productSelected.shortDescription}</p>
          <br />
          
          <div className="counter">
            <span>Cantidad de días</span>
            {productSelected.stock > 0 ? (
              <ItemCount
                stock={productSelected.stock}
                initial={1}
                onAdd={onAdd}
              />
            ) : (
              <h3>Sin Stock 😥</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
