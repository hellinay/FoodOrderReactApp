import { useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";

function HeaderCartButton(params) {

  const cartContext=useContext(CartContext)


  const numberOfCartItems= cartContext.items.reduce((currNumber,item) => {
  
    return currNumber + item.amount
  },0); //array of data into a single value

  


  return (
    <button className={classes.button} onClick={params.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
