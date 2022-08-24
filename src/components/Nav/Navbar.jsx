import React from 'react';
import CartWidget from './CartWidget';
import estilos from './Navbar.module.css';
import Button from '../Button/Button.jsx';

const Navbar = () => {
  return (
    <div className={'row estilos.vertical_align'}>
        <div className={"col-xs-10 col-md-8"}>
            <nav>
                <ul>
                    <li>
                        <a href="https://google.com">Productos</a>
                    </li>
                    <li>
                        <a href="https://google.com">Nosotros</a>
                    </li>
                    <li>
                        <a href="https://google.com">Contact</a>
                    </li>
                </ul>          
            </nav>
        </div>
        {/* <Button value='Log in'></Button> */}
        <Button variant={'primary'} value='Log in'></Button>

        <div className={"col-xs-2 col-md-4 "}>
            <CartWidget />
        </div>
    </div>
  )
}

export default Navbar