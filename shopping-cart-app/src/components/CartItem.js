import React from 'react';

function CartItem({ item, removeFromCart, updateQuantity }) {
  const increaseQuantity = () => updateQuantity(item.id, item.quantity + 1);
  const decreaseQuantity = () => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;