import { Button } from "@mui/material";
import { useCount } from "../../hooks/useCount/useCount";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="buttonControl" style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
        <Button
          onClick={decrement}
          size="small"
          variant="contained"
          style={{ margin: "5px" }}
        > -
        </Button>
        <span style={{ padding: "20px", color: "text.secondary" }}> {count} </span>
        <Button
          onClick={increment}
          size="small"
          variant="contained"
          style={{ margin: "5px" }}
          > +
        </Button>
      </div>
      
      <br />
      
      <div className="buttonAddCart">
        <Button
          size="small"
          variant="contained"
          onClick={() => onAdd(count)}
          style={{ margin: "0", width: "200px" }}
        > Agregar al Carrito </Button>
      </div>
    </>
  );
};
