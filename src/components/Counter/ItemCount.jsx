import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0);

    const sumar = () =>{
        count < stock && setCount(count + 1);
    }

    const restar = () =>{
        count > initial && setCount(count - 1);
    }

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Count: {count}</p>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount