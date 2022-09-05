import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = (props) => {
    const item = props.item;   

    

    return (
        <div id={item.id} style={{border: '1px solid black', borderRadius:'10px', width:'200px', marginLeft:'20px', marginTop:'20px'}}>
            <img src={item.img} alt={'image'} style={{height:'200px', width:'90%', display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'10px', borderRadius:'10px'}}  />
            {/* <img src={'images/shirt_belgium.png'} alt={'image'}  /> */}
            <h3>{item.title}</h3>
            <h5>{`$${item.price}`}</h5>
            <Link to={`/item/${item.id}`}>
                {/* <ItemDetailContainer/> */}
                <button>See Details </button>
            </Link>
        </div>
    )
}

export default Item