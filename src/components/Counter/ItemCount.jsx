import React, {useEffect, useState} from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

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