import React from 'react';
import ItemCount from '../Counter/ItemCount';
import './Main.css';

const Main = (props) => {
  // console.log(props);
  // const comision = props.test;
  // const {test, fecha} = props;

  const onAdd = (params) => {
    // console.log(params);
    alert('This is a numer: ' + params)
  }

  return (
    <main className='contenedor_main'>
          {/* <section>
           <ItemCount stock={10} initial={0} onAdd={onAdd}/>
          </section> */}
    </main>
  )
}

export default Main