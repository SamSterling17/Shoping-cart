import React from 'react';

function Header({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1>Mi Tienda de Plantas</h1>
      <div className="cart-icon">
        🛒 {totalItems}
      </div>
    </header>
  );
}

export default Header;