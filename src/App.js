import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";


function App() {

const [cartIsShown, setCartIsShown]=useState(false)

function showCartHandler(params) {
  setCartIsShown(true)
} 

function hideCartHandler(params) {
  setCartIsShown(false)

}
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
