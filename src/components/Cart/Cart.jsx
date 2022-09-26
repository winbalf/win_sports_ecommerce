import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Form from '../Form/Form';
import {Link} from 'react-router-dom';

const Cart = () => {
  const [idCompra, setIdCompra] = useState('');
  const {cart, clearCart, deleteOne, totalPrice} = useContext(CartContext);

  const total = totalPrice();

  const handleId = (id) => {
    setIdCompra(id);
  };

  if (idCompra) {
    return <h1>Gracias por comprar, tu id es: {idCompra}</h1>
  }

  if (cart.length === 0) {
    return (
      <h1>
        Aun no hya products, puedes ir al <Link to='/'>Home</Link>{' '} 
        para buscar algun producto
      </h1>
    );
  }

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
        <Form
          cart={cart}
          total={total}
          clearCart={clearCart}
          handleId={handleId}
        />
    </div>
  );
};

export default Cart;