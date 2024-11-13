import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)} className="remove-btn">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
