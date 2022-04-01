import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(params) {
  const [isCheckOut, setIsCheckout] = useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartContext.removeItem(id);
  }

  function orderHandler(params) {
    setIsCheckout(true);
  }

  function submitOrderHandler(userData) {

    fetch('https://food-order-app-cd620-default-rtdb.firebaseio.com/orders.json',{
      method:'POST',
      body:JSON.stringify({
        user:userData,
        orderedItems:cartContext.items
      })
    })

    
  }

  function cartItemAddHandler(item) {
    cartContext.addItem({ ...item, amount: 1 });
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {" "}
        </CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button-alt"]} onClick={params.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          {" "}
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && <Checkout onConfirm={submitOrderHandler} onCancel={params.onClose}></Checkout>}
      {!isCheckOut && modalActions}
    </Modal>
  );
}

export default Cart;
