import React,{useState} from "react";

function Item({ name, category }) {
  
  const [stateButton, helperFunc] = useState(false)

  function handleItem(){
    helperFunc((stateButton)=>!stateButton)
  }
  return (
    <li className={stateButton ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className={stateButton ? "remove":"add"}>{stateButton ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
