import React, { useState } from 'react'

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.nombre.value);
        // console.dir(event.target);//see properties
    }

    const handleChangeName = (event) => {
        // console.log(event.target.value)
        setNombre(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setApellido(event.target.value);
    }

  return (
    <div style={{marginTop:'20px'}}>
        <form action="" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Nombre...' 
                name="nombre" 
                value={nombre} 
                onChange={handleChangeName}/>
            <input 
                type="text" 
                placeholder='Apellido...' 
                name="apellido" 
                value={apellido} 
                onChange={handleChangeLastName} />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form