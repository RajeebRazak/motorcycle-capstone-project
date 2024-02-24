import React from "react";
import { useState } from "react";
import Spare from "../Service/Spare";
import Cart from "../Service/Cart";

function ShoppingPage() {
  //State to manage the cart items
  const [cartItems, setCartItems] = useState([]);

  //Function to handle adding items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert('Item added to cart');
  };

  //Function to handle removing items from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  //Function to handle buying a product
  const handleBuyNow = (product) => {
    console.log("Buying product:", product);
    //Implement further logic for buying the product if needed
  };

  return (
    <>
      <Spare addToCart={addToCart} cartItems={cartItems} />
      <Cart
        addToCart={addToCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleBuyNow={handleBuyNow}
      />
    </>
  );
}

export default ShoppingPage;
