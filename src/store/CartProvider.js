import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
}

function CartProvider(params) {
  //first element is always state snapshot,
  //second is function allows you to dispatch(send) an action to reducer
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function removeItemFromCartHandler(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  }

  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  }
 
  console.log(cartState.items)
  console.log(cartState.totalAmount)


  const cartContext = {
    items: cartState.items,
    size: cartState.items.size + 1,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {params.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
