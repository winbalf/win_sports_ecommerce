import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import estilos from './Navbar.module.css';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    const total = totalQuantity();
    
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={[estilos.cart_widget, "material-symbols-outlined"].join(' ')}>
                shopping_cart
            </span>
            <span>{total === 0 ? '' : total}</span>            
        </div>
        )
}

export default CartWidget;