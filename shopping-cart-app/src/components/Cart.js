import React from 'react';
import CartItem from './CartItem';

function Cart({ items, removeFromCart, updateQuantity }) {
  const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
      <div className="cart-summary">
        <p>Total: ${totalCost}</p>
        <button>Próximamente</button>
        <button>Continuar comprando</button>
      </div>
    </div>
  );
}

export default Cart;