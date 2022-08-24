import React, {useState, useEffect} from 'react';
import {products} from '../../Mocks/products';

const ItemListContainer = () => {

    useEffect(() => {
        const getProducts = new Promise((res, rej) =>{
            setTimeout(() =>{
                res(products);
            },3000);
        });

        getProducts
            .then((data) => {
                console.log('then: ', data);
            })
            .catch((error) => {
                console.log('catch: ', error);
            })
            .finally(() => {
                console.log('Finally');
            })
    }, []);        

  return (
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer