import React, { useState } from 'react';

const CartList = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Iphone', price: 100 },
    { id: 2, name: 'pc', price: 100 },
    { id: 3, name: 'machine', price: 100 },
  ]);

  const [totalPrice, setTotalPrice] = useState(300);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    const updatedTotalPrice = updatedCart.reduce((total, item) => total + item.price, 0);

    setCartItems(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log('Checkout clicked');
  };

  return (
    <div className="cart-list">
      <h1>My cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>Product Name: {item.name}</span>
          <span>Price: {item.price}$</span>
          <button className="cart-list-button" onClick={() => handleRemoveItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: {totalPrice}$</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartList;
