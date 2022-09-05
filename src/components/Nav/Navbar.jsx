import React from 'react';
import CartWidget from './CartWidget';
import estilos from './Navbar.module.css';
import Button from '../Button/Button.jsx';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={'row estilos.vertical_align'}>
        <div className={"col-xs-10 col-md-8"}>
            <Link to={`/`}>  
                <Button variant={'primary'} value='Home'></Button>
            </Link>
            <nav>
                <ul>
                    <li>
                        {/* <a href="https://google.com">Productos</a> */}
                        <Link to={'/category/shirt'}>Shirts</Link>
                    </li>
                    <li>
                        {/* <a href="https://google.com">Nosotros</a> */}
                        <Link to={'/category/pants'}>Pants</Link>
                    </li>
                    <li>
                        {/* <a href="https://google.com">Contact</a> */}
                        <Link to={'/category/little_boys'}>Little Boys</Link>
                    </li>
                </ul>          
            </nav>
        </div>
        {/* <Button value='Log in'></Button> */}
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