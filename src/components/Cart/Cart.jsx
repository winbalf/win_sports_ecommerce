import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const Cart = () => {
  const {cart, clearCart, deleteOne, totalPrice} = useContext(CartContext);

  const total = totalPrice();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <h1>Cart</h1>
        {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '8px',
                        margin: '8px',
                    }}
                >
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio ${prod.price}.-</h3>
                    <h3>Subtotal ${Number(prod.cantidad * prod.price).toFixed(2)}</h3>
                    <button onClick={()=>deleteOne(prod.id)}>Delete</button>
                </div>
            ))}
        <button onClick={clearCart}>Clear Cart</button>
        <h4>Total: ${total}</h4>
    </div>
  );
};

export default Cart