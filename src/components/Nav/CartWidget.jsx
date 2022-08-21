import React from 'react';
import estilos from './Navbar.module.css';

const CartWidget = () => {
  return (
        <span className={[estilos.cart_widget, "material-symbols-outlined"].join(' ')}>
            shopping_cart
        </span>
    )
}

export default CartWidget