import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function MealItem(params) {
const price = `$${params.price.toFixed(2)}`
const cartContext= useContext(CartContext)

function addToCartHandler(amount) { //coming from meal item form
  cartContext.addItem({ //cart provider 
    id:params.id,
    name:params.name,
    amount:amount,
    price:params.price
  })
}


  return (
    <li className={classes.meal}>
      <div>
        <h3>{params.name}</h3>
        <div className={classes.description}>{params.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={params.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
