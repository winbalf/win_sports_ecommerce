import React, {useState, useEffect} from 'react';
import {useParams} from  'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import {products} from '../../Mocks/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const {productId} = useParams();
    console.log(productId);

    const productIdNum = Number(productId);

    useEffect(() => {
        const getProduct = new Promise((res, rej) =>{
            const product = products.find((producto) => producto.id == productIdNum);
            setTimeout(() =>{
                res(product);
            }, 500);
        }, []);

        getProduct
            .then((data) => {
                // console.log('then: ', data);
                setItem(data);
            })
            // .catch((error) => {
            //     console.log('catch: ', error);
            // })
            // .finally(() => {
            //     console.log('Finally');
            // })
    });     

  return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                (item) ?
                    <ItemDetail product={item}/> :
                    'Loading...' 
            }
        </div>
      )
}

export default ItemDetailContainer