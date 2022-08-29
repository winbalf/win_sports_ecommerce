import React, {useState} from 'react'
import ItemCount from '../Counter/ItemCount';

const Item = (props) => {
    const item = props.item;

    console.log('ITEM');
    console.log(item);
    // setItem(props);

    console.log('props item');
    console.log(props);

    const onAdd = (params) => {
        console.log(params);
        if(Number(params)){
            if(params> 0){
                alert('Add to cart: ' + params + ' ' + item.title)
            }else{
                alert('Choose a product ');
            }

        }else{
            alert('Choose a product ');
        }
      }

    return (
        <div id={item.id}>
            <img src={item.img} alt={'image'}  />
            {/* <img src={'images/shirt_belgium.png'} alt={'image'}  /> */}
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
            <ItemCount stock={Number(item.stock)} initial={0} onAdd={onAdd}/>
            {/* <ItemCount stock={10} initial={0} onAdd={onAdd}/> */}
        </div>
    )
}

export default Item