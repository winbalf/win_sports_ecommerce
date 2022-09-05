import React, {useState, useEffect} from 'react';
import {useParams} from  'react-router-dom';
import {products} from '../../Mocks/products';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    // const paramURL = useParams();
    // console.log(paramURL.categoryName);
    const {categoryName} = useParams();
    // console.log(categoryName);

    useEffect(() => {        
        const getProducts = new Promise((res, rej) =>{
            const prodFilter = products.filter( (prod) => prod.category === categoryName )
            setTimeout(() =>{
                res(categoryName ? prodFilter : products);
            }, 1000);
        });

        getProducts
            .then((data) => {
                // console.log('then: ', data);
                setItems(data);
            })
    
    }, [categoryName]);        

    console.log('items: ', items.length);

    return (
        <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
            {
                (items.length>0) ?
                    <ItemList items={items}/> :
                    'Loading...' 
            }
        </div>
    )
}

export default ItemListContainer