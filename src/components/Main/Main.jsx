import React from 'react';
import './Main.css';

const Main = (props) => {
  // console.log(props);
  const comision = props.test;
  const {test, fecha} = props;

  return (
    <main className='contenedor_main'>
          <section>
            {/* <h2>Bienvenidos!</h2>
            <h3>{test}</h3>
            <h3>{comision}</h3>
            <h4>{props.fecha}</h4>
            <h4>{props.alumno.nombre}</h4> */}
          </section>
    </main>
  )
}

export default Main