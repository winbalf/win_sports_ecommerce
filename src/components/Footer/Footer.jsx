import Navbar from '../Nav/Navbar';
import estilos from './footer.module.css';

const styles = {
    parrafo:{
        color: 'red'
    },
    contenedor: {
        color: 'green'
    }
}

const Footer = () => {
    return (
        <footer className={estilos.contenedor_main}>
            <h5 style={{backgroundColor: 'pink', width: '150px'}}>Edwin</h5>
            <p style={styles.parrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nam illum? Eius ad tempora aliquid hic explicabo vero est consectetur, adipisci amet inventore deleniti enim? Necessitatibus itaque odio non! Ea!
            </p>
            <p style={styles.contenedor}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nam illum? Eius ad tempora aliquid hic explicabo vero est consectetur, adipisci amet inventore deleniti enim? Necessitatibus itaque odio non! Ea!
            </p>
            <Navbar/>
        </footer>
    );
}

export default Footer;