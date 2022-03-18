import React from "react";

const CartContext =
    React.createContext({

        items:['aa'],
        totalAmount: 0,
        addItem : (item) => {},
        removeItem : (id) => {}
    })


export default CartContext;
