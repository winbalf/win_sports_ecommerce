// import {addDoc, collection, doc, serverTimestamp, updateDoc} from 'firebase/firestore';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import React, { useState } from 'react';
import {db} from '../../firebaseConfig';


const Form = ({cart, total, clearCart, handleId}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nombre === '' || apellido === '' || email === '' || email2 === ''  ){
            alert('Debe dilengenciar todos los campos del formulario');
        }else if(email !== email2){
            alert(`email ${email} debe ser igual al segundo email ${email2}`)
        }else{

            const order = {
                buyer: {
                    nombre: nombre, apellido: apellido, email: email
                },
                items: cart,
                total: total,
                date: serverTimestamp()
            };

            const ordersCollection = collection(db, 'orders');

            addDoc(ordersCollection, order)
            .then((res)=>{
                handleId(res.id);
                clearCart();            
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    };

    const handleChangeName = (event) => {
        setNombre(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setApellido(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeEmail2 = (event) => {
        setEmail2(event.target.value);
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
            <input 
                type="email" 
                placeholder='EMail...' 
                name="email" 
                value={email} 
                onChange={handleChangeEmail} />
            <input 
                type="email" 
                placeholder='Email 2...' 
                name="email2" 
                value={email2} 
                onChange={handleChangeEmail2} />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form