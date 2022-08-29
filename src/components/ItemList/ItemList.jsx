import React, {useState} from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {

    const items = props.items;

    console.log('itemsss');
    console.log(items);

    
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <Item key={item.id} item={item}/>                        
                    )
                })
            }
        </div>
    )
}

export default ItemList