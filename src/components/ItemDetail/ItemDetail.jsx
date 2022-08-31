import React from 'react'
import ItemCount from '../Counter/ItemCount';

const ItemDetail = (props) => {
    const product = props.product;

    const onAdd = (params) => {
        console.log(params);
        if(Number(params)){
            if(params> 0){
                alert('Add to cart: ' + params + ' ' + product.title)
            }else{
                alert('Choose a product ');
            }

        }else{
            alert('Choose a product ');
        }
      }

    return (
        // <div id={product.id} style={{ flex:'1 25%'}}>
        <div id={product.id} style={{border: '1px solid black', borderRadius:'10px'}}>
            <h1>Product Detail</h1>
            <img src={product.img} alt={'image'}  />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <ItemCount stock={Number(product.stock)} initial={0} onAdd={onAdd}/>
            {/* <ItemCount stock={10} initial={0} onAdd={onAdd}/> */}
        </div>
    )
}

export default ItemDetail