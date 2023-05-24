import { MainImage } from "../../common/MainImage/MainImage"
import "./ItemListContainer.css" 

export const ItemListContainer = ({greeting}) => {

  return (
    <div>
      <MainImage />
      <div className="saludo" >
        <h1> {greeting} </h1>
      </div>  
    </div>
  )
}

