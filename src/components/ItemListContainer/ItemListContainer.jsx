import React, {useState, useEffect} from 'react';
import {useParams} from  'react-router-dom';
// import {products} from '../../Mocks/products';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebaseConfig';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const paramURL = useParams();
    // console.log(paramURL.categoryName);
    const {categoryName} = useParams();
    // console.log(categoryName);

    useEffect(() => {        
        // const getProducts = new Promise((res, rej) =>{
        //     const prodFilter = products.filter( (prod) => prod.category === categoryName )
        //     setTimeout(() =>{
        //         res(categoryName ? prodFilter : products);
        //     }, 1000);
        // });

        // getProducts
        //     .then((data) => {
        //         // console.log('then: ', data);
        //         setItems(data);
        //     })
        const itemCollection = collection(db, 'products');
        if(categoryName){
            const q = query(itemCollection, where('category','==',categoryName));
            getDocs(q)
                .then((resp) => {
                    // console.log(resp.docs);
                    const products = resp.docs.map((prod) => {
                        // console.log(prod.id);
                        // console.log(prod.data());
                        return {
                            id: prod.id,
                            ...prod.data()
                        }
                    })
                    // console.log(products);
                    setItems(products);
                    
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }else{
            getDocs(itemCollection)
                .then((resp) => {
                    // console.log(resp.docs);
                    const products = resp.docs.map((prod) => {
                        // console.log(prod.id);
                        // console.log(prod.data());
                        return {
                            id: prod.id,
                            ...prod.data()
                        }
                    })
                    // console.log(products);
                    setItems(products);
                    
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }

    }, [categoryName]);        

    // console.log('items: ', items.length);

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