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
        <div id={product.id} style={{border: '1px solid black', borderRadius:'10px', marginLeft:'20px', marginTop:'20px', width:'400px'}}>
            <h1>Product Detail</h1>
            <img src={product.img} alt={'image'} style={{textAlign:'center'}}  />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h4 style={{width:'100%'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quae? Omnis mollitia sapiente aliquid inventore, cupiditate dolorem blanditiis ex quidem placeat labore fugit repellat tempore adipisci praesentium reiciendis, animi qui?</h4>
            <ItemCount stock={Number(product.stock)} initial={0} onAdd={onAdd}/>
            {/* <ItemCount stock={10} initial={0} onAdd={onAdd}/> */}
        </div>
    )
}

export default ItemDetail