import React, {useState, useEffect} from 'react';
import {products} from '../../Mocks/products';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((res, rej) =>{
            setTimeout(() =>{
                res(products);
            }, 3000);
        });

        getProducts
            .then((data) => {
                // console.log('then: ', data);
                setItems(data);
            })
            // .catch((error) => {
            //     console.log('catch: ', error);
            // })
            // .finally(() => {
            //     console.log('Finally');
            // })
    });        

    console.log('items: ', items.length);

    return (
        <div>
            {
                (items.length>0) ?
                    <ItemList items={items}/> :
                    'Loading...' 
            }
        </div>
    )
}

export default ItemListContainer