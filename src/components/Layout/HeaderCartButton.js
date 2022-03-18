import { useContext, useEffect, useState} from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";

function HeaderCartButton(params) {

  const [btnHighl,setBtnHighl]= useState(false);

  const cartContext=useContext(CartContext)


  const numberOfCartItems= cartContext.items.reduce((currNumber,item) => {
  
    return currNumber + item.amount
  },0); //array of data into a single value

  
  const {items} =cartContext

  const btnClasses=`${classes.button} ${ btnHighl ? classes.bump: ' '}`

  useEffect(() => {
    if(items.length===0){
    return }

    setBtnHighl(true)

    setTimeout(() => {
      setBtnHighl(false)
    },300)
  },[items])



  return (
    <button className={btnClasses} onClick={params.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
