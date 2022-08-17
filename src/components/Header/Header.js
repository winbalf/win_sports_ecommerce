import Navbar from '../Nav/Navbar';
import estilos from './Header.module.css';

const Header = () => {
    return (
        <header className={estilos.contenedor_main}>
            <Navbar/>
        </header>
    );
}

export default Header;