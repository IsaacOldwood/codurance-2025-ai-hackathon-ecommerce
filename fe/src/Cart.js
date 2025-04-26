import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'T-shirt', price: '$20', quantity: 2 },
    { id: 2, name: 'Jeans', price: '$40', quantity: 1 },
    { id: 3, name: 'Sneakers', price: '$60', quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="cart-container">
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="item-image-column">
                  <img 
                    src={`https://placehold.co/50`} 
                    alt={item.name} 
                    className="item-image"
                  />
                </td>
                <td className="item-name">{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="total-label">Total</td>
              <td className="total-price">
                {`$${cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2)}`}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default Cart;