import React, {useState, useEffect} from 'react';
import {useParams} from  'react-router-dom';
// import {products} from '../../Mocks/products';
import ItemList from '../ItemList/ItemList';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebaseConfig';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {categoryName} = useParams();

    useEffect(() => {        
        const itemCollection = collection(db, 'products');
        
        const referencia = categoryName
            ? query(itemCollection, where('category', '==', categoryName))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [categoryName]);        

    // console.log('items: ', items.length);

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            {
                isLoading ?
                'Loading...' :
                    <ItemList items={items}/> 
                    
            }
        </div>
    )
}

export default ItemListContainer