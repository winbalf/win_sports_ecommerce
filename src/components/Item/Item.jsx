import React, {useState} from 'react'

const Item = (props) => {
    const item = props.item;   

    

    return (
        <div id={item.id} style={{border: '1px solid black', borderRadius:'10px', width:'200px'}}>
            <img src={item.img} alt={'image'} style={{height:'200px', display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'10px'}}  />
            {/* <img src={'images/shirt_belgium.png'} alt={'image'}  /> */}
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
            
        </div>
    )
}

export default Item