import React, {useState, useEffect} from 'react';
import CartWidget from './CartWidget';
import Button from '../Button/Button.jsx';
import {Link, NavLink} from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebaseConfig';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categories');

        getDocs(collectionCat)
        .then((res)=>{
            const categorias =
            res.docs.map((cat)=>{
                return {
                    id: cat.id,
                    ...cat.data(),
                }
            })
            setCategories(categorias);
        })
    }, []);

  return (
    <div className={'row estilos.vertical_align'}>
        <div className={"col-xs-10 col-md-8"}>
            <Link to={`/`}>  
                <Button variant={'primary'} value='Home'></Button>
            </Link>
            <nav>
                <ul>
                    {categories.map((cat)=>(
                        <li>
                            <NavLink to={`/category/${cat.route}`}>{cat.name}</NavLink>
                        </li>
                    ))}
                </ul>          
            </nav>
        </div>
        <Button variant={'primary'} value='Log in'></Button>

        <div className={"col-xs-2 col-md-4 "}>
            <Link to={'/cart'}>
                <CartWidget />
            </Link>
        </div>
    </div>
  )
}

export default Navbar