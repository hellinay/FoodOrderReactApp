import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function MealItem(params) {
const price = `$${params.price.toFixed(2)}`
const cartContext= useContext(CartContext)

function addToCartHandler(amount) {
  cartContext.addItem({
    id:params.id,
    name:params.name,
    amount:params.amount,
    price:params.price
  })
}


  return (
    <li className={classes.meal}>
      <div>
        <h3>{params.name}
        <div className={classes.price}>{price}</div>
</h3>
      </div>
      <div className={classes.description}>{params.description}</div>
      <div>
        <MealItemForm id={params.id} onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
}

export default MealItem;
